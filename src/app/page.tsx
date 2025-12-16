import Header from '@/components/header';
import HeroSection from '@/components/sections/hero-section';
import SkillsSection from '@/components/sections/about-section';
import ExperienceSection from '@/components/sections/experience-section';
import ProjectsSection from '@/components/sections/projects-section';
import CertificationsSection from '@/components/sections/certifications-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/footer';
import DownloadBanner from '@/components/download-banner';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <DownloadBanner />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
