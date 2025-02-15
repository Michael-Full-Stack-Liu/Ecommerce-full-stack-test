"use client"

import { useEffect, useState } from 'react'
import AnnouncementBar from './announceBar'
import Link from 'next/link';
import { login } from '@/lib/actions/auth';
import HeaderSearchBar from './HeaderSearchBar';

type HeaderProps = {
    user:Omit<User,"passwordHash"> | null;
    categorySelector: React.ReactNode;
}

export default function Header( {user, categorySelector }: HeaderProps) {

    const [ isOpen, setIsOpen] = useState<boolean>(true);
    const [ prevScrollY, setPrevScrollY] = useState<number>(0);

    useEffect(()=>{
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrolledUp = currentScrollY < prevScrollY

            if (currentScrollY < 1000) {
            if(scrolledUp) {
                setIsOpen(true);
            } else if (currentScrollY > 500) {
                setIsOpen(false);
            }} 

            setPrevScrollY(currentScrollY);
        }

        setPrevScrollY(window.scrollY);
        window.addEventListener("scroll",handleScroll);
        return ()=> {
            window.removeEventListener("scroll",handleScroll);
        }
    },[prevScrollY])

  return (
    <header className='w-full sticky top-0 z-50'>
        <div className={`w-full transform transition-transform duration-300 ease-in-out 
            ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
            <AnnouncementBar />
            <div className='w-full flex justify-between items-center py-3 sm:py-4 
            bg-white/80 shadow-sm border-b border-gray-100 backdrop-blur-sm'>
                <div className='flex justify-between items-center container mx-auto px-8'>
                    <div className='flex flex-1 justify-start items-center gap-4 sm:gap-6'>
                        <button type="button" className='text-gray-700 hover:text-gray-900 md:hidden'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 sm:h-6 sm:w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                            </svg>

                        </button>
                        <nav className='hidden md:flex gap-4 lg:gap-6 text-sm font-medium'>
                            <Link href="#">Shop</Link>
                            <Link href="#">New Arrivals</Link>
                            {categorySelector}
                            <Link href="#">Sale</Link>
                        </nav>
                    </div> 

                    <HeaderSearchBar />
                    
                    <div>
                        <Link href="#">link</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
                        <div className='flex flex-1 justify-end items-center gap-2 sm:gap-4'>
                            {/* <button type="button" className='text-gray-700 hover:text-gray-900 hidden sm:block'>

                            </button> */}
                            
                            <button type="button" onClick={async ()=> await login("GitHub")}> Sign In</button>
                            <button type="button" > Sign Up</button>
                            
                            <button type="button" className='text-gray-700 hover:text-gray-900 relative'>
                                 <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 sm:h-6 sm:w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />
                                    
                                </svg>
                                <span className='absolute -top-1 -right-1 bg-black text-white text-[10px] sm:text-xs w-3.5 h-3.5 sm:2-4 sm:h-4 rounded-full flex items-center justify-center'>
                                    0
                                </span>
                            </button>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

