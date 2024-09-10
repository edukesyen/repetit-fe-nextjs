'use client'

import Image from 'next/image';
import Link from 'next/link';

import { ProgressBar } from '../_components/ProgressBar';
import GraphIcon from '@/public/icons/icon-graph.svg';
import StreamlineCardSolid from '@/public/icons/icon-streamline-cards-solid.svg';
import { DashboardLayout } from '../_layout';
import axiosService from '../_utils/axios-service';
import { useState, useEffect } from 'react';

export default function TopicsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <h2 className="font-extrabold text-4xl">Topik-Topik Mu</h2>
        <ListedTopicsCard />
      </div>
    </DashboardLayout>
  );
}

function ListedTopicsCard() {
  const [data, setData] = useState([]);
  const [fetchStatus, setFetchStatus] = useState('idle');

  useEffect(() => {
    setFetchStatus('loading');
    axiosService
      .get(`/topics/user/${6}`)
      .then((data) => {
        const topics = data.data.map((topic) => ({
          name: topic.name,
          // slug: `${topic.id}-${topic.name}`,
          slug: `${topic.id}`,
          flashcardCount: 0,
          retentionPercentage: 20
        }))
        setData(topics);
        console.log(topics);
        setFetchStatus('success');
      })
      .catch((e) => {
        setFetchStatus('error');
      });
  }, []);

  if (fetchStatus == 'loading') {
    return <p>loading...</p>;
  }

  if (fetchStatus == 'error') {
    return <p>error fetch data</p>;
  }

  return (
    <div className="flex flex-col gap-6">
      {data.map((topic, index) => (
        <Link href={`/topics/${topic.slug}`} key={index}>
          <CardTopic
            topicName={topic.name}
            flashcardCount={topic.flashcardCount}
            retentionPercentage={topic.retentionPercentage}
          />
        </Link>
      ))}
    </div>
  );
}

function CardTopic({ topicName = 'No Topic Name', flashcardCount = 0, retentionPercentage = 0 }) {
  return (
    <div className="rounded-3xl py-5 px-5 flex flex-col gap-2 border-2 border-[#C6C6D0] hover:bg-slate-100">
      <div className="flex flex-col ">
        <div className="flex items-center gap-2 ">
          <Image src={GraphIcon} alt="graph icon" width={32} height={32} />
          <span className="font-bold text-[#43474E] text-base">{topicName}</span>
          <div className="w-4" />
          <Image src={StreamlineCardSolid} alt="card icon" width={16} height={16} />
          <span className="font-bold text-[#C6C6D0] text-sm">flashcard</span>
        </div>
        <div className=" h-8 grid place-items-center ">
          <ProgressBar percentage={retentionPercentage} />
        </div>
      </div>
    </div>
  );
}
