'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/app/_components/Button';
import { TopicDetailLayout } from '../_layout';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axiosService from '@/app/_utils/axios-service';

import sparkleIcon from '@/public/icons/icon-sparkle.svg';
import CardsImage from '@/public/images/cards.png';
import BookIcon from '@/public/icons/icon-book.svg';
import CalendarIcon from '@/public/icons/icon-calendar.svg';

export default function TopicsFlashcardsPage() {
  const pathName = usePathname();
  const topicId = pathName.split('/')[2].split('-')[0];

  const [data, setData] = useState([]);
  const [fetchStatus, setFetchStatus] = useState('idle');

  useEffect(() => {
    setFetchStatus('loading');
    axiosService
      .get(`/flashcards/topic/${topicId}`)
      .then(({ data }) => {
        setData(data);
        setFetchStatus('success');
      })
      .catch((e) => {
        setFetchStatus('error');
      });
  }, [topicId]);

  if (fetchStatus == 'idle') {
    return <p>please wait...</p>;
  }
  if (fetchStatus == 'loading') {
    return <p>loading...</p>;
  }
  if (fetchStatus == 'error') {
    return <p>error fetch data</p>;
  }

  return (
    <TopicDetailLayout>
      <div className="flex flex-col gap-6">
        {data.length <= 0 ? (
          <CardNoFlashcard topicId={topicId} />
        ) : (
          <FlashcardList topicId={topicId} />
        )}
        {/* <h2 className="font-extrabold text-2xl">Flashcards</h2> */}
        {/* <CardLastReview topicId={topicId} /> */}
        {/* <h2 className="font-extrabold text-2xl">Riwayat Review</h2> */}
        {/* <CardNoReview /> */}
        {/* <CardReviewHistory /> */}
      </div>
    </TopicDetailLayout>
  );
}

function CardNoFlashcard({ topicId }) {
  const router = useRouter();
  const [requestStatus, setRequestStatus] = useState('idle')

  function generateFlashcard() {
    setRequestStatus('loading')
    axiosService
      .post(`/flashcards/generate`, {
        topic_id: topicId,
        datetime_today: new Date().toISOString()
        // datetime_today: getISOTimeWIB()
      })
      .then(() => {
        setRequestStatus('success')
        router.push(`/topics/${topicId}`);
      })
      .catch((e) => {
        setRequestStatus('idle')
        alert('error generate flashcard, please try again');
      });
  }
  return (
    <div className="rounded-3xl py-5 px-10 flex flex-col gap-2 border-2 border-[#C6C6D0]">
      <span className="text-xl font-extrabold text-[#43474E]">Tidak Ada Flashcard</span>
      <span className="text-base font-bold text-[#43474E]">
        Tidak ada flashcard yang terdeteksi. Kamu bisa generate flashcard otomatis dari materi
      </span>
      <div className="flex items-center justify-end gap-2">
        <Button onClick={generateFlashcard} disabled={requestStatus === "loading"}>
          <div className="flex items-center gap-2">
            <Image src={sparkleIcon} alt="icon" width={28} height={28} />
            <span>{requestStatus === "loading" ? "PROCESSING..." : "GENERATE FLASHCARD"}</span>
          </div>
        </Button>
      </div>
    </div>
  );
}

