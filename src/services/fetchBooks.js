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

export const saveBook = async (forumRequest) => {
  const response = await fetch(`${API_BASE_URI}forums/`, {
    method: "POST",
    raw: JSON.stringify(forumRequest),
    headers: {
      Authorization: AUTH_HEADER,
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
