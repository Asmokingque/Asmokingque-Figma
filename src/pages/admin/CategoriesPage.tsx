import React from 'react'
import { AdminPlaceholderPage } from '@/components/admin/AdminPlaceholderPage'

export function AdminCategoriesPage() {
  return <AdminPlaceholderPage title="Categories" description="Organize the menu structure used across the ordering experience." actionLabel="Add Category" columns={['Category', 'Description', 'Sort Order', 'Status']} formFields={['Category Name', 'Display Order']} />
}
