import { useContext, useEffect, useState } from "react";
import LocationContext from "../../contexts/routing-context";

interface Props {
  children?: React.ReactNode;
}

const Router: React.FC<Props> = ({ children }) => {
  const path = window.location.pathname;
  const currentPath = useContext(LocationContext);

  console.log(currentPath);

  return (
    <LocationContext.Provider value={path}>{children}</LocationContext.Provider>
  );
};

interface RouteProps extends Props {
  path?: string;
  element?: React.ReactNode;
}

export const Route: React.FC<RouteProps> = ({ path, element, children }) => {
  return <>{element}</>;
};

export default Router;
