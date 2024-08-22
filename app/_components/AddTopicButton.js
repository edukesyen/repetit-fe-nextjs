'use client';

import Image from 'next/image';
import PlusIcon from '@/public/icons/icon-round-plus.svg';
import { useAddTopicModalContext } from './AddTopicModalContext';

export function AddTopicButton() {
  const { toggleModal } = useAddTopicModalContext();
  return (
    <button className="rounded-xl hover:bg-slate-100" onClick={toggleModal}>
      <div className="flex gap-2 items-center p-2">
        <Image src={PlusIcon} alt="icon" width={32} height={32} />
        <span className="text-base font-extrabold text-[#43474E]">Tambah Topik</span>
      </div>
    </button>
  );
}
