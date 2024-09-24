import Image from 'next/image';
import { Button } from '../_components/Button';
import BookIcon from '@/public/icons/icon-book.svg';
import CalendarIcon from '@/public/icons/icon-calendar.svg';
import ClockIcon from '@/public/icons/icon-clock.svg';
import { DashboardLayout } from '../_layout';

export default function TopicsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <h2 className="font-extrabold text-4xl">Mentoring Hari Ini</h2>
        <TodayMentoringSessionCard />
        <h2 className="font-extrabold text-2xl">Reservasi Mentoring Mu</h2>
        <ReservedMentoringSession />
      </div>
    </DashboardLayout>
  );
}

function TodayMentoringSessionCard() {
  const sessionDetail = {
    mentor: {
      name: 'Andrew C',
      profileImage: '/images/sid-ts.jpg',
    },
    topic: 'Weighted Graph, Linked List',
    date: '25 September 2024',
    time: '19:00-20:00',
    datetimeIso: '2024-09-25T11:57:02+07:00',
  };
  return (
    <div className="rounded-3xl py-5 px-5 flex flex-col gap-4 border-2 border-[#C6C6D0]">
      <div className="flex items-center gap-4">
        <div className="flex-none">
          <Image
            src={sessionDetail.mentor.profileImage}
            alt="profile"
            width={96}
            height={96}
            className="rounded-full overflow-hidden bg-slate-200"
          />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <span className="font-extrabold text-xl">{sessionDetail.mentor.name}</span>
          <div className="flex items-center gap-1">
            <Image src={BookIcon} alt="icon" width={24} height={24} />
            <span className="font-bold text-base">{sessionDetail.topic}</span>
          </div>
          <div className="flex items-center gap-1">
            <Image src={CalendarIcon} alt="icon" width={24} height={24} />
            <span className="font-bold text-base">{sessionDetail.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Image src={ClockIcon} alt="icon" width={24} height={24} />
            <span className="font-bold text-base">{sessionDetail.time}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-bold">
          {calculateRemainingTime(sessionDetail.datetimeIso)} sebelum mulai
        </span>
        <Button>LIHAT DETAIL</Button>
      </div>
    </div>
  );
}

function ReservedMentoringSession() {
  const reservedMentoringSession = [
    {
      mentor: {
        name: 'Andrew C',
      },
      topic: 'Weighted Graph, Linked List',
      date: '29 Oktober 2024',
      time: '19:00-20:00',
      datetimeIso: '',
    },
    {
      mentor: {
        name: 'Andrew C',
      },
      topic: 'Weighted Graph, Linked List',
      date: '29 Oktober 2024',
      time: '19:00-20:00',
      datetimeIso: '',
    },
  ];
  return (
    <div className="rounded-3xl py-8 px-5 flex flex-col gap-4 border-2 border-[#C6C6D0]">
      <div className="flex flex-col gap-4">
        {reservedMentoringSession.map((sessionDetail, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 p-3 bg-white rounded-2xl border-[1.5px] border-[#C6C6D0] drop-shadow-[0_4px_0_rgba(214,214,208,1)]"
          >
            <span className="font-extrabold">{sessionDetail.mentor.name}</span>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Image src={BookIcon} alt="icon" width={16} height={16} />
                <span className="font-bold text-xs">{sessionDetail.topic}</span>
              </div>
              <div className="flex items-center gap-1">
                <Image src={CalendarIcon} alt="icon" width={16} height={16} />
                <span className="font-bold text-xs">{sessionDetail.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Image src={ClockIcon} alt="icon" width={16} height={16} />
                <span className="font-bold text-xs">{sessionDetail.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Button>RESERVASI MENTOR</Button>
      </div>
    </div>
  );
}

function calculateRemainingTime(isoTimeThen) {
  const now = new Date(); // Current time
  const then = new Date(isoTimeThen); // Convert to local time

  // Convert both to local timezone
  const nowLocal = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })); // example: convert to WIB (Asia/Jakarta)
  const thenLocal = new Date(then.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));

  let remainingTime = Math.abs(thenLocal - nowLocal); // in milliseconds

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  remainingTime %= 1000 * 60 * 60 * 24;

  const hours = Math.floor(remainingTime / (1000 * 60 * 60));
  remainingTime %= 1000 * 60 * 60;

  const minutes = Math.floor(remainingTime / (1000 * 60));

  return `${days} Hari ${hours} Jam ${minutes} Menit`;
}

// function calculateRemainingTime(isoTimeThen) {
//   const now = new Date(); // Current time
//   const then = new Date(isoTimeThen);

//   let remainingTime = Math.abs(then - now); // in milliseconds

//   const hours = Math.floor(remainingTime / (1000 * 60 * 60));
//   remainingTime %= 1000 * 60 * 60;

//   const minutes = Math.floor(remainingTime / (1000 * 60));

//   return `${hours} jam ${minutes} menit`;
// }
