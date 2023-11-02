import { createContext, useState } from "react";

export const AdminContext = createContext({
  isAdmin: false,
  setAdmin: () => {},
});

export const AdminContextProvider = ({ children }) => {
  const [isAdmin, setAdmin] = useState(false);

  return (
    <AdminContext.Provider value={{ isAdmin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
