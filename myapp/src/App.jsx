import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import AuthPage from "./components/auth/AuthPage.jsx";
import Dashboard from "./components/auth/Dashboard.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route
        path="/"
        element={
          <SessionAuth requireAuthPath="/auth">
            <Dashboard />
          </SessionAuth>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
