
import React from 'react';
import { ButtonProps } from '@/lib/imports'
import Link from 'next/link';


const Button = ({ label, link, className }: ButtonProps) => {
  return (
    <Link
      href={link}
      className={`
        font-semibold 
        text-sm 
        px-4 
        py-2 
        md:text-base 
        md:px-6 
        md:py-3 
        lg:text-lg 
        lg:px-8 
        lg:py-4
        ${className}
      `}
    >
      {label}
    </Link>
  );
};

export default Button;