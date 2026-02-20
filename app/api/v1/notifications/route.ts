import { NextResponse } from "next/server";

type NotificationChannel = "EMAIL" | "SMS" | "IN_APP";

type NotificationPayload = {
  id: string;
  customerId: string;
  channel: NotificationChannel;
  title: string;
  message: string;
  createdAt: string;
  read: boolean;
};

const notifications: NotificationPayload[] = [
  {
    id: "note-1",
    customerId: "cust-1001",
    channel: "EMAIL",
    title: "Monthly statement",
    message: "Your July statement is ready in the portal.",
    createdAt: new Date().toISOString(),
    read: false,
  },
  {
    id: "note-2",
    customerId: "cust-1002",
    channel: "SMS",
    title: "Payment reminder",
    message: "Your loan payment is due tomorrow.",
    createdAt: new Date().toISOString(),
    read: false,
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const customerId = searchParams.get("customerId");

  const filtered = customerId
    ? notifications.filter((note) => note.customerId === customerId)
    : notifications;

  return NextResponse.json({ notifications: filtered });
}

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.customerId || !body.channel || !body.title || !body.message) {
    return NextResponse.json(
      {
        error: "customerId, channel, title, and message are required.",
      },
      { status: 400 }
    );
  }

  if (!["EMAIL", "SMS", "IN_APP"].includes(body.channel)) {
    return NextResponse.json(
      { error: "channel must be EMAIL, SMS, or IN_APP." },
      { status: 422 }
    );
  }

  const notification: NotificationPayload = {
    id: `note-${Date.now()}`,
    customerId: body.customerId,
    channel: body.channel,
    title: body.title,
    message: body.message,
    createdAt: new Date().toISOString(),
    read: false,
  };

  notifications.unshift(notification);

  return NextResponse.json(notification, { status: 201 });
}