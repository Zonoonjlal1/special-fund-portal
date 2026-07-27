import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Globe2, CheckCircle2, Building, Tractor, Truck, HeartPulse } from 'lucide-react';

interface PartnershipsViewProps {
  currentLang: Language;
}

export const PartnershipsView: React.FC<PartnershipsViewProps> = ({
  currentLang,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-slate-100">
      
      {/* Title Section */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1 rounded-full bg-amber-500/10 text-[#F4D068] border border-[#D4AF37]/40 text-xs font-bold uppercase tracking-wider shadow-md">
          {currentLang === 'ar' ? 'التحالفات الاستراتيجية الدولية السيادية' : 'Global & Sovereign Strategic Alliances'}
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white font-serif">
          {t.turkeyPartnerTitle}
        </h1>
        <p className="text-sm md:text-base text-slate-300">
          {t.turkeyPartnerSubtitle}
        </p>
      </div>

      {/* Main Alliance Feature Banner */}
      <div className="p-8 md:p-12 rounded-3xl bg-[#131E3A] border border-amber-500/25 shadow-2xl relative overflow-hidden space-y-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-slate-800 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-[#F4D068] border border-[#D4AF37]/40 text-xs font-bold">
              <Globe2 className="w-4 h-4 text-[#D4AF37]" />
              <span>{currentLang === 'ar' ? 'شراكة سودانية - تركية سيادية' : 'Sudan - Republic of Türkiye Alliance'}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-serif leading-tight">
              {currentLang === 'ar'
                ? 'استثمارات استراتيجية في التكنولوجيا الزراعية، الأدوية، واللوجستيات'
                : 'Strategic Investments in AgTech, Pharmaceuticals, and Logistics'}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {t.turkeyPartnerDesc}
            </p>
          </div>
        </div>

        {/* 4 Pillars of Joint Ventures */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-[#0B132B] border border-slate-700 space-y-2.5 shadow-md hover:border-[#D4AF37] transition-all">
            <Tractor className="w-6 h-6 text-[#D4AF37]" />
            <h3 className="text-sm font-bold text-white">
              {currentLang === 'ar' ? 'الإنتاج الزراعي والحيواني' : 'Agribusiness & Livestock'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentLang === 'ar'
                ? 'إدخال تقنيات الري المحوري التركية واستصلاح مساحات واسعة بالتعاون مع الشركة الإفريقية.'
                : 'Modernizing agriculture via Turkish center-pivot technology and large-scale farming.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0B132B] border border-slate-700 space-y-2.5 shadow-md hover:border-[#D4AF37] transition-all">
            <Truck className="w-6 h-6 text-[#D4AF37]" />
            <h3 className="text-sm font-bold text-white">
              {currentLang === 'ar' ? 'سلاسل الإمداد واللوجستيات' : 'Supply Chains & Fleet'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentLang === 'ar'
                ? 'تحديث أسطول النقل البري عبر شركة الساطع وإدارة الموانئ البرية والبحرية.'
                : 'Upgrading heavy transport fleets through El-Sate\'a and strategic logistics hubs.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0B132B] border border-slate-700 space-y-2.5 shadow-md hover:border-[#D4AF37] transition-all">
            <HeartPulse className="w-6 h-6 text-[#D4AF37]" />
            <h3 className="text-sm font-bold text-white">
              {currentLang === 'ar' ? 'الأدوية والمستلزمات الطبية' : 'Pharma & Medical Tech'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentLang === 'ar'
                ? 'شراكة مع المصانع الدوائية الرائدة لتأمين المخزون الاستراتيجي الطبي.'
                : 'Strategic pharmaceutical sourcing and local manufacturing for medical security.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0B132B] border border-slate-700 space-y-2.5 shadow-md hover:border-[#D4AF37] transition-all">
            <Building className="w-6 h-6 text-[#D4AF37]" />
            <h3 className="text-sm font-bold text-white">
              {currentLang === 'ar' ? 'التطوير العقاري والمناطق الحرة' : 'Real Estate & Free Zones'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentLang === 'ar'
                ? 'تطوير المجمعات السكنية والمناطق الصناعية الحرة المجهزة بأحدث البنى التحتية.'
                : 'Developing modern residential compounds and industrial free zones with full infrastructure.'}
            </p>
          </div>
        </div>
      </div>

      {/* Alliance Criteria & Governance */}
      <div className="p-8 rounded-3xl bg-[#131E3A] border border-amber-500/25 shadow-2xl space-y-6">
        <h3 className="text-xl font-bold text-white font-serif text-center">
          {currentLang === 'ar' ? 'ضوابط وشروط الشراكات السيادية الدولية' : 'Institutional Investment Criteria'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
          <div className="flex items-start gap-3 p-4.5 rounded-2xl bg-[#0B132B] border border-slate-700">
            <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block mb-1">
                {currentLang === 'ar' ? 'الالتزام بالحوكمة والشفافية' : 'Governance & Compliance'}
              </span>
              <span>{currentLang === 'ar' ? 'تخضع كافة عقود الشراكة لإشراف الدائرة القانونية والمالية العليا بالصندوق.' : 'All partnerships operate under direct oversight of the Fund\'s legal and audit boards.'}</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4.5 rounded-2xl bg-[#0B132B] border border-slate-700">
            <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block mb-1">
                {currentLang === 'ar' ? 'نقل المعرفة والتقنية' : 'Technology Transfer'}
              </span>
              <span>{currentLang === 'ar' ? 'اشتراط توطين الخبرات وبناء القدرات المحلية في كافة المشاريع التنموية.' : 'Mandatory localization of technical expertise and capacity building for domestic teams.'}</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4.5 rounded-2xl bg-[#0B132B] border border-slate-700">
            <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block mb-1">
                {currentLang === 'ar' ? 'الاستدامة والمسؤولية المجتمعية' : 'Sustainability & Social Value'}
              </span>
              <span>{currentLang === 'ar' ? 'توجيه جزء من أرباح الاستثمار لصالح الخدمات الاجتماعية والصحية لمنسوبي القوات المسلحة.' : 'Reinvesting operational yields directly into healthcare, education, and housing funds.'}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
