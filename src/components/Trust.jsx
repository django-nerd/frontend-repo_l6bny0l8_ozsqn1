import { ShieldCheck, CheckCircle2, Handshake } from 'lucide-react'

export default function Trust() {
  const items = [
    { icon: ShieldCheck, title: 'Escrow & KYC', desc: 'Funds held in escrow until goods are verified and delivered.' },
    { icon: CheckCircle2, title: 'Quality verification', desc: 'Independent graders and moisture testing at pickup.' },
    { icon: Handshake, title: 'Dispute resolution', desc: 'Clear SLAs and a transparent process for any edge cases.' }
  ]

  return (
    <section id="trust" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trust by design</h2>
          <p className="mt-3 text-lg text-gray-600">We bake safety into every action, so both sides can trade with confidence.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
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
