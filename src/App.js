import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import WhatWeDo from "./components/WhatWeDo";   // ⭐ ADD HERE
import Framework from "./components/Framework";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import ServicePage from "./components/ServicePage";
import ServiceSidebar from "./components/ServiceSidebar";
import SplashScreen from "./components/SplashScreen";
import LoadingScreen from "./components/LoadingScreen";
import BookCallModal from "./components/BookCallModal";
import Industries from "./components/Industries"; // ⭐ Already imported

// ⭐ Local Service Layout
function ServiceLayout() {
  return (
    <div className="font-sans flex">
      <ServiceSidebar />
      <div className="ml-[300px] w-full">
        <ServicePage />
      </div>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showRouteLoader, setShowRouteLoader] = useState(false);

  // ⭐ GLOBAL modal state
  const [modalOpen, setModalOpen] = useState(false);

  window.setShowRouteLoader = setShowRouteLoader;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading && <SplashScreen />}
      {!loading && showRouteLoader && <LoadingScreen />}

      {!loading && <Navbar setModalOpen={setModalOpen} />}

      {/* ⭐ Global Modal */}
      <BookCallModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero setModalOpen={setModalOpen} />

              {/* ⭐ WHO WE ARE */}
              <WhoWeAre />

              {/* ⭐ WHAT WE DO - ADDED HERE */}
              <WhatWeDo />

              {/* Remaining Sections */}
              <Framework />
              <WhyUs />
              <Industries />
              <Footer />
            </>
          }
        />

        {/* ⭐ Service Layout Route */}
        <Route path="/service/:slug" element={<ServiceLayout />} />
      </Routes>
    </Router>
  );
}
