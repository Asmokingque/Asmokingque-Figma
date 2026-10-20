import React from 'react'
import { AdminPlaceholderPage } from '@/components/admin/AdminPlaceholderPage'

export function AdminHolidayCalendarPage() {
  return <AdminPlaceholderPage title="Holiday Calendar" description="Define closures, special hours, and event service dates in advance." actionLabel="Add Holiday" columns={['Holiday', 'Date', 'Hours', 'Notes']} formFields={['Holiday Name', 'Date', 'Opening Hours', 'Special Notes']} />
}
