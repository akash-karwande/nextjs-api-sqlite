import { NextResponse } from "next/server";

const mockAccounts = [
  {
    id: "acct-1001",
    customerId: "cust-1001",
    product: "Savings",
    status: "ACTIVE",
    availableBalance: 18250.54,
    currency: "INR",
    lastUpdated: new Date().toISOString(),
  },
  {
    id: "acct-1002",
    customerId: "cust-1002",
    product: "Loan",
    status: "IN_ARREARS",
    availableBalance: -95000,
    currency: "INR",
    lastUpdated: new Date().toISOString(),
  },
];

export async function GET() {
  return NextResponse.json({ accounts: mockAccounts });
}

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.customerId || !body.product) {
    return NextResponse.json(
      { error: "customerId and product are required." },
      { status: 400 }
    );
  }

  const newAccount = {
    id: `acct-${Date.now()}`,
    customerId: body.customerId,
    product: body.product,
    status: body.status ?? "PENDING",
    availableBalance: body.availableBalance ?? 0,
    currency: body.currency ?? "INR",
    lastUpdated: new Date().toISOString(),
  };

  mockAccounts.push(newAccount);

  return NextResponse.json(newAccount, { status: 201 });
}