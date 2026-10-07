import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { CheckCircle, ConciergeBell, X } from "lucide-react";
import { formatDate, todayISO, type Dict } from "../i18n";
import type { ReservationRequest } from "../types";

interface BookingModalProps {
  t: Dict;
  onClose: () => void;
}

const emptyForm: ReservationRequest = {
  checkIn: "",
  checkOut: "",
  guests: 2,
  name: "",
  email: "",
  notes: "",
};

const inputClass =
  "w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-forest focus:outline-none focus:ring-2 focus:ring-wood/25 focus:border-wood";
const labelClass = "block text-xs font-semibold text-forest uppercase tracking-wider mb-2";

export default function BookingModal({ t, onClose }: BookingModalProps) {
  const [form, setForm] = useState<ReservationRequest>(emptyForm);
  const [success, setSuccess] = useState(false);
  const [errorKey, setErrorKey] = useState<"errorRequired" | "errorPast" | "errorDates" | null>(null);
  const today = todayISO();

  // Close with Escape and lock page scroll while the modal is open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const update = <K extends keyof ReservationRequest>(key: K, value: ReservationRequest[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.checkIn || !form.checkOut || !form.name.trim() || !form.email.trim()) {
      setErrorKey("errorRequired");
      return;
    }
    // ISO dates compare correctly as strings
    if (form.checkIn < today) {
      setErrorKey("errorPast");
      return;
    }
    if (form.checkOut <= form.checkIn) {
      setErrorKey("errorDates");
      return;
    }

    // Demo: the request is not sent anywhere. Connect a form service or backend here.
    setErrorKey(null);
    setSuccess(true);
  };

  const b = t.booking;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-forest/40 backdrop-blur-sm"
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-cream max-w-lg w-full max-h-[calc(100vh-2rem)] overflow-y-auto rounded-2xl shadow-2xl border border-slate-300/30"
      >
        <button
          onClick={onClose}
          aria-label={b.close}
          className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-forest p-2 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!success ? (
          <div className="p-8">
            <div className="flex items-center gap-2 mb-2 text-wood">
              <ConciergeBell className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest font-bold">{b.eyebrow}</span>
            </div>
            <h3 id="booking-title" className="font-serif text-2xl text-forest mb-2 pr-8">
              {b.title}
            </h3>
            <p className="text-sm text-slate-500 mb-6">{b.desc}</p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-checkin" className={labelClass}>
                    {b.checkIn} *
                  </label>
                  <input
                    id="booking-checkin"
                    type="date"
                    required
                    autoFocus
                    min={today}
                    value={form.checkIn}
                    onChange={(e) => update("checkIn", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="booking-checkout" className={labelClass}>
                    {b.checkOut} *
                  </label>
                  <input
                    id="booking-checkout"
                    type="date"
                    required
                    min={form.checkIn || today}
                    value={form.checkOut}
                    onChange={(e) => update("checkOut", e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-guests" className={labelClass}>
                    {b.guests}
                  </label>
                  <select
                    id="booking-guests"
                    value={form.guests}
                    onChange={(e) => update("guests", Number(e.target.value))}
                    className={`${inputClass} cursor-pointer`}
                  >
                    {[1, 2, 3].map((n) => (
                      <option key={n} value={n}>
                        {b.guestOption(n)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="booking-name" className={labelClass}>
                    {b.name} *
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder={b.namePlaceholder}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="booking-email" className={labelClass}>
                  {b.email} *
                </label>
                <input
                  id="booking-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder={b.emailPlaceholder}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="booking-notes" className={labelClass}>
                  {b.notes}
                </label>
                <textarea
                  id="booking-notes"
                  rows={2}
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  placeholder={b.notesPlaceholder}
                  className={inputClass}
                />
              </div>

              {errorKey && (
                <p
                  role="alert"
                  className="text-red-600 text-xs text-center font-semibold bg-red-50 p-2 rounded-lg border border-red-100"
                >
                  {b[errorKey]}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-forest hover:bg-forest/90 active:scale-98 text-cream py-3 rounded-xl text-xs font-bold uppercase tracking-widest mt-2 cursor-pointer transition-all shadow-md shadow-forest/15"
              >
                {b.submit}
              </button>
            </form>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 text-center flex flex-col items-center space-y-6"
          >
            <div className="bg-emerald-50 p-5 rounded-full text-emerald-600 border border-emerald-100 shadow-inner">
              <CheckCircle className="w-12 h-12" />
            </div>

            <div className="space-y-2">
              <h3 id="booking-title" className="font-serif text-2xl text-forest font-bold">
                {b.successTitle}
              </h3>
              <p className="text-sm text-slate-600 max-w-xs mx-auto">{b.successDesc}</p>
            </div>

            <dl className="w-full bg-slate-50 border border-slate-200/50 rounded-xl p-4 text-sm text-left text-forest space-y-2">
              <div className="flex justify-between gap-4">
                <dt className="font-semibold text-slate-400">{b.summaryGuest}</dt>
                <dd className="font-bold text-right">{form.name}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="font-semibold text-slate-400">{b.summaryDates}</dt>
                <dd className="font-bold text-right">
                  {b.dateRange(formatDate(form.checkIn, t.locale), formatDate(form.checkOut, t.locale))}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="font-semibold text-slate-400">{b.summaryGuests}</dt>
                <dd className="font-bold text-right">{form.guests}</dd>
              </div>
            </dl>

            <p className="text-xs text-slate-500 italic">{b.reply(form.email)}</p>

            <button
              onClick={onClose}
              className="bg-wood hover:bg-wood/90 text-white rounded-xl px-6 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer transition-all"
            >
              {b.close}
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
