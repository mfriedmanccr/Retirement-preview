 "use client";

import { useMemo, useRef, useState } from "react";

type TabKey = "overview" | "how" | "pricing" | "faq";

export default function Home() {
  const [active, setActive] = useState<TabKey>("overview");
  const panelsRef = useRef<HTMLDivElement | null>(null);

  const tabs = useMemo(
    () => [
      { key: "overview" as const, label: "Overview" },
      { key: "how" as const, label: "How it Works" },
      { key: "pricing" as const, label: "Pricing" },
      { key: "faq" as const, label: "FAQ" },
    ],
    []
  );

  function go(tab: TabKey) {
    setActive(tab);
    // scroll to the tab content area so the user sees the section change
    requestAnimationFrame(() => {
      panelsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500" />
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">DIY Retirement Lab Pro</div>
              <div className="text-xs text-slate-400">Deterministic • Transparent • Audit-ready</div>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => go(t.key)}
                className={[
                  "px-3 py-2 rounded-xl text-sm font-medium transition",
                  active === t.key
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:bg-white/5 hover:text-white",
                ].join(" ")}
              >
                {t.label}
              </button>
            ))}

            <button
              onClick={() => go("pricing")}
              className="ml-2 hidden sm:inline-flex px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-semibold hover:opacity-90 transition"
            >
              Get Access
            </button>
          </nav>
        </div>
      </header>

      {/* Hero + Photo */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Know exactly when you can retire —
                <span className="block text-slate-300 font-semibold mt-2">and why.</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl">
                A professional-grade retirement planning engine that answers the hard questions:
                retirement timing, spending safety, Social Security strategy, and how long your money lasts —
                for <span className="font-semibold text-white">$150</span>.
              </p>

              <p className="mt-4 text-base md:text-lg text-slate-400 max-w-2xl">
                Even if you’re already retired, DIY RLP helps you <span className="text-slate-200 font-semibold">spend with confidence</span>,
                stress-test contingencies, and validate that your plan still holds.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => go("pricing")}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-semibold hover:opacity-90 transition"
                >
                  Get Access
                </button>
                <button
                  onClick={() => go("how")}
                  className="px-6 py-3 rounded-xl border border-white/15 text-white font-semibold hover:bg-white/5 transition"
                >
                  See How It Works
                </button>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 gap-3 text-sm text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="font-semibold text-white mb-1">Decision-first</div>
                  <div>Retirement age + SS timing + taxes in one model.</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="font-semibold text-white mb-1">Retired already?</div>
                  <div>Confirm safe spending and stress-test your current plan.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-black/40">
                <img
                  src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1400&q=80"
                  alt="Financial planning desk"
                  className="h-72 md:h-96 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <div className="text-sm text-slate-300">
                    Built for serious planners who want clear, repeatable answers.
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xs text-slate-500">
                Photo: Unsplash (hotlinked). Swap to your own images anytime.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div
          ref={panelsRef}
          className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden"
        >
          <div className="p-6 sm:p-10">
            <AnimatedPanel show={active === "overview"}>
              <Overview />
            </AnimatedPanel>

            <AnimatedPanel show={active === "how"}>
              <HowItWorks />
            </AnimatedPanel>

            <AnimatedPanel show={active === "pricing"}>
              <Pricing onBuy={() => go("pricing")} />
            </AnimatedPanel>

            <AnimatedPanel show={active === "faq"}>
              <FAQ />
            </AnimatedPanel>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-slate-400 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} DIY Retirement Lab Pro</div>
          <div className="flex gap-4">
            <button onClick={() => go("pricing")} className="hover:text-white transition">
              Pricing
            </button>
            <button onClick={() => go("faq")} className="hover:text-white transition">
              FAQ
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}

function AnimatedPanel({ show, children }: { show: boolean; children: React.ReactNode }) {
  return (
    <div
      className={[
        "transition-all duration-300 ease-out",
        show
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-2 h-0 overflow-hidden pointer-events-none",
      ].join(" ")}
      aria-hidden={!show}
    >
      <div className={show ? "block" : "hidden"}>{children}</div>
    </div>
  );
}

