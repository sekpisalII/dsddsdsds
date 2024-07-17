import { API_BASE_URI, AUTH_HEADER } from "./constants";
export const fetchBooks = async (pageSize, pageNum) => {
  const response = await fetch(`${API_BASE_URI}courses/`, {
    method: "GET",
    header: {
      Authorization: AUTH_HEADER,
    },
  });
  return response.json();
};

export const saveBook = async ({ title, description, image }) => {
  const response = await fetch(`${API_BASE_URI}forums/`, {
    method: "POST",
    body: JSON.stringify({ title, description, image }),
    headers: {
      Authorization: AUTH_HEADER,
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
