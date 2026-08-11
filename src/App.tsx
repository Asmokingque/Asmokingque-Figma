import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AdminAuthProvider from './components/admin/auth/AdminAuthProvider'
import ProtectedAdminRoute from './components/admin/auth/ProtectedAdminRoute'
import { customerRoutes } from './app/routes/customer'
import { adminPrivateRoutes, adminPublicRoutes, superAdminOnlyAdminPaths } from './app/routes/admin'

function App() {
  return (
    <BrowserRouter>
      <AdminAuthProvider>
        <Routes>
          {customerRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}

          {adminPublicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}

          {adminPrivateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <ProtectedAdminRoute superAdminOnly={superAdminOnlyAdminPaths.includes(route.path as (typeof superAdminOnlyAdminPaths)[number])}>
                  {route.element}
                </ProtectedAdminRoute>
              }
            />
          ))}

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AdminAuthProvider>
    </BrowserRouter>
  )
}

export default App
