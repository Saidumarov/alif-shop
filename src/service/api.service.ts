import axios from "axios";
const BASE_URI = process.env.NEXT_PUBLIC_API_URL;
const authToken = "9876543210";
export const Apiservice = {
  async fetching(url: string) {
    try {
      const response = await axios.get(`${BASE_URI}/${url}`, {
        headers: {
          Authorization: authToken,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error("Failed to fetch data");
    }
  },
};
