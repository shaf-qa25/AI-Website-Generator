"use client"
import { Button } from '@/components/ui/button'
import { SignInButton, useUser } from '@clerk/nextjs'
import { ArrowUp, HomeIcon, ImagePlus, Key, LayoutDashboard, Loader2Icon, User2 } from 'lucide-react'
import React, { useState } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

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
    const { user } = useUser();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const CreateNewProject = async () => {
        setLoading(true);
        const projectId = uuidv4();
        const frameId = RandomFrameGenerator().toString();
        const messages = [
            {
                role: 'user',
                content: userInput,

            }
        ]
        try {
            const result = await axios.post('/api/project', {
                projectId: projectId,
                frameId: frameId,
                messages: messages,
            })
            console.log(result.data);
            toast.success('project created')
            router.push(`/playground/${projectId}?frameId=${frameId}`);
            setLoading(false);
            //playground navigation
        } catch (error) {
            toast.error('Something went wrong');
            console.log(error)
            setLoading(false);


        }
    }

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
                    {!user ? <SignInButton mode='modal' forceRedirectUrl={'/workspace'}>
                        <Button disabled={!userInput}><ArrowUp /></Button></SignInButton> : <Button disabled={!userInput} onClick={CreateNewProject}>
                        {loading ? <Loader2Icon className='animate-spin' /> : <ArrowUp />}
                    </Button>}

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


const RandomFrameGenerator = () => {
    const num = Math.floor(Math.random() * 10000);
    return num;
}