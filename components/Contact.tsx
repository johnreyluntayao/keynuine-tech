import { Button } from "@/lib/imports";
import React from "react";

const Contact = () => {
  return (
    <section className="py-8 md:py-16 bg-darkblue-1000 flex items-center justify-center -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin">
      <div className="px-mobile-margin md:px-tablet-margin lg:px-laptop-margin">
        <div className="max-w-3xl flex flex-col items-center">
          <h1 className="text-white pb-6 text-2xl md:text-3xl lg:text-4xl font-bold">Connect with us&#33;</h1>
          <p className="text-blue-400 pb-12 text-sm md:text-base text-center">
            Ready to bring your ideas to life? Contact us for innovative web,
            mobile, and game development. Whether it’s a project, collaboration,
            or consultation, let’s create something extraordinary together!
          </p>
          <Button
            className="text-darkblue-100 bg-blue-400"
            link="/contact"
            label="Contact Us&#33;"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
