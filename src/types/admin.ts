export type AdminRole = 'super_admin' | 'admin'

export interface AdminProfile {
  id: string
  user_id: string
  active: boolean
  role: AdminRole
}
