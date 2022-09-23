import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";

export function RestrictedRoute() {
  interface UserProps {
    user?: string;
  }
  const user: UserProps = useAppSelector((state) => state.auth);
  const location = useLocation();
  return user.user ? (
    <Navigate to="/home" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
}
