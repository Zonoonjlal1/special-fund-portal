import React, { useState } from 'react';
import { LogoCrest } from './LogoCrest';
import { Language, PageView } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SECTORS } from '../data/portfolioData';
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Send,
  Globe,
  ExternalLink,
  Award,
  Lock
} from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onNavigate: (view: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onNavigate,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [bulletinEmail, setBulletinEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (bulletinEmail.trim()) {
      setSubscribed(true);
      setBulletinEmail('');
    }
  };

  return (
    <footer className="bg-[#070C1B] text-slate-200 border-t border-amber-500/20 relative overflow-hidden text-xs">
      
      {/* Background Ambient Golden Light Halos */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Sovereign Ticker / Portfolio Highlights Bar */}
      <div className="border-b border-slate-800/80 bg-[#0B132B]/80 py-4 px-4 sm:px-6 lg:px-8 relative z-10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-serif font-bold text-white text-sm">
              {currentLang === 'ar' ? 'البوابة السيادية الرسمية - الصندوق الاجتماعي لمنسوبي القوات المسلحة' : 'Official Sovereign Investment & Social Fund Portal'}
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <div className="flex items-center gap-1.5 text-amber-300 font-medium">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span>{t.statDecreeVal}</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Lock className="w-4 h-4 text-[#D4AF37]" />
              <span>{currentLang === 'ar' ? 'حماية سيادية ومستقلة' : 'Sovereign Statutory Protection'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Institutional Overview & Crest (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <LogoCrest size="lg" showText={true} lightMode={false} />
            
            <p className="text-slate-300 leading-relaxed font-sans text-xs">
              {t.footerDesc}
            </p>

            {/* Official Legal Decree Card */}
            <div className="p-4 rounded-2xl bg-[#131E3A] border border-amber-500/30 flex items-start gap-3.5 shadow-xl">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-xs font-bold text-[#F4D068]">{t.officialAccreditation}</p>
                <p className="text-[11px] text-slate-300 leading-snug">
                  {currentLang === 'ar'
                    ? 'مرجعية صدور القرار الجمهوري رقم (120) لسنة 2007م الصادر عن رئاسة الجمهورية بجمهورية السودان.'
                    : 'Statutory mandate under Presidential Decree No. (120) of 2007 by the Presidency of the Republic.'}
                </p>
              </div>
            </div>

            {/* Sovereign Channels */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-[11px] font-bold text-slate-400">
                {currentLang === 'ar' ? 'القنوات الرسمية:' : 'Official Portals:'}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.mod.gov.sd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-[#1C2541] hover:bg-amber-500/20 text-[#D4AF37] border border-slate-700 hover:border-[#D4AF37] transition-all cursor-pointer"
                  title="MOD Portal"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <button
                  onClick={() => onNavigate('contact')}
                  className="p-2 rounded-xl bg-[#1C2541] hover:bg-amber-500/20 text-[#D4AF37] border border-slate-700 hover:border-[#D4AF37] transition-all cursor-pointer"
                  title="General Secretariat Email"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F4D068] border-b border-slate-800 pb-2 flex items-center justify-between">
              <span>{t.quickLinks}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            </h3>
            <ul className="space-y-2.5 font-medium text-slate-300">
              {[
                { id: 'home', label: t.navHome },
                { id: 'portfolio', label: t.navPortfolio },
                { id: 'about', label: t.navAbout },
                { id: 'partnerships', label: t.navPartnerships },
                { id: 'contact', label: t.navContact },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id as PageView)}
                    className="hover:text-[#F4D068] transition-all cursor-pointer flex items-center gap-1.5 group/nav text-xs"
                  >
                    <ArrowRight className="w-3 h-3 text-[#D4AF37] opacity-0 -translate-x-2 group-hover/nav:opacity-100 group-hover/nav:translate-x-0 transition-all rtl:rotate-180" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Key Sovereign Sectors (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F4D068] border-b border-slate-800 pb-2 flex items-center justify-between">
              <span>{currentLang === 'ar' ? 'القطاعات الاستثمارية' : 'Key Investment Sectors'}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2.5 text-[11px] text-slate-300">
              {SECTORS.slice(0, 10).map((sec) => (
                <li
                  key={sec.id}
                  className="hover:text-[#F4D068] cursor-pointer transition-colors flex items-center gap-1.5"
                  onClick={() => onNavigate('portfolio')}
                >
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                  <span className="line-clamp-1">{currentLang === 'ar' ? sec.nameAr : sec.nameEn}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Investor Bulletin & Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F4D068] border-b border-slate-800 pb-2 flex items-center justify-between">
              <span>{currentLang === 'ar' ? 'النشرة الاستثمارية والتواصل' : 'Investor Bulletin & Contact'}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            </h3>

            {/* Newsletter Subscription Card */}
            <div className="p-4 rounded-2xl bg-[#131E3A] border border-slate-800 space-y-3 shadow-lg">
              <p className="text-[11px] text-slate-300 leading-snug">
                {currentLang === 'ar'
                  ? 'اشترك للحصول على النشرات والتقارير الاستثمارية السيادية'
                  : 'Subscribe for sovereign investment reports & news'}
              </p>

              {subscribed ? (
                <div className="p-3 rounded-xl bg-amber-500/20 border border-[#D4AF37] text-amber-300 flex items-center gap-2 text-[11px]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <span>{currentLang === 'ar' ? 'تم الاشتراك في النشرة بنجاح' : 'Subscribed successfully'}</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={bulletinEmail}
                      onChange={(e) => setBulletinEmail(e.target.value)}
                      placeholder={currentLang === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter email address'}
                      className="w-full bg-[#0B132B] border border-slate-700 rounded-xl py-2 px-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 rounded-xl bg-[#D4AF37] hover:bg-[#F4D068] text-[#0B132B] font-extrabold text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{currentLang === 'ar' ? 'اشتراك' : 'Subscribe'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* HQ Quick Contacts */}
            <div className="space-y-2 text-xs text-slate-300 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="line-clamp-2">{t.hqAddressDetail}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span dir="ltr" className="font-mono text-white font-semibold">+249 183 770000</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Legal Copyright & Accreditation Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <p>{t.copyrights}</p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              {currentLang === 'ar' ? 'اللوائح والحوكمة' : 'Statutes & Governance'}
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              {currentLang === 'ar' ? 'الأمانة العامة' : 'General Secretariat'}
            </button>
            <span className="text-slate-600">|</span>
            <span className="text-[#F4D068] font-bold">{currentLang === 'ar' ? 'جمهورية السودان' : 'Republic of Sudan'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
