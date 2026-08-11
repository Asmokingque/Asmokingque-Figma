import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Session, User } from '@supabase/supabase-js'
import { supabase } from '../../../lib/supabaseClient'
import { AdminAuthContext } from '../../../contexts/AdminAuthContext'
import type { AdminProfile, AdminRole } from '../../../types/admin'

interface Props { children: ReactNode }

export default function AdminAuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [adminProfile, setAdminProfile] = useState<AdminProfile | null>(null)
  const [loading, setLoading] = useState(true)

  const refreshAdminProfile = useCallback(async (userId?: string | null) => {
    if (!userId) {
      setAdminProfile(null)
      return
    }

    const { data } = await supabase
      .from('admin_users')
      .select('id,user_id,active,role')
      .eq('user_id', userId)
      .maybeSingle<AdminProfile>()

    setAdminProfile(data ?? null)
  }, [])

  useEffect(() => {
    void (async () => {
      const { data } = await supabase.auth.getSession()
      setSession(data.session)
      setUser(data.session?.user ?? null)
      await refreshAdminProfile(data.session?.user?.id)
      setLoading(false)
    })()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession)
      setUser(newSession?.user ?? null)
      void refreshAdminProfile(newSession?.user?.id)
    })

    return () => subscription.unsubscribe()
  }, [refreshAdminProfile])

  const signIn = useCallback(async (email: string, password: string) => {
    const normalizedEmail = email.trim().toLowerCase()
    const { data, error } = await supabase.auth.signInWithPassword({
      email: normalizedEmail,
      password,
    })

    if (error || !data.user) {
      return { error: 'Invalid email or password. Please check your admin credentials.' }
    }

    const { data: profile } = await supabase
      .from('admin_users')
      .select('id,user_id,active,role')
      .eq('user_id', data.user.id)
      .maybeSingle<AdminProfile>()

    if (!profile) {
      await supabase.auth.signOut()
      return { error: 'Access denied. No admin profile found for this account.' }
    }

    if (!profile.active) {
      await supabase.auth.signOut()
      return { error: 'Your admin account is inactive. Please contact support.' }
    }

    setAdminProfile(profile)
    return { error: null }
  }, [])

  const signOut = useCallback(async () => {
    await supabase.auth.signOut()
    setAdminProfile(null)
  }, [])

  const role: AdminRole | null = adminProfile?.role ?? null
  const value = useMemo(
    () => ({
      user,
      session,
      adminProfile,
      role,
      isSuperAdmin: role === 'super_admin',
      isAdmin: Boolean(adminProfile?.active),
      loading,
      signIn,
      signOut,
      refreshAdminProfile,
    }),
    [adminProfile, loading, refreshAdminProfile, role, session, signIn, signOut, user],
  )

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>
}
