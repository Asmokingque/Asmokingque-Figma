import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Clock, Flame, MapPin, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Footer } from '@/components/shared/Footer'
import { Button } from '@/components/shared/Button'
import { Navbar } from '@/components/shared/Navbar'

const featuredItems = [
  { id: '1', name: 'Smoked Brisket', description: '12-hour smoked prime brisket, sliced to order', price: 18.99, emoji: '🥩' },
  { id: '2', name: 'BBQ Ribs', description: 'Fall-off-the-bone pork ribs, house rub', price: 22.99, emoji: '🍖' },
  { id: '3', name: 'Pulled Pork Sandwich', description: 'Slow-smoked pork, tangy slaw, toasted brioche', price: 12.99, emoji: '🥪' },
  { id: '4', name: 'Smoked Wings', description: 'Crispy smoked wings, choice of sauce', price: 14.99, emoji: '🍗' },
]

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-b from-bbq-black via-charcoal to-bbq-black pt-16">
        <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-4 flex items-center justify-center gap-2">
              <Flame className="h-8 w-8 text-ember-red" />
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-premium-gold">Premium BBQ</span>
              <Flame className="h-8 w-8 text-ember-red" />
            </div>
            <h1 className="mb-4 text-5xl font-extrabold text-off-white md:text-7xl">
              Anderson&apos;s
              <br />
              <span className="text-premium-gold">Smoking Que</span>
            </h1>
            <p className="mb-8 text-xl italic text-smoke-gray">Smoked Low. Served Bold.</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/menu">
                <Button size="lg">
                  Order Now <ChevronRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/catering">
                <Button variant="secondary" size="lg">Catering Inquiry</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-smoke-gray/30 bg-smoke-dark">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-bone-white">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-premium-gold" />
              Lake City &amp; Surrounding Areas
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-premium-gold" />
              Mon–Sat: 11am–9pm
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-premium-gold" />
              4.9 ★ (200+ Reviews)
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bbq-black py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold text-off-white md:text-4xl">
              Fan <span className="text-premium-gold">Favorites</span>
            </h2>
            <p className="text-smoke-gray">Pit-smoked to perfection, every day</p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-xl border border-smoke-dark bg-charcoal p-6 transition-all hover:border-premium-gold/40"
              >
                <div className="mb-4 text-5xl">{item.emoji}</div>
                <h3 className="mb-1 font-bold text-off-white">{item.name}</h3>
                <p className="mb-4 text-sm text-smoke-gray">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-premium-gold">${item.price.toFixed(2)}</span>
                  <Link to="/menu">
                    <Button size="sm">Add to Cart</Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/menu">
              <Button variant="secondary" size="lg">View Full Menu</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-smoke-dark bg-charcoal py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="mb-4 text-3xl font-bold text-off-white">
              Planning an <span className="text-premium-gold">Event?</span>
            </h2>
            <p className="mb-8 text-smoke-gray">
              We provide full-service BBQ catering for corporate events, weddings, family reunions, and more. Serving Lake City and surrounding areas.
            </p>
            <Link to="/catering">
              <Button variant="gold" size="lg">Request a Catering Quote</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
