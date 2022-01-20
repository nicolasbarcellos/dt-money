import { ReactNode } from "react";
import { Navigate } from "react-router";

interface PrivateRouteProps {
  userIsLogged: boolean;
  children: any;
  redirectTo: string;
}

export const PrivateRoute = ({
  userIsLogged,
  children,
  redirectTo,
}: PrivateRouteProps) => {
  return userIsLogged ? children : <Navigate to={redirectTo} />;
};
