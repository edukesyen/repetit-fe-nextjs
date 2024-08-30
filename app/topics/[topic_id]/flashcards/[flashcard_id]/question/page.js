'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import lightBulbIcon from '@/public/icons/icon-light-bulb.svg';
import micIcon from '@/public/icons/icon-mic-fill.svg';
import sendIcon from '@/public/icons/icon-send-fill.svg';
import starIcon from '@/public/icons/icon-star.svg';
import closeIcon from '@/public/icons/icon-close.svg';


export default function FlashcardQuestionPage() {
  const pathName = usePathname();
  const flashcard = {
    id: 1,
    topic: 'weighted graph',
    order: 1,
    question: 'Bagaimana bobot disimpan dalam representasi kode?',
    next_flashcard_id: 2,
  };
  const nextPathArr = pathName.split('/');
  nextPathArr[5] = 'evaluation';
  const nextPath = `${nextPathArr.join('/')}`;

  return (
    <main className="min-h-dvh grid place-items-center">
      <nav className="fixed top-0 w-full">
        <div className="max-w-[680px] mx-auto flex items-center gap-2">
          <Link href={nextPathArr.slice(0, 4).join('/')} className="flex-none hover:bg-slate-200 rounded-xl">
            <Image src={closeIcon} alt="close icon" width={48} height={48} />
          </Link>
          <div className="flex-1">
            <ProgressBar />
          </div>
        </div>
      </nav>
      <div className="max-w-[680px] mx-auto flex flex-col gap-10">
        <div>
          <span className="font-extrabold text-[#767680]">
            REVIEW - {flashcard.topic.toUpperCase()}
          </span>
          <p className="font-extrabold text-3xl">
            {flashcard.order}. {flashcard.question}
          </p>
        </div>
        <form action="">
          <div className="flex flex-col">
            <label htmlFor="answer" className="font-extrabold text-base">
              Jawaban
            </label>
            <textarea
              rows={8}
              name="answer"
              id="answer"
              className="bg-[#F5FAFB] rounded-2xl border-2 boerder-[#C6C6D0] p-3"
            />
          </div>
          <div className="mt-10 flex items-center justify-center gap-3">
            <IconButton className="bg-[#FACC15]" icon={lightBulbIcon} />
            <IconButton className="bg-[#3F5F90]" icon={micIcon} />
            <Link href={nextPath}>
              <IconButton className="bg-[#3F5F90]" icon={sendIcon} />
            </Link>
          </div>
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