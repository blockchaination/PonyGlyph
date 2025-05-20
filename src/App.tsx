import { Routes, Route } from 'react-router-dom';
import { AdminDashboard } from './pages/hosting/AdminDashboard';
import { ProtectedRoute } from './components/ProtectedRoute';
import { BookingsPage } from './pages/bookings/BookingsPage';
import { CategoriesPage } from './pages/experiences/CategoriesPage';
import { RegionsPage } from './pages/experiences/RegionsPage';
import { AboutUs } from './pages/about/AboutUs';
import { Careers } from './pages/about/Careers';
import { Contact } from './pages/about/Contact';
import { HowItWorks } from './pages/about/HowItWorks';
import { Newsroom } from './pages/about/Newsroom';
import { HostingExperience } from './pages/hosting/HostingExperience';
import { CoverForHosts } from './pages/hosting/CoverForHosts';
import { MerchantResources } from './pages/hosting/MerchantResources';
import { CommunityForum } from './pages/hosting/CommunityForum';
import { HostingResponsibly } from './pages/hosting/HostingResponsibly';
import { CreateExperiencePage } from './pages/hosting/CreateExperiencePage';
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy';
import { TermsOfService } from './pages/legal/TermsOfService';
import { CookiePolicy } from './pages/legal/CookiePolicy';
import { Sitemap } from './pages/legal/Sitemap';
import { HelpCenter } from './pages/policies/HelpCenter';
import { AntiDiscrimination } from './pages/policies/AntiDiscrimination';
import { DisabilitySupport } from './pages/policies/DisabilitySupport';
import { CancellationOptions } from './pages/policies/CancellationOptions';
import { ReportConcern } from './pages/policies/ReportConcern';
import { Layout } from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<CategoriesPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/regions" element={<RegionsPage />} />
        <Route path="/bookings" element={
          <ProtectedRoute>
            <BookingsPage />
          </ProtectedRoute>
        } />

        {/* Hosting Routes */}
        <Route path="/hosting-experience" element={<HostingExperience />} />
        <Route path="/create-experience" element={
          <ProtectedRoute>
            <CreateExperiencePage />
          </ProtectedRoute>
        } />
        <Route path="/admin/experiences" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="/cover-for-hosts" element={<CoverForHosts />} />
        <Route path="/merchant-resources" element={<MerchantResources />} />
        <Route path="/community-forum" element={<CommunityForum />} />
        <Route path="/hosting-responsibly" element={<HostingResponsibly />} />

        {/* About Routes */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/newsroom" element={<Newsroom />} />
        <Route path="/contact" element={<Contact />} />

        {/* Legal Routes */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/sitemap" element={<Sitemap />} />

        {/* Support Routes */}
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/anti-discrimination" element={<AntiDiscrimination />} />
        <Route path="/disability-support" element={<DisabilitySupport />} />
        <Route path="/cancellation-options" element={<CancellationOptions />} />
        <Route path="/report-concern" element={<ReportConcern />} />
      </Routes>
    </Layout>
  );
}

export default App;