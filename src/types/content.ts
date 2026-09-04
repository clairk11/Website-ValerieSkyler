export interface Track {
  slug: string;
  title: string;
  cover: string;
}

export interface NewsItem {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface VideoItem {
  slug: string;
  title: string;
  image: string;
  aspect: "portrait" | "landscape" | "square";
}

export interface ContactChannel {
  number: string;
  role: string;
  contact: string;
  email: string;
}
