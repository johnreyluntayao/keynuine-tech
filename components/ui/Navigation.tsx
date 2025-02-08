import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { NavButtonProps } from '@/lib/imports';

const NavButton = ({ onClick, icon, className }: NavButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`h-9 w-9 md:w-10 md:h-10 lg:h-11 lg:w-11 rounded-full bg-blue-500 flex items-center justify-center group/button ${className}`}
    >
      {icon}
    </button>
  );
};

export const NavButtonPrev = ({ onClick }: { onClick: () => void }) => {
  return (
    <NavButton
      onClick={onClick}
      icon={
        <FaAngleLeft className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 m-2 text-white group-hover/button:rotate-12 transition-transform duration-300" />
      }
    />
  );
};

export const NavButtonNext = ({ onClick }: { onClick: () => void }) => {
  return (
    <NavButton
      onClick={onClick}
      icon={
        <FaAngleRight className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 m-2 text-white group-hover/button:-rotate-12 transition-transform duration-300" />
      }
    />
  );
};