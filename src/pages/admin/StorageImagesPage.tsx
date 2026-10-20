import React from 'react'
import { AdminPlaceholderPage } from '@/components/admin/AdminPlaceholderPage'

export function AdminStorageImagesPage() {
  return <AdminPlaceholderPage title="Storage Images" description="Prepare gallery assets, hero banners, and menu photography for upload." actionLabel="Upload Image" columns={['Asset Name', 'Folder', 'Dimensions', 'Visibility']} formFields={['Asset Title', 'Storage Bucket', 'Alt Text']} />
}
