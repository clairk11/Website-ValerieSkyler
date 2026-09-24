export type Track = {
  id: string;
  title: string;
  meta: string;
  cover: string;
};

export const FEATURED_TRACK = {
  eyebrow: "Current release / NR 014",
  title: "Glass Hours",
  cover: "/media/soundform/glass-hours-cover.png",
};

export const TRACKS: Track[] = [
  {
    id: "sahara-pulse",
    title: "Sahara Pulse",
    meta: "Single, 2026",
    cover: "/media/soundform/sahara-pulse-cover.png",
  },
  {
    id: "kalimba-rain",
    title: "Kalimba Rain",
    meta: "Single, 2025",
    cover: "/media/soundform/kalimba-rain-cover.png",
  },
  {
    id: "dune-ritual",
    title: "Dune Ritual",
    meta: "EP track, 2025",
    cover: "/media/soundform/dune-ritual-cover.png",
  },
  {
    id: "ember-dance",
    title: "Ember Dance",
    meta: "EP track, 2024",
    cover: "/media/soundform/ember-dance-cover.png",
  },
];

export type LiveDate = {
  day: string;
  month: string;
  weekday: string;
  city: string;
  country: string;
  venue: string;
  status: "Tickets" | "Sold out";
};

export const LIVE_DATES: LiveDate[] = [
  { day: "14", month: "Oct", weekday: "Wed", city: "Berlin", country: "DE", venue: "Halle Nord", status: "Tickets" },
  { day: "22", month: "Oct", weekday: "Thu", city: "Amsterdam", country: "NL", venue: "The Lantern Room", status: "Sold out" },
  { day: "05", month: "Nov", weekday: "Thu", city: "London", country: "UK", venue: "Atelier Nine", status: "Tickets" },
  { day: "19", month: "Nov", weekday: "Thu", city: "Paris", country: "FR", venue: "Salle Verre", status: "Tickets" },
];

export const ABOUT_GALLERY = [
  { src: "/media/soundform/about-gallery-1.png", alt: "Close-up portrait of Noa Rive in warm light" },
  { src: "/media/soundform/about-gallery-2.png", alt: "Noa Rive dancing in headphones" },
  { src: "/media/soundform/about-gallery-3.png", alt: "Noa Rive walking past a blue sculpture" },
  { src: "/media/soundform/about-gallery-4.png", alt: "Noa Rive sitting backstage with headphones" },
];

export const NAV_LINKS = ["Music", "The single", "Tour", "About"];
export const SITE_LINKS = ["Music", "The single", "Tour", "About"];
export const SOCIAL_LINKS = ["Instagram", "Spotify", "Apple Music", "YouTube"];
