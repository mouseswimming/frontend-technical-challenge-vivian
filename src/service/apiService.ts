import axios from "axios";

const BASE_URL = "/api";

const fetchData = async (endpoint: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    return { status: "success", data: response.data, error: null };
  } catch (error) {
    return { status: "error", data: null, error };
  }
};

export const apiService = {
  async getPOS() {
    return fetchData("pos");
  },
  async getChannel() {
    return fetchData("channel");
  },
};
