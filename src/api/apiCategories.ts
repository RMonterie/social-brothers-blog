import axios from "axios";

const apiHostAddress = process.env.NEXT_PUBLIC_API_URL;

// api object that contains authorization header for every request.
const api = axios.create({
  baseURL: apiHostAddress,
  headers: {
    token: process.env.NEXT_PUBLIC_API_TOKEN,
  },
});

export const getCategories = async () => {
  try {
    const response = await api.get(`${apiHostAddress}/categories`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(
        `Failed to fetch categories. Status code: ${response.status}`
      );
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Something went wrong while trying to fetch categories");
  }
};
