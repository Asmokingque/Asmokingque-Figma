import React, { useState } from 'react'
import { Flame } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/shared/Button'
import { supabase } from '@/lib/supabase'

export function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    setLoading(true)
    const { error: nextError } = await supabase.auth.updateUser({ password })
    setLoading(false)
    if (nextError) {
      setError(nextError.message)
      return
    }
    navigate('/admin/login')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-bbq-black p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Flame className="mx-auto mb-3 h-8 w-8 text-ember-red" />
          <h1 className="text-3xl font-bold text-off-white">New Password</h1>
          <p className="mt-1 text-smoke-gray">Anderson&apos;s Smoking Que Admin</p>
        </div>
        <div className="rounded-2xl border border-smoke-dark bg-charcoal p-8">
          {error ? <div className="mb-4 rounded-lg border border-ember-red/30 bg-ember-red/10 p-3 text-sm text-ember-red">{error}</div> : null}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-bone-white">New Password</label>
              <input type="password" value={password} onChange={event => setPassword(event.target.value)} required minLength={8} className="w-full rounded-lg border border-smoke-gray bg-smoke-dark px-4 py-3 text-off-white outline-none focus:border-premium-gold" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-bone-white">Confirm Password</label>
              <input type="password" value={confirm} onChange={event => setConfirm(event.target.value)} required className="w-full rounded-lg border border-smoke-gray bg-smoke-dark px-4 py-3 text-off-white outline-none focus:border-premium-gold" />
            </div>
            <Button type="submit" size="lg" loading={loading} className="w-full">Update Password</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
