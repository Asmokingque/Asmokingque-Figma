import React from 'react'
import { motion } from 'framer-motion'
import { Footer } from '@/components/shared/Footer'
import { Navbar } from '@/components/shared/Navbar'

const specials = [
  { id: '1', title: 'Monday Madness', description: '$5 off any combo meal every Monday', emoji: '🔥', valid: 'Every Monday' },
  { id: '2', title: 'Rib Wednesday', description: 'Half rack ribs + 2 sides for $19.99', emoji: '🍖', valid: 'Every Wednesday' },
  { id: '3', title: 'Family Friday', description: 'Family pack: 2 lbs brisket, 4 sides, 4 drinks - $59.99', emoji: '👨‍👩‍👧‍👦', valid: 'Every Friday' },
  { id: '4', title: 'Weekend Warrior', description: 'Free side with any entree Sat & Sun', emoji: '⚡', valid: 'Sat & Sun' },
]

export function SpecialsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 pt-16">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="mb-2 text-4xl font-bold text-off-white">Current <span className="text-premium-gold">Specials</span></h1>
          <p className="mb-10 text-smoke-gray">Fresh deals, every week.</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {specials.map((special, index) => (
              <motion.div
                key={special.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-smoke-dark bg-charcoal p-6 transition-all hover:border-premium-gold/40"
              >
                <div className="mb-3 text-4xl">{special.emoji}</div>
                <h3 className="mb-1 text-xl font-bold text-off-white">{special.title}</h3>
                <p className="mb-3 text-smoke-gray">{special.description}</p>
                <span className="rounded-full bg-crimson/20 px-2 py-1 text-xs text-crimson">{special.valid}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
