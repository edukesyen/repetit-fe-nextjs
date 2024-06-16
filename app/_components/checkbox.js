import { useState } from 'react';

export function Checkbox() {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="flex w-12 h-12 justify-center items-center relative">
      <input
        type="checkbox"
        className="relative peer shrink-0
            appearance-none w-5 h-5 border-2 border-light-primary rounded-sm bg-white
            checked:bg-light-primary checked:border-0
            focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100
            disabled:border-steel-400 disabled:bg-steel-400"
        checked={checked}
        onChange={handleChange}
      />
      <svg
        className="
                absolute p-0.5
                w-5 h-5 
                hidden peer-checked:block
                pointer-events-none
                text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
}
