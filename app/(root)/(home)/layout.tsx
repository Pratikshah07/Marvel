import Navbar from '@/components/Navbar'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'


export const metadata: Metadata = {
    title: "Marvel",
    description: "Cross Platform B2B Service",
    icons: {
        icon: "/vercel.svg",
    },
};


function HomeLayout({ children }: { children: ReactNode }) {
    return (
        <main className='relative'>
            <Navbar />
            <div className='flex'>
                <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
                    <div className='w-full'>
                        {children}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default HomeLayout