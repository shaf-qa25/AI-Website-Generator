import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/nextjs'
import { Sign } from 'crypto'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const MenuOption = [
    {
        name: 'Pricing',
        path: '/pricing'
    },
    {
        name: 'Contact Us',
        path: '/contact'
    }
]
function Header() {
    return (
        <div className="flex items-center justify-between py-6 px-10 bg-white dark:bg-black shadow-md">
            {/* logo/ */}
            <div className='flex items-center gap-2 font-bold text-lg'>
                <Image src={'/logo.svg'} alt="logo" width={35} height={35} />
                <h2>AI Website Generator</h2>
            </div>
            {/* menu */}
            <div className='flex gap-2'>
                {MenuOption.map((options, index) => {
                    return (
                        <Button variant="ghost" key={index}>{options.name}</Button>
                    )

                })}
            </div>
            {/* get started */}
            <SignInButton mode='modal' forceRedirectUrl={'/workspace'}>
                <Button >Get Started <ArrowRight /></Button>
            </SignInButton>
        </div>
    )
}

export default Header
