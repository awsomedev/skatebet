import { useState, useEffect, useCallback } from "react";
import Endpoints from "../endpoints/endpoints";
import ApiManager from "../endpoints/apiService";

export enum FetchStatus {
  Idle = "idle",
  Loading = "loading",
  Success = "success",
  Error = "error",
}

export interface UseFetchOptions<T> {
  endpoint: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  options?: React.RefObject<object>;
  body?: React.RefObject<object>;
  transform?: (data: any) => T;
  autoFetch?: boolean;
}

export function useFetch<T = any>({
  endpoint,
  method = "GET",
  body,
  options,
  transform,
  autoFetch = true,
}: UseFetchOptions<T>) {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<FetchStatus>(FetchStatus.Idle);
  const [loading, setLoading] = useState<boolean>(autoFetch);
  const [error, setError] = useState<string | null>(null);

  const buildUrlWithParams = useCallback(() => {
    if (!options?.current) return ApiManager.baseUrl + endpoint;

    const query = Object.entries(options.current)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");

    return query
      ? `${ApiManager.baseUrl + endpoint}?${query}`
      : ApiManager.baseUrl + endpoint;
  }, [endpoint, options]);

  const fetchData = useCallback(
    async (showLoading = true) => {
      if (showLoading) setLoading(true);
      setStatus(FetchStatus.Loading);
      setError(null);

      try {
        const response = await fetch(buildUrlWithParams(), {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: body ? JSON.stringify(body) : null,
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Request failed");
        }

        const transformed = transform ? transform(result) : result;
        setData(transformed);
        setStatus(FetchStatus.Success);
      } catch (err: any) {
        setError(err.message || "An unknown error occurred");
        setStatus(FetchStatus.Error);
      } finally {
        if (showLoading) setLoading(false);
      }
    },
    [endpoint, method, body, transform, buildUrlWithParams]
  );

  const reload = useCallback(() => {
    fetchData(false);
  }, [fetchData]);

  const poll = useCallback(
    (time: number) => {
      const interval = setInterval(() => {
        fetchData(false);
      }, time);

      return () => clearInterval(interval);
    },
    [fetchData]
  );

  useEffect(() => {
    if (autoFetch) fetchData();
  }, []);

  return {
    data,
    loading,
    error,
    status,
    fetchData,
    reload,
    poll,
  };
}
