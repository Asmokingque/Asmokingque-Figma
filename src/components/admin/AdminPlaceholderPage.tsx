import React from 'react'
import { AdminLayout } from '@/components/admin/AdminLayout'
import { Button } from '@/components/shared/Button'

interface AdminPlaceholderPageProps {
  title: string
  description: string
  actionLabel?: string
  columns: string[]
  formFields?: string[]
}

export function AdminPlaceholderPage({ title, description, actionLabel = 'Save Draft', columns, formFields = [] }: AdminPlaceholderPageProps) {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-off-white">{title}</h1>
            <p className="mt-1 text-sm text-smoke-gray">{description}</p>
          </div>
          <Button variant="gold">{actionLabel}</Button>
        </div>

        <div className="rounded-2xl border border-smoke-dark bg-charcoal p-6 shadow-glow">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-off-white">Coming soon</p>
              <p className="text-sm text-smoke-gray">This admin module is scaffolded and ready for Supabase-backed data wiring.</p>
            </div>
            <div className="rounded-full bg-premium-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-premium-gold">
              Draft
            </div>
          </div>

          {formFields.length > 0 ? (
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {formFields.map(field => (
                <div key={field}>
                  <label className="mb-1 block text-xs font-medium uppercase tracking-[0.2em] text-smoke-gray">{field}</label>
                  <div className="h-11 rounded-lg border border-smoke-gray bg-smoke-dark/60" />
                </div>
              ))}
            </div>
          ) : null}

          <div className="overflow-hidden rounded-xl border border-smoke-dark">
            <div className="grid bg-smoke-dark/80 text-xs font-semibold uppercase tracking-[0.2em] text-smoke-gray" style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}>
              {columns.map(column => (
                <div key={column} className="px-4 py-3">{column}</div>
              ))}
            </div>
            {[0, 1, 2].map(row => (
              <div key={row} className="grid border-t border-smoke-dark/80" style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}>
                {columns.map(column => (
                  <div key={`${column}-${row}`} className="px-4 py-4">
                    <div className="h-3 rounded-full bg-smoke-dark" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
