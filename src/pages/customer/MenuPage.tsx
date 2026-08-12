import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import { Footer } from '@/components/shared/Footer'
import { Button } from '@/components/shared/Button'
import { Navbar } from '@/components/shared/Navbar'
import { useCart } from '@/contexts/CartContext'

const categories = ['All', 'Smoked Meats', 'Sandwiches', 'Sides', 'Drinks', 'Desserts']

const menuItems = [
  { id: '1', name: 'Smoked Brisket (1/2 lb)', description: '12-hour smoked prime brisket', price: 18.99, category: 'Smoked Meats', emoji: '🥩' },
  { id: '2', name: 'Baby Back Ribs (Half Rack)', description: 'Tender pork ribs, house dry rub', price: 22.99, category: 'Smoked Meats', emoji: '🍖' },
  { id: '3', name: 'Smoked Chicken (Half)', description: 'Juicy smoked half chicken', price: 15.99, category: 'Smoked Meats', emoji: '🍗' },
  { id: '4', name: 'Pulled Pork (1/2 lb)', description: 'Slow-smoked pulled pork shoulder', price: 14.99, category: 'Smoked Meats', emoji: '🍖' },
  { id: '5', name: 'Pulled Pork Sandwich', description: 'Pulled pork, tangy slaw, brioche bun', price: 12.99, category: 'Sandwiches', emoji: '🥪' },
  { id: '6', name: 'Brisket Sandwich', description: 'Sliced brisket, pickles, onion, toasted bun', price: 14.99, category: 'Sandwiches', emoji: '🥪' },
  { id: '7', name: 'Smoked Sausage Sandwich', description: 'House sausage, peppers, mustard', price: 11.99, category: 'Sandwiches', emoji: '🌭' },
  { id: '8', name: 'Mac & Cheese', description: 'Creamy, smoky mac & cheese', price: 5.99, category: 'Sides', emoji: '🧀' },
  { id: '9', name: 'Collard Greens', description: 'Southern-style slow-cooked greens', price: 4.99, category: 'Sides', emoji: '🥬' },
  { id: '10', name: 'Baked Beans', description: 'Smoked beans with burnt ends', price: 4.99, category: 'Sides', emoji: '🫘' },
  { id: '11', name: 'Coleslaw', description: 'Classic creamy coleslaw', price: 3.99, category: 'Sides', emoji: '🥗' },
  { id: '12', name: 'Sweet Tea', description: '32oz Southern sweet tea', price: 2.99, category: 'Drinks', emoji: '🧋' },
  { id: '13', name: 'Lemonade', description: 'Fresh-squeezed lemonade', price: 2.99, category: 'Drinks', emoji: '🍋' },
  { id: '14', name: 'Peach Cobbler', description: 'Warm Georgia peach cobbler', price: 5.99, category: 'Desserts', emoji: '🍑' },
  { id: '15', name: 'Banana Pudding', description: 'House-made banana pudding', price: 4.99, category: 'Desserts', emoji: '🍌' },
]

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const { addItem } = useCart()

  const filtered = activeCategory === 'All' ? menuItems : menuItems.filter(item => item.category === activeCategory)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 pt-16">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="mb-2 text-4xl font-bold text-off-white">Our <span className="text-premium-gold">Menu</span></h1>
          <p className="mb-8 text-smoke-gray">Pit-smoked daily. Order online for pickup or delivery.</p>

          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === category ? 'bg-crimson text-white' : 'bg-smoke-dark text-bone-white hover:bg-smoke-gray'
                }`}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl border border-smoke-dark bg-charcoal p-5 transition-all hover:border-premium-gold/30"
              >
                <div className="mb-3 text-4xl">{item.emoji}</div>
                <div className="mb-1 text-xs uppercase tracking-[0.2em] text-smoke-gray">{item.category}</div>
                <h3 className="mb-1 font-bold text-off-white">{item.name}</h3>
                <p className="mb-4 text-sm text-smoke-gray">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-premium-gold">${item.price.toFixed(2)}</span>
                  <Button
                    size="sm"
                    onClick={() => addItem({ menu_item_id: item.id, name: item.name, price: item.price, quantity: 1 })}
                  >
                    <ShoppingCart className="h-4 w-4" /> Add
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
