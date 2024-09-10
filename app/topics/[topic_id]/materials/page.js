'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { TopicDetailLayout } from '../_layout';
import axiosService from '@/app/_utils/axios-service';
import { Button } from '@/app/_components/Button';
import { AddMaterialButton } from '../_components/AddMaterialButton';
import { AddMaterialModal } from '../_components/AddMaterialModal';
import { AddMaterialModalContextProvider } from '../_components/AddMaterialModalContext';

export default function TopicsMaterialsPage() {
  return (
    <TopicDetailLayout>
      <div className="flex flex-col gap-6">
        <div className='flex justify-end'>
          <AddTopic />
        </div>
        <CardMaterials />
      </div>
    </TopicDetailLayout>
  );
}

function AddTopic() {
  return (
    <AddMaterialModalContextProvider>
      <AddMaterialModal />
      <AddMaterialButton />
    </AddMaterialModalContextProvider>
  );
}

function CardMaterials() {
  const pathName = usePathname();
  const topicId = pathName.split('/')[2];

  const [data, setData] = useState();
  const [fetchStatus, setFetchStatus] = useState('idle');

  useEffect(() => {
    setFetchStatus('loading');
    axiosService
      .get(`/materials/topic/${topicId}`)
      .then(({ data }) => {
        setData(data);
        setFetchStatus('success');
      })
      .catch((e) => {
        setFetchStatus('error');
      });
  }, [topicId]);

  if (fetchStatus == 'idle') {
    return <p>please wait...</p>;
  }
  if (fetchStatus == 'loading') {
    return <p>loading...</p>;
  }
  if (fetchStatus == 'error') {
    return <p>error fetch data</p>;
  }

  // const materials = [
  //   {
  //     name: 'Graf: Bahan Ajar Struktur Data Selasa 10.00',
  //     type: 'pdf',
  //     slug: '75904789795-bahan-ajar-struktur-data',
  //   },
  // ];
  return (
    <div className="rounded-3xl py-8 px-5 flex flex-col gap-4 border-2 border-[#C6C6D0]">
      <div className="flex flex-col gap-4">
        {data.map((material, index) => (
          <div
            key={index}
            className="flex items-center gap-1 p-3 bg-white rounded-2xl border-[1.5px] border-[#C6C6D0] drop-shadow-[0_4px_0_rgba(214,214,208,1)]"
          >
            <Image className="flex-none" src={''} alt="icon" width={24} height={24} />
            <span className="flex-1 font-extrabold">{material.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// <Link
//   key={index}
//   href={`${pathName}/${material.slug}`}
//   className="flex items-center gap-1 p-3 bg-white rounded-2xl border-[1.5px] border-[#C6C6D0] drop-shadow-[0_4px_0_rgba(214,214,208,1)]"
// >
//   {' '}
// </Link>;
