"use client"
import { SidebarTrigger } from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

function AppHeader() {
    return (
        <div className='p-3 shadow-sm flex items-center justify-between border-b bg-white dark:bg-black'>
            <SidebarTrigger />

            <UserButton />
        </div>
    )
}

export default AppHeader