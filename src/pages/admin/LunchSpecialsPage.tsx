import React from 'react'
import { AdminPlaceholderPage } from '@/components/admin/AdminPlaceholderPage'

export function AdminLunchSpecialsPage() {
  return <AdminPlaceholderPage title="Lunch Specials" description="Build weekday lunch combos and time-based offers for midday traffic." actionLabel="Add Lunch Offer" columns={['Combo', 'Weekday', 'Price', 'Availability']} formFields={['Combo Name', 'Serving Window', 'Price', 'Notes']} />
}
