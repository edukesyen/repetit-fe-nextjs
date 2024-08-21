import Image from 'next/image';
import { SideNav } from '../_sections/SideNav';
import { SideBarRight } from '../_sections/SideBarRight';
import { Button } from '../_components/Button';

export default function TopicsPage() {
  return (
    <main className="h-dvh flex">
      <div className="flex-none  max-w-[256px] h-full">
        <SideNav />
      </div>
      <div className="flex-1 max-w-3xl mx-auto px-8 py-12 flex flex-col gap-6">
        <h2 className="font-extrabold text-4xl">Mentoring Hari Ini</h2>
        <TodayMentoringSessionCard />
        <h2 className="font-extrabold text-2xl">Reservasi Mentoring Mu</h2>
        <ReservedMentoringSession />
      </div>
      <div className="flex-none w-[500px]">
        <SideBarRight />
      </div>
    </main>
  );
}

/**
 * NEXT TODO
 * ikon topik, kalender, jam
 * calculate time left
 * fetch api session detail
 */

function TodayMentoringSessionCard() {
  const sessionDetail = {
    mentor: {
      name: 'Bryan Obama',
      profileImage: '',
    },
    topic: 'Weighted Graph, Linked List',
    date: '29 Februari 2024',
    time: '19:00-20:00',
    datetimeIso: '',
  };
  return (
    <div className="rounded-3xl py-5 px-5 flex flex-col gap-4 border-2 border-[#C6C6D0]">
      <div className="flex gap-4">
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
            <Image src={''} alt="icon" width={24} height={24} className="bg-slate-200" />
            <span className="font-bold text-base">{sessionDetail.topic}</span>
          </div>
          <div className="flex items-center gap-1">
            <Image src={''} alt="icon" width={24} height={24} className="bg-slate-200" />
            <span className="font-bold text-base">{sessionDetail.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Image src={''} alt="icon" width={24} height={24} className="bg-slate-200" />
            <span className="font-bold text-base">{sessionDetail.time}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-bold">5 jam 17 menit sebelum mulai</span>
        <Button>LIHAT DETAIL</Button>
      </div>
    </div>
  );
}

function ReservedMentoringSession() {
  const reservedMentoringSession = [
    {
      mentor: {
        name: 'Bryan Obama',
      },
      topic: 'Weighted Graph, Linked List',
      date: '29 Februari 2024',
      time: '19:00-20:00',
      datetimeIso: '',
    },
    {
      mentor: {
        name: 'Bryan Obama',
      },
      topic: 'Weighted Graph, Linked List',
      date: '29 Februari 2024',
      time: '19:00-20:00',
      datetimeIso: '',
    },
  ];
  return (
    <div className="rounded-3xl py-8 px-5 flex flex-col gap-4 border-2 border-[#C6C6D0]">
      <div className="flex flex-col gap-3">
        {reservedMentoringSession.map((sessionDetail, index) => (
          <div key={index} className="flex flex-col gap-1 p-3 bg-slate-200 rounded-2xl">
            <span className="font-extrabold">{sessionDetail.mentor.name}</span>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Image src={''} alt="icon" width={16} height={16} className="bg-slate-200" />
                <span className="font-bold text-xs">{sessionDetail.topic}</span>
              </div>
              <div className="flex items-center gap-1">
                <Image src={''} alt="icon" width={16} height={16} className="bg-slate-200" />
                <span className="font-bold text-xs">{sessionDetail.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Image src={''} alt="icon" width={16} height={16} className="bg-slate-200" />
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
