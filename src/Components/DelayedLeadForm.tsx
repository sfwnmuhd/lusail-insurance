"use client";

import { useEffect, useMemo, useState } from "react";

type Lead = {
  fullName: string;
  email: string;
  phone: string;
  product: string;
};

const PRODUCTS = [
  "Car Insurance",
  "Health Insurance",
  "Life Insurance",
  "Travel Insurance",
  "Yacht/ Boat / Jetskie Insurance",
  "Personal Accident Insurance",
  "Maid & Driver Insurance",
  "Property Insurance",
  "Motor Fleet Insurance",
  "Group Medical & Life Insurance",
  "Casuality & Liability Insurance",
  "Engineering Insurance",
  "Marine & Aviation Insurance",
  "Term Insurance",
];

const HIDE_KEY = "lead_modal_hidden_until";

export default function DelayedLeadForm({ delayMs = 7000 }: { delayMs?: number }) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [lead, setLead] = useState<Lead>({ fullName: "", email: "", phone: "", product: PRODUCTS[0] });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState({ name: "", email: "", message: "" , product: "", phone: ""});
  // const [loading, setLoading] = useState(false);
  // const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setLoading(true);

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    // setLoading(false);
    // setStatus(data.message);
  };


  useEffect(() => {
    const hiddenUntil = Number(localStorage.getItem(HIDE_KEY) || 0);
    if (hiddenUntil && Date.now() < hiddenUntil) return;
    const id = setTimeout(() => setOpen(true), delayMs);
    return () => clearTimeout(id);
  }, [delayMs]);

  const validate = useMemo(() => {
    return (data: Lead) => {
      const e: Record<string, string> = {};
      if (!data.fullName.trim()) e.fullName = "Full name is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Valid email required";
      if (!/^\+?[0-9\s-]{7,15}$/.test(data.phone)) e.phone = "Valid phone required";
      if (!data.product) e.product = "Please select a product";
      return e;
    };
  }, []);

  const hideFor24h = () => {
    const DAY = 24 * 60 * 60 * 1000;
    localStorage.setItem(HIDE_KEY, String(Date.now() + DAY));
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate(lead);
    setErrors(e);
    if (Object.keys(e).length) return;
    setSubmitting(true);
    try {
      // Persist locally; integrate to backend later
      const existing = JSON.parse(localStorage.getItem("leads") || "[]");
      existing.push({ ...lead, createdAt: new Date().toISOString() });
      localStorage.setItem("leads", JSON.stringify(existing));
      hideFor24h();
      setOpen(false);
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-label="Request a quote">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="text-lg font-semibold text-[#8B1538]">Tell us what you need</h3>
          <button
            onClick={() => { setOpen(false); hideFor24h(); }}
            aria-label="Close"
            className="rounded-full w-8 h-8 grid place-items-center text-[#8B1538] hover:bg-black/5"
          >
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
          <div>
            <label className="block text-sm mb-1">Full name</label>
            <input
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-[#8B1538]"
              placeholder="John Doe"
              autoFocus
              required
            />
            {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-[#8B1538]"
                placeholder="yourname@gmail.com"
                required
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm mb-1">Phone number</label>
              <input
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-[#8B1538]"
                placeholder="+974 1234 5678"
                required
              />
              {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">Product</label>
            <select
              value={form.product}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-[#8B1538]"
              required
            >
              {PRODUCTS.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            {errors.product && <p className="text-xs text-red-600 mt-1">{errors.product}</p>}
          </div>
          <div className="pt-2 flex items-center justify-between">
            <button
              type="button"
              onClick={() => { setOpen(false); hideFor24h(); }}
              className="px-4 py-2 rounded-lg border"
            >
              Not now
            </button>
            <button
              disabled={submitting}
              aria-busy={submitting}
              className="px-5 py-2 rounded-lg bg-[#8B1538] text-white disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {submitting && (
                <span
                  aria-hidden
                  className="inline-block w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"
                />
              )}
              <span>{submitting ? "Submitting..." : "Submit"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
