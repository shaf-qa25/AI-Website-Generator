"use client"
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { SignInButton } from '@clerk/nextjs'
import { ArrowUp, HomeIcon, ImagePlus, Key, LayoutDashboard, User2 } from 'lucide-react'
import React, { useState } from 'react'

const suggestion = [
    {
        label: 'Dashboard',
        prompt: 'Create an analytics dashboard to track customers and revenue data for a SaaS',
        icon: LayoutDashboard
    },
    {
        label: 'SignUp Form',
        prompt: 'Create a modern sign up form with email/password fields, Google and Github login options, and terms checkbox',
        icon: Key
    },
    {
        label: 'Hero',
        prompt: 'Create a modern header and centered hero section for a productivity SaaS. Include a badge for feature announcement, a title with a subtle gradient effect',
        icon: HomeIcon
    },
    {
        label: 'User Profile Card',
        prompt: 'Create a modern user profile card component for a social media website',
        icon: User2
    }
]

function Hero() {
    const [userInput, setUserInput] = useState<string>('')
    return (
        < div className='flex flex-col items-center justify-center h-[80vh] text-center gap-4' >
            {/* desc */}

            <h2 className=' font-bold text-6xl'>What Should We Design</h2>
            <p className='text-lg mt-4'>Generate,edit and explore design</p>

            {/* input box */}
            <div className='w-full max-w-xl p-5 mt-5 border border-gray-300 rounded-lg'>
                <textarea placeholder='Convert your thoughts into code....' className='w-full h-32 p-1  focus:outline-none focus:ring-0 resize-none' value={userInput} onChange={(e) => setUserInput(e.target.value)} />

                <div className='flex justify-between gap-2 mt-2'>
                    <Button variant={'ghost'}><ImagePlus /></Button>
                    <SignInButton mode='modal' forceRedirectUrl={'/workspace'}>
                        <Button disabled={!userInput}><ArrowUp /></Button></SignInButton>

                </div>
            </div>
            {/* suggestions */}

            <div className='flex gap-3 mt-5'>
                {suggestion.map((item, i) => (
                    <Button key={i} variant={'outline'}
                        onClick={() => {
                            setUserInput(item.prompt)
                        }}>
                        <item.icon />
                        {item.label}
                    </Button>
                ))}
            </div>
        </div >

    )
}

export default Hero
