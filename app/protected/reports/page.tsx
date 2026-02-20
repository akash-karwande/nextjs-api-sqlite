export default function Reports() {
  const reports = [
    {
      title: "Authentication Health",
      description:
        "Track login success rates, MFA opt-ins, and potential credential stuffing anomalies in real time.",
      metrics: [
        { label: "Login Success", value: "96.2%" },
        { label: "MFA Coverage", value: "78.5%" },
        { label: "Alerts Open", value: "12" },
      ],
    },
    {
      title: "Account Growth",
      description:
        "Monitor new customer creation, profile enrichments, and relationship manager assignments across regions.",
      metrics: [
        { label: "New Accounts", value: "+128" },
        { label: "Profile Completeness", value: "88%" },
        { label: "RM Coverage", value: "64%" },
      ],
    },
    {
      title: "Payments & Risk",
      description:
        "Surface payment volumes, delinquency trends, and credit exposure scenarios for finance teams.",
      metrics: [
        { label: "Payments Volume", value: "$4.3M" },
        { label: "Delinquency", value: "2.4%" },
        { label: "Credit Exposure", value: "$12.6M" },
      ],
    },
  ];

  const insights = [
    {
      id: "insight-1",
      heading: "North America onboarding surge",
      body: "Account creation for enterprise cohorts is up 22% week over week, suggesting targeted outreach is landing.",
    },
    {
      id: "insight-2",
      heading: "Authentication fatigue signals",
      body: "Retry spikes on password reset flows may require UX refinements or additional CS support hours.",
    },
    {
      id: "insight-3",
      heading: "Payment exception backlog",
      body: "Escalated payment disputes are clustering in LATAM; consider a regionalized operations pod to triage.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
        <header className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-indigo-300">
            Reports Command Center
          </span>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Protected analytics for customer and operations teams
          </h1>
          <p className="max-w-3xl text-sm text-slate-300">
            Explore how authentication, account management, and payment signals come together after
            login. Tailor this view to your own metrics once the auth middleware is wired up.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reports.map((report) => (
            <article
              key={report.title}
              className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/40 to-slate-950 p-6 shadow-lg"
            >
              <div>
                <h2 className="text-lg font-semibold text-white">{report.title}</h2>
                <p className="mt-2 text-sm text-slate-300">{report.description}</p>
              </div>
              <div className="grid grid-cols-3 gap-3 text-sm">
                {report.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex flex-col rounded-2xl border border-indigo-500/20 bg-indigo-500/10 px-3 py-4 text-center"
                  >
                    <span className="text-[0.65rem] uppercase tracking-widest text-indigo-200">
                      {metric.label}
                    </span>
                    <span className="mt-1 text-lg font-semibold text-white">{metric.value}</span>
                  </div>
                ))}
              </div>
              <button className="mt-auto w-full rounded-full border border-indigo-500/40 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-200 transition hover:bg-indigo-500/20">
                View details
              </button>
            </article>
          ))}
        </section>

        <section className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Operational Insights</h2>
              <span className="rounded-full border border-indigo-300/30 bg-indigo-500/20 px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-indigo-200">
                Updated hourly
              </span>
            </div>
            <div className="mt-6 space-y-4">
              {insights.map((insight) => (
                <div
                  key={insight.id}
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-indigo-950/30 to-slate-950 p-4"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-200">
                    {insight.heading}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{insight.body}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-6 rounded-3xl border border-indigo-500/30 bg-indigo-950/40 p-6 text-sm shadow-lg">
            <div>
              <h2 className="text-lg font-semibold text-white">Access Controls</h2>
              <p className="mt-2 text-slate-300">
                Gate this page with NextAuth, Clerk, or your preferred identity provider once ready.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-indigo-200">
                Suggested Roles
              </h3>
              <ul className="mt-3 space-y-3 text-xs text-slate-300">
                <li className="flex items-center justify-between">
                  <span>Operations Admin</span>
                  <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2 py-1">
                    Full access
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Compliance Analyst</span>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1">
                    Reports only
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Relationship Manager</span>
                  <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-1">
                    Customers + alerts
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-indigo-200">
                Next steps
              </h3>
              <p className="mt-2 text-xs text-slate-300">
                Implement middleware at `app/protected/reports/page.tsx` to enforce authenticated
                access before going live.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
