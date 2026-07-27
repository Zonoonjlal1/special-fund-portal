import React from 'react';
import { Language, Company, PageView, SectorId } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { COMPANIES } from '../data/portfolioData';
import { LogoCrest } from '../components/LogoCrest';
import { HeroSection } from '../components/HeroSection';
import { SectorGrid } from '../components/SectorGrid';
import { CompanyCard } from '../components/CompanyCard';
import { DOCUMENT_INFO } from '../data/documentData';
import {
  ShieldCheck,
  ArrowRight,
  Globe2,
  Users,
  TrendingUp,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';

interface HomeViewProps {
  currentLang: Language;
  onNavigate: (view: PageView) => void;
  onSelectCompany: (company: Company) => void;
  onSelectSectorFilter: (sectorId: SectorId) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  currentLang,
  onNavigate,
  onSelectCompany,
  onSelectSectorFilter,
}) => {
  const t = TRANSLATIONS[currentLang];
  const featuredCompanies = COMPANIES.filter(c => c.isFeatured);

  return (
    <div className="space-y-16 pb-20 bg-[#0B132B] text-slate-100">
      
      {/* HERO SECTION WITH KHARTOUM CAROUSEL */}
      <HeroSection
        currentLang={currentLang}
        onNavigate={onNavigate}
      />

      {/* THE MANDATE & ABOUT PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 rounded-3xl bg-[#131E3A] border border-amber-500/25 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-5">
            <span className="px-3.5 py-1 rounded-full bg-amber-500/10 text-[#F4D068] border border-[#D4AF37]/40 text-xs font-bold tracking-wider uppercase">
              {currentLang === 'ar' ? 'المرجعية السيادية بالقرار 120 لسنة 2007م' : 'Presidential Decree Mandate'}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-serif">
              {t.mandateTitle}
            </h2>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans">
              {t.mandateSubtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4.5 rounded-2xl bg-[#0B132B] border border-slate-700/80 hover:border-[#D4AF37] transition-all shadow-md">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37] mb-2" />
                <h4 className="text-xs font-bold text-white">{currentLang === 'ar' ? 'الصفة القانونية' : 'Legal Personality'}</h4>
                <p className="text-[11px] text-slate-300 mt-1">{currentLang === 'ar' ? 'شخصية اعتبارية وتعاقدية وذمة مستقلة' : 'Independent corporate legal standing'}</p>
              </div>

              <div className="p-4.5 rounded-2xl bg-[#0B132B] border border-slate-700/80 hover:border-[#D4AF37] transition-all shadow-md">
                <Users className="w-5 h-5 text-[#D4AF37] mb-2" />
                <h4 className="text-xs font-bold text-white">{currentLang === 'ar' ? 'التكافل الاجتماعي' : 'Social Protection'}</h4>
                <p className="text-[11px] text-slate-300 mt-1">{currentLang === 'ar' ? 'التعليم والصحة والإيواء والرضا الوظيفي' : 'Education, healthcare & housing support'}</p>
              </div>

              <div className="p-4.5 rounded-2xl bg-[#0B132B] border border-slate-700/80 hover:border-[#D4AF37] transition-all shadow-md">
                <TrendingUp className="w-5 h-5 text-[#D4AF37] mb-2" />
                <h4 className="text-xs font-bold text-white">{currentLang === 'ar' ? 'الحاضنة الاقتصادية' : 'Economic Incubator'}</h4>
                <p className="text-[11px] text-slate-300 mt-1">{currentLang === 'ar' ? 'إدارة أصول استراتيجية وشراكات عالمية' : 'Managing strategic assets & alliances'}</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-[#F4D068] hover:text-white transition-colors cursor-pointer"
              >
                <span>{t.readMoreMandate}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-[#0B132B] text-white rounded-2xl border border-[#D4AF37]/40 text-center space-y-4 shadow-2xl">
            <LogoCrest size="lg" showText={false} lightMode={false} />
            <div className="space-y-1">
              <p className="text-xs font-bold text-[#F4D068]">{DOCUMENT_INFO.fullLegalNameAr}</p>
              <p className="text-[11px] text-slate-300">{DOCUMENT_INFO.fullLegalNameEn}</p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#F4D068] text-[#0B132B] font-extrabold text-xs transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{currentLang === 'ar' ? 'التواصل مع الأمانة العامة' : 'Contact General Secretariat'}</span>
            </button>
          </div>

        </div>
      </section>


      {/* FEATURED ANCHOR ENTITIES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="px-3.5 py-1 rounded-full bg-amber-500/10 text-[#F4D068] border border-[#D4AF37]/40 text-xs font-bold tracking-wider uppercase">
              {currentLang === 'ar' ? 'الاستثمارات الرائدة' : 'Anchor Flagships'}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-serif mt-2">
              {t.featuredCompaniesTitle}
            </h2>
            <p className="text-xs md:text-sm text-slate-300 mt-1">
              {t.featuredCompaniesSubtitle}
            </p>
          </div>

          <button
            onClick={() => onNavigate('portfolio')}
            className="px-4.5 py-2.5 rounded-xl bg-[#131E3A] hover:bg-[#1C2541] text-[#F4D068] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-xs font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
          >
            <span>{t.explorePortfolio}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180 text-[#D4AF37]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCompanies.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
              currentLang={currentLang}
              onSelect={onSelectCompany}
            />
          ))}
        </div>
      </section>


      {/* SECTORS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectorGrid
          currentLang={currentLang}
          onSelectSector={(sectorId) => {
            onSelectSectorFilter(sectorId);
            onNavigate('portfolio');
          }}
        />
      </section>


      {/* STRATEGIC INTERNATIONAL PARTNERSHIP (TURKEY ALLIANCE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 rounded-3xl bg-[#131E3A] border border-amber-500/25 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-[#F4D068] border border-[#D4AF37]/40 text-xs font-bold">
              <Globe2 className="w-4 h-4 text-[#D4AF37]" />
              <span>{t.turkeyPartnerTitle}</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white font-serif">
              {t.turkeyPartnerSubtitle}
            </h2>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans">
              {t.turkeyPartnerDesc}
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('partnerships')}
                className="px-6 py-3 rounded-xl bg-[#0B132B] hover:bg-[#1C2541] text-[#F4D068] font-extrabold text-xs transition-all cursor-pointer inline-flex items-center gap-2 shadow-lg border border-[#D4AF37]/40 hover:scale-105"
              >
                <span>{t.explorePartnerships}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0B132B] border border-slate-700 space-y-3 text-xs shadow-md">
            <h4 className="font-bold text-white border-b border-slate-800 pb-2 flex items-center justify-between">
              <span>{currentLang === 'ar' ? 'محاور الشراكة الاستراتيجية' : 'Strategic Alliance Pillars'}</span>
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            </h4>
            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>{currentLang === 'ar' ? 'التعاون الصناعي ونقل التكنولوجيا' : 'Industrial cooperation & tech transfer'}</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>{currentLang === 'ar' ? 'استصلاح الأراضي والري المحوري' : 'Land reclamation & center-pivot irrigation'}</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>{currentLang === 'ar' ? 'التطوير العقاري والمناطق اللوجستية' : 'Real estate & logistics hubs'}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
