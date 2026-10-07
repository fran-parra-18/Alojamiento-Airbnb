import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PenTool, Star, Check, Sparkles } from "lucide-react";
import type { GuestbookEntry } from "../types";
import { initialGuestbookEntries } from "../data";
import { formatDate, todayISO, type Dict } from "../i18n";

interface GuestbookProps {
  t: Dict;
}

// Demo: entries are kept in the visitor's own browser only.
const STORAGE_KEY = "mistica_guestbook";

function loadEntries(): GuestbookEntry[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {
    // Storage unavailable or corrupted: fall back to the seeded entries
  }
  return initialGuestbookEntries;
}

export default function Guestbook({ t }: GuestbookProps) {
  const [entries, setEntries] = useState<GuestbookEntry[]>(loadEntries);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const g = t.guestbook;

  useEffect(() => {
    if (!isSubmitted) return;
    const timer = setTimeout(() => setIsSubmitted(false), 4000);
    return () => clearTimeout(timer);
  }, [isSubmitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newEntry: GuestbookEntry = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      date: todayISO(),
      rating,
    };

    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEntries));
    } catch {
      // Ignore: the entry still shows for this session
    }

    setName("");
    setMessage("");
    setRating(5);
    setIsSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Submit form */}
      <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-slate-200/50 shadow-[0_10px_30px_rgba(45,62,51,0.04)]">
        <h3 className="font-serif text-2xl text-forest mb-2">{g.formTitle}</h3>
        <p className="text-sm text-slate-500 mb-6">{g.formDesc}</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="guestbook-name"
              className="block text-xs font-semibold text-forest uppercase tracking-wider mb-2"
            >
              {g.nameLabel}
            </label>
            <input
              id="guestbook-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={g.namePlaceholder}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-wood/20 focus:border-wood text-forest"
            />
          </div>

          <fieldset>
            <legend className="block text-xs font-semibold text-forest uppercase tracking-wider mb-2">
              {g.ratingLabel}
            </legend>
            <div className="flex gap-1" onMouseLeave={() => setHoverRating(null)}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  aria-label={g.stars(star)}
                  aria-pressed={star === rating}
                  className="p-1 cursor-pointer transition-transform duration-100 hover:scale-110"
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= (hoverRating ?? rating) ? "text-amber-400 fill-amber-400" : "text-slate-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </fieldset>

          <div>
            <label
              htmlFor="guestbook-message"
              className="block text-xs font-semibold text-forest uppercase tracking-wider mb-2"
            >
              {g.messageLabel}
            </label>
            <textarea
              id="guestbook-message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={g.messagePlaceholder}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-wood/20 focus:border-wood text-forest"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-wood hover:bg-wood/95 active:scale-98 text-white font-semibold rounded-xl py-3 text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-wood/10"
          >
            {isSubmitted ? (
              <>
                <Check className="w-4 h-4 animate-bounce" />
                <span>{g.saved}</span>
              </>
            ) : (
              <>
                <PenTool className="w-4 h-4" />
                <span>{g.submit}</span>
              </>
            )}
          </button>
        </form>

        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              role="status"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 p-3 bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs rounded-xl flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{g.thanks}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Entries */}
      <div className="lg:col-span-7 space-y-4 max-h-[500px] overflow-y-auto pr-2 no-scrollbar">
        <AnimatePresence initial={false}>
          {entries.map((entry) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white/60 p-6 rounded-2xl border border-slate-200/40 shadow-sm flex flex-col gap-3 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-wood" />

              <div className="flex justify-between items-start gap-4">
                <div>
                  <h4 className="font-serif font-bold text-forest leading-snug">{entry.name}</h4>
                  <span className="text-[11px] text-slate-400 mt-0.5 inline-block">
                    {formatDate(entry.date, t.locale)}
                  </span>
                </div>
                <div
                  className="flex gap-0.5 bg-amber-50 px-2 py-1 rounded-lg"
                  role="img"
                  aria-label={g.stars(entry.rating)}
                >
                  {Array.from({ length: entry.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
              </div>

              <p className="text-sm text-slate-600 italic leading-relaxed">“{entry.message}”</p>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
