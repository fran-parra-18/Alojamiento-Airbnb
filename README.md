# 🌲 Mística Canopy — Digital Guest Guide

A demo website for a fictional cloud forest cabin listed on platforms such as Airbnb.

It shows what a small accommodation business could offer its guests: a bilingual (Spanish / English) digital welcome book with the property details, house rules, services, local recommendations, an FAQ, a guestbook and a booking request form.

> **Note:** Mística Canopy is not a real property. All names, prices, places and contact details are fictional and exist only for demonstration purposes.

## ✨ Features

* 🌐 Full Spanish / English switch (remembered between visits)
* 🏡 Property features, amenities and house rules
* 🧭 Regional tourism and gastronomy highlights
* ❓ Frequently asked questions (check-in, Wi-Fi, heating, laundry, hikes, restaurants…)
* 📝 Guestbook with star ratings
* 📅 Booking request form with date validation
* 📱 Responsive layout and accessible markup (labels, ARIA attributes, keyboard support)

### What is simulated

Because this is a demo, there is no backend:

* The **booking form** validates the data and shows a confirmation, but does not send the request anywhere.
* The **guestbook** saves entries in the visitor's own browser (`localStorage`), so other visitors don't see them.

For a real client, both would be connected to a form service, email or a small backend.

## 🛠️ Tech Stack

* React 19 + TypeScript
* Vite
* Tailwind CSS 4
* Motion (animations)
* Lucide (icons)

## 📁 Project Structure

```text
src/
├── components/
│   ├── BookingModal.tsx   # Booking request form
│   ├── Faq.tsx            # FAQ accordion
│   └── Guestbook.tsx      # Guestbook form and entries
├── App.tsx                # Page layout and sections
├── data.ts                # Property content (amenities, rules, FAQ, guestbook seed)
├── i18n.ts                # Spanish / English interface texts
├── types.ts
├── index.css
└── main.tsx
```

## 🚀 Running Locally

Requirements: Node.js 18+ and npm.

```bash
git clone https://github.com/fran-parra-18/Alojamiento-Airbnb.git
cd Alojamiento-Airbnb
npm install
npm run dev
```

Then open the local URL displayed in the terminal.

Other scripts:

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run build`   | Production build into `dist/`       |
| `npm run preview` | Serve the production build locally  |
| `npm run lint`    | Type-check the project              |

The build is fully static, so `dist/` can be deployed to GitHub Pages, Netlify, Vercel or any static host.

## 🎯 What I Practiced

* React application development with TypeScript
* Component-based UI design
* Internationalization (i18n) without external libraries
* Responsive and accessible interfaces
* Form validation and state management
* Reviewing and refactoring AI-assisted code

## 💡 Project Context

The project is designed as a template that can be adapted for a real host: replacing the texts in `src/data.ts` and `src/i18n.ts`, the images and the contact details is enough to turn it into a working guest guide. Keeping it as a static site means no server costs and free hosting.

## 👨‍💻 Author

**Francisco Parra**

Software Development student focused on frontend, full-stack development, QA and AI-assisted software development.
