import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/app/_components/Button';
import { TopicDetailLayout } from '../_layout';

import CardsImage from '@/public/images/cards.png';

export default function TopicsReviewPage() {
  return (
    <TopicDetailLayout>
      <div className="flex flex-col gap-6">
        <h2 className="font-extrabold text-2xl">Review</h2>
        <CardLastReview />
        <CardNoReview />
        <h2 className="font-extrabold text-2xl">Riwayat Review</h2>
      </div>
    </TopicDetailLayout>
  );
}

function CardNoReview() {
  return (
    <div className="rounded-3xl py-5 px-10 flex flex-col gap-2 border-2 border-[#C6C6D0]">
      <span className="text-xl font-extrabold text-[#43474E]">Tidak Ada Review Hari ini</span>
      <span className="text-base font-bold text-[#43474E]">
        Review selanjutnya masih 3 hari lagi pada tanggal 4 Maret 2024
      </span>
    </div>
  );
}

function CardLastReview() {
  const data = {
    materi: 'Weighted Graph',
    topik: 'Struktur Data',
    jumlahFlashcard: 4,
    linkHref: '/',
    riwayatTerakhir: {
      mudah: 2,
      baik: 3,
      sulit: 0,
    },
  };

  return (
    <div className="rounded-3xl py-5 px-10 flex flex-col gap-2 border-2 border-[#C6C6D0]">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-extrabold text-[#43474E]">Review Terakhir</span>
          {data.riwayatTerakhir.mudah > 0 && (
            <div className="flex gap-2 items-center">
              <span className="inline-block w-[10px] h-[10px] bg-[#3F6212] border border-[#1F3701] rounded-full"></span>
              <span className="text-base font-bold text-[#43474E]">
                {data.riwayatTerakhir.mudah} Flashcard Mudah
              </span>
            </div>
          )}
          {data.riwayatTerakhir.baik > 0 && (
            <div className="flex gap-2 items-center">
              <span className="inline-block w-[10px] h-[10px] bg-[#F59E0B] border border-[#825513] rounded-full"></span>
              <span className="text-base font-bold text-[#43474E]">
                {data.riwayatTerakhir.baik} Flashcard Baik
              </span>
            </div>
          )}
          {data.riwayatTerakhir.sulit > 0 && (
            <div className="flex gap-2 items-center">
              <span className="inline-block w-[10px] h-[10px] bg-[#f50b0b] border border-[#821313] rounded-full"></span>
              <span className="text-base font-bold text-[#43474E]">
                {data.riwayatTerakhir.sulit} Flashcard Sulit
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3 justify-end items-end">
          <span className="font-extrabold text-base">Hari Ini</span>
          <div className="flex gap-3">
            <Image className="w-14" src={CardsImage} alt="icon" />
            <span className="font-extrabold text-5xl">4</span>
          </div>
          <span className="font-bold text-lg">flashcard</span>
        </div>
      </div>
      <Link href={data.linkHref} className="self-end">
        <Button>REVIEW</Button>
      </Link>
    </div>
  );
}
