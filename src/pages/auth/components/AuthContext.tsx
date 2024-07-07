// AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (email: string, name: string) => void; // Adicionando email e name como parâmetros
  logout: () => void;
  user: {
    email: string;
    name: string;
  } | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ email: string; name: string } | null>(null); // Estado para armazenar email e name

  const login = (email: string, name: string) => {
    setIsAuthenticated(true);
    setUser({ email, name }); // Armazenando email e name do usuário
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null); // Limpar o usuário ao sair
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
