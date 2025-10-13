import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className=' container mx-auto px-4 py-4 '>
      {/* top content */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center'>
            {/* left content */}
            <div className='lg:col-span-7 flex flex-col'>
                <h1 className='text-3xl md:text-4xl lg:text-[55px] leading-tight lg:leading-[80px] mb-6 md:mb-8'>
                    <span className='font-normal'>Let&apos;s find you</span> <br />
                    the <span className='font-medium'>Best Insurance in </span>
                    <span className='font-bold'>Qatar</span>
                </h1>
                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12'>
                    <div className='flex gap-4 items-center'>
                        <div className='w-12 h-12 flex-shrink-0'>
                            <Image src={"/tick.png"} alt='tick' width={100} height={100}/>
                        </div>
                        
                        <div>
                            <p className='text-base md:text-lg lg:text-xl text-[#8B1538] leading-relaxed'>
                            10+ insurers offering <br />
                            Competitive prices
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='w-12 h-12 flex-shrink-0'>
                            <Image src={"/quick.png"} alt='tick' width={50} height={50}/>
                        </div>
                        
                        <div>
                            <p className='text-base md:text-lg lg:text-xl text-[#8B1538] leading-relaxed'>
                            Quick, easy &<br />
                            hassle free 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* right content */}
            <div className='lg:col-span-5 flex justify-end  items-end'>
                <Image
                    src="/bg.png"
                    alt="bg"
                    width={450}
                    height={120}
                    className="object-contain"
                />
                
            </div>
      </div>
    </section>
  )
}

export default HeroSection
