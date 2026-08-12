import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import { Footer } from '@/components/shared/Footer'
import { Button } from '@/components/shared/Button'
import { Navbar } from '@/components/shared/Navbar'
import { supabase } from '@/lib/supabase'

interface OrderResult {
  order_number: string
  status: string
  customer_name: string
  order_type: string
  total: number
  created_at: string
}

const STATUS_LABELS: Record<string, string> = {
  pending: '⏳ Pending Confirmation',
  confirmed: '✅ Order Confirmed',
  preparing: '🔥 Being Prepared',
  ready: '🎉 Ready for Pickup',
  delivered: '📦 Delivered',
  cancelled: '❌ Cancelled',
}

export function OrderStatusPage() {
  const [searchParams] = useSearchParams()
  const [orderId, setOrderId] = useState(searchParams.get('order') ?? '')
  const [loading, setLoading] = useState(false)
  const [order, setOrder] = useState<OrderResult | null>(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const preloaded = searchParams.get('order')
    if (preloaded) {
      void lookupOrder(preloaded)
    }
  }, [])

  async function lookupOrder(id: string) {
    if (!id.trim()) return
    setLoading(true)
    setNotFound(false)
    setOrder(null)
    const { data, error } = await supabase
      .from('orders')
      .select('order_number, status, customer_name, order_type, total, created_at')
      .eq('order_number', id.trim().toUpperCase())
      .single()

    if (error || !data) {
      setNotFound(true)
    } else {
      setOrder(data as OrderResult)
    }
    setLoading(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 pt-16">
        <div className="mx-auto max-w-lg px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="mb-6 text-5xl">📦</div>
          <h1 className="mb-2 text-3xl font-bold text-off-white">Track Your <span className="text-premium-gold">Order</span></h1>
          <p className="mb-8 text-smoke-gray">Enter your order number to check the status.</p>
          <div className="flex gap-2">
            <input
              value={orderId}
              onChange={event => setOrderId(event.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') void lookupOrder(orderId) }}
              placeholder="Order number (e.g. ASQ-ABCD12)"
              className="flex-1 rounded-lg border border-smoke-gray bg-smoke-dark px-4 py-3 text-off-white outline-none focus:border-premium-gold"
            />
            <Button onClick={() => void lookupOrder(orderId)} loading={loading}>
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {notFound && (
            <div className="mt-8 rounded-xl border border-smoke-dark bg-charcoal p-6">
              <p className="text-smoke-gray">No order found for <span className="text-off-white font-mono">{orderId}</span>.</p>
              <p className="mt-1 text-sm text-smoke-gray">Please check your order number and try again.</p>
            </div>
          )}

          {order && (
            <div className="mt-8 rounded-xl border border-smoke-dark bg-charcoal p-6 text-left">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-sm text-smoke-gray">#{order.order_number}</span>
                <span className="text-xs text-smoke-gray">{new Date(order.created_at).toLocaleDateString()}</span>
              </div>
              <div className="mb-2 text-xl font-bold text-premium-gold">
                {STATUS_LABELS[order.status] ?? order.status}
              </div>
              <div className="mt-4 space-y-1 text-sm text-smoke-gray">
                <div className="flex justify-between">
                  <span>Customer</span>
                  <span className="text-off-white">{order.customer_name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Type</span>
                  <span className="text-off-white capitalize">{order.order_type}</span>
                </div>
                <div className="flex justify-between border-t border-smoke-dark pt-2 font-semibold">
                  <span>Total</span>
                  <span className="text-premium-gold">${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
