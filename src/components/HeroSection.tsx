import React, { useState, useEffect } from 'react';
import { Language, PageView } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { LogoCrest } from './LogoCrest';
import { ShieldCheck, ArrowRight, Building2, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface HeroSectionProps {
  currentLang: Language;
  onNavigate: (view: PageView) => void;
}

interface SlideItem {
  id: number;
  imageUrl: string;
  titleAr: string;
  titleEn: string;
  captionAr: string;
  captionEn: string;
}

const HERO_SLIDES: SlideItem[] = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85',
    titleAr: 'مقرن النيلين الخالد - الخرطوم',
    titleEn: 'Confluence of the Two Niles - Khartoum',
    captionAr: 'قلب أفريقيا وسودان المستقبل الواعد بالاستثمار والشراكات السيادية',
    captionEn: 'The heart of Africa and Sudan’s promising future for sovereign investments',
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85',
    titleAr: 'المنظومة الاقتصادية والمالية الحديثة',
    titleEn: 'Modern Financial & Economic Infrastructure',
    captionAr: 'إدارة أصول وسيولة استراتيجية محفظية تدعم النهضة الوطنية',
    captionEn: 'Managing strategic assets and portfolio liquidity driving national growth',
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=85',
    titleAr: 'السلة الغذائية والزراعة المحورية',
    titleEn: 'Breadbasket & Strategic Center-Pivot Agriculture',
    captionAr: 'مشاريع الأمن الغذائي واستصلاح الأراضي على ضفاف النيل',
    captionEn: 'Food security initiatives and land reclamation along the Nile basin',
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=85',
    titleAr: 'المنافذ اللوجستية وتجارة البحر الأحمر',
    titleEn: 'Red Sea Gateway & Strategic Logistics Hubs',
    captionAr: 'ربط المحفظة الاستثمارية بالأسواق الإقليمية والدولية',
    captionEn: 'Connecting our investment holdings to regional and global markets',
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang, onNavigate }) => {
  const t = TRANSLATIONS[currentLang];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-slide carousel timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section className="relative min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between bg-[#0F172A] text-white overflow-hidden shadow-2xl rounded-b-[2.5rem] border-b border-slate-800">
      
      {/* Background Image Carousel Slider */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
            }`}
          >
            <img
              src={slide.imageUrl}
              alt={currentLang === 'ar' ? slide.titleAr : slide.titleEn}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transform scale-105 animate-pulse-subtle"
            />
            {/* Multi-stage High Contrast Dark Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/75 to-[#0F172A]/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-transparent to-[#0F172A]/90" />
          </div>
        );
      })}

      {/* Grid Mesh Overlay Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-10 opacity-30" />

      {/* Floating Gold Ambient Lights */}
      <div className="absolute top-12 right-12 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none z-10" />
      <div className="absolute bottom-12 left-12 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none z-10" />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 relative z-20 w-full flex-1 flex flex-col justify-center text-center space-y-6">
        
        {/* Institutional Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-[#D4AF37]/50 shadow-xl backdrop-blur-md hover:border-[#D4AF37] transition-all">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs md:text-sm font-bold text-[#E2C997] tracking-wide">
              {t.heroBadge}
            </span>
          </div>
        </div>

        {/* Main Hero Crest */}
        <div className="flex justify-center my-1">
          <LogoCrest size="xl" showText={false} lightMode={false} />
        </div>

        {/* Titles & Hero Headline */}
        <div className="max-w-4xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-serif leading-tight drop-shadow-lg">
            {t.heroTitle}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-sans max-w-3xl mx-auto drop-shadow">
            {t.heroDescription}
          </p>
        </div>

        {/* Carousel Location Sub-Caption Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/60 border border-slate-700/80 backdrop-blur-sm text-xs text-amber-300 font-semibold shadow-inner">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
            <span>
              {currentLang === 'ar'
                ? HERO_SLIDES[currentSlide].titleAr
                : HERO_SLIDES[currentSlide].titleEn}
              {' — '}
              <span className="text-slate-300 font-normal">
                {currentLang === 'ar'
                  ? HERO_SLIDES[currentSlide].captionAr
                  : HERO_SLIDES[currentSlide].captionEn}
              </span>
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('portfolio')}
            className="px-8 py-4 rounded-2xl bg-[#D4AF37] hover:bg-[#E2C997] text-[#0F172A] font-extrabold text-sm md:text-base shadow-2xl hover:shadow-[#D4AF37]/30 hover:scale-105 transition-all cursor-pointer flex items-center gap-2.5 border border-[#D4AF37]"
          >
            <span>{t.explorePortfolio}</span>
            <ArrowRight className="w-5 h-5 rtl:rotate-180" />
          </button>

          <button
            onClick={() => onNavigate('about')}
            className="px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/90 hover:border-amber-400/60 font-bold text-sm md:text-base shadow-xl hover:scale-105 transition-all cursor-pointer flex items-center gap-2.5 backdrop-blur-md"
          >
            <Building2 className="w-5 h-5 text-[#D4AF37]" />
            <span>{currentLang === 'ar' ? 'الرؤية والتشريعات' : 'Vision & Legislation'}</span>
          </button>
        </div>

      </div>

      {/* Carousel Controls & Stats Footer Bar */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 space-y-6">
        
        {/* Controls Bar: Previous, Play/Pause, Next, Dots */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800/80">
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700 hover:border-amber-500 transition-all cursor-pointer"
              title="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700 hover:border-amber-500 transition-all cursor-pointer"
              title={isPlaying ? "Pause Carousel" : "Play Carousel"}
            >
              {isPlaying ? <Pause className="w-4 h-4 text-amber-400" /> : <Play className="w-4 h-4 text-amber-400" />}
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700 hover:border-amber-500 transition-all cursor-pointer"
              title="Next Slide"
            >
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === currentSlide
                    ? 'w-8 bg-[#D4AF37] shadow-md'
                    : 'w-2.5 bg-slate-600 hover:bg-slate-400'
                }`}
                title={`Slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Overlaid Sovereign Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 text-left rtl:text-right">
          <div className="p-4 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-800 hover:border-amber-500/50 shadow-xl transition-all">
            <span className="text-xs text-slate-400 block">{t.statDecree}</span>
            <span className="text-sm md:text-base font-bold text-[#D4AF37] font-serif">{t.statDecreeVal}</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-800 hover:border-amber-500/50 shadow-xl transition-all">
            <span className="text-xs text-slate-400 block">{t.statSectors}</span>
            <span className="text-sm md:text-base font-bold text-[#E2C997] font-serif">{t.statSectorsVal}</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-800 hover:border-amber-500/50 shadow-xl transition-all">
            <span className="text-xs text-slate-400 block">{t.statSubsidiaries}</span>
            <span className="text-sm md:text-base font-bold text-[#D4AF37] font-serif">{t.statSubsidiariesVal}</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-800 hover:border-amber-500/50 shadow-xl transition-all">
            <span className="text-xs text-slate-400 block">{t.statReach}</span>
            <span className="text-sm md:text-base font-bold text-[#E2C997] font-serif">{t.statReachVal}</span>
          </div>
        </div>

      </div>

    </section>
  );
};
