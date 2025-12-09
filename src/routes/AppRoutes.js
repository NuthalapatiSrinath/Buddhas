import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ContactUsPage from "../pages/ContactUsPage/ContactUsPage";
import GalleryPage from "../pages/GalleryPage/GalleryPage";
// 1. Import New Pages
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import ServiceDetailPage from "../pages/ServiceDetailPage/ServiceDetailPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="gallery" element={<GalleryPage />} />

          {/* 2. Add Services Listing */}
          <Route path="services" element={<ServicesPage />} />

          {/* 3. Add Dynamic Slug Route */}
          <Route path="services/:slug" element={<ServiceDetailPage />} />
        </Route>

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </>
  );
}
