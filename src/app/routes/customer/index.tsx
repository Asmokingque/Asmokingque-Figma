import type { RouteObject } from 'react-router-dom'
import HomePage from '../../../pages/HomePage'
import MenuPage from '../../../pages/MenuPage'
import CartPage from '../../../pages/CartPage'
import CheckoutPage from '../../../pages/CheckoutPage'
import SpecialsPage from '../../../pages/SpecialsPage'
import CateringPage from '../../../pages/CateringPage'
import ReviewsPage from '../../../pages/ReviewsPage'
import ContactPage from '../../../pages/ContactPage'
import OrderStatusPage from '../../../pages/OrderStatusPage'

export const customerRoutes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/menu', element: <MenuPage /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/checkout', element: <CheckoutPage /> },
  { path: '/specials', element: <SpecialsPage /> },
  { path: '/catering', element: <CateringPage /> },
  { path: '/reviews', element: <ReviewsPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/order-status', element: <OrderStatusPage /> },
]
