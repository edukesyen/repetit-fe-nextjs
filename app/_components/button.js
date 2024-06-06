import Link from 'next/link';

export function Button({ text, href, variant, className }) {
  let btnClassName = '';
  switch (variant) {
    case 'primary':
      btnClassName = 'bg-light-primary text-white border border-light-primary';
      break;
    case 'outlined':
      btnClassName = 'text-light-primary border border-light-primary';
      break;
    default:
      break;
  }
  return (
    <Link
      href={href}
      className={`w-fit rounded-full text-sm grid place-items-center font-medium py-2.5 px-5 ${btnClassName} ${className}`}
    >
      {text}
    </Link>
  );
}
