import { Customer } from "@/models/customer";
import { NextResponse } from "next/server";

// GET /api/customers/[id]
export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {

    const id = (await params).id;
    const customer: Customer = {
        id: parseInt(id),
        name: "John Doe",
        email: "john@example.com",
        phone: "123-456-7890",
        address: "123 Main St, Anytown, USA",
        state: "MH"
    };
    return NextResponse.json({ customer });
}