function CardLastReview({ topicId }) {
  const [data, setData] = useState();
  const [fetchStatus, setFetchStatus] = useState('idle');

  useEffect(() => {
    setFetchStatus('loading');
    axiosService
      .get(`/flashcards/todays-review/${topicId}`)
      .then(({ data }) => {
        setData(data);
        setFetchStatus('success');
      })
      .catch((e) => {
        setFetchStatus('error');
      });
  }, [topicId]);

  if (fetchStatus == 'idle') {
    return <p>please wait...</p>;
  }
  if (fetchStatus == 'loading') {
    return <p>loading...</p>;
  }
  if (fetchStatus == 'error') {
    return <p>error fetch data</p>;
  }

  return (
    <div className="rounded-3xl py-5 px-10 flex flex-col gap-2 border-2 border-[#C6C6D0]">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-extrabold text-[#43474E]">Review Terakhir</span>
          {data?.last_review?.easy > 0 && (
            <div className="flex gap-2 items-center">
              <span className="inline-block w-[10px] h-[10px] bg-[#3F6212] border border-[#1F3701] rounded-full"></span>
              <span className="text-base font-bold text-[#43474E]">
                {data?.last_review?.easy} Flashcard Mudah
              </span>
            </div>
          )}
          {data?.last_review?.good > 0 && (
            <div className="flex gap-2 items-center">
              <span className="inline-block w-[10px] h-[10px] bg-[#F59E0B] border border-[#825513] rounded-full"></span>
              <span className="text-base font-bold text-[#43474E]">
                {data?.last_review?.good} Flashcard Baik
              </span>
            </div>
          )}
          {data?.last_review?.hard > 0 && (
            <div className="flex gap-2 items-center">
              <span className="inline-block w-[10px] h-[10px] bg-[#f50b0b] border border-[#821313] rounded-full"></span>
              <span className="text-base font-bold text-[#43474E]">
                {data?.last_review?.hard} Flashcard Sulit
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3 justify-end items-end">
          <span className="font-extrabold text-base">Hari Ini</span>
          <div className="flex gap-3">
            <Image className="w-14" src={CardsImage} alt="icon" />
            <span className="font-extrabold text-5xl">{data?.flashcard_count}</span>
          </div>
          <span className="font-bold text-lg">flashcard</span>
        </div>
      </div>
      <Link
        href={`/topics/${data?.flashcard_list[0]?.topic_id}/flashcards/${data?.flashcard_list[0]?.flashcard_id}/question`}
        className="self-end"
      >
        <Button>REVIEW</Button>
      </Link>
    </div>
  );
}

function CardNoReview() {
  return (
    <div className="rounded-3xl py-5 px-10 flex flex-col gap-2 border-2 border-[#C6C6D0]">
      <span className="text-xl font-extrabold text-[#43474E]">Tidak Ada Review Hari ini</span>
      <span className="text-base font-bold text-[#43474E]">
        Review selanjutnya masih 3 hari lagi pada tanggal 4 Maret 2024
      </span>
    </div>
  );
}

function CardReviewHistory() {
  const reviewHistory = [
    {
      question: 'Bagaimana bobot disimpan dalam representasi kode?',
      status: 'Baik',
      due_date: '4 Maret 2024',
    },
    {
      question: 'Bagaimana bobot disimpan dalam representasi kode?',
      status: 'Baik',
      due_date: '4 Maret 2024',
    },
    {
      question: 'Bagaimana bobot disimpan dalam representasi kode?',
      status: 'Baik',
      due_date: '4 Maret 2024',
    },
  ];
  return (
    <div className="rounded-3xl py-8 px-5 flex flex-col gap-4 border-2 border-[#C6C6D0]">
      <div className="flex flex-col gap-4">
        {reviewHistory.map((flashcard, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 p-3 bg-white rounded-2xl border-[1.5px] border-[#C6C6D0] drop-shadow-[0_4px_0_rgba(214,214,208,1)]"
          >
            <span className="font-extrabold">{flashcard.question}</span>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Image src={BookIcon} alt="icon" width={16} height={16} />
                <span className="font-bold text-xs">{flashcard.status}</span>
              </div>
              <div className="flex items-center gap-1">
                <Image src={CalendarIcon} alt="icon" width={16} height={16} />
                <span className="font-bold text-xs">Due: {flashcard.due_date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FlashcardList({ topicId }) {
  const [data, setData] = useState();
  const [fetchStatus, setFetchStatus] = useState('idle');

  useEffect(() => {
    setFetchStatus('loading');
    axiosService
      .get(`/flashcards/topic/${topicId}`)
      .then(({ data }) => {
        const sortedData = sortByDate(data, 'due_date');
        setData(sortedData);
        setFetchStatus('success');
      })
      .catch((e) => {
        setFetchStatus('error');
      });
  }, [topicId]);

  if (fetchStatus == 'idle') {
    return <p>please wait...</p>;
  }
  if (fetchStatus == 'loading') {
    return <p>loading...</p>;
  }
  if (fetchStatus == 'error') {
    return <p>error fetch data</p>;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((flashcard) => (
        <Flashcard
          key={flashcard.id}
          flashcardId={flashcard.id}
          dueDate={flashcard.due_date}
          topicId={topicId}
        />
      ))}
    </div>
  );
}

function Flashcard({ flashcardId, topicId, dueDate }) {
  let fcDueDate = new Date(dueDate);
  fcDueDate = convertToLocalTimezone(fcDueDate)
  let today = new Date();
  today = convertToLocalTimezone(today)
  const isDueToday = today.getDay() == fcDueDate.getDay();
  const isOverdue = today.getTime() > fcDueDate.getTime()
  // console.log(fcDueDate, today, isDueToday);
  return (
    <Link href={`/topics/${topicId}/flashcards/${flashcardId}/question`}>
      <div
        className={`rounded-3xl p-5 flex flex-col gap-4 border-2 ${
          isOverdue ? 
          'bg-red-200 hover:bg-red-300 border-red-800' :
          isDueToday ? 
          'bg-slate-100 hover:bg-[#3F5F90] border-slate-400' : 
          'bg-slate-300 text-gray-500 border-slate-400'
        }`}
      >
        <div className="w-full aspect-[3/4] flex flex-col justify-between items-center">
          <span className="text-end w-full justify-end">{
          isOverdue ? 
          '⚠️' : 
          isDueToday ? 
          '📝' : 
          '✅'
          }</span>
          <span className="text-4xl">?</span>
          <span className="text-xs text-center">
            {isOverdue ? 'overdue' : 'review selanjutnya'}: {calculateRemainingTime(dueDate)}
          </span>
        </div>
      </div>
    </Link>
  );
}


function convertToLocalTimezone(date) {
  const localTZ = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
  console.log("localtz", localTZ)
  return localTZ
}


function calculateRemainingTime(isoTimeThen) {
  const now = new Date(); // Current time
  const then = new Date(isoTimeThen); // Convert to local time

  // Convert both to local timezone
  const nowLocal = convertToLocalTimezone(now)
  const thenLocal = convertToLocalTimezone(then)
  // const nowLocal = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })); // example: convert to WIB (Asia/Jakarta)
  // const thenLocal = new Date(then.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));

  console.log(nowLocal)
  console.log(thenLocal)

  let remainingTime = Math.abs(thenLocal - nowLocal); // in milliseconds

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  remainingTime %= 1000 * 60 * 60 * 24;

  const hours = Math.floor(remainingTime / (1000 * 60 * 60));
  remainingTime %= 1000 * 60 * 60;

  const minutes = Math.floor(remainingTime / (1000 * 60));

  return `${days} Hari ${hours} Jam ${minutes} Menit`;
}

// function calculateRemainingTime(isoTimeThen) {
//   const now = new Date(); // Current time
//   const then = new Date(isoTimeThen);

//   let remainingTime = Math.abs(then - now); // in milliseconds

//   const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
//   remainingTime %= 1000 * 60 * 60 * 24;

//   const hours = Math.floor(remainingTime / (1000 * 60 * 60));
//   // remainingTime %= 1000 * 60 * 60;

//   // const minutes = Math.floor(remainingTime / (1000 * 60));

//   // return `${days} hari ${hours} jam ${minutes} menit`;
//   return `${days} Hari ${hours} Jam`;
// }

function sortByDate(array, dateProperty) {
  return array.sort((a, b) => {
    const dateA = new Date(a[dateProperty]);
    const dateB = new Date(b[dateProperty]);
    return dateB - dateA;
  });
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


function convertISOToFormattedLocal(isoString) {
  // Add 'Z' to indicate UTC if the string doesn't have a timezone
  if (!isoString.includes("Z") && !isoString.includes("+") && !isoString.includes("-")) {
    isoString += "Z";
  }

  const date = new Date(isoString); // Convert to Date object

  // Create a formatter for the desired output format
  const formatter = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, // 24-hour format
  });

  // Format the date and time
  const parts = formatter.formatToParts(date);
  const formattedDate = `${parts[0].value} ${parts[2].value} ${parts[4].value} ${parts[6].value}:${parts[8].value}:${parts[10].value}`;

  return formattedDate;
}