'use client'

import Image from 'next/image';
import Link from 'next/link';

import congratulationsPic from '@/public/images/congratulations.png';
import { Button } from '@/app/_components/Button';
import { usePathname } from 'next/navigation';

import DiamondIcon from '@/public/icons/icon-diamond.svg';
import StarIcon from '@/public/icons/icon-star.svg';

export default function FlashcardFinishPage() {
  const pathName = usePathname();

  return (
    <main className="grid place-items-center min-h-dvh">
      <div className="flex flex-col items-center">
        <h2 className="font-extrabold text-3xl text-[#3F5F90]">Review Selesai</h2>
        <Image src={congratulationsPic} alt="illustration" className="w-full max-w-[380px]" />
        <div className="flex items-center gap-5 p-8">
          <div className="flex items-center gap-2">
            <Image src={DiamondIcon} alt="icon" width={32} height={32} />
            <span className="font-extrabold text-[#4289C1]">+10</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src={StarIcon} alt="icon" width={32} height={32} />
            <span className="font-extrabold text-[#FFB636]">+8</span>
          </div>
        </div>
        <Link href={pathName.split('/').slice(0, 4).join('/')}>
          <Button>Kembali ke Topik</Button>
        </Link>
        <div className="p-10">
          <span className="font-extrabold text-[#767680]">REVIEW - WEIGHTED GRAPH</span>
        </div>
      </div>
    </main>
  );
}
