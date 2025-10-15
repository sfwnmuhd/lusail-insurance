"use client";

import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/insuranceData';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { useState, useMemo } from 'react';

type Lead = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

export default function InsuranceProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lead, setLead] = useState<Lead>({ fullName: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!product) {
    notFound();
  }

  const IconComponent = product.icon;

  const validate = useMemo(() => {
    return (data: Lead) => {
      const e: Record<string, string> = {};
      if (!data.fullName.trim()) e.fullName = "Full name is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Valid email required";
      if (!/^\+?[0-9\s-]{7,15}$/.test(data.phone)) e.phone = "Valid phone required";
      return e;
    };
  }, []);

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate(lead);
    setErrors(e);
    if (Object.keys(e).length) return;
    setSubmitting(true);
    try {
      // Persist locally; integrate to backend later
      const existing = JSON.parse(localStorage.getItem("leads") || "[]");
      existing.push({ ...lead, product: product.name, createdAt: new Date().toISOString() });
      localStorage.setItem("leads", JSON.stringify(existing));
      setSubmitted(true);
      setLead({ fullName: "", email: "", phone: "", message: "" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#8B1538] to-[#6B1028] text-white py-16">
        <div className="container mx-auto px-6 sm:px-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <IconComponent size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold" data-testid="product-title">{product.name}</h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl" data-testid="product-description">{product.description}</p>
        </div>
      </section>

      <div className="container mx-auto px-6 sm:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Benefits & Coverage */}
          <div className="lg:col-span-2 space-y-8">
            {/* Benefits */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="text-[#8B1538]" size={28} />
                <h2 className="text-2xl font-bold text-gray-900">Key Benefits</h2>
              </div>
              <ul className="space-y-4">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coverage */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="text-[#8B1538]" size={28} />
                <h2 className="text-2xl font-bold text-gray-900">What&apos;s Covered</h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.coverage.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ShieldCheck className="text-[#8B1538] flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-[#8B1538] mb-2" data-testid="form-title">Get a Quote</h3>
              <p className="text-gray-600 mb-6">Fill out the form and our experts will contact you shortly.</p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center" data-testid="success-message">
                  <CheckCircle2 className="text-green-600 mx-auto mb-3" size={48} />
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Thank You!</h4>
                  <p className="text-green-700">We&apos;ve received your request. Our team will contact you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-[#8B1538] hover:underline text-sm"
                    data-testid="submit-another-btn"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4" data-testid="insurance-form">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      value={lead.fullName}
                      onChange={(e) => setLead({ ...lead, fullName: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                      placeholder="John Doe"
                      required
                      data-testid="fullName-input"
                    />
                    {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      value={lead.email}
                      onChange={(e) => setLead({ ...lead, email: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                      placeholder="yourname@email.com"
                      required
                      data-testid="email-input"
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      value={lead.phone}
                      onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                      placeholder="+974 1234 5678"
                      required
                      data-testid="phone-input"
                    />
                    {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Message</label>
                    <textarea
                      value={lead.message}
                      onChange={(e) => setLead({ ...lead, message: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent h-24 resize-none"
                      placeholder="Tell us about your requirements..."
                      data-testid="message-input"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#8B1538] text-white py-3 rounded-lg font-semibold hover:bg-[#6B1028] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    data-testid="submit-btn"
                  >
                    {submitting && (
                      <span className="inline-block w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    )}
                    <span>{submitting ? "Submitting..." : "Get Free Quote"}</span>
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    By submitting this form, you agree to our terms and privacy policy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
