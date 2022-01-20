
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import { useAuth } from "./hooks/useAuth";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { PrivateRoute } from "./utils/PrivateRoute";


function App() {
  const { user, authIsReady } = useAuth();

  return (
    <>
      {authIsReady && (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute redirectTo="/login" userIsLogged={Boolean(user)}>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/signup"
              element={user ? <Navigate to="/" /> : <Signup />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
