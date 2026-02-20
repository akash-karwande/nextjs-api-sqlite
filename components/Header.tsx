"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "/", label: "Overview" },
  { href: "/customers", label: "Customers" },
  { href: "/customers/add", label: "Add Customer" },
  { href: "/protected/reports", label: "Reports" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const handleMenuClick = (href: string) => {
    if (pathname !== href) {
      router.push(href);
    }
  };

  return (
    <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600 text-white font-bold">
            CA
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-zinc-500">Customer Account System</p>
            <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Operations Hub</p>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-between gap-6">
          <nav className="flex flex-nowrap items-center gap-4 text-sm font-medium whitespace-nowrap">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleMenuClick(link.href);
                  }}
                  className={`rounded-full px-4 py-2 transition ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-lg"
                      : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="relative rounded-full border border-zinc-200 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-600 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-zinc-700 dark:text-zinc-300"
            >
              Auth Status
              <span className="ml-2 inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </button>
            <button
              type="button"
              className="relative rounded-full bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-indigo-50 hover:text-indigo-600 dark:bg-zinc-800 dark:text-zinc-100"
            >
              Notifications
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">
                3
              </span>
            </button>
            <div className="flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-2 text-sm text-zinc-700 transition hover:border-indigo-500 dark:border-zinc-700 dark:text-zinc-200">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500"></div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-wide text-zinc-500">Account</p>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Demo User</p>
              </div>
            </div>
            <button
              type="button"
              className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-indigo-500"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}