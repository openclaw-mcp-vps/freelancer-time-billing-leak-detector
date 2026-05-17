export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          For Freelancers &amp; Consultants
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find the hours you worked<br />but never billed
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect Toggl, Harvest, or Clockify and let AI surface forgotten timers, scope creep, and undercharged projects — before your invoice goes out.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start catching leaks — $8/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No credit card required to try.</p>

        {/* Social proof strip */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-[#8b949e]">
          <div><span className="text-white font-semibold text-xl block">$1,200+</span>avg recovered/yr</div>
          <div><span className="text-white font-semibold text-xl block">3 APIs</span>Toggl · Harvest · Clockify</div>
          <div><span className="text-white font-semibold text-xl block">AI</span>pattern detection</div>
        </div>
      </section>

      {/* Features row */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-6">
        {[
          { icon: "⏱", title: "Forgotten Timers", body: "Detects sessions that were never linked to an invoice or marked billable." },
          { icon: "📈", title: "Scope Creep Alerts", body: "AI flags projects where logged hours consistently exceed the quoted estimate." },
          { icon: "🔔", title: "Automated Alerts", body: "Weekly digest emails so you catch leaks before the billing cycle closes." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.body}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$8<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to stop leaving money on the table.</p>
          <ul className="text-left space-y-2 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Connect up to 3 time tracking accounts",
              "AI-powered unbilled hour detection",
              "Scope creep pattern analysis",
              "Weekly email digest",
              "Exportable billing gap reports"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which time trackers are supported?",
              a: "We currently integrate with Toggl Track, Harvest, and Clockify via their official APIs. More integrations are on the roadmap."
            },
            {
              q: "How does the AI detect unbilled hours?",
              a: "It cross-references your logged time entries against invoiced amounts and project budgets, then uses pattern recognition to flag anomalies like recurring short sessions, late-night entries, and budget overruns."
            },
            {
              q: "Is my time tracking data secure?",
              a: "We use read-only OAuth tokens and never store raw time entries longer than needed to generate your report. Data is encrypted in transit and at rest."
            }
          ].map((item) => (
            <div key={item.q} className="border-b border-[#30363d] pb-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-8 text-center text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Billing Leak Detector. All rights reserved.
      </footer>
    </main>
  );
}
