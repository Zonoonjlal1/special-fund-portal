import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Phone, Mail, Clock, Send, Shield, CheckCircle2, Building2 } from 'lucide-react';

interface ContactViewProps {
  currentLang: Language;
}

export const ContactView: React.FC<ContactViewProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: 'general',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-slate-100">
      
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3.5 py-1 rounded-full bg-amber-500/10 text-[#F4D068] border border-[#D4AF37]/40 text-xs font-bold uppercase tracking-wider shadow-md">
          {currentLang === 'ar' ? 'التواصل المؤسسي والاستثماري السيادي' : 'Corporate & Investor Relations'}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-white font-serif">
          {t.contactPageTitle}
        </h1>
        <p className="text-sm text-slate-300">
          {t.contactPageSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Contact Info & HQs (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-6 rounded-3xl bg-[#131E3A] border border-amber-500/25 shadow-2xl space-y-5">
            <h2 className="text-lg font-bold text-white font-serif border-b border-slate-800 pb-3 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#D4AF37]" />
              <span>{currentLang === 'ar' ? 'المقر الرئيسي والمكاتب الإقليمية' : 'Headquarters & Regional Offices'}</span>
            </h2>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-[#0B132B] border border-slate-700/80 space-y-2">
                <span className="font-bold text-[#F4D068] block">
                  {currentLang === 'ar' ? 'المقر الرئيسي - الخرطوم / بورتسودان' : 'Main Headquarters - Khartoum / Port Sudan'}
                </span>
                <p className="text-slate-300 leading-relaxed">{t.hqAddressDetail}</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0B132B] border border-slate-700/80 space-y-2">
                <span className="font-bold text-amber-300 block">
                  {currentLang === 'ar' ? 'مكتب الشؤون الاستثمارية والتجارة الخارجية' : 'Investment & Foreign Trade Division'}
                </span>
                <p className="text-slate-300">
                  {currentLang === 'ar'
                    ? 'إدارة الاستثمار والمحفظة السيادية - برج الصندوق الاجتماعي'
                    : 'Investment & Sovereign Portfolio Board - Fund Tower'}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 space-y-3 text-xs">
              <div className="flex items-center gap-3 text-slate-200">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span dir="ltr" className="font-mono font-bold">+249 183 770000 / +249 183 770001</span>
              </div>
              <div className="flex items-center gap-3 text-slate-200">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span dir="ltr" className="font-mono font-medium">investor@socialfund-af.sd</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>
                  {currentLang === 'ar'
                    ? 'ساعات العمل: الأحد - الخميس (8:00 صباحاً - 3:30 مساءً)'
                    : 'Working Hours: Sun - Thu (8:00 AM - 3:30 PM UTC+2)'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#131E3A] border border-amber-500/30 flex items-start gap-3 shadow-lg">
            <Shield className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <p className="font-bold text-[#F4D068]">{t.officialAccreditation}</p>
              <p className="text-slate-300 leading-relaxed">
                {currentLang === 'ar'
                  ? 'يتم التعامل مع جميع الاستفسارات الرسمية والعقود بريميز السرية التامة وفق اللوائح القوانين السيادية.'
                  : 'All official correspondence and joint venture inquiries are strictly protected under confidentiality laws.'}
              </p>
            </div>
          </div>

        </div>

        {/* Official Inquiry Submission Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-8 rounded-3xl bg-[#131E3A] border border-amber-500/25 shadow-2xl space-y-6">
            <h2 className="text-xl font-bold text-white font-serif">
              {currentLang === 'ar' ? 'تقديم طلب / استفسار استثماري رسمي' : 'Official Investment & Inquiry Form'}
            </h2>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#0B132B] border border-[#D4AF37] text-center space-y-4 shadow-xl">
                <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
                <h3 className="text-lg font-bold text-white">
                  {currentLang === 'ar' ? 'تم استلام طلبكم بنجاح' : 'Inquiry Submitted Successfully'}
                </h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  {currentLang === 'ar'
                    ? 'شكراً لتواصلكم. تم توجيه رسالتكم إلى إدارة الاستثمار والتنسيق المؤسسي بالصندوق الخاص، وسيقوم فريق المتابعة بالرد خلال 48 ساعة عمل.'
                    : 'Thank you for contacting us. Your official inquiry has been routed to the Investment Board. Our team will respond within 48 business hours.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-[#D4AF37] text-[#0B132B] text-xs font-extrabold hover:bg-[#F4D068] transition-colors cursor-pointer shadow-md"
                >
                  {currentLang === 'ar' ? 'إرسال استفسار آخر' : 'Submit Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-200 font-bold block">
                      {currentLang === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder={currentLang === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                      className="w-full bg-[#0B132B] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-200 font-bold block">
                      {currentLang === 'ar' ? 'البريد الإلكتروني الرسمي *' : 'Official Email Address *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-[#0B132B] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-200 font-bold block">
                      {currentLang === 'ar' ? 'رقم الهاتف / التواصل' : 'Phone Number'}
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+249..."
                      className="w-full bg-[#0B132B] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-200 font-bold block">
                      {currentLang === 'ar' ? 'الجهة / المؤسسة' : 'Entity / Organization'}
                    </label>
                    <input
                      type="text"
                      value={formState.organization}
                      onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                      placeholder={currentLang === 'ar' ? 'اسم الشركة أو المؤسسة' : 'Company or Agency name'}
                      className="w-full bg-[#0B132B] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-200 font-bold block">
                    {currentLang === 'ar' ? 'نوع الاستفسار' : 'Inquiry Category'}
                  </label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full bg-[#0B132B] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#D4AF37] transition-all"
                  >
                    <option value="general">{currentLang === 'ar' ? 'استفسار عام حول الصندوق' : 'General Fund Inquiry'}</option>
                    <option value="partnership">{currentLang === 'ar' ? 'طلب شراكة استثمارية أو تحالف تجاري' : 'Investment Partnership / Joint Venture'}</option>
                    <option value="portfolio">{currentLang === 'ar' ? 'استفسار حول إحدى الشركات التابعة' : 'Subsidiary Entity Query'}</option>
                    <option value="media">{currentLang === 'ar' ? 'استفسارات إعلامية ومؤسسية' : 'Media & Institutional Public Relations'}</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-200 font-bold block">
                    {currentLang === 'ar' ? 'تفاصيل الرسالة أو الطلب *' : 'Message Details *'}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder={currentLang === 'ar' ? 'يرجى تقديم تفاصيل الاستفسار أو اقتراح الشراكة...' : 'Provide details regarding your proposal or query...'}
                    className="w-full bg-[#0B132B] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#F4D068] text-[#0B132B] font-extrabold text-xs shadow-xl hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2 border border-[#D4AF37]"
                >
                  <Send className="w-4 h-4" />
                  <span>{currentLang === 'ar' ? 'إرسال الرسالة الرسمية' : 'Submit Official Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
