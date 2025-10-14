import { Star } from 'lucide-react'

const testimonials = [
  {
    text: "I would like to thank the website 'www.lusailinsurance.com' because of which i could get a good policy",
    author: "Muhammad Safwan"
  },
  {
    text: "I would like to thank the website 'www.lusailinsurance.com' because of which i could get a good policy",
    author: "Muhammad Safwan"
  },
  {
    text: "I would like to thank the website 'www.lusailinsurance.com' because of which i could get a good policy",
    author: "Muhammad Safwan"
  }
]

const Testimonials = () => {
  return (
    <section className='bg-[#F0E4E4] py-12 md:py-16'>
      <div className='container mx-auto px-'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl mb-12'>
          What Our Customers<br />Are Saying
        </h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='bg-[#8B1538] text-white p-6 md:p-8 rounded-2xl'>
              <div className='flex gap-1 mb-4'>
                {[...Array(6)].map((_, i) => (
                  <Star key={i} className='w-5 h-5 fill-[#FFD904] text-[#FFD904]' />
                ))}
              </div>
              <p className='text-sm md:text-base mb-6 leading-relaxed'>{testimonial.text}</p>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 md:w-14 md:h-14 rounded-full bg-black flex items-center justify-center text-white font-semibold'>
                  MS
                </div>
                <p className='font-semibold text-sm md:text-base'>{testimonial.author}</p>
              </div>
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

export default Testimonials
