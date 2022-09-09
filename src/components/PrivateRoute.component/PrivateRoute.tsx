// import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";

export function PrivateRoute() {
  const user = useAppSelector((state) => state.auth.user);
  const location = useLocation();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
