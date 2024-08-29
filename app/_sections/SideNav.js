'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import Image from 'next/image';
import Link from 'next/link';
import RepetitLogo from '@/public/images/logo-repetit.png';
import LearnIcon from '@/public/icons/learn-icon.png';
import TopicsIcon from '@/public/icons/topics-icon.png';
import MentoringIcon from '@/public/icons/mentoring-icon.png';
import ProfileIcon from '@/public/icons/profile-icon.png';
import SettingsIcon from '@/public/icons/settings-icon.png';

export function SideNav() {
  const pathName = usePathname();
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const currentMenu = pathName.split('/')[1];
    setActiveMenu(currentMenu);
  }, [pathName]);

  const navMenus = [
    {
      name: 'BELAJAR',
      iconImage: LearnIcon,
      href: '/dashboard',
    },
    {
      name: 'TOPIK',
      iconImage: TopicsIcon,
      href: '/topics',
    },
    {
      name: 'MENTORING',
      iconImage: MentoringIcon,
      href: '/mentoring',
    },
    {
      name: 'PROFIL',
      iconImage: ProfileIcon,
      href: '/profile',
    },
    {
      name: 'PENGATURAN',
      iconImage: SettingsIcon,
      href: '/settings',
    },
  ];
  
  return (
    <nav className="h-full px-8 py-10 flex flex-col gap-12 border-r-2 border-neutral-200 sticky top-0">
      <Image src={RepetitLogo} alt="repetit logo" />
      <ul className="flex flex-col gap-3">
        {navMenus.map((menu, index) => (
          <li key={index}>
            <Link
              href={menu.href}
              className={`flex gap-4 items-center ${
                menu.href.includes(activeMenu) ? 'bg-slate-200' : 'hover:bg-slate-100'
              } p-3 rounded-lg`}
            >
              <Image src={menu.iconImage} alt={menu.name} width={32} height={32} />
              <span className="font-extrabold">{menu.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
