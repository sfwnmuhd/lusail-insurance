"use client"
import * as React from "react"
import { Card, CardContent } from "../components/ui/card"
import { Award, Headphones, Zap, ShieldCheck, Clock, Briefcase } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"



const allServices = [
  { icon: <Award className='w-8 h-8' />, title: 'Professionals', description: 'Deliver work outcomes to agreed quality standards and timescales for Sales, Serving & Communication.' },
  { icon: <Headphones className='w-8 h-8' />, title: 'Client First', description: 'Nothing matters more to us than our Clients. Our team is fully trained to keep you benefited with prompt actions on your requirements.' },
  { icon: <Zap className='w-8 h-8' />, title: 'Quick Services', description: 'Deliver insurance services to agreed quality standards and timescales (in a shorter period of time).' },
  { icon: <ShieldCheck className='w-8 h-8' />, title: 'Expert Advice', description: 'Helping you choose the right coverage with complete transparency.' },
  { icon: <Clock className='w-8 h-8' />, title: 'Always Here for You', description: 'Our dedicated team ensures smooth assistance from quote to claim.' },
  { icon: <Briefcase className='w-8 h-8' />, title: 'Smart Deals', description: 'Get competitive rates from leading insurers across Qatar.' },
]

export function ServiceCards() {
  return (
    <section className="bg-[#F0E4E4] py-12 md:py-16 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="horizontal"
          className="w-full"
          plugins={[
            Autoplay({
            delay: 2000,
          }),
          ]}
        >
          <CarouselContent className="-mt-1">
            {allServices.map((service, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-[#8B1538] text-white rounded-2xl h-full">
                  <CardContent className="flex flex-col gap-4 p-6 h-full justify-between">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-light">{service.title}</h3>
                      <div>{service.icon}</div>
                    </div>
                    <p className="text-sm font-thin leading-relaxed text-gray-300">{service.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
