import { ChevronDown, PhoneIncoming } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-[#8B1538] sticky z-50 top-0 '>
      <div className="container mx-auto px-4 py-2  ">
        <div className='flex items-center justify-between h-20 '>
            <div className='flex items-center justify-center'>
                <Link href={"/"}>
                    <Image src={"/logo.png"} alt='Lusail Insurance' width={250} height={80}
                      className='w-32 md:w-48 lg:w-52 h-auto'
                    />
                </Link>
            </div>
            <nav className='hidden lg:flex items-center'>
                    <ul className='flex gap-4 xl:gap-8 text-white text-sm xl:text-base'>
                        <li className='flex gap-1 items-center cursor-pointer hover:opacity-80 transition-opacity'>
                            <Link href={"/about"}>
                            About Us
                            </Link>
                        </li>
                        <li className='flex gap-1 items-center cursor-pointer hover:opacity-80 transition-opacity'>
                          Insurance Products 
                          <ChevronDown className='w-5 h-5'/>
                        </li>
                        <li className='flex gap-1 items-center cursor-pointer hover:opacity-80 transition-opacity'>
                          Renew Your Policy 
                          <ChevronDown className='w-5 h-5'/>
                        </li>
                        <li className='flex gap-1 items-center cursor-pointer hover:opacity-80 transition-opacity'>
                          Claims
                          
                        </li>
                        <li className='items-center  hover:opacity-80 transition-opacity cursor-pointer'>Branches</li>
                    </ul>
            </nav>
            <button className='text-white border border-white px-4 py-2 rounded-lg flex gap-2 items-center hover:bg-white hover:text-[#8B1538] transition-colors text-sm md:text-base'>
              <PhoneIncoming size={20}/> 
              <span className='hidden md:inline'>Talk to Expert</span>
            </button>
        </div>
      </div>
    </header>
  )
}

export default Header
