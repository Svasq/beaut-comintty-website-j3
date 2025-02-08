import { NextResponse } from "next/server"
import { SignJWT } from "jose"
import { sql } from "@vercel/postgres"

export const runtime = "edge"

const secretKey = new TextEncoder().encode(process.env.JWT_SECRET!)

async function hashPassword(password: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

export async function POST(request: Request) {
  const { action, username, email, password } = await request.json()

  if (action === "register") {
    const hashedPassword = await hashPassword(password)

    try {
      await sql`
        INSERT INTO users (username, email, password)
        VALUES (${username}, ${email}, ${hashedPassword})
      `
      return NextResponse.json({ message: "User registered successfully" })
    } catch (error) {
      return NextResponse.json({ error: "Username or email already exists" }, { status: 400 })
    }
  } else if (action === "login") {
    const hashedPassword = await hashPassword(password)

    const result = await sql`
      SELECT * FROM users WHERE email = ${email} AND password = ${hashedPassword}
    `

    if (result.rows.length > 0) {
      const user = result.rows[0]
      const token = await new SignJWT({ userId: user.id })
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("1h")
        .sign(secretKey)

      return NextResponse.json({ token })
    } else {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 })
}

