import React from "react";
import Image from "next/image";

export type cardProps = {
    id: number;
    count: string;
    title: string;
    icon: string;
    description: string;
};
const ApproachCard = ({ icon, count, title, description }: cardProps) => {
    return (
        <div className="max-w-[300px] min-h-[300px] flex flex-col justify-start ">

            <Image src={icon} width={40} height={40} alt={icon} className="pb-2"/>
            <h1 className="text-blue-950 font-bold text-6xl pb-2 flex items-end">{count} 
                <span className="text-2xl text-blue-400">●</span></h1>
            <h2 className="text-blue-950 text-start font-semibold text-xl uppercase pb-2">{title}</h2>
            <p className="text-blue-950/60 text-start text-base pb-2">
            {description}
            </p>
        </div>
    );
};

export default ApproachCard;
