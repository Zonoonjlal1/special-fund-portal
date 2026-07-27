import React from 'react';
import { Company, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { X, ExternalLink, Shield, CheckCircle2, Building2, Calendar, Landmark } from 'lucide-react';

interface CompanyDetailModalProps {
  company: Company | null;
  onClose: () => void;
  currentLang: Language;
}

export const CompanyDetailModal: React.FC<CompanyDetailModalProps> = ({
  company,
  onClose,
  currentLang,
}) => {
  if (!company) return null;

  const t = TRANSLATIONS[currentLang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#131E3A] border border-amber-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden text-slate-100">
        
        {/* Header */}
        <div className="p-6 bg-[#0B132B] text-white border-b border-slate-800 flex items-start justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-xl bg-[#1C2541] border border-slate-700 text-[#D4AF37] mt-1 shadow-inner">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#F4D068] uppercase tracking-wider">
                {currentLang === 'ar' ? company.sectorNameAr : company.sectorNameEn}
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-white font-serif leading-tight">
                {currentLang === 'ar' ? company.nameAr : company.nameEn}
              </h2>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#1C2541] text-slate-200 text-xs font-semibold border border-slate-700">
                  {currentLang === 'ar' ? company.ownershipTypeAr : company.ownershipTypeEn}
                </span>
                {company.establishedYear && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1C2541] text-slate-300 text-xs font-medium border border-slate-700 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#D4AF37]" />
                    <span>{currentLang === 'ar' ? `تأسست ${company.establishedYear}م` : `Est. ${company.establishedYear}`}</span>
                  </span>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-[#1C2541] hover:bg-[#283659] text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 bg-[#0B132B] text-xs md:text-sm">
          
          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F4D068]">
              {currentLang === 'ar' ? 'عن الشركة والدور الاستراتيجي السيادي' : 'About the Entity & Strategic Role'}
            </h3>
            <p className="text-slate-300 leading-relaxed bg-[#131E3A] p-4.5 rounded-2xl border border-slate-800 shadow-sm">
              {currentLang === 'ar' ? company.descriptionAr : company.descriptionEn}
            </p>
          </div>

          {/* Highlights List if available */}
          {((currentLang === 'ar' ? company.highlightsAr : company.highlightsEn) || []).length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#F4D068]">
                {currentLang === 'ar' ? 'أبرز المزايا والإنجازات' : 'Key Highlights & Assets'}
              </h3>
              <div className="bg-[#131E3A] p-4.5 rounded-2xl border border-slate-800 shadow-sm space-y-2.5">
                {(currentLang === 'ar' ? company.highlightsAr : company.highlightsEn)!.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Official Website Card Banner */}
          {company.websiteUrl ? (
            <div className="p-4 rounded-2xl bg-[#131E3A] border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
              <div className="flex items-center gap-3">
                <Landmark className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white">{t.visitWebsite}</h4>
                  <p className="text-xs text-amber-300 dir-ltr font-mono">{company.websiteUrl}</p>
                </div>
              </div>
              <a
                href={company.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#F4D068] text-[#0B132B] font-extrabold text-xs flex items-center gap-1.5 shadow-lg transition-all cursor-pointer w-full sm:w-auto justify-center hover:scale-105"
              >
                <span>{currentLang === 'ar' ? 'زيارة الموقع الرسمي' : 'Visit Official Website'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ) : (
            <div className="p-3.5 rounded-2xl bg-[#131E3A] border border-slate-800 text-slate-300 text-xs flex items-center gap-2 shadow-xs">
              <Shield className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
              <span>
                {currentLang === 'ar'
                  ? 'كيان اقتصادي تابع محلياً - تُدار المعاملات والمراسلات عبر الإدارة العامة للصندوق.'
                  : 'Domestic subsidiary entity - Inquiries managed via General Administration.'}
              </span>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0B132B] border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#1C2541] hover:bg-[#283659] text-white font-bold text-xs transition-colors cursor-pointer border border-slate-700"
          >
            {t.close}
          </button>
        </div>

      </div>
    </div>
  );
};
