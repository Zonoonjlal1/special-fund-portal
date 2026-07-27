import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { DOCUMENT_INFO } from '../data/documentData';
import { LogoCrest } from './LogoCrest';
import { X, Printer, Shield, FileCheck, Landmark } from 'lucide-react';

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[currentLang];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-amber-500/30 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden text-slate-100">
        
        {/* Modal Header */}
        <div className="p-4 md:p-6 bg-slate-950 border-b border-emerald-900/50 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-950 border border-emerald-800/60 text-amber-400">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-base md:text-lg font-bold text-amber-300 font-serif">
                {currentLang === 'ar' ? DOCUMENT_INFO.titleAr : DOCUMENT_INFO.titleEn}
              </h2>
              <p className="text-xs text-slate-400">
                {currentLang === 'ar'
                  ? 'الوثيقة التعريفية الرسمية الصادرة للعام 2026م'
                  : 'Official Corporate Profile Brief 2026'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">{t.printDocument}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Paper Document Effect */}
        <div className="p-6 md:p-10 overflow-y-auto space-y-8 bg-slate-950/60">
          
          {/* Document Header Seal */}
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-amber-500/20 text-center space-y-4 shadow-xl">
            <div className="flex justify-center">
              <LogoCrest size="xl" showText={false} />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
                {currentLang === 'ar' ? 'بسم الله الرحمن الرحيم' : 'In the Name of Allah, Most Gracious, Most Merciful'}
              </span>
              <h1 className="text-xl md:text-2xl font-bold text-amber-300 font-serif">
                {currentLang === 'ar' ? DOCUMENT_INFO.fullLegalNameAr : DOCUMENT_INFO.fullLegalNameEn}
              </h1>
              <p className="text-xs text-slate-400">
                {currentLang === 'ar'
                  ? `بموجب القرار الجمهوري رقم (${DOCUMENT_INFO.decreeNumber}) للعام ${DOCUMENT_INFO.decreeYear}م`
                  : `Pursuant to Presidential Decree No. (${DOCUMENT_INFO.decreeNumber}) of ${DOCUMENT_INFO.decreeYear}`}
              </p>
            </div>
          </div>

          {/* Sections List */}
          <div className="space-y-6">
            {DOCUMENT_INFO.aboutSections.map((sec, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/80 border border-emerald-900/40 space-y-3"
              >
                <div className="flex items-center gap-2.5 border-b border-emerald-900/50 pb-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <h3 className="text-sm md:text-base font-bold text-slate-100 font-serif">
                    {currentLang === 'ar' ? sec.titleAr : sec.titleEn}
                  </h3>
                </div>

                <ul className="space-y-2 text-xs md:text-sm text-slate-300 leading-relaxed">
                  {(currentLang === 'ar' ? sec.itemsAr : sec.itemsEn).map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer Official Seal Note */}
          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/50 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400" />
              <span>{currentLang === 'ar' ? 'وثيقة اعتماد مؤسسي رسمية 2026م' : 'Official Institutional Profile Document 2026'}</span>
            </div>
            <span className="font-mono text-emerald-400">REF: AF-SF-2026-DOC120</span>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-emerald-900/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
          >
            {t.close}
          </button>
        </div>

      </div>
    </div>
  );
};
