import React from "react";
import { ApproachCardContent } from "@/data";
import ApproachCard from "./ui/ApproachCard";
const Approach = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-darkblue-100 flex items-center justify-center -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin">
      <div className="px-mobile-margin md:px-tablet-margin lg:px-laptop-margin">
        <div className="max-w-[900px] flex flex-col items-center">
          <h1 className="text-blue-950 pb-6 text-2xl font-bold">Our Approach</h1>
          <h2 className="text-blue-600 pb-20 text-base text-center">
            We turn your vision into reality with strategic planning,
            cutting-edge tech, and user-focused design—prioritizing quality,
            communication, and exceeding expectations
          </h2>
          <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {ApproachCardContent.map((content, index) => (
              <div key={index}>
                  <ApproachCard
                    id={content.id}
                    count={content.count}
                    icon={content.icon}
                    title={content.title}
                    description={content.description}
                  />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
