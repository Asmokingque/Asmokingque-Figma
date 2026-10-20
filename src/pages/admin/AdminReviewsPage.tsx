import React from 'react'
import { AdminPlaceholderPage } from '@/components/admin/AdminPlaceholderPage'

export function AdminReviewsPage() {
  return <AdminPlaceholderPage title="Reviews" description="Moderate customer feedback before it appears on the website." actionLabel="Approve Selected" columns={['Reviewer', 'Rating', 'Submitted', 'Approval Status']} formFields={['Reviewer Name', 'Minimum Rating']} />
}
