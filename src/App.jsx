import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Training from "./pages/Training";
import Events from "./pages/Events";
import Partnerships from "./pages/Partnerships";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import CookiePolicy from "./pages/legal/CookiePolicy";
import Terms from "./pages/legal/Terms";
import RefundPolicy from "./pages/legal/RefundPolicy";
import Accessibility from "./pages/legal/Accessibility";
import Disclaimer from "./pages/legal/Disclaimer";
import Complaints from "./pages/legal/Complaints";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/training" element={<Training />} />
        <Route path="/events" element={<Events />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
        <Route path="/legal/terms" element={<Terms />} />
        <Route path="/legal/refund-policy" element={<RefundPolicy />} />
        <Route path="/legal/accessibility" element={<Accessibility />} />
        <Route path="/legal/disclaimer" element={<Disclaimer />} />
        <Route path="/legal/complaints" element={<Complaints />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
