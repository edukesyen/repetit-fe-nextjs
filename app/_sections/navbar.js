import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

import BookIcon from '@mui/icons-material/Book';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';

import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="flex-none bg-light-surface-container w-20 min-h-screen flex flex-col items-center justify-between py-4">
      <div>
        <NavButton
          Icon={AccountCircleOutlinedIcon}
          IconActive={AccountCircleIcon}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Link href={'/dashboard'}>
          <NavButton Icon={HomeOutlinedIcon} IconActive={HomeIcon} />
        </Link>
        <Link href={'/schedule'}>
          <NavButton
            Icon={CalendarMonthOutlinedIcon}
            IconActive={CalendarMonthIcon}
          />
        </Link>
        <Link href={'/courses'}>
          <NavButton Icon={BookOutlinedIcon} IconActive={BookIcon} />
        </Link>
      </div>
      <div></div>
    </nav>
  );
}

function NavButton({ Icon, IconActive }) {
  return (
    <button className="w-12 h-12 grid place-items-center rounded-full text-light-primary hover:bg-light-on-surface-variant/[0.08]">
      <Icon />
    </button>
  );
}
