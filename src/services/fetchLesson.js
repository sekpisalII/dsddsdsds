import { API_BASE_URI, AUTH_HEADER } from "./constants";
export const fetchLesson = async (pageSize, pageNum) => {
  const response = await fetch(`${API_BASE_URI}lessons/`, {
    method: "GET",
    header: {
      Authorization: AUTH_HEADER,
    },
  });
  return response.json();
};
