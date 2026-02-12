"use client"
import { Button } from '@/components/ui/button'
import { SignInButton, useUser } from '@clerk/nextjs'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MenuOption = [
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact Us', path: '/contact' }
]

function Header() {
    const { user } = useUser();

    return (
        <header className="flex items-center justify-between py-4 px-10 bg-white border-b shadow-sm sticky top-0 z-50">
            {/* Logo Section */}
            <div className='flex items-center gap-3 font-bold text-xl tracking-tight'>
                <Image src={'/logo.svg'} alt="logo" width={32} height={32} className="object-contain" />
                <h2 className="hidden md:block">Ryze AI</h2> {/* Assignment name ke saath align kiya */}
            </div>

            {/* Menu Options */}
            <div className='hidden md:flex items-center gap-1'>
                {MenuOption.map((option, index) => (
                    <Link href={option.path} key={index}>
                        <Button variant="ghost" className="text-gray-600 hover:text-black">
                            {option.name}
                        </Button>
                    </Link>
                ))}
            </div>

            {/* Auth Action */}
            <div className='flex items-center gap-4'>
                {!user ? (
                    <SignInButton mode='modal' forceRedirectUrl={'/workspace'}>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
                            Get Started <ArrowRight className="h-4 w-4" />
                        </Button>
                    </SignInButton>
                ) : (
                    <Link href={'/workspace'}>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
                            Go to Workspace <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                )}
            </div>
        </header>
    )
}

export default Header