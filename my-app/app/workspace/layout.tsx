import { SidebarProvider } from '@/components/ui/sidebar';
import React from 'react'
import { AppSidebar } from './_components/AppSidebar';
import AppHeader from './_components/AppHeader';

function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="flex-1">
                <AppHeader />
                {children}</div>
        </SidebarProvider>
    )
}

export default Layout
