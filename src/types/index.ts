export interface AdminUser {
  id: string
  user_id: string
  email: string
  role: 'super_admin' | 'admin'
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category_id: string
  image_url?: string
  is_available: boolean
  is_featured: boolean
  created_at: string
  updated_at: string
}

export interface MenuCategory {
  id: string
  name: string
  description?: string
  sort_order: number
  is_active: boolean
  created_at: string
}

export interface Order {
  id: string
  customer_name: string
  customer_email: string
  customer_phone: string
  items: OrderItem[]
  total: number
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled'
  order_type: 'pickup' | 'delivery'
  address?: string
  notes?: string
  created_at: string
  updated_at: string
}

export interface OrderItem {
  menu_item_id: string
  name: string
  price: number
  quantity: number
}

export interface CartItem extends OrderItem {
  image_url?: string
}

export interface Special {
  id: string
  title: string
  description: string
  price?: number
  discount_percent?: number
  image_url?: string
  valid_from: string
  valid_to: string
  is_active: boolean
  created_at: string
}

export interface CateringInquiry {
  id: string
  name: string
  email: string
  phone: string
  event_date: string
  guest_count: number
  event_type: string
  notes?: string
  status: 'new' | 'contacted' | 'quoted' | 'confirmed' | 'declined'
  created_at: string
}

export interface Review {
  id: string
  customer_name: string
  rating: number
  comment: string
  is_approved: boolean
  created_at: string
}

export interface BusinessSettings {
  id: string
  restaurant_name: string
  tagline: string
  phone: string
  email: string
  address: string
  city: string
  state: string
  zip: string
  hours: Record<string, { open: string; close: string; closed: boolean }>
  delivery_radius_miles: number
  minimum_order: number
  delivery_fee: number
}
