"use client"

import Image from 'next/image';
import BrainIcon from '@/public/icons/icon-brain.svg';

import { SideNav } from '@/app/_sections/SideNav';
import { SideBarRight } from './_sections/SideBarRight';
import { TabMenu } from './_sections/TabMenu';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import axiosService from '@/app/_utils/axios-service';

export function TopicDetailLayout ({children}) {
  return (
    <main className="min-h-dvh flex">
      <div className="flex-none  max-w-[256px] min-h-dvh">
        <SideNav />
      </div>
      <div className="flex-1 max-w-3xl mx-auto px-8 py-12 h-full flex flex-col gap-6">
        <div className='flex flex-col gap-6'>
          <h2 className="font-extrabold text-4xl">Topik</h2>
          <CardTopicDetail />
        </div>
        <TabMenu />
        {children}
      </div>
      <div className="flex-none w-[500px]">
        <SideBarRight />
      </div>
    </main>
  );
}


function CardTopicDetail() {
  const pathName = usePathname()
  const topicId = pathName.split('/')[2].split('-')[0]

  const [data, setData] = useState([]);
  const [retention, setRetention] = useState(0)
  const [fetchStatus, setFetchStatus] = useState('idle');

  useEffect(() => {
    setFetchStatus('loading');
    axiosService
      .get(`/topics/${topicId}`)
      .then(({ data }) => {
        setData(data);
        setFetchStatus('success');
      })
      .catch((e) => {
        setFetchStatus('error');
      });

    axiosService
      .get(`/flashcards/retention/${topicId}`)
      .then((res) => {
        setRetention(res.data.retention_percentage)
        // setFetchStatus('success');
      })
      .catch((e) => {
        // setFetchStatus('error');
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

  // const data = {
  //   materi: 'Weighted Graph',
  //   topik: 'STRUKTUR DATA',
  //   jumlahFlashcard: 4,
  //   linkHref: '/',
  //   riwayatTerakhir: {
  //     mudah: 2,
  //     baik: 3,
  //     sulit: 0,
  //   },
  // };

  return (
    <div className="rounded-3xl py-8 px-10 flex flex-col gap-2 border-2 border-[#C6C6D0]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h4 className="font-extrabold text-xl">{data.name}</h4>
          <span className="inline-block bg-[#FACC15] border rounded-md text-sm font-bold w-fit px-2">
            {data.tag}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Image src={BrainIcon} alt="icon" width={32} height={32} className="" />
            <span className="text-base font-extrabold text-[#43474E]">Retensi</span>
          </div>
          <div className="w-full grid place-items-center ">
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-[#65A30D] h-2.5 rounded-full" style={{ width: `${retention}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
