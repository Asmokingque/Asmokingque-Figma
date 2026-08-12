import React from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { Footer } from '@/components/shared/Footer'
import { Button } from '@/components/shared/Button'
import { Navbar } from '@/components/shared/Navbar'
import { useCart } from '@/contexts/CartContext'

export function CartPage() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex flex-1 items-center justify-center pt-16">
          <div className="text-center">
            <div className="mb-4 text-6xl">🛒</div>
            <h2 className="mb-2 text-2xl font-bold text-off-white">Your cart is empty</h2>
            <p className="mb-6 text-smoke-gray">Add some delicious BBQ to get started!</p>
            <Link to="/menu"><Button size="lg">Browse Menu</Button></Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 pt-16">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-off-white">Your <span className="text-premium-gold">Cart</span></h1>
            <button onClick={clearCart} className="text-sm text-smoke-gray transition-colors hover:text-ember-red" type="button">
              Clear cart
            </button>
          </div>

          <div className="mb-8 space-y-4">
            {items.map(item => (
              <div key={item.menu_item_id} className="flex items-center gap-4 rounded-xl border border-smoke-dark bg-charcoal p-4">
                <div className="flex-1">
                  <div className="font-semibold text-off-white">{item.name}</div>
                  <div className="text-sm text-premium-gold">${item.price.toFixed(2)} each</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.menu_item_id, item.quantity - 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-smoke-dark text-off-white transition-colors hover:bg-smoke-gray"
                    type="button"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="w-6 text-center font-medium text-off-white">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.menu_item_id, item.quantity + 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-smoke-dark text-off-white transition-colors hover:bg-smoke-gray"
                    type="button"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
                <div className="w-20 text-right font-bold text-off-white">${(item.price * item.quantity).toFixed(2)}</div>
                <button onClick={() => removeItem(item.menu_item_id)} className="text-smoke-gray transition-colors hover:text-ember-red" type="button">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-smoke-dark bg-charcoal p-6">
            <div className="mb-6 flex justify-between text-lg font-bold text-off-white">
              <span>Total</span>
              <span className="text-premium-gold">${total.toFixed(2)}</span>
            </div>
            <Link to="/checkout">
              <Button size="lg" className="w-full">Proceed to Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
