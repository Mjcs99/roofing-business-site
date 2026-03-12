import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar.tsx";
import HomePage from "./pages/HomePage.tsx";
import './App.css'
import ServicesPage from "./pages/ServicesPage.tsx";
import FinancingPage from "./pages/FinancingPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
function App() {
  return (
    <>
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/financing" element={<FinancingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;