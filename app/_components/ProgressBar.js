import Image from 'next/image';
import BrainIcon from '@/public/icons/icon-brain.svg';

export function ProgressBar({ percentage = 50 }) {
  return (
    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div class="bg-[#65A30D] h-2.5 rounded-full relative" style={{ width: `${percentage}%` }}>
        <Image src={BrainIcon} alt='icon' width={32} height={32} className="absolute -right-1 -top-2.5" />
      </div>
    </div>
  );
}
