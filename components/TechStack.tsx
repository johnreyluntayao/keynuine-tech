import React from 'react';
import { techStack } from '@/lib/imports';
import Image from 'next/image';

const TechStack = () => {
  return (
    <section className="bg-blue-400 w-full max-w-7xl h-auto py-8 flex items-center justify-center">
      <div className='flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 py-4 md:py-8 xl:py-16 px-8 md:px-16 lg:px-24'>
        {
            techStack.map((tech, idx) => (
                <div key={idx} className='flex-shrink-0'>
                    <Image 
                      src={tech.img}
                      alt={tech.label}
                      width={48}
                      height={48}
                      className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
                    />
                </div>
            ))
        }
      </div>
    </section>
  );
};

export default TechStack;