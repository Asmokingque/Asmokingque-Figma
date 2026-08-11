import { type ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import LoadingScreen from '../../shared/LoadingScreen'
import { useAdminAuth } from '../../../hooks/useAdminAuth'

interface Props {
  children: ReactNode
  superAdminOnly?: boolean
}

export default function ProtectedAdminRoute({ children, superAdminOnly = false }: Props) {
  const { loading, session, adminProfile, isAdmin, isSuperAdmin } = useAdminAuth()
  const location = useLocation()

  if (loading) {
    return <LoadingScreen />
  }

  if (!session) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />
  }

  if (!adminProfile?.active || !isAdmin) {
    return <Navigate to="/admin/login" replace />
  }

  if (superAdminOnly && !isSuperAdmin) {
    return <Navigate to="/admin" replace />
  }

  return children
}
