import React from 'react'
import Carousel from './ui/Carousel'

const Projects = () => {
  return (
    <section className="py-8 md:py-16 -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin">
        <div className="px-mobile-margin md:px-tablet-margin lg:px-laptop-margin">
            <div className="flex flex-col items-center">
                <h1 className="pb-6 text-2xl md:text-3xl lg:text-4xl font-bold">Projects</h1>
                <Carousel/>
            </div>           
        </div>
    </section>
  )
}

export default Projects