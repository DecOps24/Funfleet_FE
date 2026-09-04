import { Navigate, Outlet } from 'react-router-dom';

export const AdminRoute = () => {
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  // Check if user exists and is_superuser is true
  const isSuperUser = user?.is_superuser === true;

  return isSuperUser ? <Outlet /> : <Navigate to="/" replace />;
};