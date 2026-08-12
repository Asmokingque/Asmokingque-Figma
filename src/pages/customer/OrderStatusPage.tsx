import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { Footer } from '@/components/shared/Footer'
import { Button } from '@/components/shared/Button'
import { Navbar } from '@/components/shared/Navbar'

export function OrderStatusPage() {
  const [orderId, setOrderId] = useState('')
  const [searched, setSearched] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 pt-16">
        <div className="mx-auto max-w-lg px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="mb-6 text-5xl">📦</div>
          <h1 className="mb-2 text-3xl font-bold text-off-white">Track Your <span className="text-premium-gold">Order</span></h1>
          <p className="mb-8 text-smoke-gray">Enter your order ID to check the status.</p>
          <div className="flex gap-2">
            <input
              value={orderId}
              onChange={event => setOrderId(event.target.value)}
              placeholder="Order ID (e.g. ASQ-12345)"
              className="flex-1 rounded-lg border border-smoke-gray bg-smoke-dark px-4 py-3 text-off-white outline-none focus:border-premium-gold"
            />
            <Button onClick={() => setSearched(true)}>
              <Search className="h-4 w-4" />
            </Button>
          </div>
          {searched && orderId ? (
            <div className="mt-8 rounded-xl border border-smoke-dark bg-charcoal p-6">
              <p className="mb-2 text-sm text-smoke-gray">Order #{orderId}</p>
              <div className="text-xl font-bold text-premium-gold">🔥 Being Prepared</div>
              <p className="mt-2 text-sm text-smoke-gray">Estimated ready: 25–35 minutes</p>
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </div>
  )
}
