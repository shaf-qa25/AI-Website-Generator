import { db } from "@/config/db";
import { chatTable, frameTable, projectTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { projectId, frameId, messages } = await req.json();

    const user = await currentUser();

    try {
        // Step 1: Create Project
        const projectResult = await db.insert(projectTable).values({
            projectId: projectId,
            createdBy: user?.primaryEmailAddress?.emailAddress
        }).returning();

        // Step 2: Create Initial Frame
        const frameResult = await db.insert(frameTable).values({
            frameId: frameId,
            projectId: projectId
        }).returning();

        // Step 3: Save initial User Message in Chat
        const chatResult = await db.insert(chatTable).values({
            chatMessage: messages,
            createdBy: user?.primaryEmailAddress?.emailAddress
        }).returning();

        return NextResponse.json({
            projectId,
            frameId,
            messages
        });

    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}