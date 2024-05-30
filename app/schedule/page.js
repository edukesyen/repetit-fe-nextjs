'use client';

import { Button } from '@/app/_components/button';
import { Navbar } from '@/app/_sections/navbar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

export default function Home() {
  return (
    <main className="flex bg-white text-black">
      <Navbar />
      <section className="flex-1 grid grid-cols-1 gap-16 py-20 max-w-[960px] m-auto">
        <h1 className="text-display-large font-bold">Jadwal</h1>
        <Calendar />
      </section>
    </main>
  );
}

function Calendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridWeek"
      headerToolbar={{ end: 'prev,next,today,dayGridWeek,dayGridMonth' }}
      events={[
        { title: 'Linked List (4)', date: '2024-06-01' },
        { title: 'Graf Berbobot (6)', date: '2024-05-31' },
        { title: 'UML Diagram (2)', date: '2024-05-31' },
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

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
