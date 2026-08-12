import React, { useState } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Footer } from '@/components/shared/Footer'
import { Button } from '@/components/shared/Button'
import { Navbar } from '@/components/shared/Navbar'

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    await new Promise(resolve => setTimeout(resolve, 800))
    setSent(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 pt-16">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-bold text-off-white">Contact <span className="text-premium-gold">Us</span></h1>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <div className="mb-8 space-y-5">
                {[
                  { icon: <MapPin className="h-5 w-5 text-premium-gold" />, label: 'Location', value: 'Lake City, FL' },
                  { icon: <Phone className="h-5 w-5 text-premium-gold" />, label: 'Phone', value: '(386) 555-0100' },
                  { icon: <Mail className="h-5 w-5 text-premium-gold" />, label: 'Email', value: 'info@asmokingque.com' },
                  { icon: <Clock className="h-5 w-5 text-premium-gold" />, label: 'Hours', value: 'Mon–Sat: 11am – 9pm' },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-3">
                    {item.icon}
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-smoke-gray">{item.label}</div>
                      <div className="font-medium text-off-white">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {sent ? (
                <div className="rounded-xl bg-smoke-dark p-8 text-center">
                  <div className="mb-4 text-5xl">📨</div>
                  <h2 className="mb-2 text-xl font-bold text-off-white">Message sent!</h2>
                  <p className="text-smoke-gray">We&apos;ll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-bone-white">Name *</label>
                    <input name="name" required value={form.name} onChange={event => setForm(current => ({ ...current, name: event.target.value }))} className="w-full rounded-lg border border-smoke-gray bg-smoke-dark px-3 py-2.5 text-off-white outline-none focus:border-premium-gold" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-bone-white">Email *</label>
                    <input name="email" type="email" required value={form.email} onChange={event => setForm(current => ({ ...current, email: event.target.value }))} className="w-full rounded-lg border border-smoke-gray bg-smoke-dark px-3 py-2.5 text-off-white outline-none focus:border-premium-gold" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-bone-white">Message *</label>
                    <textarea name="message" rows={5} required value={form.message} onChange={event => setForm(current => ({ ...current, message: event.target.value }))} className="w-full resize-none rounded-lg border border-smoke-gray bg-smoke-dark px-3 py-2.5 text-off-white outline-none focus:border-premium-gold" />
                  </div>
                  <Button type="submit" size="lg" className="w-full">Send Message</Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
