"use client";

import { useMemo, useRef, useState } from "react";

type TabKey = "overview" | "how" | "pricing" | "screenshots" | "faq";

export default function Home() {
  const [active, setActive] = useState<TabKey>("overview");
  const panelsRef = useRef<HTMLDivElement | null>(null);

  const tabs = useMemo(
    () => [
      { key: "overview" as const, label: "Overview" },
      { key: "how" as const, label: "How it Works" },
      { key: "pricing" as const, label: "Pricing" },
      { key: "screenshots" as const, label: "Screenshots" },
      { key: "faq" as const, label: "FAQ" },
    ],
    []
  );

  function go(tab: TabKey) {
    setActive(tab);
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
              <div className="font-semibold tracking-tight">
                DIY Retirement Lab Pro
              </div>
              <div className="text-xs text-slate-400">
                Deterministic • Transparent • Audit-ready
              </div>
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

      {/* Hero */}
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
                <span className="block text-slate-300 font-semibold mt-2">
                  and why.
                </span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl">
                A professional-grade retirement planning engine that answers the
                hard questions: retirement timing, spending safety, Social
                Security strategy, and how long your money lasts — for{" "}
                <span className="font-semibold text-white">$150</span>.
              </p>

              <p className="mt-4 text-base md:text-lg text-slate-400 max-w-2xl">
                Hiring a professional for this level of retirement planning
                commonly costs{" "}
                <span className="text-slate-200 font-semibold">
                  several thousand dollars
                </span>
                . DIY RLP gives you that same class of decision-grade modeling
                with unlimited scenario testing.
              </p>

              <p className="mt-4 text-base md:text-lg text-slate-400 max-w-2xl">
                Built in{" "}
                <span className="text-slate-200 font-semibold">
                  Microsoft Excel
                </span>{" "}
                — a familiar format you already know, with transparent inputs
                and fully visible calculations.
              </p>

              <p className="mt-4 text-base md:text-lg text-slate-400 max-w-2xl">
                Even if you’re already retired, DIY RLP helps you{" "}
                <span className="text-slate-200 font-semibold">
                  spend with confidence
                </span>
                , stress-test contingencies, and validate that your plan still
                holds.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => go("pricing")}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-semibold hover:opacity-90 transition"
                >
                  Get Access
                </button>
                <button
                  onClick={() => go("screenshots")}
                  className="px-6 py-3 rounded-xl border border-white/15 text-white font-semibold hover:bg-white/5 transition"
                >
                  View Screenshots
                </button>
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-3 max-w-2xl">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold text-white">
                    Deterministic
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    Same inputs → same outputs. No black-box Monte Carlo.
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold text-white">
                    Transparent
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    Every number is traceable. You can audit each step.
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold text-white">
                    Scenario-ready
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    Change assumptions and compare side-by-side.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-black/40">
                <img
                  src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1400&q=80"
                  alt="Financial planning desk"
                  className="h-72 md:h-96 w-full object-cover"
                />
                <div className="p-5 text-sm text-slate-300">
                  Built for serious planners who want clear, repeatable answers.
                </div>
              </div>

              <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-sm font-semibold text-white">
                  What you get
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  <li>• Year-by-year cash flow and ending balances</li>
                  <li>• Social Security + withdrawals + taxes in one view</li>
                  <li>• Stress testing: spending, returns, claim ages</li>
                  <li>• A workbook designed to be auditable, not mysterious</li>
                </ul>
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
              <Overview go={go} />
            </AnimatedPanel>

            <AnimatedPanel show={active === "how"}>
              <HowItWorks />
            </AnimatedPanel>

            <AnimatedPanel show={active === "pricing"}>
              <Pricing />
            </AnimatedPanel>

            <AnimatedPanel show={active === "screenshots"}>
              <Screenshots />
            </AnimatedPanel>

            <AnimatedPanel show={active === "faq"}>
              <FAQ go={go} />
            </AnimatedPanel>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-slate-400 flex justify-between">
          <div>© {new Date().getFullYear()} DIY Retirement Lab Pro</div>
          <div className="flex gap-4">
            <button onClick={() => go("pricing")} className="hover:text-white">
              Pricing
            </button>
            <button
              onClick={() => go("screenshots")}
              className="hover:text-white"
            >
              Screenshots
            </button>
            <button onClick={() => go("faq")} className="hover:text-white">
              FAQ
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}

function AnimatedPanel({
  show,
  children,
}: {
  show: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={[
        "transition-all duration-300 ease-out",
        show
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-2 h-0 overflow-hidden pointer-events-none",
      ].join(" ")}
    >
      <div className={show ? "block" : "hidden"}>{children}</div>
    </div>
  );
}

