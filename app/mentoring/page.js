'use client';

import { Button } from '@/app/_components/button';
import { Navbar } from '@/app/_sections/navbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Mentoring() {
  return (
    <main className="flex bg-white text-black">
      <Navbar />
      <div className="flex-1 pl-20">
        <nav className=" flex justify-between items-center h-12 border-b border-slate-200 fixed w-full bg-white">
          <Button variant="text" href="/" text="Kembali" icon={<ArrowBackIcon />} />
          <span>.</span>
        </nav>
        <section className="flex-1 grid grid-cols-1 gap-16 py-20 max-w-[960px] m-auto mt-12">
          <Header />
          <div
            id="card"
            className="w-44 h-32 bg-light-surface-container flex flex-col gap-8 rounded-3xl p-6"
          ></div>
        </section>
      </div>
    </main>
  );
}

function Header() {
  return (
    <div>
      <h1 className="text-display-large font-bold">Mentoring</h1>
      <div className="flex items-center gap-2">
        <h1 className="text-headline-small text-light-secondary">Sesi </h1>
        <h1 className="text-title-small text-light-secondary"> - Lihat Riwayat Sesi</h1>
      </div>
    </div>
  );
}
