import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        message,
      },
    })

    return NextResponse.json({ success: true, id: contactMessage.id })
  } catch (error) {
    console.error("Error saving contact message:", error)
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 })
  }
}
