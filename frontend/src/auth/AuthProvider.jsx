import React, { createContext, useState, useEffect } from "react";
import axiosClient from "../api/axiosClient";
import { setAuthToken, getAuthClaims, clearAuth } from "./auth";

export const AuthContext = createContext({
  ready: false,
  token: null,
  claims: null,
  logout: () => {},
  login: () => {},
});

export function AuthProvider({ children }) {
  const [ready, setReady] = useState(false);
  const [token, setToken] = useState(null);
  const [claims, setClaims] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function fetchToken() {
      try {
        const resp = await axiosClient.get("/auth/token");
        const { token: newToken } = resp.data || {};
        if (!newToken) throw new Error("No token received");
        setAuthToken(newToken);
        if (!mounted) return;
        setToken(newToken);
        setClaims(getAuthClaims());
      } catch (err) {
        clearAuth();
        setToken(null);
        setClaims(null);
      } finally {
        if (mounted) setReady(true);
      }
    }

    fetchToken();
    return () => {
      mounted = false;
    };
  }, []);

  function login(tokenValue) {
    setAuthToken(tokenValue);
    setToken(tokenValue);
    setClaims(getAuthClaims());
  }

  function logout() {
    clearAuth();
    setToken(null);
    setClaims(null);
  }

  // Always render children. Components should use the `ready` flag from context.
  return (
    <AuthContext.Provider value={{ ready, token, claims, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}