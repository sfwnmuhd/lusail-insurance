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
    <header className='bg-[#8B1538] sticky z-50 top-0 relative'>
      <div className="container mx-auto px-6 sm:px-20 py-2   ">
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
                          <span className='flex items-center gap-1 group-hover:text-[#6C63FF]'>
                            Insurance Products
                            <ChevronDown className='w-5 h-5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180'/>
                          </span>
                          <div className='invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-200 ease-out absolute left-1/2 -translate-x-1/2 top-full mt-3 z-50'>
                            <div className='bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 w-[1000px] max-w-[90vw]'>
                              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-6 text-gray-700'>
                                <div>
                                  <h4 className='font-semibold text-gray-900 mb-3'>Car Insurance</h4>
                                  <ul className='space-y-1.5 text-sm'>
                                    <li><Link href='/insurance/car/comprehensive' className='block py-1.5 hover:text-[#6C63FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B1EFF]'>Comprehensive Car</Link></li>
                                    <li><Link href='/insurance/car/third-party' className='block py-1.5 hover:text-[#6C63FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B1EFF]'>Third-Party Liability</Link></li>
                                    <li><Link href='/insurance/car/zero-dep' className='block py-1.5 hover:text-[#6C63FF]'>Zero Depreciation</Link></li>
                                    <li><Link href='/insurance/car/return-to-invoice' className='block py-1.5 hover:text-[#6C63FF]'>Return to Invoice</Link></li>
                                    <li><Link href='/insurance/car/engine-protect' className='block py-1.5 hover:text-[#6C63FF]'>Engine Protect</Link></li>
                                    <li><Link href='/insurance/car/roadside' className='block py-1.5 hover:text-[#6C63FF]'>Roadside Assistance</Link></li>
                                    <li><Link href='/insurance/car/no-claim-bonus' className='block py-1.5 hover:text-[#6C63FF]'>No Claim Bonus</Link></li>
                                    <li><Link href='/insurance/car/personal-accident' className='block py-1.5 hover:text-[#6C63FF]'>Personal Accident Cover</Link></li>
                                    <li><Link href='/insurance/car/addons' className='block py-1.5 hover:text-[#6C63FF]'>Add-ons & Riders</Link></li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className='font-semibold text-gray-900 mb-3'>Term & Investment Plans</h4>
                                  <ul className='space-y-1.5 text-sm'>
                                    <li className='flex items-center gap-2'><Link href='/insurance/life/term' className='block py-1.5 hover:text-[#6C63FF]'>Pure Term Plan</Link><span className='text-[10px] px-1.5 py-0.5 rounded-full bg-green-100 text-green-700'>New</span></li>
                                    <li><Link href='/insurance/life/return-of-premium' className='block py-1.5 hover:text-[#6C63FF]'>Return of Premium</Link></li>
                                    <li><Link href='/insurance/life/ulip' className='block py-1.5 hover:text-[#6C63FF]'>ULIP (Market-linked)</Link></li>
                                    <li><Link href='/insurance/life/endowment' className='block py-1.5 hover:text-[#6C63FF]'>Endowment Plans</Link></li>
                                    <li><Link href='/insurance/life/money-back' className='block py-1.5 hover:text-[#6C63FF]'>Money Back Plans</Link></li>
                                    <li><Link href='/insurance/life/whole-life' className='block py-1.5 hover:text-[#6C63FF]'>Whole Life Cover</Link></li>
                                    <li><Link href='/insurance/life/child' className='block py-1.5 hover:text-[#6C63FF]'>Child Education Plans</Link></li>
                                    <li><Link href='/insurance/life/pension' className='block py-1.5 hover:text-[#6C63FF]'>Pension/Annuity Plans</Link></li>
                                    <li><Link href='/insurance/life/saral-jeevan' className='block py-1.5 hover:text-[#6C63FF]'>Saral Jeevan Bima</Link></li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className='font-semibold text-gray-900 mb-3'>Health Insurance</h4>
                                  <ul className='space-y-1.5 text-sm'>
                                    <li><Link href='/insurance/health/individual' className='block py-1.5 hover:text-[#6C63FF]'>Individual Health</Link></li>
                                    <li><Link href='/insurance/health/family-floater' className='block py-1.5 hover:text-[#6C63FF]'>Family Floater</Link></li>
                                    <li className='flex items-center gap-2'><Link href='/insurance/health/senior-citizen' className='block py-1.5 hover:text-[#6C63FF]'>Senior Citizen Cover</Link><span className='text-[10px] px-1.5 py-0.5 rounded-full bg-green-100 text-green-700'>New</span></li>
                                    <li><Link href='/insurance/health/top-up' className='block py-1.5 hover:text-[#6C63FF]'>Top-up/Super Top-up</Link></li>
                                    <li><Link href='/insurance/health/critical-illness' className='block py-1.5 hover:text-[#6C63FF]'>Critical Illness</Link></li>
                                    <li><Link href='/insurance/health/maternity' className='block py-1.5 hover:text-[#6C63FF]'>Maternity Cover</Link></li>
                                    <li><Link href='/insurance/health/opd' className='block py-1.5 hover:text-[#6C63FF]'>OPD & Preventive Care</Link></li>
                                    <li><Link href='/insurance/health/cashless' className='block py-1.5 hover:text-[#6C63FF]'>Cashless Hospitals</Link></li>
                                    <li><Link href='/insurance/health/ayush' className='block py-1.5 hover:text-[#6C63FF]'>AYUSH Treatment</Link></li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className='font-semibold text-gray-900 mb-3'>Travel Insurance</h4>
                                  <ul className='space-y-1.5 text-sm'>
                                    <li><Link href='/insurance/travel/international' className='block py-1.5 hover:text-[#6C63FF]'>International Travel</Link></li>
                                    <li><Link href='/insurance/travel/student' className='block py-1.5 hover:text-[#6C63FF]'>Student Travel</Link></li>
                                    <li><Link href='/insurance/travel/business' className='block py-1.5 hover:text-[#6C63FF]'>Business Travel</Link></li>
                                    <li><Link href='/insurance/travel/domestic' className='block py-1.5 hover:text-[#6C63FF]'>Domestic Travel</Link></li>
                                    <li className='flex items-center gap-2'><Link href='/insurance/travel/cruise' className='block py-1.5 hover:text-[#6C63FF]'>Cruise Cover</Link><span className='text-[10px] px-1.5 py-0.5 rounded-full bg-green-100 text-green-700'>New</span></li>
                                    <li><Link href='/insurance/travel/baggage' className='block py-1.5 hover:text-[#6C63FF]'>Baggage Loss</Link></li>
                                    <li><Link href='/insurance/travel/trip-cancel' className='block py-1.5 hover:text-[#6C63FF]'>Trip Cancellation</Link></li>
                                    <li><Link href='/insurance/travel/medical-emergency' className='block py-1.5 hover:text-[#6C63FF]'>Medical Emergencies</Link></li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className='font-semibold text-gray-900 mb-3'>Business Insurance</h4>
                                  <ul className='space-y-1.5 text-sm'>
                                    <li><Link href='/insurance/business/fire' className='block py-1.5 hover:text-[#6C63FF]'>Fire & Property</Link></li>
                                    <li><Link href='/insurance/business/marine' className='block py-1.5 hover:text-[#6C63FF]'>Marine Cargo</Link></li>
                                    <li><Link href='/insurance/business/workmen' className='block py-1.5 hover:text-[#6C63FF]'>Workmen Compensation</Link></li>
                                    <li><Link href='/insurance/business/liability' className='block py-1.5 hover:text-[#6C63FF]'>General Liability</Link></li>
                                    <li><Link href='/insurance/business/professional' className='block py-1.5 hover:text-[#6C63FF]'>Professional Indemnity</Link></li>
                                    <li className='flex items-center gap-2'><Link href='/insurance/business/cyber' className='block py-1.5 hover:text-[#6C63FF]'>Cyber Risk</Link><span className='text-[10px] px-1.5 py-0.5 rounded-full bg-green-100 text-green-700'>New</span></li>
                                    <li><Link href='/insurance/business/group-health' className='block py-1.5 hover:text-[#6C63FF]'>Group Health</Link></li>
                                    <li><Link href='/insurance/business/group-personal-accident' className='block py-1.5 hover:text-[#6C63FF]'>Group Personal Accident</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className='relative group flex gap-1 items-center cursor-pointer'>
                          <button type='button' className='flex items-center gap-1 group-hover:text-[#6C63FF] focus:outline-none'>
                            Renew Your Policy
                            <ChevronDown className='w-5 h-5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180'/>
                          </button>
                          <div className='invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-200 ease-out absolute left-1/2 -translate-x-1/2 top-full mt-3 z-50'>
                            <div className='bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 w-[320px] max-w-[90vw]'>
                              <ul className='p-4 text-gray-700 text-sm'>
                                <li><Link href='/renew/term-life' className='block px-2 py-2 rounded-md hover:bg-gray-50 hover:text-[#6C63FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B1EFF]'>Term Life Renewal</Link></li>
                                <li><Link href='/renew/health' className='block px-2 py-2 rounded-md hover:bg-gray-50 hover:text-[#6C63FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B1EFF]'>Health Renewal</Link></li>
                                <li><Link href='/renew/motor' className='block px-2 py-2 rounded-md hover:bg-gray-50 hover:text-[#6C63FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B1EFF]'>Motor Renewal</Link></li>
                                <li><Link href='/renew/two-wheeler' className='block px-2 py-2 rounded-md hover:bg-gray-50 hover:text-[#6C63FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B1EFF]'>Two Wheeler Renewal</Link></li>
                                <li><Link href='/renew/home-insurance' className='block px-2 py-2 rounded-md hover:bg-gray-50 hover:text-[#6C63FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B1EFF]'>Home Insurance Renewal</Link></li>
                              </ul>
                            </div>
                          </div>
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
      {mobileOpen && (
        <div id='mobile-menu' className='lg:hidden absolute left-0 right-0 top-full bg-white rounded-b-2xl shadow-2xl ring-1 ring-black/5'>
          <nav className='px-6 sm:px-20 py-4'>
            <ul className='space-y-2 text-gray-800 text-base'>
              <li>
                <Link href='/about' className='block px-2 py-2 rounded-md hover:bg-gray-50 hover:text-[#6C63FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B1EFF]'>
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
                <Link href='/claims' className='block px-2 py-2 rounded-md hover:bg-gray-50 hover:text-[#6C63FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B1EFF]'>
                  Claims
                </Link>
              </li>
              <li>
                <Link href='/branches' className='block px-2 py-2 rounded-md hover:bg-gray-50 hover:text-[#6C63FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B1EFF]'>
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
