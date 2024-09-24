'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { TopicDetailLayout } from './_layout';
import axiosService from '@/app/_utils/axios-service';

export default function TopicPage({params}) {
  const router = useRouter();
  const pathName = usePathname();
  const topicId = params.topic_id

  const [data, setData] = useState();
  const [fetchStatus, setFetchStatus] = useState('idle');

  useEffect(() => {
    axiosService
      .get(`/materials/topic/${topicId}`)
      .then(({ data }) => {
        if (data.length == 0) {
          router.replace(`${pathName}/materials`);
        } else {
          router.replace(`${pathName}/flashcards`);
        }
      })
      .catch((e) => {
        router.replace(`${pathName}/materials`);
        setFetchStatus('error');
      });
  }, [topicId]);

  // if (fetchStatus == 'idle') {
  //   return <p>please wait...</p>;
  // }
  // if (fetchStatus == 'loading') {
  //   return <p>loading...</p>;
  // }
  // if (fetchStatus == 'error') {
  //   return <p>error fetch data</p>;
  // }

  // useEffect(() => {
  //   router.push(`${pathName}/materials`);
  // }, [router, pathName]);

  return (
    <TopicDetailLayout>
      <div className="grid place-items-center h-full">loading...</div>
    </TopicDetailLayout>
  );
}