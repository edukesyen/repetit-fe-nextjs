import Image from 'next/image';
import Link from 'next/link';

import { ProgressBar } from '../_components/ProgressBar';
import GraphIcon from '@/public/icons/icon-graph.svg';
import StreamlineCardSolid from '@/public/icons/icon-streamline-cards-solid.svg';
import { DashboardLayout } from '../_layout';

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
  const topics = [
    {
      name: 'Weighted Graph',
      slug: '001-weighted-graph',
      flashcardCount: 4,
      retentionPercentage: 72,
    },
    {
      name: 'CLR(1) Parser',
      slug: '002-clr1-parser',
      flashcardCount: 4,
      retentionPercentage: 50,
    },
    {
      name: 'Support Vector Machine',
      slug: '003-svm',
      flashcardCount: 4,
      retentionPercentage: 80,
    },
    {
      name: 'Linked List',
      slug: '004-linked-list',
      flashcardCount: 4,
      retentionPercentage: 20,
    },
  ];
  return (
    <div className="flex flex-col gap-6">
      {topics.map((topic, index) => (
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
    <div className="rounded-3xl py-5 px-5 flex flex-col gap-2 border-2 border-[#C6C6D0]">
      <div className="flex flex-col ">
        <div className="flex items-center gap-2 ">
          <Image src={GraphIcon} alt="graph icon" width={32} height={32} />
          <span className="font-bold text-[#43474E] text-base">{topicName}</span>
          <div className="w-4" />
          <Image src={StreamlineCardSolid} alt="card icon" width={16} height={16} />
          <span className="font-bold text-[#C6C6D0] text-sm">{flashcardCount} flashcard</span>
        </div>
        <div className=" h-8 grid place-items-center ">
          <ProgressBar percentage={retentionPercentage} />
        </div>
      </div>
    </div>
  );
}
