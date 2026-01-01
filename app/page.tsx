export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border">
              <span className="text-sm font-semibold">XL</span>
            </div>
            <div className="leading-tight">
              <div className="font-semibold">DIY Retirement Lab Pro</div>
              <div className="text-xs text-slate-500">
                Professional-grade retirement planning for about $150.
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a className="hover:underline" href="#what">
              What is DIY RLP
            </a>
            <a className="hover:underline" href="#features">
              Features
            </a>
            <a className="hover:underline" href="#pricing">
              Pricing
            </a>
            <a className="hover:underline" href="#faq">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              className="hidden rounded-xl border px-4 py-2 text-sm hover:bg-slate-50 sm:inline-block"
              href="#pricing"
            >
              View pricing
            </a>
            <a
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
              href="#get-it"
            >
              Get it
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="pt-14 md:pt-20 pb-10">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
            <div>
              <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                Transparent • Deterministic • Audit-ready
              </div>

             <h1 className="text-3xl md:text-4xl font-semibold leading-snug tracking-tight">
              Financial planners often charge tens of thousands of dollars to model retirement.
              <span className="block mt-2">
              DIY Retirement Lab Pro does the same work - for about $150.
              </span>
             </h1>

              <p className="mt-4 max-w-xl text-base text-slate-600 md:text-lg">
                DIY Retirement Lab Pro lets you model it all; accumulation pre-retirement,
                year-by-year cash flow, Social Security taxation logic, RMD mechanics,
                and explicit withdrawal sequencing, all without black-box projections.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Year-by-year engine",
                  "Tax logic visible",
                  "Scenario testing",
                  "Formula-protected",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border px-3 py-1 text-sm text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm text-white hover:bg-slate-800"
                >
                  See pricing
                  <span className="ml-2">→</span>
                </a>
                <a
                  href="#what"
                  className="inline-flex items-center justify-center rounded-xl border px-5 py-2.5 text-sm hover:bg-slate-50"
                >
                  What makes it different
                </a>
              </div>

              <p className="mt-6 max-w-xl text-xs text-slate-500">
                Disclaimer: This workbook is an educational planning tool and does not
                provide tax, legal, or investment advice.
              </p>
            </div>

            <div className="rounded-2xl border p-5 shadow-sm">
              <div className="text-sm font-semibold">Preview (replace with screenshots)</div>
              <p className="mt-1 text-sm text-slate-600">
                Later: drop in 2–4 workbook screenshots (blur personal numbers).
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {["Screenshot 1", "Screenshot 2", "Screenshot 3", "Screenshot 4"].map(
                  (label) => (
                    <div
                      key={label}
                      className="flex aspect-[4/3] items-center justify-center rounded-2xl border bg-slate-50 text-xs text-slate-500"
                    >
                      {label}
                    </div>
                  )
                )}
              </div>

              <div className="mt-4 text-sm text-slate-600">
                Tip: once this loads, we can polish wording and add real images.
              </div>
            </div>
          </div>
        </section>

        {/* What isDIY RLP */}
        <section id="what" className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              What can DIY RLP do
            </h2>
            <p className="mt-2 max-w-3xl text-base text-slate-600 md:text-lg">
              A deterministic retirement cash-flow workbook designed to test every imaginable outcome.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Deterministic year-by-year engine",
                  desc: "See what happens each year: spending need, SS, RMDs, withdrawals, taxes, and ending balances.",
                },
                {
                  title: "Tax mechanics you can audit",
                  desc: "Provisional income and taxable SS logic are modeled transparently so you can verify the math.",
                },
                {
                  title: "Scenario testing without chaos",
                  desc: "Change claim age, spending patterns, returns, and sequencing—then compare outcomes consistently.",
                },
              ].map((f) => (
                <div key={f.title} className="rounded-2xl border p-5 shadow-sm">
                  <div className="text-lg font-semibold">{f.title}</div>
                  <div className="mt-2 text-sm text-slate-600">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-14 md:py-20 border-t">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Features
            </h2>
            <p className="mt-2 max-w-3xl text-base text-slate-600 md:text-lg">
              Built for serious DIY planners and professionals who want controllable assumptions.
            </p>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border p-5 shadow-sm">
                <div className="text-lg font-semibold">Included</div>
                <div className="mt-1 text-sm text-slate-600">Core capabilities of the workbook</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {[
                    "Separate taxable vs tax-deferred account mechanics",
                    "RMD-driven withdrawals (configurable rules)",
                    "SS claiming age + COLA modeling",
                    "Federal tax estimation framework (transparent)",
                    "Withdrawal sequencing rules (configurable)",
                    "Reporting view suitable for client discussions",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <span>✓</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border p-5 shadow-sm">
                <div className="text-lg font-semibold">Designed for reliability</div>
                <div className="mt-1 text-sm text-slate-600">Beyond a typical spreadsheet</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {[
                    "Clear inputs vs locked calculation sections",
                    "Whole-dollar rounding (consistent outputs)",
                    "Versioned assumptions tab (change log friendly)",
                    "Validation checks for common input errors",
                    "Examples for step-down vs inflationary spending approaches",
                    "Template scenarios to copy and modify",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <span>✓</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-14 md:py-20 border-t">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Pricing
            </h2>
            <p className="mt-2 max-w-3xl text-base text-slate-600 md:text-lg">
              One-time purchase. Optional updates/support tiers if you want them.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                {
                  name: "Personal",
                  price: "$149",
                  note: "one-time",
                  items: [
                    "Workbook + example scenarios",
                    "Deterministic year-by-year cash-flow view",
                    "SS taxation + RMD mechanics visible",
                    "Free updates for 12 months",
                  ],
                },
                {
                  name: "Pro",
                  price: "$399",
                  note: "one-time",
                  items: [
                    "Everything in Personal",
                    "Advisor-friendly reporting views",
                    "Client-ready layout inside workbook",
                    "Priority support (email)",
                  ],
                },
              ].map((p) => (
                <div key={p.name} className="rounded-2xl border p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold">{p.name}</div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                      Most popular
                    </span>
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <div className="text-3xl font-semibold">{p.price}</div>
                    <div className="text-slate-500">{p.note}</div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {p.items.map((x) => (
                      <li key={x} className="flex gap-2">
                        <span>✓</span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#get-it"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm text-white hover:bg-slate-800"
                  >
                    Choose {p.name}
                    <span className="ml-2">→</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-6 text-sm text-slate-600">
              Replace pricing later. For payments, link buttons to Gumroad/Lemon Squeezy/Stripe.
            </div>
          </div>
        </section>

        {/* Get it */}
        <section id="get-it" className="py-14 md:py-20 border-t">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Get it
            </h2>
            <p className="mt-2 max-w-3xl text-base text-slate-600 md:text-lg">
              For now, this is a placeholder. Later you can connect it to checkout or an email list.
            </p>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border p-6 shadow-sm">
                <div className="text-lg font-semibold">Join the list / request purchase link</div>
                <p className="mt-1 text-sm text-slate-600">
                  Later: connect this to Mailchimp/ConvertKit, or replace with a checkout button.
                </p>

                <div className="mt-4 grid gap-3">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    className="rounded-xl border px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200"
                    placeholder="you@example.com"
                  />
                  <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800">
                    Submit
                  </button>
                  <p className="text-xs text-slate-500">No spam.</p>
                </div>
              </div>

              <div className="rounded-2xl border p-6 shadow-sm">
                <div className="text-lg font-semibold">What you’ll receive</div>
                <p className="mt-1 text-sm text-slate-600">
                  Set expectations to reduce support burden.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {[
                    "Protected workbook file (.xlsx/.xlsm depending on your features)",
                    "Quick-start guide (PDF or a ‘Start Here’ tab)",
                    "Example scenarios (copy to start)",
                    "Update policy (e.g., 12 months included)",
                    "Support policy (email, scope)",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <span>✓</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-14 md:py-20 border-t">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">FAQ</h2>
            <p className="mt-2 max-w-3xl text-base text-slate-600 md:text-lg">
              Answer the questions that stop people from buying.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                {
                  q: "Is this financial advice?",
                  a: "No. It’s an educational planning tool. For advice, consult a qualified professional.",
                },
                { q: "What Excel version do I need?", a: "Specify your minimum supported version (e.g., Microsoft 365 / Excel 2021)." },
                { q: "Can I customize assumptions?", a: "Yes—inputs are editable; calculation areas can be protected to prevent accidental changes." },
                { q: "Does it model state taxes?", a: "If not included, say so explicitly. If included, explain the method." },
                { q: "Do you offer refunds?", a: "Set a clear policy for digital goods." },
                { q: "Can advisors use it with clients?", a: "If yes, define licensing (single user vs firm use)." },
              ].map((x) => (
                <div key={x.q} className="rounded-2xl border p-6 shadow-sm">
                  <div className="font-semibold">{x.q}</div>
                  <div className="mt-2 text-sm text-slate-600">{x.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="text-sm">
                <div className="font-semibold">[DIY Retirement Plan Pro]</div>
                <div className="text-slate-500">
                  © {new Date().getFullYear()} [YOUR NAME OR LLC]. All rights reserved.
                </div>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                <a className="hover:underline" href="#pricing">
                  Pricing
                </a>
                <a className="hover:underline" href="#faq">
                  FAQ
                </a>
                <span>Privacy</span>
                <span>Terms</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
