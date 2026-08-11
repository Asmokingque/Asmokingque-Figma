import { useState, type FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAdminAuth } from '../../../hooks/useAdminAuth'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signIn } = useAdminAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setError('')
    const result = await signIn(email, password)
    setLoading(false)

    if (result.error) {
      setError(result.error)
      return
    }

    const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname
    navigate(from ?? '/admin', { replace: true })
  }

  return (
    <main>
      <h1>Admin Login</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="admin-email">Email</label>
        <input id="admin-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="admin-password">Password</label>
        <input id="admin-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
      </form>
      {error ? <p role="alert">{error}</p> : null}
    </main>
  )
}
