'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { TopicDetailLayout } from './_layout';

export default function TopicPage() {
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    router.push(`${pathName}/flashcards`);
  }, [router, pathName]);

  return (
    <TopicDetailLayout>
      <div className="grid place-items-center h-full">loading...</div>
    </TopicDetailLayout>
  );
}