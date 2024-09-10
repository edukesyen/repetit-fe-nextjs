'use client';

import Image from 'next/image';
import CloseIcon from '@/public/icons/icon-close.svg';
import { Button } from './Button';
import { useAddTopicModalContext } from './AddTopicModalContext';
import { useState } from 'react';
import axiosService from '../_utils/axios-service';
import { useRouter } from 'next/navigation';

export function AddTopicModal() {
  const router = useRouter()
  const [topicName, setTopicName] = useState('');
  const [topicTag, setTopicTag] = useState('');

  const { isOpen, toggleModal } = useAddTopicModalContext();

  const handleSubmit = () => {
    axiosService.post('/topics/', {
      name: topicName,
      tag: topicTag,
      user_id: 6
    }).then(() => {
      toggleModal();
      setTopicName('');
      setTopicTag('');
      router.push('/topics');
    }).catch((e) => {
      console.error(e)
      alert("error submit", e)
    })
  };

  if (!isOpen) {
    return <></>;
  }

  return (
    <div
      className="absolute top-0 bottom-0 right-0 left-0 bg-black/40 z-10 grid place-items-center"
      onClick={(e) => e.target == e.currentTarget && toggleModal()}
    >
      <div className="flex flex-col gap-4 p-10 rounded-3xl bg-white w-full max-w-[800px]">
        <div className="flex justify-between items-center ">
          <span className="font-bold">TAMBAH TOPIK</span>
          <button className="hover:bg-slate-200 rounded-xl" onClick={toggleModal}>
            <Image src={CloseIcon} alt="icon" width={36} height={36} />
          </button>
        </div>
        <div className="flex flex-col">
          <span className="font-extrabold text-[#43474E]">Judul Topik</span>
          <input
            value={topicName}
            onChange={(e) => setTopicName(e.target.value)}
            type="text"
            placeholder="nama topik"
            className="border-2 border-[#3C6C6D0] bg-[#F5FAFB] p-3 rounded-xl"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-extrabold text-[#43474E]">Tag</span>
          <input
            value={topicTag}
            onChange={(e) => setTopicTag(e.target.value)}
            type="text"
            placeholder="tag"
            className="border-2 border-[#3C6C6D0] bg-[#F5FAFB] p-3 rounded-xl"
          />
        </div>
        <div className="flex justify-end">
          <Button onClick={handleSubmit}>TAMBAHKAN MATERI</Button>
        </div>
      </div>
    </div>
  );
}
