export interface NavLink {
  name: string;
  href: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
}

export interface ExpertOpinion {
  quote: string;
  author: string;
  title: string;
  image: string;
}