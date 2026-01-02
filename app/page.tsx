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

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => go("pricing")}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-semibold hover:opacity-90 transition"
                >
                  Get Access
                </button>
                <button
                  onClick={() => go("manual")}
                  className="px-6 py-3 rounded-xl border border-white/15 text-white font-semibold hover:bg-white/5 transition"
                >
                  Read the Manual
                </button>
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
              <Pricing />
            </AnimatedPanel>

            <AnimatedPanel show={active === "manual"}>
              <Manual />
            </AnimatedPanel>

            <AnimatedPanel show={active === "faq"}>
              <FAQ />
            </AnimatedPanel>
          </div>
        </div>
      </section>
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

function Overview() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
        Overview
      </h2>
      <p className="text-slate-300 max-w-3xl">
        Most retirement tools are vague. This one is built to answer the
        decisions that actually matter — with deterministic, transparent
        results you can verify.
      </p>
    </div>
  );
}

function HowItWorks() {
  return <div className="text-slate-300">How it works</div>;
}
function Pricing() {
  return <div className="text-slate-300">Pricing</div>;
}
function Manual() {
  return <div className="text-slate-300">Manual</div>;
}
function FAQ() {
  return <div className="text-slate-300">FAQ</div>;
}
