import Image from 'next/image'
import { Phone, MessageSquare } from 'lucide-react'

const ContactSection = () => {
  return (
    <section className='bg-[#F0E4E4] py-12 md:py-20'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left content */}
          <div>
            <h2 className='text-2xl md:text-3xl lg:text-4xl mb-6'>
              Have a question?<br />
              Here to help.
            </h2>
            <p className='text-sm md:text-base text-gray-700 leading-relaxed mb-8 max-w-md'>
              At Lusail Insurance we're committed to being an extended family. Speak your heart out. They listen with undivided attention to resolve your concerns. Love us or not, request a callback or drop us an email, we're here to help.
            </p>
            
            <div className='space-y-4 max-w-md'>
              <div className='flex items-center gap-4 p-4 rounded-xl border border-gray-500'>
                <div className='w-10 h-10 flex items-center justify-center  rounded-lg'>
                  <Phone className='w-5 h-5 text-[#8B1538]' />
                </div>
                <div>
                  <p className='text-xs text-gray-500'>Standard Enquiries</p>
                  <p className='font-semibold'>+974 4466 5005</p>
                </div>
              </div>
              
              <div className='flex items-center gap-4 p-4  rounded-xl border border-gray-500'>
                <div className='w-10 h-10 flex items-center justify-center  rounded-lg'>
                  <MessageSquare className='w-5 h-5 text-[#8B1538]' />
                </div>
                <div>
                  <p className='text-xs text-gray-500'>Customer Sales Enquiries</p>
                  <p className='font-semibold'>info@lusailinsurance.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right illustration */}
          <div className='flex justify-center lg:justify-end'>
            <div className='relative w-full max-w-md aspect-square'>
              <Image 
                src="/contact.png"
                alt='Customer support illustration'
                fill
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
