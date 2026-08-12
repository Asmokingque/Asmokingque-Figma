import React from 'react'
import { AdminPlaceholderPage } from '@/components/admin/AdminPlaceholderPage'

export function AdminCateringPage() {
  return <AdminPlaceholderPage title="Catering Inquiries" description="Review inbound event requests and prepare quote follow-ups." actionLabel="Create Quote" columns={['Client', 'Event Date', 'Guests', 'Status', 'Assigned To']} formFields={['Client Name', 'Event Type', 'Guest Count', 'Quote Notes']} />
}
