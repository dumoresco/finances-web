import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import { NotFound } from "../pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path={"*"}
        element={
          <PrivateRoute>
            <NotFound />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const authenticated = true;

  return authenticated ? (
    <>
      <Sidebar />
      <Content>{children}</Content>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const authenticated = true;

  return authenticated ? <Navigate to="/" /> : <Content>{children}</Content>;
};
