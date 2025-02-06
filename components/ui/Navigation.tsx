import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { NavButtonProps } from '@/lib/imports';

const NavButton = ({ onClick, icon, className }: NavButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`h-11 w-11 rounded-full bg-blue-500 flex items-center justify-center group/button ${className}`}
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
        <FaAngleLeft className="h-8 w-8 text-white group-hover/button:rotate-12 transition-transform duration-300" />
      }
    />
  );
};

export const NavButtonNext = ({ onClick }: { onClick: () => void }) => {
  return (
    <NavButton
      onClick={onClick}
      icon={
        <FaAngleRight className="h-8 w-8 text-white group-hover/button:-rotate-12 transition-transform duration-300" />
      }
    />
  );
};