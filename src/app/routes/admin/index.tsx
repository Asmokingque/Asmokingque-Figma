import type { RouteObject } from 'react-router-dom'
import AdminLoginPage from '../../../components/admin/auth/AdminLoginPage'
import AdminForgotPasswordPage from '../../../components/admin/auth/AdminForgotPasswordPage'
import AdminResetPasswordPage from '../../../components/admin/auth/AdminResetPasswordPage'
import AdminDashboard from '../../../components/admin/dashboard/AdminDashboard'
import OrdersManager from '../../../components/admin/orders/OrdersManager'
import MenuManager from '../../../components/admin/menu/MenuManager'
import CategoryManager from '../../../components/admin/menu/CategoryManager'
import SpecialsManager from '../../../components/admin/specials/SpecialsManager'
import LunchSpecialsManager from '../../../components/admin/specials/LunchSpecialsManager'
import HolidayCalendarManager from '../../../components/admin/specials/HolidayCalendarManager'
import CateringRequestsManager from '../../../components/admin/catering/CateringRequestsManager'
import ReviewManager from '../../../components/admin/reviews/ReviewManager'
import HomepageEditor from '../../../components/admin/content/HomepageEditor'
import ServiceAreaEditor from '../../../components/admin/content/ServiceAreaEditor'
import BusinessSettingsEditor from '../../../components/admin/settings/BusinessSettingsEditor'
import StorageImagesManager from '../../../components/admin/images/StorageImagesManager'
import PaymentConnectorsPage from '../../../components/admin/settings/PaymentConnectorsPage'
import AdminUsersManager from '../../../components/admin/settings/AdminUsersManager'

export const superAdminOnlyAdminPaths = ['/admin/users', '/admin/payment-connectors'] as const

export const adminPublicRoutes: RouteObject[] = [
  { path: '/admin/login', element: <AdminLoginPage /> },
  { path: '/admin/forgot-password', element: <AdminForgotPasswordPage /> },
  { path: '/admin/reset-password', element: <AdminResetPasswordPage /> },
]

export const adminPrivateRoutes: RouteObject[] = [
  { path: '/admin', element: <AdminDashboard /> },
  { path: '/admin/orders', element: <OrdersManager /> },
  { path: '/admin/menu', element: <MenuManager /> },
  { path: '/admin/categories', element: <CategoryManager /> },
  { path: '/admin/specials', element: <SpecialsManager /> },
  { path: '/admin/lunch-specials', element: <LunchSpecialsManager /> },
  { path: '/admin/holiday-calendar', element: <HolidayCalendarManager /> },
  { path: '/admin/catering', element: <CateringRequestsManager /> },
  { path: '/admin/reviews', element: <ReviewManager /> },
  { path: '/admin/homepage', element: <HomepageEditor /> },
  { path: '/admin/service-area', element: <ServiceAreaEditor /> },
  { path: '/admin/business-settings', element: <BusinessSettingsEditor /> },
  { path: '/admin/storage-images', element: <StorageImagesManager /> },
  { path: '/admin/payment-connectors', element: <PaymentConnectorsPage /> },
  { path: '/admin/users', element: <AdminUsersManager /> },
]
