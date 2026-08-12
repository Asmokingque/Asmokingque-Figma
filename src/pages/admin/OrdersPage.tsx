import React from 'react'
import { AdminPlaceholderPage } from '@/components/admin/AdminPlaceholderPage'

export function AdminOrdersPage() {
  return <AdminPlaceholderPage title="Orders" description="Monitor live incoming orders, kitchen status, and delivery handoffs." actionLabel="Export Orders" columns={['Order ID', 'Guest', 'Type', 'Status', 'Total']} formFields={['Search Orders', 'Status Filter']} />
}
