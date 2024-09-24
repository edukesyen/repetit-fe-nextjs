'use client';

import Image from 'next/image';

import { useState, useEffect } from 'react';
import { DashboardLayout } from '../_layout';
import axiosService from '../_utils/axios-service';

import ProfilePhoto from '@/public/images/profile-photo.png';
import FireIcon from '@/public/icons/icon-fire.svg';
import DiamondIcon from '@/public/icons/icon-diamond.svg';
import StarIcon from '@/public/icons/icon-star.svg';
import TargetIcon from '@/public/icons/icon-target-one.svg';

export default function ProfilePage() {
  const [data, setData] = useState();
  const [fetchStatus, setFetchStatus] = useState('idle');

  useEffect(() => {
    console.log('FETCH DATA');
    setFetchStatus('loading');
    axiosService
      .get(`/users/${6}`)
      .then((data) => {
        const user = {
          name: data.data.name,
          username: data.data.email.split('@')[0],
          joined: 'September 2024',
          streaks: data.data.streak,
          stars: data.data.star,
          diamonds: data.data.diamond,
          reviews: data.data.target,
        };
        setData(user);
        console.log(user);
        setFetchStatus('success');
      })
      .catch((e) => {
        setFetchStatus('error');
      });
  }, []);

  // if (fetchStatus == 'idle') {
  //   return <p>please wait...</p>;
  // }
  // if (fetchStatus == 'loading') {
  //   return <p>loading...</p>;
  // }
  // if (fetchStatus == 'error') {
  //   return <p>error fetch data</p>;
  // }

  // const user = {
  //   name: "Fathimah Az Zahra Sanjani",
  //   username: "zahrasanjani02",
  //   joined: "September 2024",
  //   streaks: 7,
  //   stars: 8,
  //   diamonds: 100,
  //   reviews: 63,
  // }

  return (
    <DashboardLayout>
      {fetchStatus == 'idle' ? (
        <p>please wait...</p>
      ) : fetchStatus == 'loading' ? (
        <p>loading...</p>
      ) : fetchStatus == 'error' ? (
        <p>error fetch data</p>
      ) : (
        <div className="flex flex-col gap-10">
          <Image src={ProfilePhoto} alt="profile image" />
          <UserDetail user={data} />
          <hr />
          <UserStats user={data} />
          {/* <ListedTopicsCard /> */}
        </div>
      )}
    </DashboardLayout>
  );
}

function UserDetail({ user }) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-extrabold text-2xl">{user.name}</h2>
      <span className="font-bold text-[#75757a] text-lg">{user.username}</span>
      <span className="font-bold text-lg">Joined {user.joined}</span>
    </div>
  );
}

function UserStats({ user }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="rounded-2xl py-5 px-5 flex gap-2 border-2 border-[#C6C6D0]">
        <div className="flex-none col-span-1">
          <Image src={FireIcon} alt="icon" width={42} height={42} />
        </div>
        <div className="flex-1">
          <p className="text-xl font-bold">{user.streaks}</p>
          <p className="font-bold">Your Streak!</p>
        </div>
      </div>
      <div className="rounded-2xl py-5 px-5 flex gap-2 border-2 border-[#C6C6D0]">
        <div className="flex-none col-span-1">
          <Image src={StarIcon} alt="icon" width={42} height={42} />
        </div>
        <div className="flex-1">
          <p className="text-xl font-bold">{user.stars}</p>
          <p className="font-bold">Total Stars</p>
        </div>
      </div>
      <div className="rounded-2xl py-5 px-5 flex gap-2 border-2 border-[#C6C6D0]">
        <div className="flex-none col-span-1">
          <Image src={DiamondIcon} alt="icon" width={42} height={42} />
        </div>
        <div className="flex-1">
          <p className="text-xl font-bold">{user.diamonds}</p>
          <p className="font-bold">Total Diamonds</p>
        </div>
      </div>
      <div className="rounded-2xl py-5 px-5 flex gap-2 border-2 border-[#C6C6D0]">
        <div className="flex-none col-span-1">
          <Image src={TargetIcon} alt="icon" width={42} height={42} />
        </div>
        <div className="flex-1">
          <p className="text-xl font-bold">{user.reviews}</p>
          <p className="font-bold">Total Reviews</p>
        </div>
      </div>
    </div>
  );
}
