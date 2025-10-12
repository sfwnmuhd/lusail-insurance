import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className=' min-h-screen mx-auto px-4 container mt-6'>
      {/* top content */}
      <div className='grid grid-cols-2 gap-12 grid-rows-1'>
            {/* left content */}
            <div className='col-span-7 flex flex-col'>
                <h1 className='text-[55px] mb-6 '>
                    <span className='font-thin'>Let's find you</span> <br />
                    the <span className='font-medium'>Best Insurance in </span>
                    <span className='font-semibold'>Qatar</span>
                </h1>
                <div className='flex items-center gap-50'>
                    <div className='flex gap-4'>
                        <Image src={"/tick.png"} alt='tick' width={50} height={50}/>
                        <div>
                            <p className='text-[18px] text-[#8B1538]'>
                            10+ insurers offering <br />
                            Competitive prices
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <Image src={"/quick.png"} alt='tick' width={50} height={50}/>
                        <div>
                            <p className='text-[18px] text-[#8B1538]'>
                            Quick, easy &<br />
                            hassle free 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* right content */}
            <div className='col-span-5'>
                <Image src={"/bg.png"} alt='bg' width={100} height={80}/>
            </div>
      </div>
    </section>
  )
}

export default HeroSection
