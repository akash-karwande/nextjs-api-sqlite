import { createCustomer, getCustomers } from "@/services/customerService";
import { NextResponse } from "next/server";



// GET /api/customers
export async function GET(){
    const customers = await getCustomers();
    return NextResponse.json(customers);
}

// POST /api/customers
export async function POST(request: Request) {
    const body = await request.json();
    const customer = await createCustomer(body);
    return NextResponse.json(customer);
}