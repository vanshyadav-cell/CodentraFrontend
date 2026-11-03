import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Services from "./sections/Services/Services";
import Technologies from "./sections/Technologies/Technologies";
import Stories from "./sections/Stories/Stories";
import Footer from "./sections/Footer/Footer";
import Contact from "./sections/Contact/Contact";
import ServiceDetails from "./pages/ServiceDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfServices from "./pages/TermsOfServices";
import CookiesPolicy from "./pages/CookiesPolicy";
import Career from "./pages/Career";
import AboutDetail from "./pages/AboutDetail";
import StoryDetail from "./pages/StoryDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Website */}
        <Route
          path="/"
          element={
            <>
              <Navbar />

              <main>
                <Home />
                <Services />
                <Technologies />
                <Stories />
                <About />
                <Contact />
              </main>

              <Footer />
            </>
          }
        />

        {/* Service Details */}
        <Route
          path="/services/:serviceId"
          element={<ServiceDetails />}
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-services" element={<TermsOfServices />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about-details" element={<AboutDetail />} />
        <Route path="/stories/:id" element={<StoryDetail />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;