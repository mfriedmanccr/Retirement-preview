export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-24">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-8">
            Know exactly when you can retire —
            <span className="block text-gray-500 font-semibold mt-2">
              and why.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-10">
            A professional-grade retirement planning engine that answers the
            hard questions: retirement timing, spending safety, Social Security
            strategy, and how long your money lasts — for{" "}
            <span className="font-semibold text-gray-900">$150</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#pricing"
              className="px-7 py-4 bg-black text-white rounded-xl text-lg font-medium hover:bg-gray-800 transition"
            >
              Get Access
            </a>
            <a
              href="#how-it-works"
              className="px-7 py-4 border border-gray-300 rounded-xl text-lg font-medium hover:border-gray-400 transition"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* VALUE GRID */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
          {[
            "Find your earliest safe retirement age",
            "Compare Social Security strategies visually",
            "See year-by-year cash flow and taxes",
            "Stress-test markets, spending, and longevity",
            "Model real-world contingencies",
            "Transparent, deterministic logic — no black boxes",
          ].map((text) => (
            <div
              key={text}
              className="bg-white p-8 rounded-2xl border border-gray-200"
            >
              <p className="text-lg text-gray-800">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          If retirement feels uncertain, this is built for you.
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <ul className="space-y-4 text-lg text-gray-700">
            <li>• “Can I retire yet — or do I need to keep working?”</li>
            <li>• “How much is enough, and how do I know?”</li>
            <li>• “What’s the best age to take Social Security?”</li>
            <li>• “What if markets disappoint or expenses rise?”</li>
          </ul>

          <p className="text-lg text-gray-700 leading-relaxed">
            This tool lets you answer those questions with clarity.
            Every assumption is visible. Every scenario is testable.
            You see exactly what works — and what doesn’t — before
            making irreversible decisions.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            How it works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              ["Input real numbers", "Income, assets, spending, SS, taxes"],
              ["Run deterministic models", "No Monte Carlo noise"],
              ["Compare scenarios", "Retirement age, SS timing, markets"],
              ["Decide with confidence", "Clear yes / no answers"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-white p-8 rounded-2xl border border-gray-200"
              >
                <h3 className="font-semibold text-xl mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Simple, honest pricing
        </h2>

        <div className="max-w-md bg-white border border-gray-200 rounded-3xl p-10">
          <h3 className="text-3xl font-bold mb-2">$150</h3>
          <p className="text-gray-600 mb-8">
            One-time. No subscription. You own it.
          </p>

          <ul className="space-y-3 text-gray-700 mb-10">
            <li>✔ Professional-grade retirement model</li>
            <li>✔ Social Security optimization</li>
            <li>✔ Tax-aware cash-flow projections</li>
            <li>✔ Scenario & contingency testing</li>
          </ul>

          <a
            href="#"
            className="block text-center px-8 py-4 bg-black text-white rounded-xl text-lg font-medium hover:bg-gray-800 transition"
          >
            Get Access
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-500">
          © {new Date().getFullYear()} DIY Retirement Lab Pro
        </div>
      </footer>
    </main>
  );
}
