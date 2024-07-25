"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

const Navbar = () => {
    const router = useRouter()

    return (
        <nav className='flex justify-between items-center fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
            <Link href="/" className='flex items-center gap-1'>
                <Image
                    src="/vercel.svg"
                    width={32}
                    height={32}
                    alt='Marvel'
                    className='max-sm:size-10'
                />
                <p className='text-[26px] font-extrabold text-black max-sm:hidden'>Marvel</p>
            </Link>

            <div className='flex justify-between items-center gap-5 text-black'>
                <Button
                    variant="ghost"
                    onClick={() => router.push('/farmer')}
                    className='hover:text-gray-300 transition-colors'
                >
                    Farmers
                </Button>
                <Button
                    variant="ghost"
                    onClick={() => router.push('/distributor')}
                    className='hover:text-gray-300 transition-colors'
                >
                    Distributor
                </Button>
                {/* Clerk User Management  */}
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}

export default Navbar