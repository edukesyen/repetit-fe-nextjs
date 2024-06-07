import Link from 'next/link';

export function Button({ text, href, variant, className, icon, iconPosition = 'start' }) {
  let btnClassName = getButtonVariant(variant);
  return (
    <Link
      href={href}
      className={`w-fit rounded-full text-sm grid place-items-center font-medium py-2.5 px-5 ${btnClassName} ${className}`}
    >
      <div className="flex items-center gap-2">
        {icon && iconPosition === 'start' && <span>{icon}</span>}
        <span>{text}</span>
        {icon && iconPosition === 'end' && <span>{icon}</span>}
      </div>
    </Link>
  );
}

export function ButtonIconOnly({ icon, href, variant }) {
  let btnClassName = getButtonVariant(variant);
  return (
    <Link
      href={href}
      className={`w-fit rounded-full text-sm grid place-items-center font-medium py-2.5 px-2.5 ${btnClassName}`}
    >
      {icon}
    </Link>
  );
}

function getButtonVariant(variant) {
  let btnClassName = '';
  switch (variant) {
    case 'primary':
      btnClassName = 'bg-light-primary text-white border border-light-primary';
      break;
    case 'filled':
      btnClassName = 'bg-light-primary text-white border border-light-primary';
      break;
    case 'outlined':
      btnClassName = 'text-light-primary border border-light-primary';
      break;
    case 'text':
      btnClassName = 'text-light-primary';
      break;
    case 'tonal':
      btnClassName = 'text-black bg-light-secondary-container';
    default:
      break;
  }
  return btnClassName;
}
