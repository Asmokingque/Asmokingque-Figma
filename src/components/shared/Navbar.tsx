import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Flame, Menu, ShoppingCart, X } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/specials', label: 'Specials' },
  { href: '/catering', label: 'Catering' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { itemCount } = useCart()
  const location = useLocation()

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-smoke-dark bg-bbq-black/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-premium-gold">
            <Flame className="h-6 w-6 text-ember-red" />
            <span>Anderson&apos;s Smoking Que</span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  location.pathname === link.href ? 'text-premium-gold' : 'text-bone-white hover:text-premium-gold',
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative p-2 text-bone-white hover:text-premium-gold" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 ? (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-crimson text-xs font-bold text-white">
                  {itemCount}
                </span>
              ) : null}
            </Link>
            <button className="p-2 text-bone-white hover:text-premium-gold md:hidden" onClick={() => setOpen(current => !current)} type="button" aria-label="Toggle navigation">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="border-t border-smoke-dark bg-charcoal md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'block rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  location.pathname === link.href ? 'bg-smoke-dark text-premium-gold' : 'text-bone-white hover:bg-smoke-dark',
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  )
}
