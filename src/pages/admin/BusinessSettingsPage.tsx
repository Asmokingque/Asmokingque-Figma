import React from 'react'
import { AdminPlaceholderPage } from '@/components/admin/AdminPlaceholderPage'

export function AdminBusinessSettingsPage() {
  return <AdminPlaceholderPage title="Business Settings" description="Store restaurant contact details, hours, and customer-facing settings." actionLabel="Update Settings" columns={['Setting Group', 'Updated By', 'Updated At']} formFields={['Restaurant Name', 'Phone Number', 'Support Email', 'Address']} />
}
