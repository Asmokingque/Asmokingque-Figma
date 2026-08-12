import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'gold'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading,
  className,
  children,
  disabled,
  type = 'button',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bbq-black disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-crimson hover:bg-deep-red text-white focus:ring-crimson',
    secondary: 'bg-smoke-dark hover:bg-smoke-gray text-off-white border border-smoke-gray focus:ring-smoke-gray',
    ghost: 'bg-transparent hover:bg-smoke-dark text-off-white focus:ring-smoke-gray',
    danger: 'bg-ember-red hover:bg-crimson text-white focus:ring-ember-red',
    gold: 'bg-premium-gold hover:bg-soft-gold text-bbq-black focus:ring-premium-gold',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-base gap-2',
    lg: 'px-7 py-3 text-lg gap-2.5',
  }

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} disabled={disabled || loading} type={type} {...props}>
      {loading ? (
        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      {children}
    </button>
  )
}