function Overview() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Overview</h2>
        <p className="mt-3 text-slate-300 max-w-3xl">
          Most retirement tools are vague. This one is built to answer the decisions that actually matter —
          with deterministic, transparent results you can verify.
        </p>
        <p className="mt-3 text-slate-400 max-w-3xl">
          And if you’re already retired, it helps you validate safe spending, adapt to market changes,
          and test “what if” scenarios before they become real problems.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {[
          ["Earliest safe retirement age", "Know when you can stop working — with year-by-year clarity."],
          ["Social Security strategy", "Compare 62 vs 65 vs 67+ and see tradeoffs and breakpoints."],
          ["Spend with confidence (retired too)", "Stress-test your current plan and confirm it still holds."],
        ].map(([title, desc]) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="font-semibold text-white">{title}</div>
            <div className="mt-2 text-slate-300 text-sm leading-relaxed">{desc}</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6">
        <div className="text-sm text-slate-300">
          <span className="font-semibold text-white">Bottom line:</span> model and test every scenario before
          making irreversible decisions.
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">How it works</h2>
        <p className="mt-3 text-slate-300 max-w-3xl">
          Designed to be professional, repeatable, and audit-ready — without requiring you to hire an advisor.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {[
          ["1. Input your numbers", "Income, assets, spending, SS assumptions, taxes."],
          ["2. Run deterministic outputs", "Same inputs → same results. No noise."],
          ["3. Compare scenarios", "Retire earlier/later. Spend more/less. SS timing."],
          ["4. Decide with confidence", "See exactly what works — and what doesn’t."],
        ].map(([title, desc]) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="font-semibold text-white">{title}</div>
            <div className="mt-2 text-slate-300 text-sm leading-relaxed">{desc}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?auto=format&fit=crop&w=1400&q=80"
            alt="Spreadsheet and planning"
            className="h-48 w-full object-cover"
            loading="lazy"
          />
          <div className="p-6 text-sm text-slate-300">
            Transparent assumptions so you can audit results.
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1400&q=80"
            alt="Charts and analytics"
            className="h-48 w-full object-cover"
            loading="lazy"
          />
          <div className="p-6 text-sm text-slate-300">
            Side-by-side scenarios make tradeoffs obvious.
          </div>
        </div>
      </div>
    </div>
  );
}

function Pricing({ onBuy }: { onBuy: () => void }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Pricing</h2>
        <p className="mt-3 text-slate-300 max-w-3xl">
          Thousands of dollars of planning logic at your fingertips — for a simple one-time price.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 items-stretch">
        <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-baseline gap-3">
            <div className="text-4xl font-extrabold text-white">$150</div>
            <div className="text-slate-300">one-time</div>
          </div>
          <div className="mt-2 text-slate-400 text-sm">No subscription. You own it.</div>

          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-slate-200">
            {[
              "Professional-grade retirement model",
              "Social Security strategy comparison",
              "Tax-aware cash-flow projections",
              "Scenario & contingency testing",
              "Deterministic, audit-ready outputs",
              "Built for real decision-making",
            ].map((x) => (
              <li key={x} className="flex gap-2 items-start">
                <span className="mt-0.5 inline-flex h-5 w-5 rounded-md bg-cyan-400/20 text-cyan-200 items-center justify-center">
                  ✓
                </span>
                <span className="text-slate-200">{x}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-8 flex flex-col">
          <div className="text-sm text-slate-300">Ready to stop guessing?</div>
          <div className="mt-2 text-xl font-semibold text-white">Get Access</div>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Purchase, download, and start modeling immediately.
          </p>
          <a
            href="#"
            className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-semibold text-center hover:opacity-90 transition"
          >
            Buy for $150
          </a>
          <button
            onClick={onBuy}
            className="mt-3 text-xs text-slate-400 hover:text-white transition text-left"
          >
            (Replace button link with your checkout URL)
          </button>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const items = [
    {
      q: "Is this a calculator or a real planning model?",
      a: "It’s a deterministic planning model designed to produce audit-ready, repeatable outputs — not a black-box estimate.",
    },
    {
      q: "Who is this for?",
      a: "People who struggle with retirement timing, how much is enough, Social Security strategy, and whether their money lasts under real-world contingencies — including those already retired who want to spend confidently.",
    },
    {
      q: "I’m already retired. Is this still useful?",
      a: "Yes. Use it to validate safe spending, stress-test market and expense shocks, and confirm your plan still holds over time.",
    },
    {
      q: "Why deterministic instead of Monte Carlo?",
      a: "Deterministic runs are repeatable and easier to audit. They are ideal for understanding exact tradeoffs and decision points.",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">FAQ</h2>
        <p className="mt-3 text-slate-300 max-w-3xl">Clear answers to common questions.</p>
      </div>

      <div className="space-y-3">
        {items.map((it) => (
          <details
            key={it.q}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 open:bg-white/[0.06] transition"
          >
            <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
              <span className="font-semibold text-white">{it.q}</span>
              <span className="text-slate-400 group-open:rotate-180 transition">⌄</span>
            </summary>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">{it.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
