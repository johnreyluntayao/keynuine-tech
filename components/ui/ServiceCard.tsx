import Image from "next/image";
import React from "react";

export type cardProps = {
  id: number,
  title: string; 
  icon: string;
  description?: string;
};
const ServiceCard = ({ icon ,title , description }: cardProps) => {
  return (
    <div
      className="max-w-[250px] max-h-[300px] border-1 border-blue-400 
      px-10 py-16 flex flex-col items-center">
      <div className="pb-8">
        <Image src={icon} width={100} height={100} alt={icon} />
      </div>
      <h1 className="text-blue-400 text-center font-bold text-xl">{title}</h1>
    </div>
  );
};

export default ServiceCard;
