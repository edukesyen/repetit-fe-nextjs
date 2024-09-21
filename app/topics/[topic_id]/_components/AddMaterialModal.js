'use client';

import Image from 'next/image';
import CloseIcon from '@/public/icons/icon-close.svg';
import { Button } from '@/app/_components/Button';
import { useAddMaterialModalContext } from './AddMaterialModalContext';
import { useState } from 'react';
import axiosService from '@/app/_utils/axios-service';
import { usePathname } from 'next/navigation';

export function AddMaterialModal() {
  const pathName = usePathname()
  const topicId = pathName.split('/')[2]
  const [materialName, setMaterialName] = useState('');
  // const [fileUpload, setFileUpload] = useState()
  const [notes, setNotes] = useState('');

  const { isOpen, toggleModal } = useAddMaterialModalContext();

  const handleSubmit = () => {
    // alert({ materialName, notes });
    // console.log({ materialName, notes });
    axiosService.post('/materials/', {
      topic_id: topicId,
      name: materialName,
      content: notes,
    }).then(() => {
      toggleModal();
      setMaterialName('');
      setNotes('');
    }).catch(() => {
      alert("terjadi kesalahan saat menambahkan materi, silahkan coba lagi")
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
          <span className="font-bold">TAMBAH MATERI</span>
          <button className="hover:bg-slate-200 rounded-xl" onClick={toggleModal}>
            <Image src={CloseIcon} alt="icon" width={36} height={36} />
          </button>
        </div>
        <div className="flex flex-col">
          <span className="font-extrabold text-[#43474E]">Nama</span>
          <input
            value={materialName}
            onChange={(e) => setMaterialName(e.target.value)}
            type="text"
            placeholder="nama materi"
            className="border-2 border-[#3C6C6D0] bg-[#F5FAFB] p-3 rounded-xl"
          />
        </div>
        {/* <div className="flex flex-col">
          <span className="font-extrabold text-[#43474E]">Upload File</span>
          <input
            onChange={(e) => setFileUpload(e.target.files[0])}
            type="file"
            accept="application/pdf, application/vnd.ms-excel"
            className="border-2 border-[#3C6C6D0] bg-[#F5FAFB] p-3 rounded-xl w-4/5"
          />
        </div> */}
        <div className="flex flex-col">
          <span className="font-extrabold text-[#43474E]">Tulis Materi</span>
          <textarea
            rows={12}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            type="text"
            placeholder="kamu bisa copy paste dari dokumen"
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
