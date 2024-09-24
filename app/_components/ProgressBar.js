import Image from 'next/image';
import BrainIcon from '@/public/icons/icon-brain.svg';

export function ProgressBar({ percentage = 50 }) {
  return (
    <div class="w-full h-2.5 relative">
      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 flex items-center relative">
        <div
          class=" bg-[#65A30D] h-2.5 rounded-full relative"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className='relative -top-5 m-auto' style={{width: 'calc(100% - 28px)'}}>
        <Image
          src={BrainIcon}
          alt="icon"
          width={32}
          height={32}
          style={{left: `calc(${percentage}% - 16px)`}}
          className="flex-none w-8 h-8 relative"
        />
      </div>
    </div>
  );
}
