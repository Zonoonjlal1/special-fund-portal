import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { LogoCrest } from '../components/LogoCrest';
import { ShieldCheck, Scale, Heart, TrendingUp } from 'lucide-react';

interface AboutViewProps {
  currentLang: Language;
}

export const AboutView: React.FC<AboutViewProps> = ({
  currentLang,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 text-slate-100">
      
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1 rounded-full bg-amber-500/10 text-[#F4D068] border border-[#D4AF37]/40 text-xs font-bold uppercase tracking-wider shadow-md">
          {currentLang === 'ar' ? 'النشأة والحوكمة المؤسسية السيادية' : 'Mandate & Sovereign Governance'}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-white font-serif">
          {t.aboutPageTitle}
        </h1>
        <p className="text-sm text-slate-300">
          {t.aboutPageSubtitle}
        </p>
      </div>

      {/* Presidential Decree Highlight Card */}
      <div className="p-8 md:p-12 rounded-3xl bg-[#131E3A] border border-amber-500/25 shadow-2xl space-y-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <LogoCrest size="lg" showText={false} lightMode={false} />
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white font-serif">
                {t.decreeCardTitle}
              </h2>
              <p className="text-xs text-[#F4D068] font-semibold mt-0.5">
                {currentLang === 'ar' ? 'رئاسة الجمهورية - جمهورية السودان' : 'Presidency of the Republic of Sudan'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm text-slate-300 leading-relaxed">
          <div className="p-5 rounded-2xl bg-[#0B132B] border border-slate-700/80 space-y-2.5 shadow-md">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Scale className="w-4.5 h-4.5 text-[#D4AF37]" />
              <span>{t.legalPersonalityTitle}</span>
            </h3>
            <p>{t.legalPersonalityDesc}</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0B132B] border border-slate-700/80 space-y-2.5 shadow-md">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4.5 h-4.5 text-[#D4AF37]" />
              <span>{currentLang === 'ar' ? 'الأهداف والاستقلالية المالية' : 'Financial Autonomy & Goals'}</span>
            </h3>
            <p>
              {currentLang === 'ar'
                ? 'مؤسسة إقتصادية ذات أصول ثابتة ومتحركة تمكنه من المساهمة الفاعلة في تطوير المجال الإقتصادي وتوطيد العلاقات الاستثمارية وتأمين المتطلبات اللوجستية.'
                : 'A sovereign economic institution with substantial fixed and mobile assets driving economic growth and national supply chain security.'}
            </p>
          </div>
        </div>
      </div>

      {/* The Three Strategic Pillars */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white font-serif">
            {t.threePillarsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#131E3A] border border-amber-500/20 hover:border-[#D4AF37] shadow-xl space-y-3 hover:-translate-y-1 transition-all">
            <div className="p-3 rounded-xl bg-[#0B132B] text-[#D4AF37] w-fit shadow-md border border-slate-700">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-serif">{t.pillar1Title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{t.pillar1Desc}</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#131E3A] border border-amber-500/20 hover:border-[#D4AF37] shadow-xl space-y-3 hover:-translate-y-1 transition-all">
            <div className="p-3 rounded-xl bg-[#0B132B] text-[#D4AF37] w-fit shadow-md border border-slate-700">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-serif">{t.pillar2Title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{t.pillar2Desc}</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#131E3A] border border-amber-500/20 hover:border-[#D4AF37] shadow-xl space-y-3 hover:-translate-y-1 transition-all">
            <div className="p-3 rounded-xl bg-[#0B132B] text-[#D4AF37] w-fit shadow-md border border-slate-700">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-serif">{t.pillar3Title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{t.pillar3Desc}</p>
          </div>
        </div>
      </div>

      {/* Timeline 2007 - 2026 */}
      <div className="p-8 rounded-3xl bg-[#131E3A] text-white border border-amber-500/25 space-y-6 shadow-2xl">
        <h3 className="text-xl font-bold text-[#F4D068] font-serif text-center">
          {currentLang === 'ar' ? 'مسيرة النمو والتطوير السيادي (2007م - 2026م)' : 'Institutional Evolution (2007 - 2026)'}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          <div className="p-4.5 rounded-2xl bg-[#0B132B] border border-slate-700 space-y-1.5 hover:border-[#D4AF37] transition-all">
            <span className="text-[#F4D068] font-bold font-serif text-base block">2007م</span>
            <span className="font-bold text-white block">{currentLang === 'ar' ? 'صدور القرار الجمهوري 120' : 'Presidential Decree 120'}</span>
            <p className="text-slate-300">{currentLang === 'ar' ? 'تأسيس الصندوق ومنحه الشخصية الاعتبارية الذاتية.' : 'Fund establishment and legal autonomy.'}</p>
          </div>

          <div className="p-4.5 rounded-2xl bg-[#0B132B] border border-slate-700 space-y-1.5 hover:border-[#D4AF37] transition-all">
            <span className="text-[#F4D068] font-bold font-serif text-base block">2012م</span>
            <span className="font-bold text-white block">{currentLang === 'ar' ? 'التوسع الاستثماري والمصرفي' : 'Banking & Insurance Expansion'}</span>
            <p className="text-slate-300">{currentLang === 'ar' ? 'تعزيز الحصص الاستراتيجية في بنك أمدرمان وشيكان.' : 'Consolidating shares in ONB and Shiekan.'}</p>
          </div>

          <div className="p-4.5 rounded-2xl bg-[#0B132B] border border-slate-700 space-y-1.5 hover:border-[#D4AF37] transition-all">
            <span className="text-[#F4D068] font-bold font-serif text-base block">2018م</span>
            <span className="font-bold text-white block">{currentLang === 'ar' ? 'تطوير أسطول اللوجستيات والنقل' : 'Logistics Fleet Expansion'}</span>
            <p className="text-slate-300">{currentLang === 'ar' ? 'دمج شركات الساطع والنقل النهري والملاحة.' : 'Integrating El-Sate\'a & shipping entities.'}</p>
          </div>

          <div className="p-4.5 rounded-2xl bg-[#0B132B] border border-slate-700 space-y-1.5 hover:border-[#D4AF37] transition-all">
            <span className="text-[#F4D068] font-bold font-serif text-base block">2026م</span>
            <span className="font-bold text-white block">{currentLang === 'ar' ? 'الشراكات الدولية والتحول الرقمي' : 'International Partnerships'}</span>
            <p className="text-slate-300">{currentLang === 'ar' ? 'التحالفات مع تركيا وإعادة هيكلة المحفظة السيادية.' : 'International alliances & profile 2026.'}</p>
          </div>
        </div>
      </div>

    </div>
  );
};
