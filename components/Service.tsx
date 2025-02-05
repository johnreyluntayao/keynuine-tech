import React from "react";
import { ServiceCardContent, ServiceCard } from "@/lib/imports";

const Service = () => {
  return (
    <section className="py-8 md:py-16 bg-darkblue-1000 flex items-center justify-center -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin">
      <div className="px-mobile-margin md:px-tablet-margin lg:px-laptop-margin">
        <div className="flex flex-col items-center">
          <h1 className="text-white pb-6 text-2xl md:text-3xl lg:text-4xl font-bold">What we offer</h1>
          <h2 className="text-blue-400 pb-12 text-sm md:text-base text-center max-w-3xl">
            We specialize in crafting innovative solutions through web, mobile,
            and game development, delivering tailored experiences that bring
            your ideas to life.
          </h2>
          <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {ServiceCardContent.map((content, index) => (
            <div key={index}>
              <ServiceCard
                id={content.id}
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

export default Service;
