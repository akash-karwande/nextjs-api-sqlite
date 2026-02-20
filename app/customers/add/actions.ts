"use server";

import { createCustomer } from "@/services/customerService";

type AddCustomerState = {
    message: string;
    success: boolean;
};

export default async function addCustomer(
    _prevState: AddCustomerState,
    formData: FormData
) {
    try {
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const address = formData.get("address") as string;
        const data = {
            name,
            email,
            phone,
            address
        };
        const result = await createCustomer(data);
        return {
            message: 'Customer added with id ' + result.id,
            success: true
        }
    } catch {
        return {
            message: "Failed to add customer",
            success: false
        }
    }
}