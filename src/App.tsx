import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  TreePine,
  Cloud,
  Compass,
  Coffee,
  Menu,
  X,
  ChevronRight,
  ConciergeBell,
  HelpCircle,
  Mail,
} from "lucide-react";
import Guestbook from "./components/Guestbook";
import Faq from "./components/Faq";
import BookingModal from "./components/BookingModal";
import { amenitiesList, contactEmail, houseRules, images } from "./data";
import { translations, type Lang } from "./i18n";

const LANG_KEY = "mistica_lang";

function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch {
    // Storage unavailable: use the default
  }
  return "es";
}

export default function App() {
  const [lang, setLang] = useState<Lang>(getInitialLang);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      // Ignore: the choice just won't persist
    }
  }, [lang]);

  const closeBooking = useCallback(() => setIsBookModalOpen(false), []);

  const navLinks = [
    { href: "#property", label: t.nav.property },
    { href: "#amenities", label: t.nav.amenities },
    { href: "#rules-services", label: t.nav.rules },
    { href: "#faq", label: t.nav.faq },
    { href: "#guestbook", label: t.nav.guestbook },
  ];

  const propertyIcons = [Compass, Cloud];

  return (
    <div className="font-sans min-h-screen text-forest selection:bg-wood/20 selection:text-forest overflow-x-hidden relative">
      {/* Background ambient fog */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] -left-[10%] w-[60%] h-[50%] bg-[#b8cbbc]/10 rounded-full blur-[120px] animate-fog-drift" />
        <div
          className="absolute bottom-[10%] -right-[10%] w-[50%] h-[60%] bg-[#96a99b]/10 rounded-full blur-[150px] animate-fog-drift"
          style={{ animationDelay: "5s" }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-cream/80 backdrop-blur-md border-b border-slate-200/20 shadow-[0_15px_35px_rgba(45,62,51,0.04)]">
        <div className="flex justify-between items-center gap-4 px-4 sm:px-6 lg:px-16 py-4 max-w-7xl mx-auto">
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <TreePine className="w-6 h-6 text-forest" />
            <span className="font-serif text-xl lg:text-2xl tracking-wide font-bold">Mística Canopy</span>
          </a>

          <div className="hidden lg:flex items-center gap-8 font-medium text-sm tracking-wide">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-wood transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Language switch */}
            <div
              role="group"
              aria-label={t.nav.langGroup}
              className="flex border border-slate-200 rounded-full bg-white/50 p-0.5 text-xs font-semibold tracking-widest"
            >
              {(["es", "en"] as const).map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  aria-pressed={lang === code}
                  className={`px-2.5 py-1 rounded-full uppercase transition-colors cursor-pointer ${
                    lang === code ? "bg-forest text-cream" : "text-slate-500 hover:text-forest"
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsBookModalOpen(true)}
              className="hidden sm:inline-flex bg-forest hover:bg-forest/90 text-cream px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 shadow-md shadow-forest/10 hover:-translate-y-0.5 cursor-pointer"
            >
              {t.nav.book}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={isMenuOpen}
              className="lg:hidden text-forest p-1 cursor-pointer"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-cream border-t border-slate-200/50 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4 text-base font-semibold">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:text-wood transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsBookModalOpen(true);
                  }}
                  className="sm:hidden bg-forest text-cream px-5 py-3 rounded-lg text-sm font-semibold tracking-wide cursor-pointer"
                >
                  {t.nav.book}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <header className="relative min-h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-102 brightness-[0.88]"
          style={{ backgroundImage: `url('${images.hero}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/50 via-forest/30 to-cream z-10" />

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-cream/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs uppercase tracking-widest font-semibold">
              <Cloud className="w-3.5 h-3.5 text-slate-300 animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl text-white leading-[1.15] drop-shadow-sm font-bold">
              {t.hero.title}
            </h1>

            <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-200 tracking-wide leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#property"
                className="bg-cream hover:bg-white text-forest px-8 py-3.5 rounded-xl font-bold tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <span>{t.hero.explore}</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#faq"
                className="bg-forest/40 hover:bg-forest/60 border border-white/30 text-white backdrop-blur-md px-8 py-3.5 rounded-xl font-bold tracking-wide transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <HelpCircle className="w-4 h-4 text-wood" />
                <span>{t.hero.faq}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Quick facts */}
      <section className="relative z-20 -mt-12 px-6 md:px-16 max-w-5xl mx-auto">
        <dl className="grid grid-cols-2 md:grid-cols-4 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/50 shadow-[0_15px_35px_rgba(45,62,51,0.08)] divide-slate-200/70 md:divide-x">
          {t.facts.map((fact) => (
            <div key={fact.label} className="p-5 text-center">
              <dt className="text-[11px] uppercase tracking-widest font-semibold text-slate-400">{fact.label}</dt>
              <dd className="font-serif text-forest font-bold mt-1">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Property */}
      <section id="property" className="py-24 px-6 md:px-16 max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-16">
          <p className="text-slate-500 text-sm uppercase tracking-widest font-semibold">{t.property.eyebrow}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-forest tracking-wide font-bold mt-2">
            {t.property.title}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mt-4">{t.property.intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.property.cards.map((card, idx) => {
            const Icon = propertyIcons[idx];
            return (
              <motion.div
                key={card.title}
                whileHover={{ y: -5 }}
                className="bg-white/60 p-10 rounded-2xl border border-slate-200/40 shadow-[0_10px_30px_rgba(45,62,51,0.03)] flex flex-col items-center text-center relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-1.5 bg-wood/50" />
                <div className="bg-slate-100 p-4 rounded-full mb-6 text-forest">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-forest font-bold">{card.title}</h3>
                <p className="text-slate-500 text-sm mt-2">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="bg-[#f5f4ef]/60 py-24 px-6 md:px-16 border-y border-slate-200/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-forest font-bold">{t.amenities.title}</h2>
            <div className="w-12 h-0.5 bg-wood mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenitiesList.map((amenity) => (
              <motion.div
                key={amenity.title.en}
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 p-8 rounded-2xl border border-slate-200/40 shadow-sm flex flex-col items-center text-center"
              >
                <div className="mb-5 bg-cream p-4 rounded-full shadow-inner">
                  <amenity.icon className="w-8 h-8 text-wood" />
                </div>
                <h3 className="font-serif text-lg font-bold text-forest">{amenity.title[lang]}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mt-2">{amenity.desc[lang]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* House rules, services, region */}
      <section id="rules-services" className="py-24 px-6 md:px-16 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-10">
            <div className="bg-white/80 p-8 rounded-2xl border border-slate-200/50 shadow-sm">
              <h2 className="font-serif text-2xl text-forest mb-2 border-l-4 border-wood pl-4 font-bold">
                {t.rules.title}
              </h2>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-6 pl-4">
                {t.rules.subtitle}
              </p>

              <ul className="space-y-6">
                {houseRules.map((rule) => (
                  <li key={rule.title.en} className="flex gap-4 items-start">
                    <div className="bg-cream p-2 rounded-lg text-forest shrink-0">
                      <rule.icon className="w-5 h-5 text-forest" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-forest leading-tight">{rule.title[lang]}</p>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">{rule.desc[lang]}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-forest text-cream p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
                <ConciergeBell className="w-56 h-56 text-white" />
              </div>

              <div className="relative z-10 space-y-6">
                <h2 className="font-serif text-2xl text-white font-bold">{t.services.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {t.services.items.map((item) => (
                    <div key={item.title} className="border-l-2 border-wood/40 pl-3">
                      <p className="font-semibold text-white text-sm">{item.title}</p>
                      <p className="text-slate-300 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {[
              { ...t.explore, image: images.explore, Icon: Compass },
              { ...t.gastronomy, image: images.gastronomy, Icon: Coffee },
            ].map((card) => (
              <motion.a
                key={card.title}
                href="#faq"
                whileHover={{ y: -5 }}
                className="group relative block h-72 rounded-2xl overflow-hidden shadow-lg border border-slate-200/20"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${card.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <span className="text-[11px] text-wood font-bold uppercase tracking-widest mb-1.5 flex items-center gap-1">
                    <card.Icon className="w-3.5 h-3.5" />
                    <span>{card.eyebrow}</span>
                  </span>
                  <h3 className="font-serif text-2xl font-bold">{card.title}</h3>
                  <p className="text-slate-200 text-sm mt-1 leading-normal">{card.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#f5f4ef]/40 py-24 px-6 md:px-16 border-y border-slate-200/30 relative">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-forest font-bold">{t.faq.title}</h2>
          <p className="text-wood font-serif italic text-xl mt-2">{t.faq.subtitle}</p>
          <div className="w-12 h-0.5 bg-wood mx-auto mt-4" />
        </div>
        <Faq lang={lang} />
      </section>

      {/* Guestbook */}
      <section id="guestbook" className="py-24 px-6 md:px-16 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-forest font-bold">{t.guestbook.title}</h2>
          <div className="w-12 h-0.5 bg-wood mx-auto mt-4" />
        </div>
        <Guestbook t={t} />
      </section>

      {/* Footer */}
      <footer className="bg-forest text-cream py-16 px-6 md:px-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          <div className="text-center md:text-left space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <TreePine className="w-6 h-6 text-wood" />
              <span className="font-serif text-xl tracking-wide font-bold">Mística Canopy</span>
            </div>
            <p className="text-slate-400 text-xs tracking-wider uppercase font-medium">{t.footer.tagline}</p>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">{t.footer.desc}</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-semibold tracking-wider uppercase text-slate-400">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-wood transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href={`mailto:${contactEmail}`}
              className="flex items-center gap-2 text-sm text-slate-300 hover:text-wood transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>
                {t.footer.contact}: {contactEmail}
              </span>
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2 text-[11px] text-slate-500 text-center">
          <span>© 2026 Mística Canopy</span>
          <span>{t.footer.demo}</span>
        </div>
      </footer>

      <AnimatePresence>{isBookModalOpen && <BookingModal t={t} onClose={closeBooking} />}</AnimatePresence>
    </div>
  );
}
