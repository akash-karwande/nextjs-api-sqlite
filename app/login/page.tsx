"use client";

import { useState } from "react";
import Link from "next/link";

const loginRoadmap = [
  {
    step: "01",
    title: "Authenticate",
    description:
      "Validate user credentials securely with mock auth tokens for local development.",
  },
  {
    step: "02",
    title: "Authorize",
    description:
      "Model role-based access so operations teams see only the reports they need.",
  },
  {
    step: "03",
    title: "Monitor",
    description:
      "Track login events, MFA enrollment, and session health from the dashboard.",
  },
];

export default function LoginPage() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/v1/authentication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        setFeedback(data.error ?? "Login failed. Please try again.");
        return;
      }

      const data = await response.json();
      setFeedback(`Welcome back, ${data.user.name}! Token: ${data.token}`);
    } catch {
      setFeedback("Unexpected error. Please retry.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-indigo-950 to-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-indigo-500/40 bg-white/10 p-10 shadow-2xl backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-300">
              Secure Access
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Operator sign-in for customer intelligence
            </h1>
            <p className="mt-4 text-sm text-zinc-200">
              Use the mock credentials below to explore how authentication flows can power
              downstream customer data views, alerts, and secure reporting.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6 rounded-2xl bg-black/40 p-8 shadow-inner"
            >
              <div>
                <label className="text-xs font-medium uppercase tracking-wider text-indigo-200">
                  Email address
                </label>
                <div className="mt-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 focus-within:border-indigo-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-5 w-5 text-indigo-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.05 1.916l-7.5 4.5a2.25 2.25 0 01-2.25 0l-7.5-4.5a2.25 2.25 0 01-1.05-1.916V6.75"
                    />
                  </svg>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(event) =>
                      setFormState((prev) => ({ ...prev, email: event.target.value }))
                    }
                    placeholder="demo@customerhq.io"
                    className="w-full bg-transparent text-sm text-white placeholder:text-zinc-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium uppercase tracking-wider text-indigo-200">
                  Password
                </label>
                <div className="mt-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 focus-within:border-indigo-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-5 w-5 text-indigo-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 8.25V6a3.75 3.75 0 10-7.5 0v2.25m-1.5 0h10.5a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-10.5A2.25 2.25 0 015.25 18V10.5a2.25 2.25 0 012.25-2.25z"
                    />
                  </svg>
                  <input
                    type="password"
                    required
                    value={formState.password}
                    onChange={(event) =>
                      setFormState((prev) => ({ ...prev, password: event.target.value }))
                    }
                    placeholder="Enter your password"
                    className="w-full bg-transparent text-sm text-white placeholder:text-zinc-500 focus:outline-none"
                  />
                </div>
              </div>

              {feedback && (
                <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                  {feedback}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-indigo-500 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:bg-indigo-800/40"
              >
                {isSubmitting ? "Signing in…" : "Sign In"}
              </button>

              <div className="flex items-center justify-between text-xs text-zinc-400">
                <Link href="#" className="hover:text-white hover:underline">
                  Forgot password?
                </Link>
                <Link href="#" className="hover:text-white hover:underline">
                  Create account
                </Link>
              </div>
            </form>
          </div>

          <aside className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 text-sm shadow-inner">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-300">
                Auth Roadmap
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white">
                Stage login to unlock protected reporting pipelines
              </h2>
              <p className="mt-4 text-zinc-300">
                Centralize your authentication flows to keep customer data guarded and to drive
                context-aware insights for account specialists and compliance leads.
              </p>
            </div>

            <div className="space-y-4">
              {loginRoadmap.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-black/30 px-4 py-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-500/50 bg-indigo-500/20 text-sm font-semibold text-indigo-200">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-indigo-400/30 bg-indigo-500/10 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-indigo-200">Demo credentials</p>
              <p className="mt-3 text-sm text-white">
                Email: <span className="font-semibold">demo@customerhq.io</span>
              </p>
              <p className="mt-1 text-sm text-white">
                Password: <span className="font-semibold">password123</span>
              </p>
              <p className="mt-4 text-xs text-zinc-400">
                Replace the mock POST handler in `app/api/v1/authentication/route.ts` with your auth
                provider to make this live.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
