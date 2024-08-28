'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function TabMenu() {
  const pathName = usePathname();
  const topicPath = pathName.split('/').slice(0, 3).join('/')

  const menus = [
    // {
    //   name: 'Review',
    //   path: `${topicPath}/review`,
    // },
    {
      name: 'Flashcard',
      path: `${topicPath}/flashcards`,
    },
    {
      name: 'Materi',
      path: `${topicPath}/materials`,
    },
  ];

  return (
    <div className="flex items-center border-b-2 border-slate-300">
      {menus.map((menu, index) => (
        <Link
          key={index}
          href={menu.path}
          className={`py-2 px-4 ${pathName === menu.path ? 'bg-slate-300' : 'hover:bg-slate-100 '} rounded-t-xl`}
        >
          <span className='font-bold text-xl'>{menu.name}</span>
        </Link>
      ))}
    </div>
  );
}
