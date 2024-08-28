import Image from 'next/image';

import FireIcon from '@/public/icons/icon-fire.svg';
import DiamondIcon from '@/public/icons/icon-diamond.svg';
import StarIcon from '@/public/icons/icon-star.svg';

export function Credits() {
  return (
    <div className="flex justify-end gap-4">
      <div className="flex gap-2 items-center p-2">
        <Image src={FireIcon} alt="icon" width={32} height={32} />
        <span className="text-base font-extrabold text-[#43474E]">7</span>
      </div>
      <div className="flex gap-2 items-center p-2">
        <Image src={DiamondIcon} alt="icon" width={32} height={32} />
        <span className="text-base font-extrabold text-[#43474E]">100</span>
      </div>
      <div className="flex gap-2 items-center p-2">
        <Image src={StarIcon} alt="icon" width={32} height={32} />
        <span className="text-base font-extrabold text-[#43474E]">8</span>
      </div>
    </div>
  );
}
