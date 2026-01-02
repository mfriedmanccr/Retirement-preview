 "use client";

import { useMemo, useRef, useState } from "react";

type TabKey = "overview" | "how" | "pricing" | "manual" | "faq";

export default function Home() {
  const [active, setActive] = useState<TabKey>("overview");
  const panelsRef = useRef<HTMLDivElement | null>(null);

  const tabs = useMemo(
    () => [
      { key: "overview" as const, label: "Overview" },
      { key: "how" as const, label: "How it Works" },
      { key: "pricing" as const, label: "Pricing" },
      { key: "manual" as const, label: "Manual" },
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
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-semibold">DIY Retirement Lab Pro</div>
          <nav className="flex gap-2">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => go(t.key)}
                className={`px-3 py-2 rounded-xl text-sm transition ${
                  active === t.key
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-14">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Know exactly when you can retire —
          <span className="block text-slate-300 mt-2">and why.</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl">
          A professional-grade retirement planning engine that answers the hard
          questions: retirement timing, spending safety, Social Security
          strategy, and how long your money lasts — for{" "}
          <span className="text-white font-semibold">$150</span>.
        </p>

        {/* PROFESSIONAL COST MESSAGE (PRIMARY) */}
        <p className="mt-4 text-base md:text-lg text-slate-400 max-w-3xl">
          Hiring a professional financial planner to do this level of analysis
          typically costs{" "}
          <span className="text-slate-200 font-semibold">
            several thousand dollars
          </span>{" "}
          — often with opaque assumptions and limited scenario testing.
        </p>

        <p className="mt-3 text-base md:text-lg text-slate-400 max-w-3xl">
          DIY RLP delivers the same class of analysis in{" "}
          <span className="text-slate-200 font-semibold">
            Microsoft Excel
          </span>{" "}
          — a format you already know, with fully transparent calculations.
        </p>

        <p className="mt-3 text-base md:text-lg text-slate-400 max-w-3xl">
          Even if you’re already retired, DIY RLP helps you{" "}
          <span className="text-slate-200 font-semibold">
            spend with confidence
          </span>{" "}
          and validate that your plan still holds.
        </p>

        <div className="mt-8 flex gap-3">
          <button
            onClick={() => go("pricing")}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-semibold"
          >
            Get Access
          </button>
          <button
            onClick={() => go("manual")}
            className="px-6 py-3 rounded-xl border border-white/15"
          >
            Read the Manual
          </button>
        </div>
      </section>

      {/* Tabs Content */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div ref={panelsRef} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
          {active === "overview" && <Overview />}
          {active === "how" && <HowItWorks />}
          {active === "pricing" && <Pricing />}
          {active === "manual" && <Manual />}
          {active === "faq" && <FAQ />}
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} DIY Retirement Lab Pro
      </footer>
    </main>
  );
}

/* -------- Sections -------- */

function Overview() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Overview</h2>

      <p className="text-slate-300 max-w-3xl">
        Most retirement tools are vague. Professional planners often rely on
        proprietary software, simplified assumptions, and opaque projections —
        and charge thousands of dollars for a single plan.
      </p>

      <p className="text-slate-400 max-w-3xl">
        DIY RLP gives you the same decision-grade modeling logic, with full
        transparency and unlimited scenario testing, at a fraction of the cost.
      </p>
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">How it works</h2>
      <ul className="list-disc list-inside text-slate-300 space-y-2">
        <li>Enter your real numbers in Excel</li>
        <li>Run deterministic, repeatable scenarios</li>
        <li>Compare retirement age, SS timing, spending, and markets</li>
        <li>Make confident, informed decisions</li>
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Pricing</h2>

      {/* PROFESSIONAL COST MESSAGE (CONVERSION) */}
      <p className="text-slate-300 max-w-3xl">
        A comparable analysis from a professional financial planner typically
        costs{" "}
        <span className="text-white font-semibold">$3,000–$7,500+</span>, often
        requires meetings, and may limit how many scenarios you can test.
      </p>

      <p className="text-slate-400 max-w-3xl">
        DIY RLP gives you unlimited modeling, full transparency, and complete
        control — for a simple one-time price.
      </p>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 max-w-md">
        <div className="text-4xl font-extrabold text-white">$150</div>
        <div className="text-slate-400 mt-1">One-time · No subscription</div>

        <ul className="mt-6 space-y-2 text-slate-300">
          <li>✔ Excel-based, transparent model</li>
          <li>✔ Social Security strategy comparison</li>
          <li>✔ Tax-aware cash flow projections</li>
          <li>✔ Unlimited scenarios & contingencies</li>
        </ul>
      </div>
    </div>
  );
}

function Manual() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Quick Start Manual</h2>
      <p className="text-slate-300 max-w-3xl">
        DIY RLP is delivered as a Microsoft Excel workbook. All inputs are
        visible. All calculations are transparent. Same inputs always produce
        the same results.
      </p>

      <ol className="list-decimal list-inside text-slate-300 space-y-2">
        <li>Open the workbook</li>
        <li>Enter your inputs</li>
        <li>Review assumptions</li>
        <li>Compare scenarios</li>
        <li>Stress-test and validate your plan</li>
      </ol>
    </div>
  );
}

function FAQ() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">FAQ</h2>

      <p className="text-slate-300 max-w-3xl">
        <strong>Is this replacing a financial advisor?</strong>  
        It replaces the modeling portion — the part that usually costs thousands.
      </p>

      <p className="text-slate-300 max-w-3xl">
        <strong>I’m already retired. Is this useful?</strong>  
        Yes. It helps validate safe spending and stress-test your current plan.
      </p>
    </div>
  );
}

