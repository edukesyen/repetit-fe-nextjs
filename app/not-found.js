'use client'

import { useRouter } from "next/navigation"
import { Button } from "@/app/_components/Button"

export default function NotFoundPage () {
  const router = useRouter()
  
  return (
    <div className="grid place-items-center h-dvh w-full">
      <div className="grid place-items-center gap-4">
        <span className="font-bold text-3xl">404 Not Found</span>
        <span>Halaman Tidak Ditemukan</span>
        <Button onClick={() => router.back()}>Kembali</Button>
      </div>
    </div>
  )
}