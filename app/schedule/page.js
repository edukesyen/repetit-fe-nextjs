'use client';

import { Button } from '@/app/_components/button';
import { Navbar } from '@/app/_sections/navbar';

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

export default function Home() {
  return (
    <main className="flex bg-white text-black">
      <Navbar />
      <section className="flex-1 grid grid-cols-2 gap-16 py-20 max-w-[960px] m-auto">
        <div className="flex flex-col gap-16">
          <Greeting />
          <TodaysTopic />
        </div>
        <div className="flex flex-col gap-16">
          <NextReview />
          <ImpromptuQuiz />
        </div>
      </section>
    </main>
  );
}

function Greeting() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-display-large">Jadwal</h3>
      <div className="flex gap-2 items-center">
        <span className="text-yellow-500">
          <CircleOutlinedIcon />
        </span>
        <span className="text-body-large">
          Anda berada dalam 5 hari berturut-turut!
        </span>
      </div>
    </div>
  );
}

function TodaysTopic() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-title-large">Topik hari ini</h3>

      <div
        id="card"
        className="w-full bg-light-surface-container flex flex-col gap-8 rounded-3xl p-6"
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-headline-medium">Weighted Graph</h3>
          <span className="text-label-large-prominent text-light-secondary">
            Struktur Data
          </span>
        </div>
        <div className="flex gap-10 items-center">
          <div className="flex-none flex flex-col items-center justify-center w-28 border border-light-primary text-light-primary rounded-full aspect-square">
            <span className="text-display-large">4</span>
            <span className="text-label-large">soal</span>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <h5 className="text-label-large-prominent">Riwayat Terakhir</h5>
            <div>
              <div className="flex gap-3 items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-red-500"></span>
                <span className="text-body-small">soal mudah</span>
              </div>
              <div className="flex gap-3 items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-red-500"></span>
                <span className="text-body-small">soal mudah</span>
              </div>
              <div className="flex gap-3 items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-red-500"></span>
                <span className="text-body-small">soal mudah</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="primary" href="/" text="Kerjakan Kuis" />
          <Button variant="outlined" href="/" text="Lihat Topik" />
        </div>
      </div>
    </div>
  );
}

function NextReview() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-title-large">Review 7 Hari Berikutnya</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <div className="flex-none flex flex-col items-center">
            <div className="w-12 h-12 p-1">
              <div className="rounded-full w-full h-full bg-light-primary text-white grid place-items-center text-body-large">
                28
              </div>
            </div>
            <span className="text-label-small">JAN</span>
          </div>
          <div className="flex-1 px-5 rounded-2xl bg-light-surface-container flex flex-col justify-center">
            <span className="text-title-medium">Linked List</span>
            <span className="text-label-small text-light-secondary">
              Struktur Data - 4 Soal
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-none flex flex-col items-center">
            <div className="w-12 h-12 p-1">
              <div className="rounded-full w-full h-full bg-light-primary text-white grid place-items-center text-body-large">
                28
              </div>
            </div>
            <span className="text-label-small">JAN</span>
          </div>
          <div className="flex-1 px-5 rounded-2xl bg-light-surface-container flex flex-col justify-center">
            <span className="text-title-medium">Linked List</span>
            <span className="text-label-small text-light-secondary">
              Struktur Data - 4 Soal
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-none flex flex-col items-center">
            <div className="w-12 h-12 p-1">
              <div className="rounded-full w-full h-full bg-light-primary text-white grid place-items-center text-body-large">
                28
              </div>
            </div>
            <span className="text-label-small">JAN</span>
          </div>
          <div className="flex-1 px-5 rounded-2xl bg-light-surface-container flex flex-col justify-center">
            <span className="text-title-medium">Linked List</span>
            <span className="text-label-small text-light-secondary">
              Struktur Data - 4 Soal
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImpromptuQuiz() {
  return (
    <div className="flex flex-col gap-4 items-end w-full bg-light-surface-container rounded-3xl p-5">
      <div className="flex flex-col gap-2">
        <h5 className="text-headline-small">Kuis Dadakan :D</h5>
        <p className="text-body-medium text-light-secondary">
          Ada 61 soal susah, jawablah untuk memperkuat pembelajaran Anda!
        </p>
      </div>
      <Button href="/" variant="primary" text="Kerjakan Kuis" />
    </div>
  );
}
