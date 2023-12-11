import { useState, useEffect } from "react";
import { ApiResponse } from "../service/apiService";

type DataFetchingProps<T> = {
  apiMethod: () => Promise<ApiResponse<T>>;
};

export function useDataFetching<T>({ apiMethod }: DataFetchingProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError("");

      const result = await apiMethod();
      if (result.status === "success") {
        setData(result.data);
      } else {
        setError("An error occurred");
      }

      setIsLoading(false);
    };
    fetchData();
  }, [apiMethod]);

  return { data, isLoading, error };
}
