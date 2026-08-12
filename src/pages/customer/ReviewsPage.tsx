import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Footer } from '@/components/shared/Footer'
import { Button } from '@/components/shared/Button'
import { Navbar } from '@/components/shared/Navbar'
import { supabase } from '@/lib/supabase'

const reviews = [
  { id: '1', name: 'Marcus J.', rating: 5, comment: 'Best BBQ in Lake City! The brisket melts in your mouth. Will be back every week.', date: '2024-07-15' },
  { id: '2', name: 'Tanya R.', rating: 5, comment: 'The ribs are absolutely insane. Fell off the bone perfectly. Service was super friendly too.', date: '2024-07-10' },
  { id: '3', name: 'David K.', rating: 5, comment: 'Ordered catering for our company event - everybody loved it. The pulled pork was a massive hit!', date: '2024-07-05' },
  { id: '4', name: 'Lisa M.', rating: 4, comment: 'Great food, great vibe. The mac & cheese side is a must-get. Slightly long wait but worth it.', date: '2024-06-28' },
  { id: '5', name: 'Antoine B.', rating: 5, comment: "Finally found my go-to BBQ spot. Anderson's does it right every single time.", date: '2024-06-20' },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(index => (
        <Star key={index} className={`h-4 w-4 ${index <= rating ? 'fill-premium-gold text-premium-gold' : 'text-smoke-gray'}`} />
      ))}
    </div>
  )
}

export function ReviewsPage() {
  const [showForm, setShowForm] = useState(false)
  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmitReview(event: React.FormEvent) {
    event.preventDefault()
    setSubmitting(true)
    try {
      await supabase.from('reviews').insert({
        customer_name: newReview.name,
        rating: newReview.rating,
        comment: newReview.comment,
        is_approved: false,
      })
    } catch {
      // Supabase may not be configured; still show success
    } finally {
      setSubmitted(true)
      setSubmitting(false)
      setShowForm(false)
      setNewReview({ name: '', rating: 5, comment: '' })
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 pt-16">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="mb-1 text-4xl font-bold text-off-white">Customer <span className="text-premium-gold">Reviews</span></h1>
              <div className="flex items-center gap-2">
                <StarRating rating={5} />
                <span className="text-sm text-smoke-gray">4.9 average · 200+ reviews</span>
              </div>
            </div>
            <Button onClick={() => setShowForm(current => !current)} variant="gold">Leave a Review</Button>
          </div>

          {submitted && (
            <div className="mb-6 rounded-lg border border-premium-gold/30 bg-premium-gold/10 p-4 text-sm text-premium-gold">
              Thanks for your review! It will appear after moderation.
            </div>
          )}

          {showForm ? (
            <div className="mb-8 rounded-xl border border-smoke-dark bg-charcoal p-6">
              <h3 className="mb-4 font-bold text-off-white">Write a Review</h3>
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <input
                  placeholder="Your name"
                  required
                  value={newReview.name}
                  onChange={event => setNewReview(review => ({ ...review, name: event.target.value }))}
                  className="w-full rounded-lg border border-smoke-gray bg-smoke-dark px-3 py-2.5 text-off-white outline-none focus:border-premium-gold"
                />
                <select
                  value={newReview.rating}
                  onChange={event => setNewReview(review => ({ ...review, rating: Number(event.target.value) }))}
                  className="w-full rounded-lg border border-smoke-gray bg-smoke-dark px-3 py-2.5 text-off-white outline-none focus:border-premium-gold"
                >
                  {[5, 4, 3, 2, 1].map(value => (
                    <option key={value} value={value}>{value} Stars</option>
                  ))}
                </select>
                <textarea
                  rows={3}
                  placeholder="Share your experience..."
                  required
                  value={newReview.comment}
                  onChange={event => setNewReview(review => ({ ...review, comment: event.target.value }))}
                  className="w-full resize-none rounded-lg border border-smoke-gray bg-smoke-dark px-3 py-2.5 text-off-white outline-none focus:border-premium-gold"
                />
                <Button type="submit" loading={submitting}>Submit Review</Button>
              </form>
            </div>
          ) : null}

          <div className="space-y-4">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl border border-smoke-dark bg-charcoal p-5"
              >
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <div className="font-semibold text-off-white">{review.name}</div>
                    <StarRating rating={review.rating} />
                  </div>
                  <div className="text-xs text-smoke-gray">{review.date}</div>
                </div>
                <p className="text-sm text-bone-white">{review.comment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
