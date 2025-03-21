import React from 'react'

const BottomFooter = () => {

    const currentYear: number = new Date().getFullYear();

  return (

    <div className='w-full bg-darkblue-1000'>
        <div className='flex justify-center items-center py-4'>
            <p className='text-sm md:text-base lg:text-lg font-semibold text-blue-400'>@ {currentYear} KeyNuine Technologies | All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default BottomFooter