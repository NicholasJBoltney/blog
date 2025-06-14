import { RouteConfig } from "@/types";

export const routes: RouteConfig[] = [
  {
    path: "/",
    label: "Home",
    location: "home",
  },
  {
    path: "/blog",
    label: "Blog",
    location: "blog",
  },
  {
    path: "/blog/[slug]",
    label: "Blog Post",
    location: "blog-post",
  },
  {
    path: "/about",
    label: "About",
    location: "about",
  },
  {
    path: "/contact",
    label: "Contact",
    location: "contact",
  }
];
