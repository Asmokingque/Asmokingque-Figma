import { createContext } from 'react'
import type { Session, User } from '@supabase/supabase-js'
import type { AdminProfile, AdminRole } from '../types/admin'

export interface AdminAuthContextValue {
  user: User | null
  session: Session | null
  adminProfile: AdminProfile | null
  role: AdminRole | null
  isSuperAdmin: boolean
  isAdmin: boolean
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: string | null }>
  signOut: () => Promise<void>
  refreshAdminProfile: (userId?: string | null) => Promise<void>
}

export const AdminAuthContext = createContext<AdminAuthContextValue | undefined>(undefined)
