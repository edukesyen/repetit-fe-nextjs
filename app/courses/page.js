'use client';

import { Button } from '@/app/_components/button';
import { ButtonCustomChildren } from '@/app/_components/buttonCustomChildren';
import { Navbar } from '@/app/_sections/navbar';

import AddIcon from '@mui/icons-material/Add';

export default function Courses() {
  return (
    <main className="flex bg-white text-black">
      <Navbar />
      <section className="flex-1 grid grid-cols-1 gap-16 py-20 max-w-[960px] m-auto">
        <h1 className="text-display-large font-bold">Subjek</h1>
        <ButtonCustomChildren href="" variant="primary" className="self-end">
          <AddIcon />
          <p>Tambah Subjek</p>
        </ButtonCustomChildren>
        <CourseGrid />
      </section>
    </main>
  );
}

function CourseGrid() {
  const courses = [];

  for (let i = 0; i < 10; i += 1) {
    courses.push(<CourseCard />);
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))] gap-8">
      {courses}
    </div>
  );
}

function CourseCard() {
  return (
    <div className="aspect-square shadow-lg rounded-lg">
      <div className="h-[70%] bg-light-surface-container rounded-t-md">
        {/* Insert Image here */}
      </div>
      <div className="p-4 flex flex-col gap-2 items-end">
        <div className="flex flex-col gap-2 w-full">
          <p className="font-bold text-title-large">Struktur Data</p>
          <p className="text-body-large">7 topik</p>
        </div>
        <Button text="Lihat" href="" variant="primary" />
      </div>
    </div>
  );
}
