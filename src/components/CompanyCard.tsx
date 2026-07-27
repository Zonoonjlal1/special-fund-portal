import React from 'react';
import { Company, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ExternalLink, ChevronRight, ChevronLeft, Building2 } from 'lucide-react';

interface CompanyCardProps {
  company: Company;
  currentLang: Language;
  onSelect: (company: Company) => void;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({
  company,
  currentLang,
  onSelect,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <div className="p-6 rounded-2xl bg-[#131E3A] border border-amber-500/20 hover:border-[#D4AF37] shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden text-white">
      {/* Top subtle golden ambient bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-[#F4D068] to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="space-y-4">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-500/10 text-[#F4D068] border border-[#D4AF37]/30 tracking-wide">
            {currentLang === 'ar' ? company.sectorNameAr : company.sectorNameEn}
          </span>
          <span className="text-[10px] font-semibold text-slate-300 bg-[#0B132B] px-2.5 py-0.5 rounded-md border border-slate-700/80">
            {currentLang === 'ar' ? company.ownershipTypeAr : company.ownershipTypeEn}
          </span>
        </div>

        {/* Title */}
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-[#0B132B] text-[#D4AF37] border border-slate-700/70 group-hover:bg-amber-500/10 group-hover:border-[#D4AF37] transition-all flex-shrink-0 mt-0.5">
            <Building2 className="w-5 h-5" />
          </div>
          <h3 
            onClick={() => onSelect(company)}
            className="text-lg md:text-xl font-bold text-white group-hover:text-[#F4D068] transition-colors font-serif cursor-pointer leading-snug"
          >
            {currentLang === 'ar' ? company.nameAr : company.nameEn}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs md:text-sm text-slate-300 leading-relaxed line-clamp-3">
          {currentLang === 'ar' ? company.descriptionAr : company.descriptionEn}
        </p>

        {/* Key Highlights Bullets */}
        {((currentLang === 'ar' ? company.highlightsAr : company.highlightsEn) || []).length > 0 && (
          <ul className="pt-1 space-y-1.5 text-xs text-slate-300">
            {(currentLang === 'ar' ? company.highlightsAr : company.highlightsEn)!.slice(0, 2).map((hl, i) => (
              <li key={i} className="flex items-center gap-2 line-clamp-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action Buttons Footer */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
        <button
          onClick={() => onSelect(company)}
          className="text-xs font-bold text-[#F4D068] hover:text-white transition-colors cursor-pointer flex items-center gap-1 group/btn"
        >
          <span>{t.viewCompanyDetails}</span>
          {currentLang === 'ar' ? (
            <ChevronLeft className="w-3.5 h-3.5 group-hover/btn:-translate-x-1 transition-transform" />
          ) : (
            <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          )}
        </button>

        {company.websiteUrl && (
          <a
            href={company.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="px-3.5 py-1.5 rounded-xl bg-[#0B132B] hover:bg-[#1C2541] text-[#F4D068] font-bold text-xs inline-flex items-center gap-1.5 shadow transition-all cursor-pointer border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:scale-105"
            title={t.visitWebsite}
          >
            <span>{t.visitWebsite}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
          </a>
        )}
      </div>
    </div>
  );
};
