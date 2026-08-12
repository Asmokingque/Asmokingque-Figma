import React from 'react'
import { AdminPlaceholderPage } from '@/components/admin/AdminPlaceholderPage'

export function AdminMenuPage() {
  return <AdminPlaceholderPage title="Menu Management" description="Manage smoked meats, sides, desserts, and availability flags." actionLabel="Add Menu Item" columns={['Item Name', 'Category', 'Price', 'Featured', 'Availability']} formFields={['Menu Item Name', 'Base Price', 'Category', 'Description']} />
}
