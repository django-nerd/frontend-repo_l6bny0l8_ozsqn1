export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 sm:p-12 text-white">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Move your next lot with AgriWise</h2>
              <p className="mt-3 text-lg/7 text-emerald-100">Create your account to post a lot or start bidding. No monthly fees — pay only when a trade settles.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <a href="#" className="inline-flex justify-center rounded-lg bg-white px-5 py-3 text-base font-semibold text-emerald-700 shadow-sm hover:bg-emerald-50">Create free account</a>
              <a href="/test" className="inline-flex justify-center rounded-lg bg-emerald-500/20 px-5 py-3 text-base font-semibold text-white ring-1 ring-inset ring-white/40 hover:bg-emerald-500/30">Check system status</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
