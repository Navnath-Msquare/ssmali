import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, ChevronDown, Send, ShieldCheck } from 'lucide-react';

export default function Contact() {
  // Form State
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: 'Road Construction', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success
  const [errors, setErrors] = useState({});

  // FAQ State
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'Do you execute government sub-contracts?',
      a: 'Yes, SS Mali Construction is registered to handle sub-contracts for highway paving, storm drain systems, and regional road expansions for major central/state contractors.'
    },
    {
      q: 'What regions do you serve?',
      a: 'We primarily operate across Maharashtra, with active operations in Pune, Satara, Solapur, Sangli, and Kolhapur regions.'
    },
    {
      q: 'How fast can you mobilize machinery to a site?',
      a: 'Since we own our crawler excavators, motor graders, and compaction rollers, we can mobilize within 3-5 business days depending on site distance.'
    },
    {
      q: 'Are your projects certified under safety inspections?',
      a: 'Absolutely. We perform structure integrity tests, asphalt compaction tests, and ensure core samples pass civil standards before final sign-off.'
    }
  ];

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!form.name.trim()) tempErrors.name = 'Full name is required';
    if (!form.phone.trim()) tempErrors.phone = 'Phone number is required';
    else if (!/^\+?[0-9\s-]{10,14}$/.test(form.phone.trim())) tempErrors.phone = 'Enter a valid phone number';
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) tempErrors.email = 'Enter a valid email address';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', service: 'Road Construction', message: '' });
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-widest text-amber-500 uppercase">
            GET IN TOUCH
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Request a Professional Quote
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded" />
          <p className="text-slate-400 text-sm sm:text-base">
            Discuss your road paving requirements, building foundations, or excavation timelines with our engineering coordinators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Contact Information & FAQs */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Info Cards */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-slate-800 text-amber-500 border border-slate-700/50">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Office Address</h4>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    SS Mali,<br />
                    Pune, Maharashtra, 411045, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-slate-800 text-amber-500 border border-slate-700/50">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Call/WhatsApp Support</h4>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    +91 9970523432
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-slate-800 text-amber-500 border border-slate-700/50">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email Address</h4>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    contact@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Accordion FAQ Grid */}
            <div className="space-y-4 pt-6 border-t border-slate-800">
              <h3 className="font-display font-bold text-xl text-white">
                Frequently Answered Queries
              </h3>
              
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-slate-800/40 border border-slate-800 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left font-medium text-sm text-slate-200 hover:text-white transition-all cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-amber-500 transition-transform duration-300 ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openFaq === idx ? 'max-h-40 border-t border-slate-800/60' : 'max-h-0'
                    }`}>
                      <p className="p-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Side: Interactive Form Card */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-8 border border-slate-800 relative">
              
              {status === 'success' && (
                <div className="absolute inset-0 bg-slate-900/95 z-20 rounded-2xl flex flex-col items-center justify-center text-center p-8 animate-fade-in-up">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-white">
                    Quote Request Submitted!
                  </h3>
                  <p className="text-slate-400 text-sm max-w-sm mt-3 leading-relaxed">
                    Thank you for reaching out to SS Mali Construction. Our estimator team will review the details and respond within 24 business hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Your Full Name <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleInput}
                      placeholder="e.g. kashinath Mali"
                      className={`w-full px-4 py-3 rounded-lg bg-slate-900 border text-slate-200 text-sm focus:outline-none focus:border-amber-500 transition-all ${
                        errors.name ? 'border-red-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-400 font-semibold">{errors.name}</p>}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Phone Number <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleInput}
                      placeholder="e.g. +91 9876543210"
                      className={`w-full px-4 py-3 rounded-lg bg-slate-900 border text-slate-200 text-sm focus:outline-none focus:border-amber-500 transition-all ${
                        errors.phone ? 'border-red-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-400 font-semibold">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleInput}
                      placeholder="e.g. user@example.com"
                      className={`w-full px-4 py-3 rounded-lg bg-slate-900 border text-slate-200 text-sm focus:outline-none focus:border-amber-500 transition-all ${
                        errors.email ? 'border-red-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-400 font-semibold">{errors.email}</p>}
                  </div>

                  {/* Service selector */}
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Service Requested
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleInput}
                      className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-250 text-slate-300 text-sm focus:outline-none focus:border-amber-500 transition-all"
                    >
                      <option>Road Construction</option>
                      <option>Building Construction</option>
                      <option>Earthmoving & Excavation</option>
                      <option>Infrastructure Dev</option>
                      <option>Equipment Wet-Leasing</option>
                    </select>
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Project details & specifications
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleInput}
                    placeholder="Describe location details, total area, laying specifications, or required duration..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-amber-500 transition-all resize-none"
                  />
                </div>

                {/* Action button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-600 disabled:bg-slate-700 disabled:text-slate-400 text-slate-950 font-bold text-sm tracking-wider uppercase transition-all shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 cursor-pointer"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                      Validating & Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Quote Request
                    </>
                  )}
                </button>
              </form>

              {/* Safety Assured Stamp */}
              <div className="flex items-center justify-center gap-2 mt-6 text-slate-500 text-xs text-center">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Your information is safely handled under SS Mali Privacy Standards.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
