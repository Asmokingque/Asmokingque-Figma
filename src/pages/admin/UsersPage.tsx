import React from 'react'
import { AdminPlaceholderPage } from '@/components/admin/AdminPlaceholderPage'

export function AdminUsersPage() {
  return <AdminPlaceholderPage title="Users" description="Manage admin access, roles, and user activation status." actionLabel="Invite Admin" columns={['User', 'Role', 'Status', 'Last Login']} formFields={['Email Address', 'Role', 'Permissions Notes']} />
}
