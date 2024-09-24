"use client"

import { useState, useEffect } from 'react';
import axiosService from '../_utils/axios-service';

import Image from 'next/image';

import FireIcon from '@/public/icons/icon-fire.svg';
import DiamondIcon from '@/public/icons/icon-diamond.svg';
import StarIcon from '@/public/icons/icon-star.svg';

export function Credits() {

  const [data, setData] = useState();
  const [fetchStatus, setFetchStatus] = useState('idle');

  useEffect(() => {
    console.log("FETCH DATA")
    setFetchStatus('loading');
    axiosService
      .get(`/users/${6}`)
      .then((data) => {
        const user = {
          name: data.data.name,
          username: data.data.email.split("@")[0],
          joined: "September 2024",
          streaks: data.data.streak,
          stars: data.data.star,
          diamonds: data.data.diamond,
          reviews: data.data.target,
        }
        setData(user);
        console.log(user);
        setFetchStatus('success');
      })
      .catch((e) => {
        setFetchStatus('error');
      });
  }, []);


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
    <div className="flex justify-end gap-4">
      <div className="flex gap-2 items-center p-2">
        <Image src={FireIcon} alt="icon" width={32} height={32} />
        <span className="text-base font-extrabold text-[#43474E]">{data.streaks}</span>
      </div>
      <div className="flex gap-2 items-center p-2">
        <Image src={DiamondIcon} alt="icon" width={32} height={32} />
        <span className="text-base font-extrabold text-[#43474E]">{data.diamonds}</span>
      </div>
      <div className="flex gap-2 items-center p-2">
        <Image src={StarIcon} alt="icon" width={32} height={32} />
        <span className="text-base font-extrabold text-[#43474E]">{data.stars}</span>
      </div>
    </div>
  );
}
