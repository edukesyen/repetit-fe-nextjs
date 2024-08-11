'use client';

import Image from 'next/image';
import Link from 'next/link';
import CardsImage from '@/public/images/cards.png';

import TargetOneIcon from '@/public/icons/icon-target-one.svg';
import PlusIcon from '@/public/icons/icon-round-plus.svg';
import FireIcon from '@/public/icons/icon-fire.svg';
import DiamondIcon from '@/public/icons/icon-diamond.svg';
import StarIcon from '@/public/icons/icon-star.svg';
import GraphIcon from '@/public/icons/icon-graph.svg';
import BrainIcon from '@/public/icons/icon-brain.svg';

import { SideNav } from '@/app/_sections/SideNav';
import { Button } from '@/app/_components/Button';

export default function DashboardPage() {
  return (
    <main className="h-dvh  flex">
      <div className="flex-none  max-w-[256px] h-full">
        <SideNav />
      </div>
      <div className="flex-1 flex max-w-7xl m-auto">
        <div className="flex-1 px-8 py-10 flex flex-col gap-6">
          <h2 className="font-extrabold text-4xl">Review Hari Ini</h2>
          <CardReviewHariIni />
          <h2 className="font-extrabold text-2xl">Aktivitas Bulan Ini</h2>
          <CardProgressReview />
          <CardTopReview />
        </div>
        <div className="flex-1 px-8 py-10 flex flex-col gap-6">
          <Credits />
          <CardReviewSelanjutnya />
          <CardTingkatRetensi />
        </div>
      </div>
    </main>
  );
}

function CardReviewHariIni() {
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
          <h4 className="font-extrabold text-xl">{data.materi}</h4>
          <span className="inline-block bg-[#CCEDA4] border border-black rounded-md text-sm font-bold w-fit px-2">
            {data.topik}
          </span>
          <span className="text-base font-extrabold text-[#43474E]">Review Terakhir</span>
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
            <Image className="w-14" src={CardsImage} />
            <span className="font-extrabold text-5xl">4</span>
          </div>
          <span className="font-bold text-lg">flashcard</span>
        </div>
      </div>
      <Link href={data.linkHref} className="self-end">
        <Button>
          REVIEW
        </Button>
      </Link>
    </div>
  );
}

