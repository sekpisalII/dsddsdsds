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

