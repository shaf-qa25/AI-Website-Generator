// "use client"
// import { Button } from '@/components/ui/button'
// import { SignInButton, useUser } from '@clerk/nextjs'
// import { ArrowUp, HomeIcon, ImagePlus, Key, LayoutDashboard, Loader2Icon, User2 } from 'lucide-react'
// import React, { useState } from 'react'
// import axios from 'axios'
// import { v4 as uuidv4 } from 'uuid';
// import { useRouter } from 'next/navigation'
// import { toast } from 'sonner'
// import { REGISTRY_METADATA } from '../playground/_components/ComponentRegistry'

// const suggestion = [
//     {
//         label: 'Dashboard',
//         prompt: 'Create an analytics dashboard using Cards and Tables to track customers.',
//         icon: LayoutDashboard
//     },
//     {
//         label: 'SignUp Form',
//         prompt: 'Create a modern sign up form with email/password fields, Google and Github login options, and terms checkbox',
//         icon: Key
//     },
//     {
//         label: 'Hero',
//         prompt: 'Create a modern header and centered hero section for a productivity SaaS. Include a badge for feature announcement, a title with a subtle gradient effect',
//         icon: HomeIcon
//     },
//     {
//         label: 'User Profile Card',
//         prompt: 'Create a modern user profile card component for a social media website',
//         icon: User2
//     }
// ]

// function Hero() {
//     const [userInput, setUserInput] = useState<string>('')
//     const { user } = useUser();
//     const router = useRouter();
//     const [loading, setLoading] = useState(false);

//     const CreateNewProject = async () => {
//         setLoading(true);
//         const projectId = uuidv4();
//         const frameId = Math.floor(Math.random() * 10000).toString();

//         const contextPrompt = `
//             You are a deterministic UI generator. 
//             You can ONLY use these components: ${Object.keys(REGISTRY_METADATA).join(', ')}.
//             User Intent: ${userInput}
//         `;

//         const messages = [
//             {
//                 role: 'user',
//                 content: contextPrompt,
//             }
//         ]

//         try {
//             const result = await axios.post('/api/project', {
//                 projectId: projectId,
//                 frameId: frameId,
//                 messages: messages,
//             })

//             toast.success('Project created successfully')
//             router.push(`/playground/${projectId}?frameId=${frameId}`);
//         } catch (error) {
//             toast.error('Something went wrong');
//             console.error(error)
//         } finally {
//             setLoading(false);
//         }
//     }

//     return (
//         <div className='flex flex-col items-center justify-center min-h-[80vh] px-5 text-center gap-4 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-zinc-950'>
//             <h2 className='font-bold text-5xl md:text-7xl tracking-tight'>What Should We <span className='text-blue-600'>Design?</span></h2>
//             <p className='text-gray-500 text-lg max-w-lg'>Build working UIs immediately using our deterministic component system.</p>

//             <div className='w-full max-w-2xl p-4 mt-8 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-xl'>
//                 <textarea
//                     placeholder='Describe your UI intent (e.g., "A dashboard with a sidebar and 3 metric cards")...'
//                     className='w-full h-32 p-3 focus:outline-none resize-none bg-transparent text-lg'
//                     value={userInput}
//                     onChange={(e) => setUserInput(e.target.value)}
//                 />

//                 <div className='flex justify-between items-center mt-2 border-t pt-3'>
//                     <Button variant='ghost' size='icon' className='text-gray-400'><ImagePlus className='h-5 w-5' /></Button>

//                     {!user ? (
//                         <SignInButton mode='modal' forceRedirectUrl={'/workspace'}>
//                             <Button disabled={!userInput} size='icon' className='rounded-full h-10 w-10 bg-blue-600'><ArrowUp className='h-5 w-5' /></Button>
//                         </SignInButton>
//                     ) : (
//                         <Button disabled={!userInput || loading} onClick={CreateNewProject} size='icon' className='rounded-full h-10 w-10 bg-blue-600 hover:bg-blue-700'>
//                             {loading ? <Loader2Icon className='animate-spin h-5 w-5' /> : <ArrowUp className='h-5 w-5' />}
//                         </Button>
//                     )}
//                 </div>
//             </div>

//             <div className='flex flex-wrap justify-center gap-3 mt-8'>
//                 {suggestion.map((item, i) => (
//                     <Button key={i} variant='outline' className='rounded-full gap-2 hover:bg-blue-50 hover:border-blue-200 transition-all'
//                         onClick={() => setUserInput(item.prompt)}>
//                         <item.icon className='h-4 w-4 text-blue-600' />
//                         {item.label}
//                     </Button>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Hero

"use client"
import { Button } from '@/components/ui/button'
import { SignInButton, useUser } from '@clerk/nextjs'
import { ArrowUp, HomeIcon, ImagePlus, Key, LayoutDashboard, Loader2Icon, User2 } from 'lucide-react'
import React, { useState } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { REGISTRY_METADATA } from '../playground/_components/ComponentRegistry'

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
        const contextPrompt = `
             You are a deterministic UI generator. 
             You can ONLY use these components: ${Object.keys(REGISTRY_METADATA).join(', ')}.
            User Intent: ${userInput}
         `;
        const messages = [
            {
                role: 'user',
                content: contextPrompt,

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