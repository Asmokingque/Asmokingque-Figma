import React, { createContext, useContext, useEffect, useState } from 'react'
import { type Session, type User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'
import { type AdminUser } from '@/types'

interface AuthContextType {
  user: User | null
  session: Session | null
  adminUser: AdminUser | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: string | null }>
  signOut: () => Promise<void>
  isSuperAdmin: boolean
  isAdmin: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      if (session?.user) {
        void fetchAdminUser(session.user.id)
      } else {
        setLoading(false)
      }
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession)
      setUser(nextSession?.user ?? null)
      if (nextSession?.user) {
        void fetchAdminUser(nextSession.user.id)
      } else {
        setAdminUser(null)
        setLoading(false)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  async function fetchAdminUser(userId: string) {
    try {
      const { data, error } = await supabase
        .from('admin_users')
        .select('*')
        .eq('user_id', userId)
        .single()

      if (!error && data) {
        setAdminUser(data as AdminUser)
      } else {
        setAdminUser(null)
      }
    } catch {
      setAdminUser(null)
    } finally {
      setLoading(false)
    }
  }

  async function signIn(email: string, password: string): Promise<{ error: string | null }> {
    const normalizedEmail = email.trim().toLowerCase()

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: normalizedEmail,
        password,
      })

      if (error) {
        return { error: 'Invalid email or password.' }
      }

      if (!data.user) {
        return { error: 'Authentication failed.' }
      }

      const { data: adminData, error: adminError } = await supabase
        .from('admin_users')
        .select('*')
        .eq('user_id', data.user.id)
        .single()

      if (adminError || !adminData) {
        await supabase.auth.signOut()
        return { error: 'Access Denied. You do not have admin access.' }
      }

      if (!adminData.is_active) {
        await supabase.auth.signOut()
        return { error: 'Inactive Account. Please contact support.' }
      }

      setAdminUser(adminData as AdminUser)
      return { error: null }
    } catch {
      return { error: 'Unable to sign in right now. Please try again later.' }
    }
  }

  async function signOut() {
    await supabase.auth.signOut()
    setAdminUser(null)
  }

  const isSuperAdmin = adminUser?.role === 'super_admin'
  const isAdmin = adminUser !== null && adminUser.is_active

  return (
    <AuthContext.Provider value={{ user, session, adminUser, loading, signIn, signOut, isSuperAdmin, isAdmin }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
