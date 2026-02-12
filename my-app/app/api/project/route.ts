import { db } from "@/config/db";
import { chatTable, frameTable, projectTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { projectId, frameId, messages, uiConfig } = await req.json();

    const user = await currentUser();
    const userEmail = user?.primaryEmailAddress?.emailAddress;

    if (!userEmail) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        await db.insert(projectTable).values({
            projectId: projectId,
            createdBy: userEmail
        });


        await db.insert(frameTable).values({
            frameId: frameId,
            projectId: projectId,
            uiConfig: uiConfig || {},
            version: 1
        });

        await db.insert(chatTable).values({
            projectId: projectId,
            chatMessage: messages,
            createdBy: userEmail
        });

        return NextResponse.json({
            projectId,
            frameId,
            messages
        });

    } catch (e) {
        console.error("DB Error:", e);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}