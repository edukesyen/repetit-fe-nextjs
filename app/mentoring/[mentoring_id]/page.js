'use client';

import { Button } from '@/app/_components/button';
import { Navbar } from '@/app/_sections/navbar';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

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
          <UtilityButtons />
        </section>
      </div>
    </main>
  );
}

function Header() {
  return (
    <div>
      <h1 className="text-display-large font-bold">Sesi Mentoring</h1>
      <Link href="/courses/1">
        <p className="text-headline-medium text-light-on-surface-variant">Status</p>
      </Link>
      <p className="text-title-medium text-light-on-surface-variant">Terjadwal</p>
      <div className="grid grid-cols-3 grid-rows-3">
        <h1 className="text-headline-small text-light-on-surface-variant mt-10">Mentor</h1>
        <h1 className="text-headline-small text-light-on-surface-variant mt-10 justify-self-end">
          Subjek/Topik
        </h1>
        <h1 className="text-headline-small text-light-on-surface-variant mt-10 justify-self-end">
          Waktu
        </h1>
        <div className="flex gap-4 items-center">
          <div className="bg-light-surface-container w-16 h-16 rounded-full mt-2 grid place-items-center">
            <PermIdentityOutlinedIcon className="w-10 h-10 text-light-primary" />
          </div>
          <h1 className="text-title-large font-bold">Suharto Priyayi</h1>
        </div>
        <div className="self-center justify-self-end">
          <h1 className="text-body-medium text-light-secondary">Struktur Data,</h1>
          <h1 className="text-body-medium text-light-secondary">Graf Berbobot</h1>
        </div>
        <div className="self-center justify-self-end flex justify-items-end flex-col">
          <h1 className="text-body-medium text-light-secondary">29/05/24</h1>
          <h1 className="text-body-medium text-light-secondary">12.00 - 12.30</h1>
        </div>
      </div>
      <div className="flex-1">
        <textarea
          className="border border-light-outline rounded-3xl p-3 w-full h-full"
          id="Answer"
          name="Answer"
          rows="4"
          value={
            'A linked list is a data structure that stores a sequence of elements, called nodes, in a linear fashion. Each node contains data and a reference to the next node in the list. The first node is called the head, and the last node is called the tail.'
          }
          disabled={true}
        />
      </div>
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
