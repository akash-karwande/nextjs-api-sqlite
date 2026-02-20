## Customer Account System

Customer Account System is a Next.js application that centralizes customer data and showcases four foundational banking/fintech modules:

- **Authentication** – secure entry points for customers and internal teams
- **Account Management** – CRUD tooling for profiles, contact info, and compliance details
- **Transactions** – visibility into loan and payment activity with Prisma-backed persistence
- **Notifications** – a placeholder channel to demonstrate how status updates and alerts would flow through the UI

Use the app as a reference implementation for building customer-facing portals backed by SQLite + Prisma.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to explore the Customer Account System dashboard.

## Feature Modules

| Module | Highlights |
| --- | --- |
| Authentication | Secure entry points, session placeholders, extensible guards |
| Account Management | Customer listing, profile creation, and edit flows |
| Transactions | Loan + payment data surfaced via Prisma services |
| Notifications | UI hooks for future email/SMS/in-app alert integrations |

## API Endpoints

- `GET  /api/v1/customers`
- `POST /api/v1/customers`
- `GET  /api/v1/customers/[id]`
- `PUT  /api/v1/customers/[id]`
- `DELETE /api/v1/customers/[id]`

These endpoints power Account Management and Transactions modules. Extend them for Authentication and Notifications as needed.
