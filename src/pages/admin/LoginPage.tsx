import React, { useState } from 'react'
import { Flame } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/shared/Button'
import { useAuth } from '@/contexts/AuthContext'

export function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signIn } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setError('')
    setLoading(true)
    const { error: nextError } = await signIn(email, password)
    setLoading(false)
    if (nextError) {
      setError(nextError)
    } else {
      navigate('/admin')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-bbq-black p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <Flame className="h-8 w-8 text-ember-red" />
          </div>
          <h1 className="text-3xl font-bold text-off-white">Admin Portal</h1>
          <p className="mt-1 text-smoke-gray">Anderson&apos;s Smoking Que</p>
        </div>

        <div className="rounded-2xl border border-smoke-dark bg-charcoal p-8">
          {error ? <div className="mb-4 rounded-lg border border-ember-red/30 bg-ember-red/10 p-3 text-sm text-ember-red">{error}</div> : null}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-bone-white">Email</label>
              <input type="email" value={email} onChange={event => setEmail(event.target.value)} required autoComplete="email" className="w-full rounded-lg border border-smoke-gray bg-smoke-dark px-4 py-3 text-off-white outline-none transition-colors focus:border-premium-gold" placeholder="admin@asmokingque.com" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-bone-white">Password</label>
              <input type="password" value={password} onChange={event => setPassword(event.target.value)} required autoComplete="current-password" className="w-full rounded-lg border border-smoke-gray bg-smoke-dark px-4 py-3 text-off-white outline-none transition-colors focus:border-premium-gold" placeholder="••••••••" />
            </div>
            <Button type="submit" size="lg" loading={loading} className="mt-2 w-full">Sign In</Button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/admin/forgot-password" className="text-sm text-premium-gold hover:underline">Forgot password?</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
