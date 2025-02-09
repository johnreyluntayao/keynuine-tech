import React from "react";
import Image from "next/image";
import { cardProps } from "@/lib/imports";
const ApproachCard = ({ icon, count, title, description }: cardProps) => {
    return (
        <div className="max-w-xs flex flex-col justify-start ">
            <Image src={icon} width={32} height={32} alt={icon} className="pb-2 w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"/>
            <h1 className="text-blue-950 font-bold text-4xl md:text-5xl lg:text-6xl pb-4 flex items-end">{count} 
                <span className="text-2xl text-blue-400">●</span></h1>
            <h2 className="text-blue-950 text-start font-semibold text-medium md:text-lg lg:text-xl uppercase pb-2">{title}</h2>
            <p className="text-blue-950/60 text-start text-sm md:text-base pb-2">
            {description}
            </p>
        </div>
    );
};

export default ApproachCard;
