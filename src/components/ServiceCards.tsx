"use client"
import { Award, Headphones, Zap } from 'lucide-react'
import { useRef, useState } from 'react'

const services = [
  {
    icon: <Award className='w-8 h-8' />,
    title: 'Professionals',
    description: 'Deliver work outcomes to agreed quality standards and timescales for Sales, Serving & Communication.'
  },
  {
    icon: <Headphones className='w-8 h-8' />,
    title: 'Client First',
    description: 'Nothing matters more to us than our Clients. Our team is fully trained to keep you benefited with prompt actions on your requriements.'
  },
  {
    icon: <Zap className='w-8 h-8' />,
    title: 'Quick Services',
    description: 'Deliver insurance services to agreed quality standards and timescales(in a shorter period of time).'
  }

]

const ServiceCards = () => {
  
  return (
    <section className='bg-[#F0E4E4] py-12 md:py-16'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {services.map((service, index) => (
            <div 
              key={index} 
              className='bg-[#8B1538] text-white p-6 md:p-8 rounded-2xl flex flex-col gap-4'
            >
              <div className='flex items-center justify-between'>
                <h3 className='text-lg md:text-xl font-thin'>{service.title}</h3>
                <div className='text-white'>
                  {service.icon}
                </div>
              </div>
              <p className='text-sm text-justify leading-relaxed font-thin '>
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className='flex justify-center gap-3 mt-8'>
          <div className='w-2 h-2 rounded-full bg-[#8B1538]'></div>
          <div className='w-2 h-2 rounded-full bg-[#777777]'></div>
        </div>
      </div>
    </section>
  )
}

export default ServiceCards
