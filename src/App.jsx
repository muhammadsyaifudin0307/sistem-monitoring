import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddProduk from "./pages/produk/AddProduk";
import Incoming from "./pages/produk/Incoming";
import Outgoing from "./pages/produk/Outgoing";
import Reject from "./pages/produk/Reject";
import Rekap from "./pages/lab/Rekap";
import InputLab from "./pages/lab/InputLab";
import InputProses from "./pages/proses/InputProses";
import RekapProses from "./pages/proses/RekapProses";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children, isAuthenticated }) => {
  const token = localStorage.getItem("authToken");
  if (!isAuthenticated && !token) {
    return <Navigate to="/login" />;
  }
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State autentikasi
  const [loading, setLoading] = useState(true); // State loading

  useEffect(() => {
    // Cek token di localStorage saat aplikasi di-refresh
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true); // Set isAuthenticated berdasarkan token
    }
    setLoading(false); // Selesai cek token, set loading ke false
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("authToken", "your_auth_token"); // Simpan token di localStorage
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("authToken"); // Hapus token dari localStorage
  };

  if (loading) {
    // Render loading atau spinner jika masih loading
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="flex h-screen">
        {isAuthenticated && <Sidebar />}
        <div className="flex-1 flex flex-col">
          {isAuthenticated && <Navbar onLogout={handleLogout} />}
          <ToastContainer />
          <div className="flex-1 bg-zinc-950 overflow-y-auto hide-scrollbar">
            <Routes>
              <Route
                path="/login"
                element={
                  isAuthenticated ? (
                    <Navigate to="/" />
                  ) : (
                    <Login onLogin={handleLogin} />
                  )
                }
              />
              <Route
                path="/"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/add-product"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <AddProduk />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/incoming"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Incoming />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/outgoing"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Outgoing />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rejecting"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Reject />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/input-lab"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <InputLab />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rekap"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Rekap />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/input-proses"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <InputProses />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rekap-proses"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <RekapProses />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