function CardProgressReview() {
  const stats = {
    target: {
      flashcardDireview: 63,
      targetReviewFlashcard: 80,
    },
  };
  return (
    <div className="rounded-3xl py-5 px-10 flex flex-col gap-2 border-2 border-[#C6C6D0]">
      <span className="text-base font-extrabold text-[#43474E]">
        Kamu Mereview {stats.flashcardDireview} flashcards
      </span>
      <div className="flex h-8 justify-center items-center">
        <div class="flex-1 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            class="bg-[#65A30D] h-2.5 rounded-full"
            style={{
              width: `${
                (stats.target.flashcardDireview / stats.target.targetReviewFlashcard) * 100
              }%`,
            }}
          ></div>
        </div>
        <Image src={TargetOneIcon} width={32} height={32} className="flex-none relative -left-1" />
      </div>
      <span className="text-xs font-bold text-[#43474E]">
        Review {stats.target.targetReviewFlashcard - stats.target.flashcardDireview} flashcards
        untuk mencapai target mu bulan ini!
      </span>
    </div>
  );
}

function CardTopReview() {
  const stats = {
    topReview: [
      {
        materi: 'Weighted Graph',
        jumlahReview: 21,
      },
      {
        materi: 'UML Diagram',
        jumlahReview: 17,
      },
      {
        materi: 'Virtualization',
        jumlahReview: 12,
      },
      {
        materi: 'Operasi Baris Elementer',
        jumlahReview: 8,
      },
      {
        materi: 'Turunan Parsial',
        jumlahReview: 3,
      },
    ],
  };
  return (
    <div className="rounded-3xl py-5 px-10 flex flex-col gap-2 border-2 border-[#C6C6D0]">
      <span className="text-base font-extrabold text-[#43474E]">Top 5 Review Terbanyak</span>
      <div className="flex gap-8">
        <div className="flex-1 h-28 flex flex-row-reverse justify-around items-end border-b border-black">
          {stats.topReview.map((item, index) => (
            <div
              style={{
                height: `${(item.jumlahReview / stats.topReview[0].jumlahReview) * 100}%`,
              }}
              className="w-5 bg-[#E03131] border border-[#882020] rounded-md flex justify-center items-end text-white"
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div className="flex-none">
          <ol className="font-bold text-xs text-[#43474E]">
            {stats.topReview.map((item, index) => (
              <li>
                {index + 1}. {item.materi}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

function Credits() {
  return (
    <div className="flex justify-end gap-4">
      <Link href="/" className='rounded-xl hover:bg-slate-100'>
        <div className="flex gap-2 items-center p-2">
          <Image src={PlusIcon} width={32} height={32} />
          <span className="text-base font-extrabold text-[#43474E]">Tambah Topik</span>
        </div>
      </Link>
      <div className="flex gap-2 items-center p-2">
        <Image src={FireIcon} width={32} height={32} />
        <span className="text-base font-extrabold text-[#43474E]">7</span>
      </div>
      <div className="flex gap-2 items-center p-2">
        <Image src={DiamondIcon} width={32} height={32} />
        <span className="text-base font-extrabold text-[#43474E]">100</span>
      </div>
      <div className="flex gap-2 items-center p-2">
        <Image src={StarIcon} width={32} height={32} />
        <span className="text-base font-extrabold text-[#43474E]">8</span>
      </div>
    </div>
  );
}

function CardReviewSelanjutnya() {
  const reviewSelanjutnya = [
    {
      tanggal: 20,
      bulan: 'JAN',
      materi: 'Linked List',
      topik: 'Struktur Data',
      jumlahSoal: 4,
    },
    {
      tanggal: 22,
      bulan: 'JAN',
      materi: 'Support Vector Machine',
      topik: 'Kecerdasan Buatan',
      jumlahSoal: 3,
    },
    {
      tanggal: 24,
      bulan: 'JAN',
      materi: 'Kaidah Simpson 3/8',
      topik: 'Metode Numerik',
      jumlahSoal: 7,
    },
  ];
  return (
    <div className="rounded-3xl py-5 px-10 flex flex-col gap-2 border-2 border-[#C6C6D0]">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h4 className="font-extrabold text-xl">Review Selanjutnya</h4>
          {reviewSelanjutnya.map((item) => (
            <div className="flex items-center gap-3">
              <div className="flex flex-col border-r-2  border-[#3F5F90] px-3">
                <span className="font-extrabold text-base">{item.tanggal}</span>
                <span className="font-extrabold text-[10px]">{item.bulan}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base">{item.materi}</span>
                <div className="flex gap-2 font-extrabold text-[10px] text-[#43474E]">
                  <span>{item.topik}</span>
                  <span>{item.jumlahSoal} soal</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CardTingkatRetensi() {
  const tingkatRetensi = [
    {
      materi: 'Weighted Graph',
      persentase: 80,
    },
    {
      materi: 'CLR(1) Parser',
      persentase: 70,
    },
    {
      materi: 'Edge Detection',
      persentase: 60,
    },
  ];

  return (
    <div className="rounded-3xl py-5 px-10 flex flex-col gap-2 border-2 border-[#C6C6D0]">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 w-full">
          <h4 className="font-extrabold text-xl">Tingkat Retensi</h4>
          {tingkatRetensi.map((item) => (
            <div className="flex flex-col ">
              <div className="flex items-center gap-2 ">
                <Image src={GraphIcon} width={32} height={32} />
                <span className="font-bold text-[#43474E] text-base">{item.materi}</span>
              </div>
              <div className=" h-8 grid place-items-center ">
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    class="bg-[#65A30D] h-2.5 rounded-full relative"
                    style={{ width: `${item.persentase}%` }}
                  >
                    <Image
                      src={BrainIcon}
                      width={32}
                      height={32}
                      className="absolute -right-1 -top-2.5"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
