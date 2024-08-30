'use client';
import Image from 'next/image';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { Button } from '@/app/_components/Button';

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
  const evaluation = {
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    retention_score: 3,
    next_review_date: '4 Maret 2024',
    next_review_date_iso: '2024-07-30T07:34:53Z',
    criteria: [
      {
        passed: true,
        name: 'Menyebutkan Matriks adjacency',
      },
      {
        passed: true,
        name: 'Menyebutkan List adjacency',
      },
      {
        passed: false,
        name: 'Dijawab dibawah 1 menit',
      },
    ],
  };
  const nextPathArr = pathName.split('/');
  nextPathArr[4] = flashcard.next_flashcard_id;
  nextPathArr[5] = 'question';
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
      <div className="max-w-[680px] mx-auto flex flex-col gap-6">
        <div>
          <span className="font-extrabold text-[#767680]">REVIEW - {flashcard.topic}</span>
          <p className="font-extrabold text-3xl">
            {flashcard.order}. {flashcard.question}
          </p>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 flex flex-col items-center gap-2 border-2 border-[#C6C6D0] p-4 rounded-xl">
            <span className="font-extrabold">NILAI RETENSI</span>
            <div className="w-16 h-16 bg-[#65A30D] rounded-2xl grid place-items-center">
              <span className="font-extrabold text-white text-5xl">3</span>
            </div>
            <span className="text-[#767680] font-bold text-center">
              Review Selanjutnya: <br /> 4 Maret 2024 (
              {calculateRemainingTime(evaluation.next_review_date_iso)})
            </span>
          </div>
          <div className="flex-1 flex items-center border-2 border-[#C6C6D0] p-4 rounded-xl">
            <div className="flex flex-col gap-2">
              {evaluation.criteria.map((criteria, index) => (
                <AnswerCriteria key={index} criteria={criteria.name} isPassed={criteria.passed} />
              ))}
            </div>
          </div>
        </div>
        <form action="">
          <div className="flex flex-col">
            <label htmlFor="answer" className="font-extrabold text-base">
              Jawaban
            </label>
            <textarea
              readOnly={true}
              disabled={true}
              value={evaluation.answer}
              rows={8}
              name="answer"
              id="answer"
              className="bg-[#F5FAFB] rounded-2xl border-2 border-[#C6C6D0] p-3"
            />
          </div>
          <div className="mt-10 flex items-center justify-center gap-3">
            <Link href={nextPath}>
              <Button>Lanjut</Button>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

function AnswerCriteria({ criteria = '', isPassed = false }) {
  return (
    <div className="flex items-center gap-2">
      <span>{isPassed ? '✅' : '❌'}</span>
      <span className="leading-tight">{criteria}</span>
    </div>
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

function calculateRemainingTime(isoTimeThen) {
  const now = new Date(); // Current time
  const then = new Date(isoTimeThen);

  let remainingTime = Math.abs(then - now); // in milliseconds

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  remainingTime %= 1000 * 60 * 60 * 24;

  const hours = Math.floor(remainingTime / (1000 * 60 * 60));
  // remainingTime %= 1000 * 60 * 60;

  // const minutes = Math.floor(remainingTime / (1000 * 60));

  // return `${days} hari ${hours} jam ${minutes} menit`;
  return `${days} Hari ${hours} Jam`;
}
