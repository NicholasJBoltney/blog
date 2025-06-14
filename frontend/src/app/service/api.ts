import {
  BLOG_BACKEND_URL,
} from "@/environments/environment";

export const fetchCompanies = async (
  searchInput?: string,
  skip: number = 0,
  take: number = 100
) => {
  const req_url = new URL(`${BLOG_BACKEND_URL}/companies`);
  if (searchInput) {
    req_url.searchParams.append("searchInput", searchInput);
  }
  if (skip) {
    req_url.searchParams.append("skip", skip.toString());
  }
  if (take) {
    req_url.searchParams.append("take", take.toString());
  }

  const response = await fetch(req_url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log("companies from api", data);
  return data;
};

export const getBlogById = async () => {
  const response = await fetch(`${BLOG_BACKEND_URL}/blog`, {
    method: "POST",
    body: JSON.stringify({
      email: "email",
      password: "password",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
