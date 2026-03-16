import React, { useEffect } from 'react';
import HeroSection from '@/components/redux/HeroSection';
import AboutSection from '@/components/redux/AboutSection';
import PublicationsSection from '@/components/redux/PublicationsSection';
import ContributorsSection from '@/components/redux/ContributorsSection';

import Footer from '@/components/redux/Footer';
import AnimatedBackground from '@/components/redux/AnimatedBackground';
import ChatButton from '@/components/redux/ChatButton';

export default function Home() {
  useEffect(() => {
    document.title = 'About Us Page';
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <PublicationsSection />
        <ContributorsSection />
        <Footer />
      </div>
      <ChatButton />
    </div>
  );
}