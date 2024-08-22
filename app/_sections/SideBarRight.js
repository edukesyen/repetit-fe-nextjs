import Image from 'next/image';

import FireIcon from '@/public/icons/icon-fire.svg';
import DiamondIcon from '@/public/icons/icon-diamond.svg';
import StarIcon from '@/public/icons/icon-star.svg';
import GraphIcon from '@/public/icons/icon-graph.svg';
import BrainIcon from '@/public/icons/icon-brain.svg';
import { AddTopicModal } from '../_components/AddTopicModal';
import { AddTopicModalContextProvider } from '../_components/AddTopicModalContext';
import { AddTopicButton } from '../_components/AddTopicButton';

export function SideBarRight() {
  return (
    <div className="w-full px-8 py-10 flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <AddTopic />
        <Credits />
      </div>
      <CardReviewSelanjutnya />
      <CardTingkatRetensi />
    </div>
  );
}

function AddTopic() {
  return (
    <AddTopicModalContextProvider>
      <AddTopicModal />
      <AddTopicButton />
    </AddTopicModalContextProvider>
  );
}

function Credits() {
  return (
    <div className="flex justify-end gap-4">
      <div className="flex gap-2 items-center p-2">
        <Image src={FireIcon} alt="icon" width={32} height={32} />
        <span className="text-base font-extrabold text-[#43474E]">7</span>
      </div>
      <div className="flex gap-2 items-center p-2">
        <Image src={DiamondIcon} alt="icon" width={32} height={32} />
        <span className="text-base font-extrabold text-[#43474E]">100</span>
      </div>
      <div className="flex gap-2 items-center p-2">
        <Image src={StarIcon} alt="icon" width={32} height={32} />
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
          {reviewSelanjutnya.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
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
          {tingkatRetensi.map((item, index) => (
            <div key={index} className="flex flex-col ">
              <div className="flex items-center gap-2 ">
                <Image src={GraphIcon} alt="icon" width={32} height={32} />
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
                      alt="icon"
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
