export type Lang = "es" | "en";

export type Localized = Record<Lang, string>;

const es = {
  locale: "es-ES",
  nav: {
    property: "Alojamiento",
    amenities: "Amenidades",
    rules: "Reglas y servicios",
    faq: "Preguntas frecuentes",
    guestbook: "Libro de visitas",
    book: "Reservar",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    langGroup: "Idioma",
  },
  hero: {
    badge: "Guía digital del huésped",
    title: "Bienvenidos a Mística Canopy",
    subtitle:
      "Respira profundo. Un santuario suspendido entre las nubes y el musgo milenario del bosque.",
    explore: "Explorar la cabaña",
    faq: "Preguntas frecuentes",
  },
  facts: [
    { label: "Check-in", value: "Desde las 15:00" },
    { label: "Check-out", value: "Hasta las 11:00" },
    { label: "Capacidad", value: "Hasta 3 huéspedes" },
    { label: "Precio", value: "Desde 120 USD / noche" },
  ],
  property: {
    title: "Características del alojamiento",
    eyebrow: "Refugio a medida en el bosque",
    intro:
      "Vive la intimidad con la naturaleza en nuestra cabaña de 45 m², con dos amplias terrazas que ofrecen vistas panorámicas del cambiante bosque nuboso.",
    cards: [
      { title: "Santuario de 45 m²", desc: "Un espacio pensado para la calma y la contemplación." },
      { title: "Dos terrazas", desc: "Mañanas de niebla y noches estrelladas desde terrazas privadas." },
    ],
  },
  amenities: { title: "Amenidades y confort" },
  rules: {
    title: "Reglas de la casa",
    subtitle: "Respetando el santuario del bosque nuboso",
  },
  services: {
    title: "Servicios de la casa",
    items: [
      { title: "Asistencia 24/7", desc: "Estamos disponibles durante toda tu estancia." },
      { title: "Limpieza premium", desc: "Bajo petición en estancias de más de 3 noches." },
      { title: "Lavandería", desc: "Ropa limpia y doblada en 24 h (15 USD)." },
      { title: "Café de especialidad", desc: "Granos de café local de cortesía en la cocina." },
    ],
  },
  explore: {
    eyebrow: "Turismo en la región",
    title: "Explora la zona",
    desc: "Senderismo, avistamiento de aves y tirolesa sobre el dosel del bosque.",
  },
  gastronomy: {
    eyebrow: "Gastronomía de la región",
    title: "Sabores locales",
    desc: "Cocina a la leña, trucha de montaña y café de origen.",
  },
  faq: {
    title: "Preguntas frecuentes",
    subtitle: "Todo lo que necesitas saber durante tu estancia",
  },
  guestbook: {
    title: "Voces del bosque",
    formTitle: "Deja tu mensaje",
    formDesc: "Comparte tu experiencia en el bosque con futuros huéspedes de Mística Canopy.",
    nameLabel: "Tu(s) nombre(s)",
    namePlaceholder: "ej., Lucía y Andrés",
    ratingLabel: "Calificación de la experiencia",
    messageLabel: "Tu mensaje",
    messagePlaceholder: "Describe tus momentos bajo el dosel del bosque...",
    submit: "Firmar el libro",
    saved: "¡Mensaje guardado!",
    thanks: "¡Gracias! Tus palabras ya forman parte de nuestro libro de visitas.",
    stars: (n: number) => `${n} de 5 estrellas`,
  },
  footer: {
    tagline: "Serenidad atmosférica entre las nubes.",
    desc: "Santuario de bosque de niebla para mentes conscientes y caminantes contemplativos.",
    contact: "Contacto",
    demo: "Proyecto de demostración · alojamiento ficticio",
  },
  booking: {
    eyebrow: "Solicitud de reserva",
    title: "Asegura tu santuario entre las nubes",
    desc: "Envía esta solicitud para consultar disponibilidad y agendar tu estancia.",
    checkIn: "Entrada",
    checkOut: "Salida",
    guests: "Huéspedes",
    guestOption: (n: number) => (n === 1 ? "1 huésped" : `${n} huéspedes`),
    name: "Nombre completo",
    namePlaceholder: "Lucía Gómez",
    email: "Correo electrónico",
    emailPlaceholder: "lucia@ejemplo.com",
    notes: "Peticiones especiales",
    notesPlaceholder: "Avísanos si necesitas café extra o un guía de aves...",
    submit: "Enviar solicitud",
    close: "Cerrar",
    errorRequired: "Por favor completa todos los campos requeridos.",
    errorPast: "La fecha de entrada no puede ser anterior a hoy.",
    errorDates: "La fecha de salida debe ser posterior a la de entrada.",
    successTitle: "¡Solicitud recibida!",
    successDesc: "Tu solicitud de reserva para Mística Canopy se ha registrado correctamente.",
    summaryGuest: "Huésped",
    summaryDates: "Fechas",
    summaryGuests: "Huéspedes",
    dateRange: (from: string, to: string) => `${from} – ${to}`,
    reply: (email: string) =>
      `Te escribiremos a ${email} para confirmar la disponibilidad en menos de 4 horas.`,
  },
};

