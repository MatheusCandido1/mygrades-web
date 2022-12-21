import { createContext, useState } from "react";
import { api } from "../lib/axios";
import { useNavigate  } from 'react-router-dom';
import jwt_decode from "jwt-decode";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    }
    return {};
  });
  const [isLoading, setIsLoading] = useState(true);

  async function signOut() {
    try {
      setIsLoading(true);
      await api.post("/auth/logout", null);
      setUser({});
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      api.defaults.headers.common['Authorization'] = undefined;
      navigate('/login');
    } catch (error) {
      console.log(error);
      throw error
    } finally {
      setIsLoading(false);
    }
  }

  async function signIn(email, password) {
    try {
      setIsLoading(true);
      const data = {
        email,
        password,
      };
      const response = await api.post("/auth/login", data);
      setUser(response.data.user);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      navigate('/');

    } catch (error) {
      console.log(error);
      throw error
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
