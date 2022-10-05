import { createContext } from "react";

export const LocationContext = createContext(window.location.pathname);

export default LocationContext;
