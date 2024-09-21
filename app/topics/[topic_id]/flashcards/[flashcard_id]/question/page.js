'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import axiosService from '@/app/_utils/axios-service';

import lightBulbIcon from '@/public/icons/icon-light-bulb.svg';
import micIcon from '@/public/icons/icon-mic-fill.svg';
import sendIcon from '@/public/icons/icon-send-fill.svg';
import starIcon from '@/public/icons/icon-star.svg';
import closeIcon from '@/public/icons/icon-close.svg';
import { Button } from '@/app/_components/Button';

export default function FlashcardQuestionPage() {
  const router = useRouter()
  const pathName = usePathname();
  const flashcardId = pathName.split('/')[4];

  const [data, setData] = useState();
  const [fetchStatus, setFetchStatus] = useState('idle');
  const [topicName, setTopicName] = useState('');
  const [answer, setAnswer] = useState('')
  const [submitStatus, setSubmitStatus] = useState('ilde')

  useEffect(() => {
    setFetchStatus('loading');
    axiosService
      .get(`/flashcards/${flashcardId}`)
      .then(({ data }) => {
        setData(data);
        setFetchStatus('success');
        axiosService.get(`/topics/${data.topic_id}`).then((data) => setTopicName(data.data.name));
      })
      .catch((e) => {
        setFetchStatus('error');
      });
  }, [flashcardId]);

  if (fetchStatus == 'idle') {
    return <p>please wait...</p>;
  }
  if (fetchStatus == 'loading') {
    return <p>loading...</p>;
  }
  if (fetchStatus == 'error') {
    return <p>error fetch data</p>;
  }

  // const flashcard = {
  //   id: 1,
  //   topic: 'weighted graph',
  //   order: 1,
  //   question: 'Bagaimana bobot disimpan dalam representasi kode?',
  //   next_flashcard_id: 2,
  // };

  const nextPathArr = pathName.split('/');
  nextPathArr[5] = 'evaluation';
  const nextPath = `${nextPathArr.join('/')}`;

  function handleSubmit() {
    setSubmitStatus('loading')
    axiosService.post('/flashcards/evaluate', {
      flashcard_id: flashcardId,
      answer: answer,
      datetime_today: new Date().toISOString()
      // datetime_today: getISOTimeWIB()
    }).then(({data}) => {
      setSubmitStatus('success')
      console.log("success",data)
      router.push(nextPath)
    }).catch((e) => {
      setSubmitStatus('error')
      alert("error", e)
    })
  }

  return (
    <main className="min-h-dvh grid place-items-center">
      <nav className="fixed top-0 w-full">
        <div className="max-w-[680px] mx-auto flex items-center gap-2">
          <Link
            href={nextPathArr.slice(0, 4).join('/')}
            className="flex-none hover:bg-slate-200 rounded-xl"
          >
            <Image src={closeIcon} alt="close icon" width={48} height={48} />
          </Link>
          <div className="flex-1">
            <ProgressBar />
          </div>
        </div>
      </nav>
      <div className="max-w-[680px] w-full mx-auto flex flex-col gap-10">
        <div>
          <span className="font-extrabold text-[#767680]">REVIEW - {topicName.toUpperCase()}</span>
          <p className="font-extrabold text-3xl">{data?.question}</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col">
            <label htmlFor="answer" className="font-extrabold text-base">
              Jawaban
            </label>
            <textarea
              rows={8}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              name="answer"
              id="answer"
              className="bg-[#F5FAFB] rounded-2xl border-2 boerder-[#C6C6D0] p-3"
            />
          </div>
          <div className="mt-10 flex items-center justify-center gap-3">
            {/* <IconButton className="bg-[#FACC15]" icon={lightBulbIcon} /> */}
            {/* <IconButton className="bg-[#3F5F90]" icon={micIcon} /> */}
            {/* <Link href={nextPath}> */}
            
            {submitStatus !== 'loading' ? (
              <IconButton className="bg-[#3F5F90]" icon={sendIcon} onClick={handleSubmit} />
            ) : (
              <Button disabled={true} >Processing...</Button>
            )}
            {/* </Link> */}
          </div>
          {submitStatus === 'error' && (<span>Terjadi Kesalahan, Coba Kirim Ulang</span>)}
        </form>
      </div>
    </main>
  );
}

function IconButton({ className, icon, ...props }) {
  return (
    <button className={`w-16 h-16 ${className} grid place-items-center rounded-2xl`} {...props}>
      <Image src={icon} alt="icon" width={34} height={34} />
    </button>
  );
}

function ProgressBar({}) {
  return (
    <div className="w-full py-8 flex">
      <div className="flex-1 w-full grid place-items-center ">
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div class="bg-[#65A30D] h-2.5 rounded-full" style={{ width: `20%` }}></div>
        </div>
      </div>
      <Image src={starIcon} width={32} height={32} alt="icon" className="relative -left-2" />
    </div>
  );
}



function getISOTimeWIB() {
  // Get the current date in local time
  const date = new Date();

  // Convert the local date to UTC milliseconds
  const utcDate = date.getTime() + (date.getTimezoneOffset() * 60000);

  // Adjust the UTC date to WIB timezone (UTC+7)
  const wibDate = new Date(utcDate + (7 * 60 * 60000));

  // Format as ISO string (removing the 'Z' at the end to indicate local time)
  const isoStringWIB = wibDate.toISOString().slice(0, -1);

  return isoStringWIB; // Append WIB timezone offset
}
