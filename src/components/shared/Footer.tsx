import React from 'react'
import { Link } from 'react-router-dom'
import { Flame, Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-smoke-dark bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xl font-bold text-premium-gold">
              <Flame className="h-5 w-5 text-ember-red" />
              Anderson&apos;s Smoking Que
            </div>
            <p className="text-sm italic text-smoke-gray">Smoked Low. Served Bold.</p>
            <p className="mt-2 text-sm text-smoke-gray">Serving Lake City and surrounding areas.</p>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-bone-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-smoke-gray">
              {[
                { href: '/menu', label: 'Our Menu' },
                { href: '/specials', label: 'Daily Specials' },
                { href: '/catering', label: 'Catering' },
                { href: '/order-status', label: 'Track Order' },
                { href: '/reviews', label: 'Reviews' },
                { href: '/contact', label: 'Contact Us' },
              ].map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-premium-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-bone-white">Contact</h3>
            <ul className="space-y-2 text-sm text-smoke-gray">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-premium-gold" />
                Lake City, FL
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-premium-gold" />
                (386) 555-0100
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-premium-gold" />
                info@asmokingque.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-smoke-dark pt-6 text-center text-xs text-smoke-gray">
          © {new Date().getFullYear()} Anderson&apos;s Smoking Que. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
