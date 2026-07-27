import React, { useState, useEffect } from 'react';
import { Language, Company, PageView } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { COMPANIES } from '../data/portfolioData';
import { Search, X, ArrowRight, Building } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onSelectCompany: (company: Company) => void;
  onNavigate: (view: PageView) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onSelectCompany,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredCompanies = query.trim() === ''
    ? COMPANIES.slice(0, 5)
    : COMPANIES.filter(c =>
        c.nameAr.toLowerCase().includes(query.toLowerCase()) ||
        c.nameEn.toLowerCase().includes(query.toLowerCase()) ||
        c.sectorNameAr.toLowerCase().includes(query.toLowerCase()) ||
        c.sectorNameEn.toLowerCase().includes(query.toLowerCase()) ||
        c.descriptionAr.toLowerCase().includes(query.toLowerCase()) ||
        c.descriptionEn.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#131E3A] border border-amber-500/30 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden text-slate-100 flex flex-col">
        
        {/* Search Bar Input */}
        <div className="p-4 bg-[#0B132B] text-white border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            autoFocus
            className="w-full bg-transparent text-sm md:text-base text-white placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#F4D068] hover:text-white px-2 py-1 rounded bg-[#1C2541] border border-slate-700"
            >
              {currentLang === 'ar' ? 'مسح' : 'Clear'}
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-[#1C2541] hover:bg-[#283659] text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3 bg-[#0B132B]">
          <p className="text-[11px] font-bold text-[#F4D068] uppercase tracking-wider px-2">
            {query.trim() === ''
              ? (currentLang === 'ar' ? 'مقترحات الشركات والاستثمارات الرئيسية' : 'Suggested Anchor Entities')
              : (currentLang === 'ar' ? `نتائج البحث (${filteredCompanies.length})` : `Search Results (${filteredCompanies.length})`)}
          </p>

          {filteredCompanies.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-xs font-medium">
              {t.noCompaniesFound}
            </div>
          ) : (
            <div className="space-y-2">
              {filteredCompanies.map((company) => (
                <div
                  key={company.id}
                  onClick={() => {
                    onSelectCompany(company);
                    onClose();
                  }}
                  className="p-3.5 rounded-xl bg-[#131E3A] hover:bg-[#1C2541] border border-slate-800 hover:border-[#D4AF37] shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#0B132B] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-all shadow-xs">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-white group-hover:text-[#F4D068] transition-colors">
                          {currentLang === 'ar' ? company.nameAr : company.nameEn}
                        </h4>
                        {company.websiteUrl && (
                          <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-[#D4AF37]/40 px-1.5 py-0.2 rounded font-semibold">
                            {currentLang === 'ar' ? 'موقع رسمي' : 'Official Site'}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                        {currentLang === 'ar' ? company.sectorNameAr : company.sectorNameEn} • {currentLang === 'ar' ? company.descriptionAr : company.descriptionEn}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#D4AF37] transition-colors flex-shrink-0 rtl:rotate-180" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer Quick Link */}
        <div className="p-3 bg-[#0B132B] border-t border-slate-800 flex items-center justify-between text-xs text-slate-300 px-4">
          <span>{currentLang === 'ar' ? 'تصفح جميع القطاعات الاستثمارية' : 'Browse all investment sectors'}</span>
          <button
            onClick={() => {
              onNavigate('portfolio');
              onClose();
            }}
            className="text-[#F4D068] font-bold hover:text-white cursor-pointer"
          >
            {t.explorePortfolio} →
          </button>
        </div>

      </div>
    </div>
  );
};
