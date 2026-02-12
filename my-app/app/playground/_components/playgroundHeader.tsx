"use client"
import { Button } from '@/components/ui/button'
import { Check, Rocket, Share2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function PlaygroundHeader() {
    return (
        <div className='p-4 border-b flex justify-between items-center bg-white dark:bg-zinc-950 shadow-sm'>
            {/* Logo Section */}
            <Link href={'/workspace'} className='flex items-center gap-2 cursor-pointer'>
                <Image src={'/logo.svg'} alt='logo' width={40} height={40} />
                <h2 className='font-bold text-xl hidden md:block'>AI Website Builder</h2>
            </Link>

            {/* Action Buttons */}
            <div className='flex items-center gap-3'>
                <Button variant="outline" size="sm" className='gap-2'>
                    <Share2 className='h-4 w-4' />
                    Share
                </Button>

                <Button variant="secondary" size="sm" className='gap-2'>
                    <Check className='h-4 w-4' />
                    Save
                </Button>

                <Button size="sm" className='gap-2 bg-blue-600 hover:bg-blue-700 text-white'>
                    <Rocket className='h-4 w-4' />
                    Deploy
                </Button>
            </div>
        </div>
    )
}

export default PlaygroundHeader