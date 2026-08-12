import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  Calendar,
  ChefHat,
  Coffee,
  CreditCard,
  Home,
  Image,
  LayoutDashboard,
  LogOut,
  MapPin,
  Menu,
  Settings,
  ShoppingBag,
  Star,
  Tag,
  Users,
  UtensilsCrossed,
} from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { cn } from '@/lib/utils'

interface NavItem {
  href: string
  label: string
  icon: React.ReactNode
  superAdminOnly?: boolean
}

const navItems: NavItem[] = [
  { href: '/admin', label: 'Dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { href: '/admin/orders', label: 'Orders', icon: <ShoppingBag className="h-4 w-4" /> },
  { href: '/admin/menu', label: 'Menu', icon: <UtensilsCrossed className="h-4 w-4" /> },
  { href: '/admin/categories', label: 'Categories', icon: <Tag className="h-4 w-4" /> },
  { href: '/admin/specials', label: 'Specials', icon: <Star className="h-4 w-4" /> },
  { href: '/admin/lunch-specials', label: 'Lunch Specials', icon: <Coffee className="h-4 w-4" /> },
  { href: '/admin/holiday-calendar', label: 'Holiday Calendar', icon: <Calendar className="h-4 w-4" /> },
  { href: '/admin/catering', label: 'Catering', icon: <ChefHat className="h-4 w-4" /> },
  { href: '/admin/reviews', label: 'Reviews', icon: <Star className="h-4 w-4" /> },
  { href: '/admin/homepage', label: 'Homepage', icon: <Home className="h-4 w-4" /> },
  { href: '/admin/service-area', label: 'Service Area', icon: <MapPin className="h-4 w-4" /> },
  { href: '/admin/business-settings', label: 'Business Settings', icon: <Settings className="h-4 w-4" /> },
  { href: '/admin/storage-images', label: 'Images', icon: <Image className="h-4 w-4" /> },
  { href: '/admin/payment-connectors', label: 'Payments', icon: <CreditCard className="h-4 w-4" />, superAdminOnly: true },
  { href: '/admin/users', label: 'Users', icon: <Users className="h-4 w-4" />, superAdminOnly: true },
]

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const { adminUser, isSuperAdmin, signOut } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const visibleItems = navItems.filter(item => !item.superAdminOnly || isSuperAdmin)

  async function handleSignOut() {
    await signOut()
    navigate('/admin/login')
  }

  const sidebar = (
    <div className="flex h-full flex-col border-r border-smoke-dark bg-charcoal">
      <div className="border-b border-smoke-dark p-4">
        <div className="text-lg font-bold text-premium-gold">ASQ Admin</div>
        <div className="mt-1 text-xs text-smoke-gray">{adminUser?.email ?? 'admin@asmokingque.com'}</div>
        <div className="mt-2">
          <span
            className={cn(
              'rounded-full px-2 py-0.5 text-xs font-medium capitalize',
              isSuperAdmin ? 'bg-premium-gold/20 text-premium-gold' : 'bg-crimson/20 text-crimson',
            )}
          >
            {adminUser?.role?.replace('_', ' ') ?? 'admin'}
          </span>
        </div>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {visibleItems.map(item => (
          <Link
            key={item.href}
            to={item.href}
            onClick={() => setSidebarOpen(false)}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              location.pathname === item.href
                ? 'bg-smoke-dark text-premium-gold'
                : 'text-bone-white hover:bg-smoke-dark hover:text-premium-gold',
            )}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="border-t border-smoke-dark p-3">
        <button
          onClick={() => void handleSignOut()}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-smoke-gray transition-colors hover:bg-smoke-dark hover:text-off-white"
          type="button"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </div>
  )

  return (
    <div className="flex h-screen overflow-hidden bg-bbq-black">
      <div className="hidden w-60 flex-shrink-0 lg:flex">{sidebar}</div>

      {sidebarOpen ? (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="w-60 flex-shrink-0">{sidebar}</div>
          <button className="flex-1 bg-black/50" onClick={() => setSidebarOpen(false)} type="button" aria-label="Close sidebar" />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex items-center gap-3 border-b border-smoke-dark bg-charcoal p-4 lg:hidden">
          <button onClick={() => setSidebarOpen(true)} className="text-bone-white" type="button" aria-label="Open sidebar">
            <Menu className="h-5 w-5" />
          </button>
          <span className="font-bold text-premium-gold">ASQ Admin</span>
        </div>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
