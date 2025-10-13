
import ContactSection from '@/components/ContactSection'
import HeroSection from '@/components/HeroSection'
import InsuranceProducts from '@/components/insuranceProducts'
import Partners from '@/components/Partners'
import ServiceCards from '@/components/ServiceCards'
import Testimonials from '@/components/Testimonials'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <main className='min-h-screen '>
      <HeroSection/>
      <InsuranceProducts/>
      <ServiceCards/>
      <WhyChooseUs/>
      <Testimonials/>
      <Partners/>
      <ContactSection/>
    </main>
  )
}

export default page
