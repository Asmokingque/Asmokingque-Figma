import React from 'react'
import { AdminPlaceholderPage } from '@/components/admin/AdminPlaceholderPage'

export function AdminServiceAreaPage() {
  return <AdminPlaceholderPage title="Service Area" description="Configure delivery radius, neighborhoods, and fees for local orders." actionLabel="Save Service Area" columns={['Zone', 'Radius', 'Delivery Fee', 'Minimum Order']} formFields={['Primary City', 'Delivery Radius', 'Base Fee', 'Notes']} />
}
