export function Button({ children, ...props }) {
  return (
    <button
      className="w-fit bg-[#3F5F90] rounded-xl text-white text-base font-extrabold p-[10px] hover:bg-[#31496D]"
      {...props}
    >
      {children}
    </button>
  );
}