export type Dict = typeof es;

const en: Dict = {
  locale: "en-US",
  nav: {
    property: "Property",
    amenities: "Amenities",
    rules: "Rules & services",
    faq: "FAQ",
    guestbook: "Guestbook",
    book: "Book",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    langGroup: "Language",
  },
  hero: {
    badge: "Digital guest guide",
    title: "Welcome to Mística Canopy",
    subtitle:
      "Breathe deeply. A sanctuary suspended between the clouds and the ancient moss of the forest floor.",
    explore: "Explore the cabin",
    faq: "Frequently asked questions",
  },
  facts: [
    { label: "Check-in", value: "From 3:00 PM" },
    { label: "Check-out", value: "Until 11:00 AM" },
    { label: "Capacity", value: "Up to 3 guests" },
    { label: "Price", value: "From 120 USD / night" },
  ],
  property: {
    title: "Property features",
    eyebrow: "Bespoke woodland retreat",
    intro:
      "Experience intimacy with nature in our carefully designed 45 m² cabin, featuring two expansive terraces with panoramic views of the shifting cloud forest.",
    cards: [
      { title: "45 m² sanctuary", desc: "A space designed for quietude and reflection." },
      { title: "Two terraces", desc: "Misty mornings and starry nights from private decks." },
    ],
  },
  amenities: { title: "Amenities & comfort" },
  rules: {
    title: "House rules",
    subtitle: "Respecting the cloud forest sanctuary",
  },
  services: {
    title: "Concierge services",
    items: [
      { title: "24/7 assistance", desc: "We are available throughout your stay." },
      { title: "Premium cleaning", desc: "On request for stays longer than 3 nights." },
      { title: "Laundry", desc: "Clothes returned clean and folded within 24 h (15 USD)." },
      { title: "Specialty coffee", desc: "Complimentary local coffee beans in the kitchen." },
    ],
  },
  explore: {
    eyebrow: "Regional tourism",
    title: "Explore the area",
    desc: "Hiking, bird watching and zip-lining above the forest canopy.",
  },
  gastronomy: {
    eyebrow: "Regional gastronomy",
    title: "Local flavors",
    desc: "Wood-fired cooking, mountain trout and single-origin coffee.",
  },
  faq: {
    title: "Frequently asked questions",
    subtitle: "Everything you need to know during your stay",
  },
  guestbook: {
    title: "Whispers of the forest",
    formTitle: "Leave a note",
    formDesc: "Share your forest experience with future visitors of Mística Canopy.",
    nameLabel: "Your name(s)",
    namePlaceholder: "e.g., Emily & Jack",
    ratingLabel: "Experience rating",
    messageLabel: "Your message",
    messagePlaceholder: "Describe your moments under the canopy...",
    submit: "Sign the guestbook",
    saved: "Message saved!",
    thanks: "Thank you! Your words are now part of our guestbook.",
    stars: (n: number) => `${n} out of 5 stars`,
  },
  footer: {
    tagline: "Atmospheric serenity in the clouds.",
    desc: "A cloud forest sanctuary for mindful travelers and contemplative walkers.",
    contact: "Contact",
    demo: "Demo project · fictional property",
  },
  booking: {
    eyebrow: "Reservation request",
    title: "Secure your cloud sanctuary",
    desc: "Submit this request to check availability and schedule your stay.",
    checkIn: "Check-in",
    checkOut: "Check-out",
    guests: "Guests",
    guestOption: (n: number) => (n === 1 ? "1 guest" : `${n} guests`),
    name: "Full name",
    namePlaceholder: "Emily Jenkins",
    email: "Email address",
    emailPlaceholder: "emily@example.com",
    notes: "Special requests",
    notesPlaceholder: "Let us know if you need extra coffee or a birding guide...",
    submit: "Send request",
    close: "Close",
    errorRequired: "Please fill in all required fields.",
    errorPast: "Check-in date cannot be in the past.",
    errorDates: "Check-out date must be after check-in date.",
    successTitle: "Request received!",
    successDesc: "Your booking request for Mística Canopy has been registered.",
    summaryGuest: "Guest",
    summaryDates: "Dates",
    summaryGuests: "Guests",
    dateRange: (from: string, to: string) => `${from} – ${to}`,
    reply: (email: string) =>
      `We'll write to ${email} to confirm availability within 4 hours.`,
  },
};

export const translations: Record<Lang, Dict> = { es, en };

/** Today's date as YYYY-MM-DD in local time. */
export function todayISO(): string {
  return new Date().toLocaleDateString("en-CA");
}

/** Formats a YYYY-MM-DD date for display; returns the input unchanged if it isn't ISO. */
export function formatDate(value: string, locale: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return value;
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  return date.toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" });
}
