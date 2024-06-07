import Link from "next/link";

export function Button({ text, href, variant }) {
  let btnClassName = getButtonVariant(variant);
  return (
    <Link
      href={href}
      className={`w-fit rounded-full text-sm grid place-items-center font-medium py-2.5 px-5 ${btnClassName}`}
    >
      {text}
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
  let btnClassName = "";
  switch (variant) {
    case "primary":
      btnClassName = "bg-light-primary text-white border border-light-primary";
      break;
    case "outlined":
      btnClassName = "text-light-primary border border-light-primary";
      break;
    case "text":
      btnClassName = "text-light-primary";
      break;
    default:
      break;
  }
  return btnClassName;
}
