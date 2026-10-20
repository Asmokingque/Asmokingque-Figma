import React, { useState } from 'react'
import { Flame } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/shared/Button'
import { supabase } from '@/lib/supabase'

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setLoading(true)
    try {
      await supabase.auth.resetPasswordForEmail(email.trim().toLowerCase(), {
        redirectTo: `${window.location.origin}/admin/reset-password`,
      })
    } finally {
      setSent(true)
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-bbq-black p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Flame className="mx-auto mb-3 h-8 w-8 text-ember-red" />
          <h1 className="text-3xl font-bold text-off-white">Reset Password</h1>
          <p className="mt-1 text-smoke-gray">Anderson&apos;s Smoking Que Admin</p>
        </div>
        <div className="rounded-2xl border border-smoke-dark bg-charcoal p-8">
          {sent ? (
            <div className="text-center">
              <div className="mb-4 text-4xl">📧</div>
              <h2 className="mb-2 text-xl font-bold text-off-white">Check Your Email</h2>
              <p className="text-sm text-smoke-gray">If that email has an admin account, we&apos;ve sent a reset link.</p>
              <Link to="/admin/login" className="mt-4 block text-sm text-premium-gold hover:underline">Back to Login</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-bone-white">Email</label>
                <input type="email" value={email} onChange={event => setEmail(event.target.value)} required className="w-full rounded-lg border border-smoke-gray bg-smoke-dark px-4 py-3 text-off-white outline-none focus:border-premium-gold" />
              </div>
              <Button type="submit" size="lg" loading={loading} className="w-full">Send Reset Link</Button>
              <Link to="/admin/login" className="mt-2 block text-center text-sm text-premium-gold hover:underline">Back to Login</Link>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
