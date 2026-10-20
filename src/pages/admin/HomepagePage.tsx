import React from 'react'
import { AdminPlaceholderPage } from '@/components/admin/AdminPlaceholderPage'

export function AdminHomepagePage() {
  return <AdminPlaceholderPage title="Homepage Content" description="Update hero messaging, featured dishes, and homepage promotions." actionLabel="Publish Changes" columns={['Section', 'Status', 'Last Updated', 'Owner']} formFields={['Hero Headline', 'Subheading', 'Primary CTA', 'Secondary CTA']} />
}
