import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddProduk from './pages/produk/AddProduk';
import AddStok from './pages/produk/AddStok';
import Incoming from './pages/produk/Incoming';
import Outgoing from './pages/produk/Outgoing';
import Reject from './pages/produk/Reject';
import './App.css';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State autentikasi

  useEffect(() => {
    // Cek status autentikasi saat aplikasi dimuat
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true); 
    localStorage.setItem('authToken', 'your_auth_token'); 
  };

  const handleLogout = () => {
    setIsAuthenticated(false); 
    localStorage.removeItem('authToken'); 
  };

  return (
    <Router>
      <div className="flex h-screen">
        {isAuthenticated && <Sidebar />} {/* Sidebar hanya muncul setelah login */}

        <div className="flex-1 flex flex-col">
          {isAuthenticated && <Navbar onLogout={handleLogout} />} {/* Navbar hanya muncul setelah login */}
          <ToastContainer />
          <div className="flex-1 bg-zinc-950 overflow-y-auto hide-scrollbar">
            <Routes>
              <Route
                path="/login"
                element={isAuthenticated ? <Navigate to="/" /> : <Login onLogin={handleLogin} />}
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
                path="/add-stok"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <AddStok />
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
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
