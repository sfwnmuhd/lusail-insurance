"use client";

import { CheckCircle2, FileText, Phone, Mail, Clock, Upload } from 'lucide-react';
import { useState } from 'react';

type ClaimForm = {
  fullName: string;
  policyNumber: string;
  email: string;
  phone: string;
  claimType: string;
  incidentDate: string;
  description: string;
};

export default function ClaimsPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [claim, setClaim] = useState<ClaimForm>({
    fullName: "",
    policyNumber: "",
    email: "",
    phone: "",
    claimType: "",
    incidentDate: "",
    description: ""
  });

  const claimTypes = [
    "Car Insurance Claim",
    "Health Insurance Claim",
    "Life Insurance Claim",
    "Travel Insurance Claim",
    "Property Insurance Claim",
    "Other"
  ];

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setSubmitting(true);
    try {
      const existing = JSON.parse(localStorage.getItem("claims") || "[]");
      existing.push({ ...claim, createdAt: new Date().toISOString() });
      localStorage.setItem("claims", JSON.stringify(existing));
      setSubmitted(true);
      setClaim({
        fullName: "",
        policyNumber: "",
        email: "",
        phone: "",
        claimType: "",
        incidentDate: "",
        description: ""
      });
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
              <FileText size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">File a Claim</h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            We're here to help you through the claims process. File your claim online and our team will assist you every step of the way.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 sm:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Claims Process */}
          <div className="lg:col-span-2 space-y-8">
            {/* Claims Process Steps */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Claims Process</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#8B1538] text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Report the Incident</h3>
                    <p className="text-gray-600">Notify us immediately after the incident occurs. The sooner you report, the faster we can process your claim.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#8B1538] text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Submit Documents</h3>
                    <p className="text-gray-600">Provide all necessary documents including policy details, incident report, and supporting evidence.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#8B1538] text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Claim Assessment</h3>
                    <p className="text-gray-600">Our team will review your claim and may contact you for additional information if needed.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#8B1538] text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Claim Settlement</h3>
                    <p className="text-gray-600">Once approved, we'll process your claim and settle it according to your policy terms.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Valid Insurance Policy Document</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Police Report (if applicable)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Photographs of Damage/Incident</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Medical Reports (for health/accident claims)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Original Bills and Receipts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">ID Copy (Qatar ID/Passport)</span>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-[#8B1538] text-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Need Immediate Assistance?</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone size={24} />
                  <div>
                    <p className="font-semibold">24/7 Claims Hotline</p>
                    <p className="text-white/90">+974 4444 5555</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={24} />
                  <div>
                    <p className="font-semibold">Email Support</p>
                    <p className="text-white/90">claims@lusailinsurance.qa</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={24} />
                  <div>
                    <p className="font-semibold">Average Response Time</p>
                    <p className="text-white/90">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Claim Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-[#8B1538] mb-2">Submit Claim</h3>
              <p className="text-gray-600 mb-6">Fill out this form to initiate your claim.</p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle2 className="text-green-600 mx-auto mb-3" size={48} />
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Claim Submitted!</h4>
                  <p className="text-green-700 mb-4">Your claim has been received. Reference number will be sent to your email.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[#8B1538] hover:underline text-sm"
                  >
                    Submit Another Claim
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      value={claim.fullName}
                      onChange={(e) => setClaim({ ...claim, fullName: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#8B1538]"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Policy Number *</label>
                    <input
                      type="text"
                      value={claim.policyNumber}
                      onChange={(e) => setClaim({ ...claim, policyNumber: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#8B1538]"
                      placeholder="POL123456789"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      value={claim.email}
                      onChange={(e) => setClaim({ ...claim, email: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#8B1538]"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      value={claim.phone}
                      onChange={(e) => setClaim({ ...claim, phone: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#8B1538]"
                      placeholder="+974 1234 5678"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Claim Type *</label>
                    <select
                      value={claim.claimType}
                      onChange={(e) => setClaim({ ...claim, claimType: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#8B1538]"
                      required
                    >
                      <option value="">Select claim type</option>
                      {claimTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Incident Date *</label>
                    <input
                      type="date"
                      value={claim.incidentDate}
                      onChange={(e) => setClaim({ ...claim, incidentDate: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#8B1538]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                    <textarea
                      value={claim.description}
                      onChange={(e) => setClaim({ ...claim, description: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#8B1538] h-24 resize-none"
                      placeholder="Describe the incident..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#8B1538] text-white py-3 rounded-lg font-semibold hover:bg-[#6B1028] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {submitting && (
                      <span className="inline-block w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    )}
                    <span>{submitting ? "Submitting..." : "Submit Claim"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
