export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          Slack Productivity
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Turn Slack threads into<br />
          <span className="text-[#58a6ff]">actionable todos</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          AI scans your Slack conversations, extracts action items, assigns owners, and sets deadlines — automatically. No more lost tasks buried in threads.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $12/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No credit card required to try.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["AI-powered extraction", "Assignee detection", "Deadline parsing", "Real-time webhooks", "Slack OAuth"].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#8b949e]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-1">Pro</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay on top of action items</p>
          <div className="mb-6">
            <span className="text-5xl font-bold text-white">$12</span>
            <span className="text-[#8b949e] ml-1">/mo</span>
          </div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited Slack workspaces",
              "AI action item extraction",
              "Assignee & deadline detection",
              "Real-time webhook updates",
              "Todo dashboard & tracking",
              "Email digest summaries"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does the AI extract todos from Slack?</h3>
            <p className="text-[#8b949e] text-sm">We connect to your Slack workspace via OAuth and listen to threads via webhooks. Our AI model reads each message, identifies action items, detects who is responsible, and parses any mentioned deadlines — all in real time.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Is my Slack data secure?</h3>
            <p className="text-[#8b949e] text-sm">Yes. We only read the threads you explicitly authorize, never store raw message content beyond processing, and use industry-standard encryption. You can revoke access at any time from your Slack settings.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription?</h3>
            <p className="text-[#8b949e] text-sm">Absolutely. Cancel anytime from your billing portal with one click. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Slack Thread Todo Extractor. All rights reserved.
      </footer>
    </main>
  )
}
