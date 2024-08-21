import Image from 'next/image';
import { SideNav } from '../_sections/SideNav';
import { ProgressBar } from '../_components/ProgressBar';
import { SideBarRight } from '../_sections/SideBarRight';
import GraphIcon from '@/public/icons/icon-graph.svg';
import StreamlineCardSolid from '@/public/icons/icon-streamline-cards-solid.svg';

export default function TopicsPage() {
  return (
    <main className="h-dvh flex">
      <div className="flex-none  max-w-[256px] h-full">
        <SideNav />
      </div>
      <div className="flex-1 max-w-3xl mx-auto px-8 py-12 flex flex-col gap-6">
        <h2 className="font-extrabold text-4xl">Topik-Topik Mu</h2>
        <ListedTopicsCard />
      </div>
      <div className="flex-none w-[500px]">
        <SideBarRight />
      </div>
    </main>
  );
}

function ListedTopicsCard() {
  const topics = [
    {
      name: 'Weighted Graph',
      flashcardCount: 4,
      retentionPercentage: 72,
    },
    {
      name: 'CLR(1) Parser',
      flashcardCount: 4,
      retentionPercentage: 50,
    },
    {
      name: 'Support Vector Machine',
      flashcardCount: 4,
      retentionPercentage: 80,
    },
    {
      name: 'Linked List',
      flashcardCount: 4,
      retentionPercentage: 20,
    },
  ];
  return (
    <div className="flex flex-col gap-6">
      {topics.map((topic, index) => (
        <CardTopic
          key={index}
          topicName={topic.name}
          flashcardCount={topic.flashcardCount}
          retentionPercentage={topic.retentionPercentage}
        />
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
