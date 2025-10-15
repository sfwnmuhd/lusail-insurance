'use client'
import { ChevronDown, PhoneIncoming, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [expandInsurance, setExpandInsurance] = React.useState(false)
  const [expandRenew, setExpandRenew] = React.useState(false)
  return (
    <header className='bg-[#8B1538] sticky z-50 top-0 '>
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-2   ">
        <div className='flex items-center justify-between h-20 '>
            <div className='flex items-center justify-center'>
                <button
                  type='button'
                  className='lg:hidden mr-3 text-white p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4B1EFF] focus-visible:ring-offset-[#8B1538]'
                  aria-expanded={mobileOpen}
                  aria-controls='mobile-menu'
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  {mobileOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
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
                        <li className='relative group flex gap-1 items-center cursor-pointer'>
                          <span className='flex items-center gap-1 group-hover:opacity-80 transition-opacity'>
                            Personal Insurance
                            <ChevronDown className='w-4 h-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180'/>
                          </span>
                          <div className='invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-200 ease-out absolute left-1/2 -translate-x-1/2 top-full mt-3 z-50'>
                            <div className='bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 w-[280px]'>
                              <ul className='p-4 text-gray-700 text-sm'>
                                <li><Link href='/insurance/car-insurance' className='block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-[#8B1538]'>Car Insurance</Link></li>
                                <li><Link href='/insurance/health-insurance' className='block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-[#8B1538]'>Medical & Life Insurance</Link></li>
                                <li><Link href='/insurance/travel-insurance' className='block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-[#8B1538]'>Travel Insurance</Link></li>
                                <li><Link href='/insurance/yacht-boat-jetski-insurance' className='block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-[#8B1538]'>Yacht/ Boat/ Jetski Insurance</Link></li>
                                <li><Link href='/insurance/personal-accident-insurance' className='block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-[#8B1538]'>Personal Accident Insurance</Link></li>
                                <li><Link href='/insurance/maid-driver-insurance' className='block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-[#8B1538]'>Maid & Driver Insurance</Link></li>
                                <li><Link href='/insurance/property-insurance' className='block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-[#8B1538]'>Property Insurance</Link></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className='relative group flex gap-1 items-center cursor-pointer'>
                          <span className='flex items-center gap-1 group-hover:opacity-80  cursor-pointer transition-opacity'>
                            Corporate Insurance
                            <ChevronDown className='w-4 h-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180'/>
                          </span>
                          <div className='invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-200 ease-out absolute left-1/2 -translate-x-1/2 top-full mt-3 z-50'>
                            <div className='bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 w-[280px]'>
                              <ul className='p-4 text-gray-700 text-sm'>
                                <li><Link href='/insurance/motor-fleet-insurance' className='block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-[#8B1538]'>Motor Fleet Insurance</Link></li>
                                <li><Link href='/insurance/group-medical-life-insurance' className='block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-[#8B1538]'>Group Medical & Life Insurance</Link></li>
                                <li><Link href='/insurance/property-insurance' className='block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-[#8B1538]'>Property Insurance</Link></li>
                                <li><Link href='/insurance/casualty-liability-insurance' className='block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-[#8B1538]'>Casualty & Liability Insurance</Link></li>
                                <li><Link href='/insurance/engineering-insurance' className='block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-[#8B1538]'>Engineering Insurance</Link></li>
                                <li><Link href='/insurance/marine-aviation-insurance' className='block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-[#8B1538]'>Marine & Aviation Insurance</Link></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className='flex gap-1 items-center cursor-pointer hover:opacity-80 transition-opacity'>
                          <Link href={"/claims"}>
                            Claims
                          </Link>
                        </li>
                        <li className='items-center  hover:opacity-80 transition-opacity cursor-pointer'>
                          <Link href={"/branches"}>
                            Branches
                          </Link>
                        </li>
                    </ul>
            </nav>
            <button 
              onClick={() => window.location.href = "tel:+97444665005"}
              className='text-white border border-white px-4 py-2 rounded-lg flex gap-2 items-center hover:bg-white hover:text-[#8B1538] transition-colors text-sm md:text-base'>
              <PhoneIncoming size={20}/> 
              <span className='hidden md:inline'>Talk to Expert</span>
            </button>
        </div>
      </div>
      {mobileOpen && (
        <div id='mobile-menu' className='lg:hidden absolute left-0 right-0 top-full bg-white rounded-b-2xl shadow-2xl ring-1 ring-black/5'>
          <nav className='px-4 sm:px-6 lg:px-20 py-4'>
            <ul className='space-y-2 text-gray-800 text-base'>
              <li>
                <Link href='/about' className='block px-2 py-2 rounded-md hover:bg-gray-50 hover:text-[#6C63FF]  focus-visible:outline-offset-2 focus-visible:outline-[#4B1EFF]'>
                  About Us
                </Link>
              </li>
              <li>
                <button
                  type='button'
                  className='w-full flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-50 focus:outline-none'
                  aria-expanded={expandInsurance}
                  onClick={() => setExpandInsurance(!expandInsurance)}
                >
                  <span>Insurance Products</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${expandInsurance ? 'rotate-180' : ''}`}/>
                </button>
                {expandInsurance && (
                  <ul className='mt-1 ml-4 space-y-1 text-sm text-gray-700'>
                    <li><Link href='/insurance/car' className='block px-2 py-1.5 rounded hover:text-[#6C63FF]'>Car Insurance</Link></li>
                    <li><Link href='/insurance/life' className='block px-2 py-1.5 rounded hover:text-[#6C63FF]'>Term & Investment Plans</Link></li>
                    <li><Link href='/insurance/health' className='block px-2 py-1.5 rounded hover:text-[#6C63FF]'>Health Insurance</Link></li>
                    <li><Link href='/insurance/travel' className='block px-2 py-1.5 rounded hover:text-[#6C63FF]'>Travel Insurance</Link></li>
                    <li><Link href='/insurance/business' className='block px-2 py-1.5 rounded hover:text-[#6C63FF]'>Business Insurance</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  type='button'
                  className='w-full flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-50 focus:outline-none'
                  aria-expanded={expandRenew}
                  onClick={() => setExpandRenew(!expandRenew)}
                >
                  <span>Renew Your Policy</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${expandRenew ? 'rotate-180' : ''}`}/>
                </button>
                {expandRenew && (
                  <ul className='mt-1 ml-4 space-y-1 text-sm text-gray-700'>
                    <li><Link href='/renew/term-life' className='block px-2 py-1.5 rounded hover:text-[#6C63FF]'>Term Life Renewal</Link></li>
                    <li><Link href='/renew/health' className='block px-2 py-1.5 rounded hover:text-[#6C63FF]'>Health Renewal</Link></li>
                    <li><Link href='/renew/motor' className='block px-2 py-1.5 rounded hover:text-[#6C63FF]'>Motor Renewal</Link></li>
                    <li><Link href='/renew/two-wheeler' className='block px-2 py-1.5 rounded hover:text-[#6C63FF]'>Two Wheeler Renewal</Link></li>
                    <li><Link href='/renew/home-insurance' className='block px-2 py-1.5 rounded hover:text-[#6C63FF]'>Home Insurance Renewal</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <Link href={'/claims'} className='block px-2 py-2 rounded-md hover:bg-gray-50 hover:text-[#6C63FF]  focus-visible:outline-offset-2 focus-visible:outline-[#4B1EFF]'>
                  Claims
                </Link>
              </li>
              <li>
                <Link href={'/branches'} className='block px-2 py-2 rounded-md hover:bg-gray-50 hover:text-[#6C63FF]  focus-visible:outline-offset-2 focus-visible:outline-[#4B1EFF]'>
                  Branches
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
