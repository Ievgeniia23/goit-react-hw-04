import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "P_wtl3uStI-V58ytAU_1y8I9Qpnefj3hWbwC0D8FFeg";

export const fetchImages= async (searchQuery, currentPage) => {
  const response = await axios.get("search/photos", {
    params: {
      query: searchQuery,
      page: currentPage,
      per_page: 15,
      client_id: ACCESS_KEY,
      orientation: "landscape",
    },
  });

  return response.data;
};
