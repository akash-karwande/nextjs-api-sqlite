import { Customer } from "@/models/customer";

export default async function Customers() {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? process.env.APP_URL ?? "http://localhost:3000";

    const response = await fetch(`${baseUrl}/api/v1/customers`, {
        cache: "no-store"
    });
    const data = await response.json();

    if(!response.ok) {
        return <div>Failed load the customers</div>
    }

    return <div>
        {data.map((item: Customer) => {
            return <div key={item.id}>
                <p>{item.name}</p>
                 <p>{item.id}</p>
                 <p>{item.address}</p>
            </div>
        })}
    </div>
}