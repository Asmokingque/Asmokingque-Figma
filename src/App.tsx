import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from '@/components/admin/ProtectedRoute'
import { AuthProvider } from '@/contexts/AuthContext'
import { CartProvider } from '@/contexts/CartContext'
import { AdminBusinessSettingsPage } from '@/pages/admin/BusinessSettingsPage'
import { AdminCateringPage } from '@/pages/admin/AdminCateringPage'
import { AdminCategoriesPage } from '@/pages/admin/CategoriesPage'
import { DashboardPage } from '@/pages/admin/DashboardPage'
import { ForgotPasswordPage } from '@/pages/admin/ForgotPasswordPage'
import { AdminHolidayCalendarPage } from '@/pages/admin/HolidayCalendarPage'
import { AdminHomepagePage } from '@/pages/admin/HomepagePage'
import { AdminLoginPage } from '@/pages/admin/LoginPage'
import { AdminLunchSpecialsPage } from '@/pages/admin/LunchSpecialsPage'
import { AdminMenuPage } from '@/pages/admin/AdminMenuPage'
import { AdminOrdersPage } from '@/pages/admin/OrdersPage'
import { AdminPaymentConnectorsPage } from '@/pages/admin/PaymentConnectorsPage'
import { ResetPasswordPage } from '@/pages/admin/ResetPasswordPage'
import { AdminReviewsPage } from '@/pages/admin/AdminReviewsPage'
import { AdminServiceAreaPage } from '@/pages/admin/ServiceAreaPage'
import { AdminSpecialsPage } from '@/pages/admin/SpecialsPage'
import { AdminStorageImagesPage } from '@/pages/admin/StorageImagesPage'
import { AdminUsersPage } from '@/pages/admin/UsersPage'
import { CartPage } from '@/pages/customer/CartPage'
import { CateringPage } from '@/pages/customer/CateringPage'
import { CheckoutPage } from '@/pages/customer/CheckoutPage'
import { ContactPage } from '@/pages/customer/ContactPage'
import { HomePage } from '@/pages/customer/HomePage'
import { MenuPage } from '@/pages/customer/MenuPage'
import { OrderStatusPage } from '@/pages/customer/OrderStatusPage'
import { ReviewsPage } from '@/pages/customer/ReviewsPage'
import { SpecialsPage } from '@/pages/customer/SpecialsPage'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/specials" element={<SpecialsPage />} />
            <Route path="/catering" element={<CateringPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/order-status" element={<OrderStatusPage />} />

            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/admin/reset-password" element={<ResetPasswordPage />} />

            <Route path="/admin" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
            <Route path="/admin/orders" element={<ProtectedRoute><AdminOrdersPage /></ProtectedRoute>} />
            <Route path="/admin/menu" element={<ProtectedRoute><AdminMenuPage /></ProtectedRoute>} />
            <Route path="/admin/categories" element={<ProtectedRoute><AdminCategoriesPage /></ProtectedRoute>} />
            <Route path="/admin/specials" element={<ProtectedRoute><AdminSpecialsPage /></ProtectedRoute>} />
            <Route path="/admin/lunch-specials" element={<ProtectedRoute><AdminLunchSpecialsPage /></ProtectedRoute>} />
            <Route path="/admin/holiday-calendar" element={<ProtectedRoute><AdminHolidayCalendarPage /></ProtectedRoute>} />
            <Route path="/admin/catering" element={<ProtectedRoute><AdminCateringPage /></ProtectedRoute>} />
            <Route path="/admin/reviews" element={<ProtectedRoute><AdminReviewsPage /></ProtectedRoute>} />
            <Route path="/admin/homepage" element={<ProtectedRoute><AdminHomepagePage /></ProtectedRoute>} />
            <Route path="/admin/service-area" element={<ProtectedRoute><AdminServiceAreaPage /></ProtectedRoute>} />
            <Route path="/admin/business-settings" element={<ProtectedRoute><AdminBusinessSettingsPage /></ProtectedRoute>} />
            <Route path="/admin/storage-images" element={<ProtectedRoute><AdminStorageImagesPage /></ProtectedRoute>} />
            <Route path="/admin/payment-connectors" element={<ProtectedRoute superAdminOnly><AdminPaymentConnectorsPage /></ProtectedRoute>} />
            <Route path="/admin/users" element={<ProtectedRoute superAdminOnly><AdminUsersPage /></ProtectedRoute>} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
