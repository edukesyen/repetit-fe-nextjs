'use client';

import { Button } from '@/app/_components/button';
import { ButtonCustomChildren } from '@/app/_components/buttonCustomChildren';
import { Navbar } from '@/app/_sections/navbar';

import AddIcon from '@mui/icons-material/Add';
import { Slider } from '@/components/ui/slider';
import Link from 'next/link';

export default function Courses() {
  return (
    <main className="flex bg-white text-black">
      <Navbar />
      <section className="flex-1 grid grid-cols-2 gap-16 py-20 max-w-[960px] m-auto">
        <div className="flex flex-col gap-5">
          <Header />
          <RetentionLevel />
          <QuizHistory />
          <UtilityButtons />
        </div>
      </section>
    </main>
  );
}

function Header() {
  return (
    <div>
      <p className="text-title-large text-light-on-surface-variant">Kuis</p>
      <h1 className="text-display-large font-bold">Graf Berbobot</h1>
      <p className="text-display-small text-light-on-surface-variant">
        Struktur Data
      </p>
    </div>
  );
}

function RetentionLevel() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-light-on-primary-container text-title-large font-bold">
        Kemahiran
      </p>
      <Slider defaultValue={[50]} max={100} step={1} disabled={true} />
    </div>
  );
}

function QuizHistory() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-light-on-primary-container text-title-large font-bold">
        Riwayat Kuis
      </p>
      <div className="flex flex-col gap-3 max-h-60 overflow-y-scroll">
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
      </div>
      <p>
        {'Lihat lebih lengkap di '}
        <Link href="/" className="font-bold">
          Analitik
        </Link>
      </p>
    </div>
  );
}

function QuestionItem() {
  return (
    <div className="w-full flex justify-between class bg-light-surface-container rounded-lg border-2 border-light-on-surface-variant gap-8 p-2">
      <p className="truncate">
        Jelaskan perbedaan antara graf berbobot dan graf tanpa bobot.
      </p>
      <p>Mudah</p>
    </div>
  );
}

function UtilityButtons() {
  return (
    <div className="w-full grid grid-cols-2 [&>*]:w-full [&>*]:h-full> gap-4">
      <Button text="Edit kuis" href="/" variant="outlined" />
      <Button text="Perbarui kuis" href="/" variant="outlined" />
      <Button
        text="Kerjakan kuis"
        className="col-span-2"
        href="/"
        variant="primary"
      />
    </div>
  );
}
