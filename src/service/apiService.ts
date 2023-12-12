import axios from "axios";
import { Account } from "../components/AccountRegister/type";

const BASE_URL = "/api";

export type ApiResponse<T> = {
  status: "success" | "error";
  data: T | null;
  error: any;
};

const getGeneric = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    return { status: "success", data: response.data, error: null };
  } catch (error) {
    return { status: "error", data: null, error };
  }
};

const postGeneric = async <T>(
  endpoint: string,
  payload: any
): Promise<ApiResponse<T>> => {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, payload);
    return { status: "success", data: response.data, error: null };
  } catch (error) {
    return { status: "error", data: null, error };
  }
};

export const apiService = {
  async getPOS<T>(): Promise<ApiResponse<T[]>> {
    return getGeneric<T[]>("pos");
  },
  async getChannel<T>(): Promise<ApiResponse<T[]>> {
    return getGeneric<T[]>("channel");
  },
  async saveAccount(payload: Account): Promise<ApiResponse<Account>> {
    return postGeneric<Account>("account", payload);
  },
};
