import type { ContactChannel, NewsItem, Track, VideoItem } from "@/types/content";

export const homeTracks: Track[] = [
  { slug: "goldenhour", title: "Goldenhour", cover: "/images/albums/goldenhour.png" },
  { slug: "paper-crowns", title: "Paper Crowns", cover: "/images/albums/paper-crowns.png" },
  { slug: "long-live", title: "Long Live", cover: "/images/albums/long-live.png" },
  { slug: "arson", title: "Arson", cover: "/images/albums/arson.png" },
  { slug: "broken-angel", title: "Broken Angel", cover: "/images/albums/broken-angel.png" },
];

export const musicTracks: Track[] = [
  { slug: "until-dawn", title: "Until Dawn", cover: "/images/albums/goldenhour.png" },
  { slug: "afterhours", title: "Afterhours", cover: "/images/albums/paper-crowns.png" },
  { slug: "city-lights", title: "City Lights", cover: "/images/albums/long-live.png" },
  { slug: "silent-echoes", title: "Silent Echoes", cover: "/images/albums/arson.png" },
  { slug: "late-hours", title: "Late Hours", cover: "/images/albums/broken-angel.png" },
];

export const newsItems: NewsItem[] = [
  {
    slug: "behind-the-melody-vip-club",
    date: "Aug 6, 2026",
    title: "Behind The Melody (VIP Club)",
    excerpt:
      "Get exclusive access to unreleased acoustic demos, private tour vlogs, and priority presale codes. Join the community for free today.",
    image: "/images/news/vip-club.jpg",
  },
  {
    slug: "billboard-interview-the-evolution-of-sound",
    date: "Aug 6, 2026",
    title: "Billboard Interview: The Evolution of Sound",
    excerpt:
      "An in-depth conversation exploring the sonic transition from bedroom pop to stadium synth-wave. Read the full featured story online.",
    image: "/images/news/billboard-interview.jpg",
  },
  {
    slug: "echoes-vintage-tour-hoodie",
    date: "Aug 6, 2026",
    title: "Echoes Vintage Tour Hoodie",
    excerpt:
      "Heavyweight, 100% organic cotton fleece pullover custom-printed with tour artwork. Limited run available exclusively through the official webstore.",
    image: "/images/news/echoes-hoodie.jpg",
  },
  {
    slug: "neon-hearts-official-single",
    date: "Aug 6, 2026",
    title: "Neon Hearts (Official Single)",
    excerpt:
      "An upbeat, late-night anthem featuring driving basslines and atmospheric vocals. Listen to the new single and watch the official music video.",
    image: "/images/news/neon-hearts.jpg",
  },
  {
    slug: "the-world-echoes-tour-2026",
    date: "Aug 6, 2026",
    title: "The World Echoes Tour 2026",
    excerpt:
      "Catch the live show experience featuring brand-new arrangements, visual production, and special guest openers. Grab your presale tickets today.",
    image: "/images/news/world-echoes-tour.jpg",
  },
  {
    slug: "midnight-echoes-deluxe-album",
    date: "Aug 6, 2026",
    title: "Midnight Echoes (Deluxe Album)",
    excerpt:
      "An immersive 12-track collection blending dark synth-pop with raw acoustic intimacy. Stream the full album now across all major platforms.",
    image: "/images/news/midnight-echoes.png",
  },
];

export const videoItems: VideoItem[] = [
  {
    slug: "moon-night-knight",
    title: "Moon Night Knight",
    image: "/images/videos/moon-night-knight.jpg",
    aspect: "square",
  },
  {
    slug: "hamsafar-mera",
    title: "Hamsafar Mera",
    image: "/images/videos/hamsafar-mera.jpg",
    aspect: "square",
  },
  {
    slug: "goldenhour-official-video",
    title: "Goldenhour — Official Video",
    image: "/images/videos/goldenhour-official-video.jpg",
    aspect: "square",
  },
  {
    slug: "arson-official-video",
    title: "Arson — Official Video · Dir. Mara Quill",
    image: "/images/videos/arson-official-video.webp",
    aspect: "portrait",
  },
  {
    slug: "paper-crowns-lyric-video",
    title: "Paper Crowns — Lyric Video",
    image: "/images/videos/paper-crowns-lyric-video.jpg",
    aspect: "square",
  },
  {
    slug: "arson-live-from-wembley",
    title: "Arson — Live From Wembley",
    image: "/images/videos/arson-live-from-wembley.webp",
    aspect: "portrait",
  },
];

export const contactChannels: ContactChannel[] = [
  {
    number: "01",
    role: "Booking & Live",
    contact: "Sasha Lindqvist · Paradigm Agency",
    email: "booking@nylamonroe.com",
  },
  {
    number: "02",
    role: "Management",
    contact: "Theo Marchetti · Half-Light Management",
    email: "management@nylamonroe.com",
  },
  {
    number: "03",
    role: "Press & Media",
    contact: "Ivy Okonkwo · Bright Room PR",
    email: "press@nylamonroe.com",
  },
  {
    number: "04",
    role: "Sync & Licensing",
    contact: "Half-Light Records",
    email: "sync@nylamonroe.com",
  },
];

export const bioParagraph =
  "From an Asheville piano bench to sold-out stadiums, NYLA built her sound out of voicemail confessions and closing-time choruses. Three albums in, she still writes like it’s a secret she has to tell you first — every track a scene, every bridge a held breath.";

export const socialLinks = [
  { label: "Spotify", href: "https://open.spotify.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "X", href: "https://x.com" },
  { label: "Youtube", href: "https://youtube.com" },
  { label: "Apple Music", href: "https://music.apple.com" },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Music", href: "/music" },
  { label: "News", href: "/news" },
  { label: "Videos", href: "/videos" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
