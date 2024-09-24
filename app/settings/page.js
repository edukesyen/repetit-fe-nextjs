'use client';

import Link from 'next/link';

// import { DashboardLayout } from '../_layout';
import { SideNav } from '../_sections/SideNav';

import { Button } from '../_components/Button';

export default function ProfilePage() {
  return (
    <main className="min-h-dvh flex">
      <div className="flex-none  max-w-[256px] min-h-dvh">
        <SideNav />
      </div>
      <div className="flex-1 flex flex-col gap-5 h-dvh p-20">
        <h3 className='text-2xl font-bold'>Pengaturan</h3>
        <hr />
        <Link href="/auth/login">
          <Button>KELUAR AKUN</Button>
        </Link>
      </div>
    </main>
  );
}
