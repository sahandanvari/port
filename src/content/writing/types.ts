export interface WritingSection {
  heading: string;
  body: string;
}

export interface WritingPost {
  slug: string;
  title: string;
  /** Short line under the title (MrBiscuit-style case study intro). */
  dek: string;
  publishedAt: string;
  /** e.g. "6 min" */
  readTime: string;
  tags: string[];
  /** Link to the full Work case study */
  relatedWorkSlug?: string;
  sections: WritingSection[];
}
