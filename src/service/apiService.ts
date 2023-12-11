import axios from "axios";

const BASE_URL = "/api";

const getGeneric = async (endpoint: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    return { status: "success", data: response.data, error: null };
  } catch (error) {
    return { status: "error", data: null, error };
  }
};

const postGeneric = async (endpoint: string, payload: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, payload);
    return { status: "success", data: response.data, error: null };
  } catch (error) {
    return { status: "error", data: null, error };
  }
};

export const apiService = {
  async getPOS() {
    return getGeneric("pos");
  },
  async getChannel() {
    return getGeneric("channel");
  },
  async saveAccount(payload: {
    firstName: string;
    lastName: string;
    businessName: string;
    businessSize: number;
    businessType: string;
    channel: number;
    pos: number;
  }) {
    return postGeneric("account", payload);
  },
};
