// import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";

export function PrivateRoute() {
  const token = useAppSelector((state) => state.auth.token);
  const location = useLocation();
  return token !== "" ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
