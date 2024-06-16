'use client';

import { Button } from '@/app/_components/button';
import { Navbar } from '@/app/_sections/navbar';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Checkbox } from '@/app/_components/checkbox';

export default function Courses() {
  return (
    <main className="flex bg-white text-black">
      <Navbar />
      <section className="flex-1 grid grid-cols-1 gap-16 py-20 max-w-[960px] m-auto">
        <Header />
        <QuizHistory />
        <UtilityButtons />
      </section>
    </main>
  );
}

function Header() {
  return (
    <div>
      <h1 className="text-display-large font-bold">Kuis Kustom</h1>
    </div>
  );
}

function QuizHistory() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-schemes-secondary"> Jumlah Soal: 12</h2>
      <div className="flex flex-col gap-3 max-h-80 overflow-y-scroll">
        <QuestionItemWithCheckbox />
        <QuestionItemWithCheckbox />
        <QuestionItemWithCheckbox />
        <QuestionItemWithCheckbox />
        <QuestionItemWithCheckbox />
        <QuestionItemWithCheckbox />
        <QuestionItemWithCheckbox />
        <QuestionItemWithCheckbox />
        <QuestionItemWithCheckbox />
        <QuestionItemWithCheckbox />
        <QuestionItemWithCheckbox />
        <QuestionItemWithCheckbox />
      </div>
    </div>
  );
}

function QuestionItem() {
  return (
    <div className="w-full flex justify-between class bg-light-surface-container rounded-lg border-2 border-light-outline-variant gap-8 p-2">
      <p className="truncate">Jelaskan perbedaan antara graf berbobot dan graf tanpa bobot.</p>
      <ArrowBackIosNewOutlinedIcon className="text-light-primary" />
    </div>
  );
}

function QuestionItemWithCheckbox() {
  return (
    <div className="flex">
      <Checkbox />
      <QuestionItem />
    </div>
  );
}

function UtilityButtons() {
  return (
    <div>
      <Button text="Simpan Perubahan" href="#" variant="primary" />
    </div>
  );
}
