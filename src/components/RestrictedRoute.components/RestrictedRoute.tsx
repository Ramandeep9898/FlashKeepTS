import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { useState } from "react";

export function RestrictedRoute() {
  interface UserProps {
    user?: string;
  }
  const [name, setName] = useState<string | null>("");
  const user: UserProps = useAppSelector((state) => state.auth);
  const location = useLocation();
  return user.user ? (
    <Navigate to="/home" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
}
