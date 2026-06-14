import { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import ServicesPage from "@/pages/Services";
import WorkshopsPage from "@/pages/Workshops";
import ProgramsPage from "@/pages/Programs";
import ContactPage from "@/pages/Contact";
import NotFoundPage from "@/pages/NotFound";

export default function App() {
  const [loadingDone, setLoadingDone] = useState(false);
  const handleLoadComplete = useCallback(() => setLoadingDone(true), []);

  return (
    <>
      {!loadingDone && <LoadingScreen onComplete={handleLoadComplete} />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
