"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader
} from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import { HelpCircle, Settings } from 'lucide-react'

export function AppSidebar() {
    const [projectList, setProjectList] = useState([]);

    return (
        <Sidebar>
            <SidebarHeader className="p-5">
                <div className="flex items-center gap-2">
                    <Image src={'/logo.svg'} alt="logo" width={35} height={35} />
                    <h2 className="font-bold text-xl">AI Website Builder</h2>
                </div>

                <Link href={'/workspace'} className="mt-5 w-full">
                    <Button className="w-full">+ Add New Project</Button>
                </Link>
            </SidebarHeader>

            <SidebarContent className="p-2">
                <SidebarGroup>
                    <SidebarGroupLabel>Projects</SidebarGroupLabel>

                    {/* Show message if no projects exist */}
                    {projectList.length == 0 && (
                        <h2 className="p-3 text-sm text-gray-400">No Project Found</h2>
                    )}
                </SidebarGroup>

                <SidebarGroup />
            </SidebarContent>



            <SidebarFooter className="p-5 border-t">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-all">
                        <Settings className="h-5 w-5 text-gray-500" />
                        <span className="text-sm font-medium">Settings</span>
                    </div>

                    <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-all">
                        <HelpCircle className="h-5 w-5 text-gray-500" />
                        <span className="text-sm font-medium">Help & Support</span>
                    </div>

                    <div className="flex items-center gap-3 p-2">
                        <UserButton showName />
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}