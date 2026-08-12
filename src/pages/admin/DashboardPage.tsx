import React from 'react'
import { ShoppingBag, Star, Users, UtensilsCrossed } from 'lucide-react'
import { AdminLayout } from '@/components/admin/AdminLayout'
import { useAuth } from '@/contexts/AuthContext'

const stats = [
  { label: 'Total Orders', value: '0', icon: <ShoppingBag className="h-6 w-6" />, color: 'text-crimson' },
  { label: 'Menu Items', value: '0', icon: <UtensilsCrossed className="h-6 w-6" />, color: 'text-premium-gold' },
  { label: 'Reviews', value: '0', icon: <Star className="h-6 w-6" />, color: 'text-soft-gold' },
  { label: 'Catering Inquiries', value: '0', icon: <Users className="h-6 w-6" />, color: 'text-bone-white' },
]

export function DashboardPage() {
  const { adminUser, isSuperAdmin } = useAuth()

  return (
    <AdminLayout>
      <div>
        <h1 className="mb-1 text-2xl font-bold text-off-white">Dashboard</h1>
        <p className="mb-8 text-smoke-gray">
          Welcome back, {adminUser?.email ?? 'admin@asmokingque.com'}
          {isSuperAdmin ? <span className="ml-2 rounded-full bg-premium-gold/20 px-2 py-0.5 text-xs text-premium-gold">Super Admin</span> : null}
        </p>
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(stat => (
            <div key={stat.label} className="rounded-xl border border-smoke-dark bg-charcoal p-5">
              <div className={`${stat.color} mb-3`}>{stat.icon}</div>
              <div className="mb-1 text-3xl font-bold text-off-white">{stat.value}</div>
              <div className="text-sm text-smoke-gray">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-smoke-dark bg-charcoal p-6">
          <h2 className="mb-4 font-bold text-off-white">Recent Activity</h2>
          <p className="text-sm text-smoke-gray">Connect your Supabase project to see live data.</p>
          <div className="mt-4 rounded-lg bg-smoke-dark p-4">
            <p className="font-mono text-xs text-smoke-gray">Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file to activate the backend.</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
