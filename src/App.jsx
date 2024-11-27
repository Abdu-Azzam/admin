import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SepedaProvider } from "./context/SepedaContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import JenisSepeda from "./pages/JenisSepeda";
import Transaksi from "./pages/Transaksi";
import Pengguna from "./pages/pengguna";
import Loginadmin from "./pages/Loginadmin";
import TambahSepeda from "./pages/TambahSepeda";
import EditSepeda from "./pages/EditSepeda";

// Layout untuk halaman dashboard (dengan Sidebar dan Header)
const DashboardLayout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flexGrow: 1, marginTop: "70px" }}>
        <Header />
        {children}
      </div>
    </div>
  );
};

// Komponen Utama Aplikasi
const App = () => {
  return (
    <Router>
      <SepedaProvider>
        <Routes>
          {/* Halaman Login */}
          <Route path="/" element={<Loginadmin />} />

          {/* Halaman Dashboard */}
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            }
          />
          <Route
            path="/jenis-sepeda"
            element={
              <DashboardLayout>
                <JenisSepeda />
              </DashboardLayout>
            }
          />
          <Route
            path="/transaksi"
            element={
              <DashboardLayout>
                <Transaksi />
              </DashboardLayout>
            }
          />
          <Route
            path="/pengguna"
            element={
              <DashboardLayout>
                <Pengguna />
              </DashboardLayout>
            }
          />
          <Route
            path="/TambahSepeda"
            element={
              <DashboardLayout>
                <TambahSepeda />
              </DashboardLayout>
            }
          />
          <Route
            path="/EditSepeda/:id"
            element={
              <DashboardLayout>
                <EditSepeda />
              </DashboardLayout>
            }
          />
        </Routes>
      </SepedaProvider>
    </Router>
  );
};

export default App;
