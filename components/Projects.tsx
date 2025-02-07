import React from 'react';
import { Carousel } from '@/lib/imports';

const Projects = () => {
  return (
    <section className="py-8 md:py-16 -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin">
            <div className="flex flex-col items-center">
                <h1 className="pb-12 text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950">Projects</h1>
                <Carousel/>
            </div>           

    </section>
  )
}

export default Projects