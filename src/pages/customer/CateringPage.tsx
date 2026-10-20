import React, { useState } from 'react'
import { Footer } from '@/components/shared/Footer'
import { Button } from '@/components/shared/Button'
import { Navbar } from '@/components/shared/Navbar'

export function CateringPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', eventDate: '', guestCount: '', eventType: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(current => ({ ...current, [event.target.name]: event.target.value }))
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 pt-16">
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="mb-2 text-4xl font-bold text-off-white">Catering <span className="text-premium-gold">Inquiry</span></h1>
          <p className="mb-8 text-smoke-gray">Tell us about your event and we&apos;ll get back to you within 24 hours.</p>

          {submitted ? (
            <div className="rounded-xl bg-smoke-dark p-8 text-center">
              <div className="mb-4 text-5xl">✅</div>
              <h2 className="mb-2 text-2xl font-bold text-off-white">Inquiry Received!</h2>
              <p className="text-smoke-gray">We&apos;ll contact you within 24 hours to discuss your catering needs.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-bone-white">Your Name *</label>
                  <input name="name" required value={form.name} onChange={handleChange} className="w-full rounded-lg border border-smoke-gray bg-smoke-dark px-3 py-2.5 text-off-white outline-none focus:border-premium-gold" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-bone-white">Phone *</label>
                  <input name="phone" required value={form.phone} onChange={handleChange} className="w-full rounded-lg border border-smoke-gray bg-smoke-dark px-3 py-2.5 text-off-white outline-none focus:border-premium-gold" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-bone-white">Email *</label>
                <input name="email" type="email" required value={form.email} onChange={handleChange} className="w-full rounded-lg border border-smoke-gray bg-smoke-dark px-3 py-2.5 text-off-white outline-none focus:border-premium-gold" />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-bone-white">Event Date *</label>
                  <input name="eventDate" type="date" required value={form.eventDate} onChange={handleChange} className="w-full rounded-lg border border-smoke-gray bg-smoke-dark px-3 py-2.5 text-off-white outline-none focus:border-premium-gold" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-bone-white">Estimated Guests *</label>
                  <input name="guestCount" type="number" min="1" required value={form.guestCount} onChange={handleChange} className="w-full rounded-lg border border-smoke-gray bg-smoke-dark px-3 py-2.5 text-off-white outline-none focus:border-premium-gold" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-bone-white">Event Type</label>
                <select name="eventType" value={form.eventType} onChange={handleChange} className="w-full rounded-lg border border-smoke-gray bg-smoke-dark px-3 py-2.5 text-off-white outline-none focus:border-premium-gold">
                  <option value="">Select event type</option>
                  <option>Corporate Event</option>
                  <option>Wedding</option>
                  <option>Family Reunion</option>
                  <option>Birthday Party</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-bone-white">Additional Notes</label>
                <textarea name="notes" rows={4} value={form.notes} onChange={handleChange} className="w-full resize-none rounded-lg border border-smoke-gray bg-smoke-dark px-3 py-2.5 text-off-white outline-none focus:border-premium-gold" />
              </div>
              <Button type="submit" size="lg" loading={loading} className="w-full">Submit Inquiry</Button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
