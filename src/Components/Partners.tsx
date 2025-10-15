import Image from 'next/image'

const partners = [
  { logo: '/1.png', name: 'Partner 1' },
  { logo: '/2.png', name: 'Partner 2' },
  { logo: '/3.png', name: 'Partner 3' },
  { logo: '/4.png', name: 'Partner 4' },
  { logo: '/5.png', name: 'Partner 5' },
  { logo: '/6.png', name: 'Partner 6' },
  { logo: '/7.png', name: 'Partner 7' },
  { logo: '/8.png', name: 'Partner 8' },
  { logo: '/9.png', name: 'Partner 9' },
  { logo: '/10.png', name: 'Partner 10' },
  { logo: '/11.png', name: 'Partner 11' },
]

const Partners = () => {
  return (
    <section className='container mx-auto px-20 py-12 md:py-20'>
      <div className='text-center mb-4'>
        <h2 className='text-2xl md:text-3xl lg:text-6xl mb-2'>Our Partners</h2>
        <p className='text-sm md:text-base text-gray-600'>Leading insurers for your financial freedom</p>
      </div>
      
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 mt-12'>
        {partners.map((partner, index) => (
          <div key={index} className='flex items-center justify-center p-4  transition-all'>
            <div className='relative w-full h-24'>
              <Image 
                src={partner.logo} 
                alt={partner.name}
                fill
                className='object-contain'
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Partners
