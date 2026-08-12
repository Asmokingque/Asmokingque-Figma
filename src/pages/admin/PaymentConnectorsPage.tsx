import React from 'react'
import { AdminPlaceholderPage } from '@/components/admin/AdminPlaceholderPage'

export function AdminPaymentConnectorsPage() {
  return <AdminPlaceholderPage title="Payment Connectors" description="Reserve a secure area for gateway settings, payout accounts, and webhooks." actionLabel="Add Connector" columns={['Provider', 'Mode', 'Status', 'Last Sync']} formFields={['Provider Name', 'Environment', 'Webhook Endpoint']} />
}
