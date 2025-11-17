import { MapPin, Gavel, PackageCheck } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { icon: MapPin, title: 'Post a lot', desc: 'Farmers list produce with photos, grade and location.' },
    { icon: Gavel, title: 'Live offers', desc: 'Buyers bid or place instant buys based on verified info.' },
    { icon: PackageCheck, title: 'Pickup & payout', desc: 'We coordinate pickup; funds settle through escrow.' }
  ]

  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, reliable flow</h2>
            <p className="mt-3 text-lg text-gray-600">Every step is optimized for time, quality and trust.</p>

            <div className="mt-8 space-y-5">
              {steps.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-first lg:order-none">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1400&auto=format&fit=crop"
                alt="Grains being tested for quality"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
