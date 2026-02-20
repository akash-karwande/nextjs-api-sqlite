const modules = [
  {
    title: "Authentication",
    description:
      "Secure customer and staff entry points with extensible guards and future-ready SSO hooks.",
  },
  {
    title: "Account Management",
    description:
      "Create, view, and maintain customer profiles, compliance facts, and communication preferences.",
  },
  {
    title: "Transactions",
    description:
      "Surface loan + payment data using Prisma services and keep finance teams informed in real time.",
  },
  {
    title: "Notifications",
    description:
      "Connect email/SMS/in-app channels so customers never miss an important account update.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 py-16 px-6 font-sans dark:bg-black">
      <main className="mx-auto flex max-w-5xl flex-col gap-12">
        <section className="rounded-3xl bg-white p-10 shadow-xl dark:bg-zinc-900">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Customer Account System
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Modern operations hub for authentication, account management, transactions, and
            notifications.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
            Use this reference dashboard to explore how each module ties back to Prisma-powered APIs
            and secure Next.js routes.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {modules.map((module) => (
            <article
              key={module.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:border-indigo-500 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {module.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{module.description}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}