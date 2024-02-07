import axios from "axios";

const apiHostAddress = process.env.NEXT_PUBLIC_API_URL;

// api object that contains authorization header for every request.
const api = axios.create({
  baseURL: apiHostAddress,
  headers: {
    token: process.env.NEXT_PUBLIC_API_TOKEN,
  },
});

// Get blogs with various parameters
export const getBlogs = async (blogAmount: number = 10, pageNumber: string) => {
  try {
    const response = await api.get(
      `${apiHostAddress}/posts?page=${pageNumber}&perPage=${blogAmount}&sortBy=created_at&sortDirection=desc&categoryId=1`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to fetch blogs. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Something went wrong while trying to fetch blogs");
  }
};

// Add a new blog
export const addBlog = async (formData: FormData) => {
  try {
    const response = await api.post(`${apiHostAddress}/posts`, formData);
    if (response.status === 201) {
      console.log("SUCCESS");
    } else {
      console.log("ERROR: ", response);
      throw new Error(
        `Failed to make new blog. Status code: ${response.status}`
      );
    }
  } catch (error) {
    console.error("Error adding blog:", error);
    throw new Error("Something went wrong while trying to add blog");
  }
};
