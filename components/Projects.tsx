import React from 'react'
import Carousel from './ui/Carousel'

const Projects = () => {
  return (
    <section className="py-1 md:py-8 -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin">
 
            <div className="flex flex-col items-center">
                <h1 className="pb-6 text-2xl md:text-3xl lg:text-4xl font-bold">Projects</h1>
                <Carousel/>
            </div>           

    </section>
  )
}

export default Projects