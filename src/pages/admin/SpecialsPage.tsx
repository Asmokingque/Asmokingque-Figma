import React from 'react'
import { AdminPlaceholderPage } from '@/components/admin/AdminPlaceholderPage'

export function AdminSpecialsPage() {
  return <AdminPlaceholderPage title="Specials" description="Schedule promotional offers and featured bundles for the storefront." actionLabel="Create Special" columns={['Promotion', 'Active Window', 'Discount', 'Status']} formFields={['Special Title', 'Valid From', 'Valid To', 'Offer Details']} />
}
