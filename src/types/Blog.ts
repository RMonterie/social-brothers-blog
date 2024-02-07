import { Category } from "./Category";
import { Link } from "./Link";

export interface BlogPost {
  id: number;
  created_at: Date;
  updated_at: Date;
  title: string;
  content: string;
  category_id: number;
  img_url: string;
  category: Category;
}

export interface BlogResponse {
  current_page: number;
  data: BlogPost[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string | null;
  path: string;
  per_page: string;
  prev_page_url: string | null;
  to: number;
  total: number;
}
