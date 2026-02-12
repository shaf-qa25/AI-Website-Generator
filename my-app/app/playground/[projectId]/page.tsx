"use client"
import React, { useState } from 'react'
import PlaygroundHeader from '../_components/playgroundHeader'
import { useParams } from 'next/navigation'
import ChatSection from '../_components/chatSection';
import UIRenderer from '../_components/uiRenderer';

function Playground() {
    const params = useParams();
    const { projectId } = params;

    // TODO: Is state ko baad mein Context ya API se connect karenge
    const [uiConfig, setUiConfig] = useState([]);

    return (
        <div className='h-screen flex flex-col'>
            <PlaygroundHeader />

            <div className='flex flex-1 overflow-hidden'>
                <div className='w-[450px] border-r h-full bg-white dark:bg-zinc-950 flex flex-col shrink-0'>
                    <ChatSection />
                </div>

                <div className='w-2/3 bg-slate-100 h-full overflow-auto'>
                    <UIRenderer config={uiConfig} />
                </div>
            </div>
        </div>
    )
}

export default Playground