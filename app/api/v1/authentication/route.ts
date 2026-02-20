import { NextResponse } from "next/server";

type LoginRequestBody = {
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as LoginRequestBody;

  if (!body.email || !body.password) {
    return NextResponse.json(
      { error: "Email and password are required." },
      { status: 400 }
    );
  }

  // Mock auth: in a real system you would verify hashed passwords + issue JWT/Session
  const user = {
    id: "user-demo-1",
    email: body.email,
    name: "Demo Operator",
    roles: ["admin"],
  };

  const mockToken = "signed.jwt.token.placeholder";
  const expiresIn = 60 * 60; // seconds

  return NextResponse.json({
    token: mockToken,
    expiresIn,
    user,
  });
}