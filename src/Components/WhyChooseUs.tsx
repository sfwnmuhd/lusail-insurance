import { Award, Star } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    title: 'Expert Advice',
    description: 'Helping you choose the right coverage with complete transparency.'
  },
  {
    title: 'Quick Quotes',
    description: 'Compare, select, and get insured - all in just a few clicks.'
  },
  {
    title: 'Smart Deals',
    description: 'Get competitive rates from leading insurers across Qatar.'
  },
  {
    title: 'Always Here for You',
    description: 'Our dedicated team ensures smooth assistance from quote to claim.'
  },
  {
    title: 'Insurance Made Clear',
    description: 'We simplify insurance terms so you know exactly what you\'re getting.'
  },
  {
    title: 'Trusted Across Qatar',
    description: 'Proudly serving individuals and businesses with excellence and integrity.'
  }
]

const Bullet = () => (
  <span className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#8B1538] flex items-center justify-center flex-shrink-0'>
    <Star className='w-5 h-5 md:w-6 md:h-6 text-white fill-white' />
  </span>
)

const WhyChooseUs = () => {
  return (
    <section className='container mx-auto px-3 sm:px-20 py-12 md:py-20'>
      <h2 className='text-2xl md:text-3xl lg:text-4xl text-center mb-6 max-w-4xl mx-auto leading-tight'>
        What makes <span className='font-medium'>Lusail Insurance</span> one of <br />
         Qatar&apos;s favourite places <br /> to buy insurance?
      </h2>

      {/* 3-column layout with centered image */}
      <div className='mt-10 grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-16'>
        {/* Left column */}
        <div className='space-y-8 md:space-y-10 max-w-[380px] w-full justify-self-start mx-auto lg:mx-0'>
          {features.slice(0, 3).map((feature) => (
            <div key={feature.title} className='flex gap-1 sm:gap-4 items-start'>
              <Bullet />
              <div className='flex-1'>
                <h3 className='text-base md:text-lg font-semibold mb-1'>{feature.title}</h3>
                <p className='text-[10px] md:text-sm text-gray-700 leading-relaxed'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center image */}
        <div className='self-center justify-self-center hidden lg:flex'>
          <Image
            src="/whychooseus.png"
            alt='People discussing'
            width={420}
            height={300}
            className='w-auto max-w-[420px] h-auto'
            priority
          />
        </div>

        {/* Right column */}
        <div className='space-y-8 md:space-y-10 max-w-[380px] w-full justify-self-end mx-auto lg:mx-0'>
          {features.slice(3, 6).map((feature) => (
            <div key={feature.title} className='flex gap-1 sm:gap-4 items-start'>
              <Bullet />
              <div className='flex-1'>
                <h3 className='text-base md:text-lg font-semibold mb-1'>{feature.title}</h3>
                <p className='text-[10px] md:text-sm text-gray-700 leading-relaxed'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
