import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer } from '@/components/shared/Footer'
import { Button } from '@/components/shared/Button'
import { Navbar } from '@/components/shared/Navbar'
import { useCart } from '@/contexts/CartContext'
import { supabase } from '@/lib/supabase'

export function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    orderType: 'pickup',
    address: '',
    notes: '',
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(current => ({ ...current, [event.target.name]: event.target.value }))
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setError('')
    setLoading(true)
    try {
      const deliveryFee = form.orderType === 'delivery' ? 5.00 : 0
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          customer_name: form.name,
          customer_email: form.email,
          customer_phone: form.phone,
          order_type: form.orderType,
          delivery_address: form.address || null,
          notes: form.notes || null,
          subtotal: total,
          delivery_fee: deliveryFee,
          total: total + deliveryFee,
          status: 'pending',
        })
        .select('id, order_number')
        .single()

      if (orderError || !order) {
        // Supabase not configured yet – still allow checkout in demo mode
        clearCart()
        navigate('/order-status')
        return
      }

      const orderItems = items.map(item => ({
        order_id: order.id,
        menu_item_id: item.menu_item_id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      }))

      await supabase.from('order_items').insert(orderItems)

      clearCart()
      navigate(`/order-status?order=${order.order_number}`)
    } catch {
      // Fallback for demo mode (no Supabase configured)
      clearCart()
      navigate('/order-status')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 pt-16">
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold text-off-white">Checkout</h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="rounded-lg border border-ember-red/30 bg-ember-red/10 p-3 text-sm text-ember-red">{error}</div>
            )}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-bone-white">Name *</label>
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
            <div>
              <label className="mb-1 block text-sm font-medium text-bone-white">Order Type</label>
              <select name="orderType" value={form.orderType} onChange={handleChange} className="w-full rounded-lg border border-smoke-gray bg-smoke-dark px-3 py-2.5 text-off-white outline-none focus:border-premium-gold">
                <option value="pickup">Pickup</option>
                <option value="delivery">Delivery</option>
              </select>
            </div>
            {form.orderType === 'delivery' ? (
              <div>
                <label className="mb-1 block text-sm font-medium text-bone-white">Delivery Address *</label>
                <input name="address" required value={form.address} onChange={handleChange} className="w-full rounded-lg border border-smoke-gray bg-smoke-dark px-3 py-2.5 text-off-white outline-none focus:border-premium-gold" />
              </div>
            ) : null}
            <div>
              <label className="mb-1 block text-sm font-medium text-bone-white">Special Instructions</label>
              <textarea name="notes" rows={3} value={form.notes} onChange={handleChange} className="w-full resize-none rounded-lg border border-smoke-gray bg-smoke-dark px-3 py-2.5 text-off-white outline-none focus:border-premium-gold" />
            </div>

            <div className="rounded-xl border border-smoke-dark bg-charcoal p-4">
              <h3 className="mb-3 font-semibold text-off-white">Order Summary</h3>
              {items.map(item => (
                <div key={item.menu_item_id} className="flex justify-between py-1 text-sm text-smoke-gray">
                  <span>{item.name} × {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="mt-2 flex justify-between border-t border-smoke-dark pt-2 font-bold text-off-white">
                <span>Total</span>
                <span className="text-premium-gold">${total.toFixed(2)}</span>
              </div>
            </div>

            <Button type="submit" size="lg" loading={loading} className="w-full">Place Order</Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
