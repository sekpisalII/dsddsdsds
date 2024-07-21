import { API_BASE_URI, AUTH_HEADER } from "./constants";

export const fetchBlogById = async (id) => {
  const response = await fetch(`${API_BASE_URI}articles/${id}/`, {
    method: "GET",
    headers: {
      Authorization: AUTH_HEADER,
    },
  });
  return response.json();
};
