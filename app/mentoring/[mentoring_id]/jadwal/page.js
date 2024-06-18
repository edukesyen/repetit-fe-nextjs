'use client';

import { Button } from '@/app/_components/button';
import { Navbar } from '@/app/_sections/navbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

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
          <div className="flex gap-4 items-center">
            <div className="bg-light-surface-container w-24 h-24 rounded-full mt-2 grid place-items-center">
              <PermIdentityOutlinedIcon className="w-20 h-20 text-light-primary" />
            </div>
            <div>
              <h1 className="text-headline-large font-bold mb-2 ">Suharto Priyayi</h1>
              <p className="text-body-medium text-light-secondary mb-2">3.5</p>
              <div className="flex">
                <div className="bg-white w-32 h-10 rounded-lg mt-2 mr-2 grid place-items-center border-2 border-light-outline">
                  <p className="text-body-small text-light-on-surface-variant justify-center">
                    DSA
                  </p>
                </div>
                <div className="bg-white w-32 h-10 rounded-lg mt-2 mr-2 mb-2 grid place-items-center border-2 border-light-outline">
                  <p className="text-body-small text-light-on-surface-variant justify-center">
                    Pengolahan Citra
                  </p>
                </div>
                <div className="bg-white w-32 h-10 rounded-lg mt-2 mr-2 grid place-items-center border-2 border-light-outline">
                  <p className="text-body-small text-light-on-surface-variant justify-center">
                    Linear Aljabar
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full -mb-8">
            <p className="text-title-large text-black font-bold flex-1 flex justify-center border-b-2 border-b-black">
              Jadwal
            </p>
            <p className="text-title-large text-black font-bold flex-1 flex justify-center border-b-2 border-b-black">
              Review
            </p>
          </div>
          <Calendar />
        </section>
      </div>
    </main>
  );
}
function UtilityButtons() {
  return (
    <div>
      <Button text="DSA" href="#" variant="primary" />
    </div>
  );
}

function Calendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridWeek"
      headerToolbar={{ end: 'prev,next,today,dayGridWeek,dayGridMonth' }}
      events={[
        { title: 'Pesan Slot', date: '2024-06-16' },
        { title: 'Pesan Slot', date: '2024-06-16' },
        { title: 'Pesan Slot', date: '2024-06-17' },
        { title: 'Pesan Slot', date: '2024-06-18' },
        { title: 'Pesan Slot', date: '2024-06-18' },
        { title: 'Pesan Slot', date: '2024-06-18' },
        { title: 'Pesan Slot', date: '2024-06-20' },
        { title: 'Pesan Slot', date: '2024-06-19' },
        { title: 'Pesan Slot', date: '2024-06-20' },
        { title: 'Pesan Slot', date: '2024-06-21' },
        { title: 'Pesan Slot', date: '2024-06-18' },
        { title: 'Pesan Slot', date: '2024-06-16' },
        { title: 'Pesan Slot', date: '2024-06-19' },
        { title: 'Pesan Slot', date: '2024-06-21' },
        { title: 'Pesan Slot', date: '2024-06-16' },
      ]}
      // eventContent={() =>
      //   renderEventContent([
      //     { title: 'event 1', date: '2024-06-01' },
      //     { title: 'event 2', date: '2024-05-31' },
      //   ])
      // }
    />
  );
}
