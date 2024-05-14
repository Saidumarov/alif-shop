import axios from "axios";
const BASE_URI = process.env.NEXT_PUBLIC_API_URL;
export const Apiservice = {
  async fetching(url: string) {
    const reponse = await axios.get(`${BASE_URI}/${url}`);
    return reponse.data;
  },
};
