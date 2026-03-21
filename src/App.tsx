import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import SoftwareDevelopment from './pages/services/SoftwareDevelopment';
import Consulting from './pages/services/Consulting';
import QAAutomation from './pages/services/QAAutomation';
import DevOps from './pages/services/DevOps';
import DigitalMarketing from './pages/services/DigitalMarketing';
import ProductDesign from './pages/services/ProductDesign';
import Infrastructure from './pages/services/Infrastructure';
import UserExperience from './pages/services/UserExperience';
import ContentStrategy from './pages/services/ContentStrategy';
import StrategyRoadmap from './pages/services/StrategyRoadmap';
import DigitalTransformation from './pages/services/DigitalTransformation';
import TechAudit from './pages/services/TechAudit';
import SecurityConsulting from './pages/services/SecurityConsulting';

// Industry Pages
import Saas from './pages/industries/Saas';
import Ecommerce from './pages/industries/Ecommerce';
import Fintech from './pages/industries/Fintech';
import Healthcare from './pages/industries/Healthcare';
import Education from './pages/industries/Education';
import Startups from './pages/industries/Startups';
import Enterprises from './pages/industries/Enterprises';
import NonProfits from './pages/industries/NonProfits';
import HospitalityHotels from './pages/industries/HospitalityHotels';


// Landing Pages
import BhubaneswarSEO from './pages/BhubaneswarSEO';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/qa-automation" element={<QAAutomation />} />
          <Route path="/services/devops" element={<DevOps />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/product-design" element={<ProductDesign />} />
          <Route path="/services/infrastructure" element={<Infrastructure />} />
          <Route path="/services/user-experience" element={<UserExperience />} />
          <Route path="/services/content-strategy" element={<ContentStrategy />} />
          <Route path="/services/strategy-roadmap" element={<StrategyRoadmap />} />
          <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/services/tech-audit" element={<TechAudit />} />
          <Route path="/services/security-consulting" element={<SecurityConsulting />} />
          
          {/* Landing Pages */}
          <Route path="/seo-agency-bhubaneswar" element={<BhubaneswarSEO />} />

          {/* Industry Routes */}
          <Route path="/industries/saas" element={<Saas />} />
          <Route path="/industries/ecommerce" element={<Ecommerce />} />
          <Route path="/industries/fintech" element={<Fintech />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/education" element={<Education />} />
          <Route path="/industries/startups" element={<Startups />} />
          <Route path="/industries/enterprises" element={<Enterprises />} />
          <Route path="/industries/non-profits" element={<NonProfits />} />
          <Route path="/industries/hospitality-hotels" element={<HospitalityHotels />} />

        </Routes>
      </Layout>
    </Router>
  );
}