function Overview({ go }: { go: (tab: TabKey) => void }) {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Overview
        </h2>

        <p className="text-slate-300 max-w-3xl">
          Most retirement tools are vague. DIY RLP is built for decisions that
          actually matter: when you can retire, how much you can safely spend,
          when to claim Social Security, and what happens when assumptions
          change.
        </p>

        <p className="text-slate-400 max-w-3xl">
          You’ll see year-by-year results with a transparent logic trail—spend,
          income sources, taxes, and end balances—so you can understand the
          “why,” not just the “what.”
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold text-white">Decision-grade</div>
          <div className="text-sm text-slate-400 mt-2">
            Built to answer specific choices: retire date, spending level,
            claiming age, and withdrawal behavior.
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold text-white">Audit-ready</div>
          <div className="text-sm text-slate-400 mt-2">
            Transparent inputs and calculations. You can trace and verify each
            line item.
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold text-white">Scenario testing</div>
          <div className="text-sm text-slate-400 mt-2">
            Compare “what-if” runs: spending, returns, inflation assumptions,
            Social Security timing, and more.
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-white">
              Want to see how it works?
            </div>
            <div className="text-sm text-slate-400 mt-1">
              The process is simple: enter inputs, run scenarios, compare
              outcomes, decide.
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => go("how")}
              className="px-4 py-2 rounded-xl border border-white/15 text-white font-semibold hover:bg-white/5 transition"
            >
              How it Works
            </button>
            <button
              onClick={() => go("screenshots")}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-semibold hover:opacity-90 transition"
            >
              Screenshots
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          How it works
        </h2>
        <p className="text-slate-300 max-w-3xl">
          DIY RLP is designed to be straightforward: inputs go in, deterministic
          logic runs, and you get a clear year-by-year plan you can verify.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 text-slate-300">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold text-white">1) Enter inputs</div>
          <div className="text-sm text-slate-400 mt-2">
            Accounts, spending goals, Social Security, and assumptions.
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold text-white">
            2) Run a scenario
          </div>
          <div className="text-sm text-slate-400 mt-2">
            The workbook produces year-by-year outputs automatically.
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold text-white">
            3) Compare options
          </div>
          <div className="text-sm text-slate-400 mt-2">
            Test spending levels, claim ages, and return assumptions.
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold text-white">4) Decide</div>
          <div className="text-sm text-slate-400 mt-2">
            Choose the plan you understand and can defend.
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <div className="text-sm font-semibold text-white">
          What makes it different
        </div>
        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          <li>• Deterministic engine: no hidden randomness</li>
          <li>• Transparent outputs: taxes, withdrawals, balances visible</li>
          <li>• Built for iteration: “what-if” testing is the point</li>
          <li>• Excel-native: familiar, editable, and auditable</li>
        </ul>
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Pricing
        </h2>

        <p className="text-slate-300 max-w-3xl">
          Comparable professional planning at this depth commonly costs{" "}
          <span className="text-slate-200 font-semibold">
            several thousand dollars
          </span>
          . DIY RLP gives you full transparency and unlimited scenario testing
          for a one-time price.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 items-start">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="text-4xl font-extrabold text-white">$150</div>
          <div className="text-slate-400 mt-1">One-time · No subscription</div>

          <ul className="mt-6 space-y-2 text-sm text-slate-300">
            <li>• Full Excel workbook</li>
            <li>• Deterministic year-by-year outputs</li>
            <li>• Unlimited scenarios: spending, SS claiming, assumptions</li>
            <li>• Transparent calculations you can audit</li>
          </ul>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-sm font-semibold text-white">Bottom line</div>
            <div className="text-sm text-slate-400 mt-1">
              If you care about the “why” behind the numbers, this is built for
              you.
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <div className="text-sm font-semibold text-white">
            Who this is for
          </div>
          <div className="mt-2 text-sm text-slate-300 space-y-3">
            <p>
              DIY RLP is for people who want a retirement plan they can
              understand, verify, and defend—without paying ongoing fees or
              relying on black-box projections.
            </p>
            <p className="text-slate-400">
              If you can work a spreadsheet and you care about “why the answer
              is the answer,” you’re the target user.
            </p>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-semibold text-white">
                Pre-retirement
              </div>
              <div className="text-sm text-slate-400 mt-1">
                Test timing and spending choices before you commit.
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-semibold text-white">
                Already retired
              </div>
              <div className="text-sm text-slate-400 mt-1">
                Validate the plan and stress test contingencies.
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-semibold text-white">
              What you’re buying
            </div>
            <div className="text-sm text-slate-400 mt-1">
              A decision-grade modeling engine in Excel—transparent by design.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Screenshots() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
        Screenshots
      </h2>

      <p className="text-slate-300 max-w-3xl">
        Program screenshots will live here. This page is intentionally clean for
        now.
      </p>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-slate-400">
        Add your first image block when ready.
      </div>
    </div>
  );
}

function FAQ({ go }: { go: (tab: TabKey) => void }) {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">FAQ</h2>
        <p className="text-slate-300 max-w-3xl">
          Common questions about what DIY RLP is—and what it isn’t.
        </p>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm font-semibold text-white">
            Is this a subscription?
          </div>
          <div className="text-sm text-slate-400 mt-2">
            No. It’s a one-time purchase. You can run unlimited scenarios.
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm font-semibold text-white">
            Is it a black box?
          </div>
          <div className="text-sm text-slate-400 mt-2">
            No. The workbook is designed for transparency: inputs are visible
            and outputs are traceable.
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm font-semibold text-white">
            Does it replace professional advice?
          </div>
          <div className="text-sm text-slate-400 mt-2">
            It replaces the modeling portion of professional planning—the part
            that usually costs thousands—by giving you decision-grade outputs.
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm font-semibold text-white">
            Where can I see the program?
          </div>
          <div className="text-sm text-slate-400 mt-2">
            Use the Screenshots tab to view program visuals.
          </div>
          <button
            onClick={() => go("screenshots")}
            className="mt-4 px-4 py-2 rounded-xl border border-white/15 text-white font-semibold hover:bg-white/5 transition"
          >
            Go to Screenshots
          </button>
        </div>
      </div>
    </div>
  );
}
