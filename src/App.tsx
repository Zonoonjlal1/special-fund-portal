import React, { useState, useEffect } from 'react';
import { Language, PageView, SectorId, Company } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { PortfolioView } from './views/PortfolioView';
import { AboutView } from './views/AboutView';
import { PartnershipsView } from './views/PartnershipsView';
import { ContactView } from './views/ContactView';
import { CompanyDetailModal } from './components/CompanyDetailModal';
import { SearchModal } from './components/SearchModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ar');
  const [activeView, setActiveView] = useState<PageView>('home');
  const [sectorFilter, setSectorFilter] = useState<SectorId | 'all'>('all');
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);

  // Sync RTL / LTR document direction on language switch
  useEffect(() => {
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const handleLanguageToggle = () => {
    setCurrentLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleNavigate = (view: PageView) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSectorFilter = (sectorId: SectorId) => {
    setSectorFilter(sectorId);
    setActiveView('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B132B] text-slate-100 flex flex-col font-sans selection:bg-[#D4AF37] selection:text-[#0B132B] transition-colors duration-300">
      
      {/* Top Header Navigation */}
      <Header
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        activeView={activeView}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main View Router Content with Smooth Fade-in Transition */}
      <main className="flex-1 animate-fadeIn">
        {activeView === 'home' && (
          <HomeView
            currentLang={currentLang}
            onNavigate={handleNavigate}
            onSelectCompany={(company) => setSelectedCompany(company)}
            onSelectSectorFilter={handleSelectSectorFilter}
          />
        )}

        {activeView === 'portfolio' && (
          <PortfolioView
            currentLang={currentLang}
            onSelectCompany={(company) => setSelectedCompany(company)}
            initialSectorFilter={sectorFilter}
          />
        )}

        {activeView === 'about' && (
          <AboutView
            currentLang={currentLang}
          />
        )}

        {activeView === 'partnerships' && (
          <PartnershipsView
            currentLang={currentLang}
          />
        )}

        {activeView === 'contact' && (
          <ContactView currentLang={currentLang} />
        )}
      </main>

      {/* Sovereign Corporate Footer */}
      <Footer
        currentLang={currentLang}
        onNavigate={handleNavigate}
      />

      {/* Modals & Overlays */}
      <CompanyDetailModal
        company={selectedCompany}
        onClose={() => setSelectedCompany(null)}
        currentLang={currentLang}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        currentLang={currentLang}
        onSelectCompany={(company) => setSelectedCompany(company)}
        onNavigate={handleNavigate}
      />

    </div>
  );
}
