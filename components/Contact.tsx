import { Button } from "@/lib/imports";
import React from "react";

const Contact = () => {
  return (
    <section className="py-16 bg-darkblue-1000 flex items-center justify-center -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin">
      <div className="px-mobile-margin md:px-tablet-margin lg:px-laptop-margin">
        <div className="max-w-[850px] flex flex-col items-center">
          <h1 className="text-white pb-6 text-2xl font-bold">Connect with us&#33;</h1>
          <h2 className="text-blue-400 pb-20 text-base text-center">
            Ready to bring your ideas to life? Contact us for innovative web,
            mobile, and game development. Whether it’s a project, collaboration,
            or consultation, let’s create something extraordinary together!
          </h2>

          <Button
            className="text-blue-300 bg-blue-400"
            link="/contact"
            label="Contact Us&#33;"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
