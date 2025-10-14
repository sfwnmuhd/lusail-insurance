
import ContactSection from '@/Components/ContactSection'
import HeroSection from '@/Components/HeroSection'
import InsuranceProducts from '@/Components/insuranceProducts'
import Partners from '@/Components/Partners'
import {ServiceCards} from '@/Components/ServiceCards'
import Testimonials from '@/Components/Testimonials'
import WhyChooseUs from '@/Components/WhyChooseUs'
import React from 'react'

export default function Page() {
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
