import {
  Bed,
  CigaretteOff,
  Flame,
  PawPrint,
  TreePine,
  Utensils,
  Volume2,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import heroImage from "./assets/hero.jpg";
import exploreImage from "./assets/explore.png";
import gastronomyImage from "./assets/gastronomy.png";
import type { Localized } from "./i18n";
import type { GuestbookEntry } from "./types";

interface IconItem {
  icon: LucideIcon;
  title: Localized;
  desc: Localized;
}

export const images = {
  hero: heroImage,
  explore: exploreImage,
  gastronomy: gastronomyImage,
};

export const contactEmail = "hola@misticacanopy.example";

export const initialGuestbookEntries: GuestbookEntry[] = [
  {
    id: "1",
    name: "Elena & David",
    message:
      "Un verdadero paraíso flotante. Despertar rodeados de la niebla y el sonido de los pájaros en la terraza fue inolvidable. El café de cortesía es delicioso.",
    date: "2026-06-12",
    rating: 5,
  },
  {
    id: "2",
    name: "Sarah Jenkins",
    message:
      "Absolutely magical! The architectural design of the cabin is stunning and the two terraces offer breathtaking views of the forest canopy. High-speed Wi-Fi worked perfectly for remote work.",
    date: "2026-05-28",
    rating: 5,
  },
  {
    id: "3",
    name: "Carlos Mendoza",
    message:
      "El mejor lugar para desconectarse. La calefacción inteligente mantiene la cabaña súper acogedora en las noches frías. Mateo, el guía de aves, es increíble: ¡vimos un quetzal!",
    date: "2026-04-15",
    rating: 5,
  },
];

export const amenitiesList: IconItem[] = [
  {
    icon: Utensils,
    title: { es: "Cocina equipada", en: "Equipped kitchen" },
    desc: { es: "Estufa, utensilios y café artesanal local.", en: "Stove, utensils & artisanal local coffee." },
  },
  {
    icon: Wifi,
    title: { es: "Wi-Fi de alta velocidad", en: "High-speed Wi-Fi" },
    desc: { es: "Conexión ideal para teletrabajo.", en: "A connection ideal for remote work." },
  },
  {
    icon: Flame,
    title: { es: "Calefacción inteligente", en: "Smart heating" },
    desc: { es: "Clima acogedor para noches de niebla.", en: "Cozy climate control for misty evenings." },
  },
  {
    icon: Bed,
    title: { es: "Ropa de cama orgánica", en: "Organic linens" },
    desc: { es: "Sábanas y edredones hipoalergénicos.", en: "Hypoallergenic sheets and duvets." },
  },
];

export const houseRules: IconItem[] = [
  {
    icon: TreePine,
    title: { es: "Respeto por la naturaleza", en: "Respect for nature" },
    desc: {
      es: "No dejes basura, no recojas plantas ni molestes a la fauna.",
      en: "Do not litter, collect plants, or disturb local wildlife.",
    },
  },
  {
    icon: Volume2,
    title: { es: "Horas de silencio", en: "Quiet hours" },
    desc: { es: "De 22:00 a 8:00.", en: "From 10:00 PM to 8:00 AM." },
  },
  {
    icon: CigaretteOff,
    title: { es: "Prohibido fumar", en: "No smoking" },
    desc: {
      es: "Dentro de la cabaña y en las terrazas.",
      en: "Inside the cabin and on the terraces.",
    },
  },
  {
    icon: PawPrint,
    title: { es: "Mascotas", en: "Pets" },
    desc: {
      es: "Solo con autorización previa, para proteger la fauna local.",
      en: "Only if pre-authorized, to protect local wildlife.",
    },
  },
];

export const faqItems: { q: Localized; a: Localized }[] = [
  {
    q: { es: "¿A qué hora es el check-in y el check-out?", en: "What are the check-in and check-out times?" },
    a: {
      es: "El check-in es a partir de las 15:00 y el check-out hasta las 11:00. Si necesitas otro horario, escríbenos y haremos lo posible por adaptarnos.",
      en: "Check-in is from 3:00 PM and check-out is until 11:00 AM. If you need a different time, write to us and we'll do our best to accommodate you.",
    },
  },
  {
    q: { es: "¿Cómo me conecto al Wi-Fi?", en: "How do I connect to the Wi-Fi?" },
    a: {
      es: "La red se llama «Mistica_Canopy_5G». Encontrarás la contraseña en la tarjeta de bienvenida junto a la cafetera.",
      en: "The network is called “Mistica_Canopy_5G”. You'll find the password on the welcome card next to the coffee maker.",
    },
  },
  {
    q: { es: "¿Cómo funciona la calefacción?", en: "How does the heating work?" },
    a: {
      es: "Se controla con el termostato de pared junto a la cama. La temperatura ideal es de 20 °C.",
      en: "Use the wall-mounted thermostat next to the bed. The ideal temperature is 20 °C (68 °F).",
    },
  },
  {
    q: { es: "¿Se puede beber el agua?", en: "Is the water drinkable?" },
    a: {
      es: "Sí. En la cocina hay un dispensador de agua de manantial filtrada, y el agua del grifo también es potable.",
      en: "Yes. There is a filtered spring water dispenser in the kitchen, and tap water is also safe to drink.",
    },
  },
  {
    q: { es: "¿Hay servicio de lavandería y limpieza?", en: "Is there laundry and cleaning service?" },
    a: {
      es: "Deja tu ropa en la bolsa de lavandería y te la devolvemos limpia y doblada en 24 h (15 USD). La limpieza premium está disponible bajo petición en estancias de más de 3 noches.",
      en: "Leave your clothes in the laundry bag and we'll return them clean and folded within 24 h (15 USD). Premium cleaning is available on request for stays longer than 3 nights.",
    },
  },
  {
    q: { es: "¿Qué rutas de senderismo hay?", en: "What hiking trails are there?" },
    a: {
      es: "Los senderos salen desde la propia cabaña. Recomendamos la ruta a la cascada «Velo de Novia» (unas 2 h ida y vuelta). A 15 minutos en coche hay tirolesa y puentes colgantes a 40 m de altura.",
      en: "Trails start right from the cabin. We recommend the “Velo de Novia” waterfall trail (about 2 h round trip). A 15-minute drive away there are zip-lines and suspension bridges 40 m above the forest floor.",
    },
  },
  {
    q: { es: "¿Dónde puedo ver aves?", en: "Where can I go bird watching?" },
    a: {
      es: "La región es famosa por sus quetzales, tucanetes y colibríes. Podemos reservarte un tour al amanecer con Mateo, nuestro guía local.",
      en: "The region is famous for quetzals, toucanets and hummingbirds. We can book you an early-morning tour with Mateo, our local guide.",
    },
  },
  {
    q: { es: "¿Dónde puedo comer cerca?", en: "Where can I eat nearby?" },
    a: {
      es: "«El Helecho Místico», a 1,2 km, con cocina de horno de leña y quesos artesanales, y «Café Neblina», en el pueblo, con café de origen y arepas de choclo. No te pierdas la trucha al ajillo ni el agua de panela con queso.",
      en: "“El Helecho Místico”, 1.2 km away, serves wood-fired dishes and artisanal cheeses, and “Café Neblina” in the village offers single-origin coffee and sweet corn arepas. Don't miss the garlic trout or the hot panela drink with cheese.",
    },
  },
];
