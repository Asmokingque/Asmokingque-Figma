import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'

interface ProtectedRouteProps {
  children: React.ReactNode
  superAdminOnly?: boolean
}

export function ProtectedRoute({ children, superAdminOnly = false }: ProtectedRouteProps) {
  const { isAdmin, isSuperAdmin, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bbq-black">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-premium-gold border-t-transparent" />
      </div>
    )
  }

  if (!isAdmin) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />
  }

  if (superAdminOnly && !isSuperAdmin) {
    return <Navigate to="/admin" replace />
  }

  return <>{children}</>
}
