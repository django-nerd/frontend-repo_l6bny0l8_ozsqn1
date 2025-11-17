import { ArrowRight, ShieldCheck, Sprout } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 right-1/2 h-72 w-[120vw] -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-100 via-emerald-50 to-transparent blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-800 ring-1 ring-inset ring-emerald-200">
              <ShieldCheck className="h-4 w-4" /> Verified, fair and fast
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              The trusted marketplace for farm-to-buyer trading
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              AgriWise connects growers, aggregators and buyers with transparent pricing, instant verification and logistics built in.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-emerald-700">
                Start trading <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-base font-medium text-gray-700 hover:bg-gray-50">
                See how it works
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                  <Sprout className="h-5 w-5" />
                </div>
                <span>Quality checks at source</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                  ₹
                </div>
                <span>Smart price discovery</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1400&auto=format&fit=crop"
                alt="Fresh produce at a wholesale market"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-6 -left-6 hidden rotate-2 rounded-xl bg-white/70 p-4 shadow-md ring-1 ring-gray-200 backdrop-blur lg:block">
              <p className="text-sm font-medium text-gray-800">Live bids</p>
              <p className="text-xs text-gray-600">27 lots active · avg. spread 2.1%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
