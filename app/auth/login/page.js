'use client';

import Image from 'next/image';
import RepetitLogo from '@/public/images/logo-repetit.png';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('demo.repetit@mail.com');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    if (email === 'demo.repetit@mail.com' && password === '123456') {
      router.push('/dashboard');
    } else {
      alert('email atau password salah');
    }
  }

  return (
    <div className="flex h-dvh">
      <div className="flex-1 grid place-items-center  bg-slate-100">
        <Image src={RepetitLogo} alt="logo" className="w-[225px]" />
      </div>
      <div className="flex-1 grid place-items-center ">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-6">
            <h3 className="text-light-primary text-xl font-extrabold text-center">Login</h3>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block border border-slate-500 p-4 rounded-2xl w-[331px]"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block border border-slate-500 p-4 rounded-2xl w-[331px]"
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-[#3F5F90] rounded-xl text-white text-base font-extrabold p-[10px] hover:bg-[#31496D]"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
