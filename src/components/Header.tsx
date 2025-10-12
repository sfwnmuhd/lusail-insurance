import { ChevronDown, PhoneIncoming } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-[#8B1538] sticky '>
      <div className="container mx-auto px-4">
        <div className='flex items-center justify-between h-25'>
            <div className='flex items-center'>
                <Link href={"/"}>
                    <Image src={"/logo.png"} alt='logo' width={200} height={80}/>
                </Link>
            </div>
            <div className='flex items-center'>
                    <ul className='flex gap-6 text-white'>
                        <li className='cursor-pointer'>
                            <Link href={"/about"}>
                            About Us
                            </Link>
                        </li>
                        <li className='flex gap-1 cursor-pointer'>Insurance Products <ChevronDown/></li>
                        <li className='flex gap-1 cursor-pointer'>Renew Your Policy <ChevronDown/></li>
                        <li className='flex gap-1 cursor-pointer'>Claim <ChevronDown/></li>
                        <li className='cursor-pointer'>Branches</li>
                    </ul>
            </div>
            <button className='text-white border px-2 py-1 rounded-lg flex gap-3 items-center'><PhoneIncoming size={20}/> Talk to Expert</button>
        </div>
      </div>
    </header>
  )
}

export default Header
