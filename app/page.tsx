export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Know exactly when you can retire — and why.
        </h1>

        <p className="text-xl text-gray-700 max-w-3xl mb-8">
          A professional-grade retirement planning model that answers the hard
          questions: when to retire, how much you’ll need, the best age to take
          Social Security, and how long your money will last — for{" "}
          <span className="font-semibold">$150</span>, not thousands.
        </p>

        <p className="text-lg text-gray-600 max-w-3xl mb-10">
          Built for people who want real answers, not vague projections.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#pricing"
            className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Get Access
          </a>
          <a
            href="#how-it-works"
            className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:border-gray-400 transition"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* VALUE BULLETS */}
      <section className="bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <ul className="grid md:grid-cols-2 gap-6 text-lg">
            <li>Determine your earliest safe retirement age</li>
            <li>Compare Social Security claiming strategies side-by-side</li>
            <li>See year-by-year cash flow, taxes, and portfolio balances</li>
            <li>Stress-test bad markets, higher spending, and early retirement</li>
            <li>Model longevity risk and “what-if” scenarios</li>
            <li>Transparent, deterministic logic — no black boxes</li>
          </ul>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">
          If you’re unsure about retirement, this is for you.
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mb-6">
          Most people struggle with the same questions:
        </p>

        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-8">
          <li>Can I retire yet, or do I need to keep working?</li>
          <li>How much is “enough,” and how do I know it’s safe?</li>
          <li>What’s the best age to take Social Security?</li>
          <li>What happens if markets underperform or spending increases?</li>
        </ul>

        <p className="text-lg text-gray-700 max-w-3xl">
          This tool lets you model every scenario and see the results clearly —
          year by year. No sales calls. No generic assumptions. Just a rigorous
          retirement engine you control.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-6">How it works</h2>

          <ol className="space-y-6 text-lg text-gray-700 max-w-3xl">
            <li>
              <span className="font-semibold">1. Input your real numbers.</span>{" "}
              Income, savings, spending, Social Security assumptions, and taxes.
            </li>
            <li>
              <span className="font-semibold">2. Run deterministic models.</span>{" "}
              No Monte Carlo noise. Same inputs always produce the same results.
            </li>
            <li>
              <span className="font-semibold">
                3. Compare scenarios side-by-side.
              </span>{" "}
              Retirement age, SS timing, spending levels, market returns.
            </li>
            <li>
              <span className="font-semibold">4. Make confident decisions.</span>{" "}
              See exactly what works — and what doesn’t.
            </li>
          </ol>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-6">Simple pricing</h2>

        <div className="border rounded-xl p-8 max-w-md">
          <h3 className="text-2xl font-semibold mb-2">$150 one-time</h3>
          <p className="text-gray-700 mb-6">
            A professional-grade retirement planning system you own and control.
          </p>

          <ul className="space-y-2 text-gray-700 mb-6">
            <li>✔ Full retirement modeling workbook</li>
            <li>✔ Social Security strategy analysis</li>
            <li>✔ Tax-aware cash-flow projections</li>
            <li>✔ Scenario and contingency testing</li>
          </ul>

          <a
            href="#"
            className="block text-center px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Get Access
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-gray-600">
          © {new Date().getFullYear()} DIY Retirement Lab Pro. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
