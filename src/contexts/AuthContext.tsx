import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("kcna_user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = useCallback(async (email: string, _password: string) => {
    // Mock login - replace with real API call
    const mockUser: User = {
      id: "1",
      name: email.split("@")[0],
      email,
    };
    setUser(mockUser);
    localStorage.setItem("kcna_user", JSON.stringify(mockUser));
  }, []);

  const register = useCallback(async (name: string, email: string, _password: string) => {
    const mockUser: User = {
      id: "1",
      name,
      email,
    };
    setUser(mockUser);
    localStorage.setItem("kcna_user", JSON.stringify(mockUser));
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("kcna_user");
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
