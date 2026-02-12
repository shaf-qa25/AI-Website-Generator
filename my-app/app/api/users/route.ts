import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { user } = await req.json();

    try {
        // 1. Check if User Already Exists?
        const userResult = await db.select().from(usersTable)
            //@ts-ignore
            .where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress));

        // 2. If Not Then insert new user
        if (userResult?.length == 0) {
            const result = await db.insert(usersTable).values({
                name: user?.fullName ?? 'NA',
                email: user?.primaryEmailAddress?.emailAddress ?? '',
            }).returning();

            return NextResponse.json(result[0]);
        }

        return NextResponse.json(userResult[0]);

    } catch (e) {
        return NextResponse.json({ error: e });
    }
}