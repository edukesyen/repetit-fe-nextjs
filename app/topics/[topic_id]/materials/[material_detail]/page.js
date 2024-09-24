'use client'

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/app/_components/Button"
import closeIcon from '@/public/icons/icon-close.svg';
import Image from "next/image";
import axiosService from "@/app/_utils/axios-service";


export default function MaterialDetailPage ({params}) {
  const router = useRouter()
  const materialId = params.material_detail
  
  const [data, setData] = useState();
  const [fetchStatus, setFetchStatus] = useState('idle');

  useEffect(() => {
    setFetchStatus('loading');
    axiosService
      .get(`/materials/${materialId}`)
      .then(({ data }) => {
        setData(data);
        setFetchStatus('success');
      })
      .catch((e) => {
        setFetchStatus('error');
      });
  }, [materialId]);

  if (fetchStatus == 'idle') {
    return <p>please wait...</p>;
  }
  if (fetchStatus == 'loading') {
    return <p>loading...</p>;
  }
  if (fetchStatus == 'error') {
    return <p>error fetch data</p>;
  }
  
  return (
    <main className="min-h-dvh grid place-items-center">
    <nav className="fixed top-0 w-full bg-white border-b-2 border-slate-300 py-2">
      <div className="max-w-[680px] mx-auto flex items-center gap-2">
        <button className="flex-none hover:bg-slate-200 rounded-xl" onClick={() => router.back()}>
          <Image src={closeIcon} alt="close icon" width={48} height={48} />
        </button>
        <div className="flex-1">
          <div className="text-xl font-bold">{data.name}</div>
          {/* <ProgressBar /> */}

        </div>
      </div>
    </nav>
    <div className="max-w-[680px] w-full mx-auto flex flex-col gap-10">
      <div className="pt-28 pb-16">{data.content}</div>
    </div>
  </main>
    // <div className="grid place-items-center h-dvh w-full">
    //   <div className="grid place-items-center gap-4">
    //     <span className="font-bold text-3xl">Coming Soon</span>
    //     <span>This page is under construction 🏗️🚧</span>
    //     <Button onClick={() => router.back()}>Kembali</Button>
    //   </div>
    // </div>
  )
}