"use client"
import { SendHorizontal } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

function ChatSection() {
    const [userInput, setUserInput] = useState('');

    return (
        <div className='flex flex-col h-full bg-white dark:bg-zinc-950'>
            {/* 1. Chat Messages Area */}
            <div className='flex-1 overflow-y-auto p-4 space-y-4'>
                <div className='bg-blue-50 dark:bg-zinc-900 p-3 rounded-lg border text-sm'>
                    <p className='font-bold text-blue-600 mb-1'>AI Agent</p>
                    I'm ready! Describe the UI you want to build using our component library.
                </div>
                {/* Yahan user aur AI ke messages map honge */}
            </div>

            <div className='p-4 border-t bg-gray-50 dark:bg-zinc-900'>
                <div className='relative flex items-center'>
                    <textarea
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Describe your UI (e.g. 'Create a dashboard with a navbar and a stats card')"
                        className='w-full p-3 pr-12 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none min-h-[100px] text-sm'
                    />
                    <Button
                        size="icon"
                        className='absolute right-2 bottom-2 h-8 w-8 bg-blue-600 hover:bg-blue-700'
                        disabled={!userInput.trim()}
                    >
                        <SendHorizontal className='h-4 w-4 text-white' />
                    </Button>
                </div>
                <p className='text-[10px] text-center text-gray-400 mt-2'>
                    Deterministic UI Generator • Fixed Components Only
                </p>
            </div>
        </div>
    )
}

export default ChatSection