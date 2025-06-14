// Interfaces
export interface BlogPost {
  title: string;
  metaDescription: string;
  author: {
    name: string;
    bio: string;
    profileImage: string;
  };
  tags: string[];
  categories: string[];
  introduction: {
    hook: string;
    overview: string;
    valueProposition: string;
  };
  body: {
    subheading: string;
    content: string;
    examples: string[];
    visuals: string[];
  }[];
  conclusion: {
    summary: string;
    finalThought: string;
  };
}