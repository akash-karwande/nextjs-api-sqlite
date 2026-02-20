import { NextResponse } from "next/server";

type TransactionType = "DEBIT" | "CREDIT";

type Transaction = {
  id: string;
  accountId: string;
  type: TransactionType;
  amount: number;
  description: string;
  postedAt: string;
};

const transactions: Transaction[] = [
  {
    id: "txn-1001",
    accountId: "acct-1001",
    type: "CREDIT",
    amount: 5000,
    description: "Salary credit",
    postedAt: new Date().toISOString(),
  },
  {
    id: "txn-1002",
    accountId: "acct-1001",
    type: "DEBIT",
    amount: -1200,
    description: "Utility payment",
    postedAt: new Date().toISOString(),
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const accountId = searchParams.get("accountId");

  const filtered = accountId
    ? transactions.filter((txn) => txn.accountId === accountId)
    : transactions;

  return NextResponse.json({ transactions: filtered });
}

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.accountId || !body.amount || !body.type) {
    return NextResponse.json(
      { error: "accountId, amount, and type are required." },
      { status: 400 }
    );
  }

  if (!["DEBIT", "CREDIT"].includes(body.type)) {
    return NextResponse.json(
      { error: "type must be either DEBIT or CREDIT." },
      { status: 422 }
    );
  }

  const transaction: Transaction = {
    id: `txn-${Date.now()}`,
    accountId: body.accountId,
    type: body.type,
    amount: Number(body.amount),
    description: body.description ?? "",
    postedAt: new Date().toISOString(),
  };

  transactions.unshift(transaction);

  return NextResponse.json(transaction, { status: 201 });
}