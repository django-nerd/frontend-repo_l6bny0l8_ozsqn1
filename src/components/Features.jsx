import { Scale, Truck, Shield, BadgeCheck } from 'lucide-react'

const features = [
  {
    icon: Scale,
    title: 'Fair pricing',
    desc: 'Benchmark against regional mandis and historical trends with transparent fees.'
  },
  {
    icon: Truck,
    title: 'Logistics handled',
    desc: 'Integrated pickups, routing and delivery tracking from farmgate to warehouse.'
  },
  {
    icon: Shield,
    title: 'Verified parties',
    desc: 'KYC for growers and buyers, escrow and grading to reduce counterparty risk.'
  },
  {
    icon: BadgeCheck,
    title: 'Quality grades',
    desc: 'Standardized grading and moisture checks ensure you get what you paid for.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Built for real-world agri trade</h2>
          <p className="mt-3 text-lg text-gray-600">Tools that move crops faster and money safer.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
