import React from 'react';
import { Language, SectorId } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SECTORS } from '../data/portfolioData';
import {
  Landmark,
  Building,
  Tractor,
  Truck,
  ShieldCheck,
  Zap,
  Flame,
  ShoppingBag,
  Sparkles,
  Factory,
  Wrench,
  Layers,
  ArrowRight
} from 'lucide-react';

interface SectorGridProps {
  currentLang: Language;
  onSelectSector: (sectorId: SectorId) => void;
}

const SECTOR_ICONS: Record<SectorId, React.ComponentType<{ className?: string }>> = {
  banking: Landmark,
  insurance: ShieldCheck,
  transport: Truck,
  mining: Layers,
  energy: Zap,
  real_estate: Building,
  petrochemicals: Flame,
  commerce: ShoppingBag,
  tourism: Sparkles,
  industrial: Factory,
  agricultural: Tractor,
  engineering: Wrench,
  services: Layers,
};

export const SectorGrid: React.FC<SectorGridProps> = ({
  currentLang,
  onSelectSector,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section className="space-y-8 py-8">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-4 py-1.5 rounded-full bg-amber-500/10 text-[#F4D068] border border-[#D4AF37]/40 text-xs font-bold tracking-wider uppercase shadow-md">
          {currentLang === 'ar' ? 'المنظومة الاقتصادية السيادية (13 قطاعاً)' : 'Sovereign Economic Ecosystem (13 Sectors)'}
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-white font-serif">
          {t.sectorsHeading}
        </h2>
        <p className="text-sm md:text-base text-slate-300">
          {t.sectorsSubheading}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {SECTORS.map((sector) => {
          const IconComponent = SECTOR_ICONS[sector.id] || Layers;

          return (
            <div
              key={sector.id}
              onClick={() => onSelectSector(sector.id)}
              className="group relative p-6 rounded-2xl bg-[#131E3A] hover:bg-[#1C2541] border border-amber-500/20 hover:border-[#D4AF37] shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="p-3 rounded-xl bg-[#0B132B] text-[#D4AF37] border border-slate-700/80 group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-all shadow-md">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-[#0B132B] text-[#F4D068] border border-[#D4AF37]/30">
                    {sector.count} {currentLang === 'ar' ? 'كيان' : 'Entities'}
                  </span>
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-bold text-white group-hover:text-[#F4D068] transition-colors font-serif">
                    {currentLang === 'ar' ? sector.nameAr : sector.nameEn}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {currentLang === 'ar' ? sector.descriptionAr : sector.descriptionEn}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-[#F4D068] group-hover:text-white transition-colors">
                <span>{t.viewSectorCompanies}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 text-[#D4AF37]" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
