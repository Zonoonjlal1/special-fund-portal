import React, { useState } from 'react';
import { LogoCrest } from './LogoCrest';
import { Language, PageView } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Search, Globe, Menu, X, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onLanguageToggle: () => void;
  activeView: PageView;
  onNavigate: (view: PageView) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageToggle,
  activeView,
  onNavigate,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang];

  const navItems: { id: PageView; label: string }[] = [
    { id: 'home', label: t.navHome },
    { id: 'portfolio', label: t.navPortfolio },
    { id: 'about', label: t.navAbout },
    { id: 'partnerships', label: t.navPartnerships },
    { id: 'contact', label: t.navContact },
  ];

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0B132B]/95 backdrop-blur-xl border-b border-amber-500/20 text-slate-100 shadow-2xl transition-all">
      {/* Top Sovereign Institutional Ticker Bar */}
      <div className="bg-[#070C1B] text-[11px] md:text-xs py-2 px-4 border-b border-slate-800/80 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 text-[#D4AF37] border border-[#D4AF37]/40 font-bold tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{t.statDecreeVal}</span>
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="hidden sm:inline text-slate-300 font-medium">{t.orgSubtitle}</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switch Button */}
            <button
              onClick={onLanguageToggle}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1C2541] hover:bg-[#283659] text-[#F4D068] border border-[#D4AF37]/50 text-xs font-bold transition-all cursor-pointer shadow-md hover:scale-105"
              title="Switch Language / تغيير اللغة"
            >
              <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{t.langSwitch}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Crest */}
        <div 
          className="cursor-pointer flex items-center gap-3.5 group"
          onClick={() => handleNavClick('home')}
        >
          <LogoCrest size="md" showText={false} lightMode={false} />
          <div className="flex flex-col">
            <h1 className="text-sm md:text-base lg:text-lg font-bold text-white group-hover:text-[#F4D068] transition-colors font-serif leading-tight">
              {t.orgTitle}
            </h1>
            <p className="text-[11px] md:text-xs text-[#D4AF37] font-semibold tracking-wide">
              {currentLang === 'ar' ? 'البوابة الاستثمارية والمؤسسية السيادية' : 'Official Sovereign Investment Portal'}
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-[#1C2541]/80 p-1.5 rounded-2xl border border-slate-700/80 shadow-inner">
          {navItems.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer whitespace-nowrap relative ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 text-[#F4D068] border border-[#D4AF37]/60 shadow-lg transform scale-[1.02]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Header Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            className="p-2.5 px-3.5 rounded-xl bg-[#1C2541] hover:bg-[#283659] text-slate-200 hover:text-white border border-slate-700 hover:border-[#D4AF37] transition-all cursor-pointer flex items-center gap-2 text-xs font-semibold shadow-md"
            title="Search Companies & Sectors (Ctrl+K)"
          >
            <Search className="w-4 h-4 text-[#D4AF37]" />
            <span className="hidden xl:inline text-slate-300">{currentLang === 'ar' ? 'البحث عن المحفظة والشركات...' : 'Search portfolio & entities...'}</span>
            <kbd className="hidden xl:inline text-[10px] bg-[#0B132B] border border-slate-700 px-1.5 py-0.5 rounded text-amber-400 font-mono shadow-2xs">⌘K</kbd>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-xl bg-[#1C2541] text-amber-400 border border-slate-700"
          >
            <Search className="w-5 h-5 text-[#D4AF37]" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#1C2541] text-white border border-slate-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#070C1B] border-b border-amber-500/20 px-4 py-4 space-y-2 shadow-2xl animate-fadeIn">
          {navItems.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left rtl:text-right px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#1C2541] text-[#F4D068] font-bold border border-[#D4AF37]/50 shadow-md'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
