import React, { useState } from 'react';
import { Language, Company, SectorId } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { COMPANIES, SECTORS } from '../data/portfolioData';
import { CompanyCard } from '../components/CompanyCard';
import { Search, RefreshCw, Building2 } from 'lucide-react';

interface PortfolioViewProps {
  currentLang: Language;
  onSelectCompany: (company: Company) => void;
  initialSectorFilter?: SectorId | 'all';
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({
  currentLang,
  onSelectCompany,
  initialSectorFilter = 'all',
}) => {
  const [selectedSector, setSelectedSector] = useState<SectorId | 'all'>(initialSectorFilter);
  const [searchQuery, setSearchQuery] = useState('');
  const t = TRANSLATIONS[currentLang];

  const filteredCompanies = COMPANIES.filter((company) => {
    const matchesSector = selectedSector === 'all' || company.sectorId === selectedSector;
    const matchesQuery =
      searchQuery.trim() === '' ||
      company.nameAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.descriptionAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.descriptionEn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSector && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 text-slate-100">
      
      {/* Portfolio Title Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1 rounded-full bg-amber-500/10 text-[#F4D068] border border-[#D4AF37]/40 text-xs font-bold uppercase tracking-wider shadow-md">
          {currentLang === 'ar' ? 'دليل الشركات والاستثمارات السيادية' : 'Subsidiaries & Sovereign Holdings Directory'}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-white font-serif">
          {t.portfolioPageTitle}
        </h1>
        <p className="text-sm text-slate-300">
          {t.portfolioPageSubtitle}
        </p>
      </div>

      {/* Filter & Search Bar Card */}
      <div className="p-6 rounded-2xl bg-[#131E3A] border border-amber-500/20 shadow-2xl space-y-4">
        
        {/* Search Bar Input */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-[#D4AF37] absolute left-3.5 rtl:right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-[#0B132B] border border-slate-700 rounded-xl py-2.5 pl-10 rtl:pr-10 pr-4 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] transition-all"
            />
          </div>

          {(selectedSector !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedSector('all');
                setSearchQuery('');
              }}
              className="px-4 py-2.5 rounded-xl bg-[#0B132B] hover:bg-[#1C2541] text-[#F4D068] text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer border border-[#D4AF37]/40 shadow-md"
            >
              <RefreshCw className="w-4 h-4 text-[#D4AF37]" />
              <span>{t.resetFilters}</span>
            </button>
          )}
        </div>

        {/* Sector Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-2 border-t border-slate-800 scrollbar-none">
          <button
            onClick={() => setSelectedSector('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedSector === 'all'
                ? 'bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 text-[#F4D068] border border-[#D4AF37] shadow-lg'
                : 'bg-[#0B132B] text-slate-300 hover:text-white hover:bg-[#1C2541] border border-slate-800'
            }`}
          >
            {t.filterAll} ({COMPANIES.length})
          </button>

          {SECTORS.map((sec) => {
            const isActive = selectedSector === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setSelectedSector(sec.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 text-[#F4D068] border border-[#D4AF37] shadow-lg'
                    : 'bg-[#0B132B] text-slate-300 hover:text-white hover:bg-[#1C2541] border border-slate-800'
                }`}
              >
                {currentLang === 'ar' ? sec.nameAr : sec.nameEn} ({sec.count})
              </button>
            );
          })}
        </div>

      </div>

      {/* Results Count & Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between text-xs text-slate-400 px-1 font-semibold">
          <span>
            {currentLang === 'ar'
              ? `عرض ${filteredCompanies.length} من إجمالي ${COMPANIES.length} كيان استثماري سيادي`
              : `Showing ${filteredCompanies.length} of ${COMPANIES.length} sovereign investment entities`}
          </span>
        </div>

        {filteredCompanies.length === 0 ? (
          <div className="p-12 text-center bg-[#131E3A] rounded-2xl border border-slate-800 space-y-3 shadow-xl">
            <Building2 className="w-10 h-10 text-[#D4AF37] mx-auto" />
            <p className="text-white font-bold">{t.noCompaniesFound}</p>
            <button
              onClick={() => {
                setSelectedSector('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-[#D4AF37] text-[#0B132B] text-xs font-extrabold hover:bg-[#F4D068] transition-colors cursor-pointer shadow-md"
            >
              {t.resetFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company) => (
              <CompanyCard
                key={company.id}
                company={company}
                currentLang={currentLang}
                onSelect={onSelectCompany}
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
