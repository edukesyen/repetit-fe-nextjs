'use client'

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { TopicDetailLayout } from '../_layout';

export default function TopicsMaterialsPage() {
  return (
    <TopicDetailLayout>
      <div className="flex flex-col gap-6">
        <h2 className="font-extrabold text-2xl">Materi</h2>
        <CardMaterials />
      </div>
    </TopicDetailLayout>
  );
}

function CardMaterials() {
  const pathName = usePathname();
  const materials = [
    {
      name: 'Graf: Bahan Ajar Struktur Data Selasa 10.00',
      type: 'pdf',
      slug: '75904789795-bahan-ajar-struktur-data',
    },
    {
      name: 'Graf Berbobot: STEI-IF oleh Rinaldi Munir',
      type: 'pdf',
      slug: '03859383342-stei-itb',
    },
    {
      name: 'Weighted Graph - Concept and Implementation',
      type: 'docx',
      slug: '48857597353-wg-concept',
    },
    {
      name: 'Graphs - Data Structures & Algorithm with C++',
      type: 'docx',
      slug: '48574837487-dsa',
    },
    {
      name: 'Graf Berbobot: Implementasi menggunakan Python',
      type: 'docx',
      slug: '389439795734-py-graph',
    },
  ];
  return (
    <div className="rounded-3xl py-8 px-5 flex flex-col gap-4 border-2 border-[#C6C6D0]">
      <div className="flex flex-col gap-4">
        {materials.map((material, index) => (
          <Link
            key={index}
            href={`${pathName}/${material.slug}`}
            className="flex items-center gap-1 p-3 bg-white rounded-2xl border-[1.5px] border-[#C6C6D0] drop-shadow-[0_4px_0_rgba(214,214,208,1)]"
          >
            <Image className="flex-none" src={''} alt="icon" width={24} height={24} />
            <span className="flex-1 font-extrabold">{material.name}</span>  
          </Link>
        ))}
      </div>
    </div>
  );
}
