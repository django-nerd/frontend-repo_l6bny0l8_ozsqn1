import { Menu, Leaf, ShoppingCart, User } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight">AgriWise Trade</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="#trust" className="hover:text-gray-900">Trust & Safety</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <User className="h-4 w-4" /> Sign in
            </a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700">
              <ShoppingCart className="h-4 w-4" /> Get started
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 py-2 text-sm text-gray-700">
              <a href="#features" className="rounded-md px-3 py-2 hover:bg-gray-50">Features</a>
              <a href="#how" className="rounded-md px-3 py-2 hover:bg-gray-50">How it works</a>
              <a href="#trust" className="rounded-md px-3 py-2 hover:bg-gray-50">Trust & Safety</a>
              <a href="#faq" className="rounded-md px-3 py-2 hover:bg-gray-50">FAQ</a>
            </div>
            <div className="flex items-center gap-2">
              <a href="#" className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-50">Sign in</a>
              <a href="#cta" className="flex-1 rounded-lg bg-emerald-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-emerald-700">Get started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
