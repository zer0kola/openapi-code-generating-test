import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults } from "axios";
import type {
  APIResponse,
  APIResponseData,
  Config,
  InterceptorHandler,
  InterceptorRequestHandler,
} from "./types.ts";

const handleResponseInterceptor: InterceptorHandler = (response: APIResponse) => {
  if (response.data instanceof Blob || response.data instanceof ArrayBuffer) {
    return response.data;
  }

  if (!response.data.success) {
    response.data.isAxiosError = true;
    return Promise.reject(response.data);
  }

  return response.data;
};

const handleRequestInterceptor: InterceptorRequestHandler<any> = (
  config: AxiosRequestConfig<any>
) => {
  if (!config.headers) return config;

  config.headers["PgmSbst"] = sessionStorage.getItem("PgmSbst") ?? "cm0201";

  const token = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("Authorization="))
    ?.split("Authorization=");

  if (token?.[1]) config.headers["Authorization"] = `Bearer ${token[1]}`;

  return config;
};

const createHandlers = (instance: AxiosInstance) => ({
  async get<T = any, R = APIResponseData<T>, D = any>(url: string, config?: Config<D>) {
    return instance.get<T, R, D>(url, config);
  },

  async post<T = any, R = APIResponseData<T>, D = any>(url: string, data?: D, config?: Config<D>) {
    return instance.post<T, R, D>(url, data, config);
  },

  async put<T = any, R = APIResponseData<T>, D = any>(url: string, data?: D, config?: Config<D>) {
    return instance.put<T, R, D>(url, data, config);
  },

  async delete<T = any, R = APIResponseData<T>, D = any>(url: string, config?: Config<D>) {
    return instance.delete<T, R, D>(url, config);
  },
});

const createApiInstance = (config: CreateAxiosDefaults<any>) => {
  const instance = axios.create(config);

  instance.interceptors.request.use(handleRequestInterceptor);
  instance.interceptors.response.use(handleResponseInterceptor);

  return {
    ...instance,
    ...createHandlers(instance),
  };
};

const baseURL = process.env.VITE_API_URL;
const works = process.env.VITE_PRODUCT_TYPE;
const envType = process.env.VITE_APP_DEV_ENV_TYPE;

const company = localStorage.getItem("company") ?? "";

export const apiInstance = createApiInstance({
  baseURL,
  headers: { works, envType, company },
});

export const searchApiInstance = createApiInstance({
  baseURL: process.env.VITE_SEARCH_API_URL,
});

apiInstance.defaults.paramsSerializer = function (paramObj) {
  const params = new URLSearchParams();
  for (const key in paramObj) {
    params.append(key, paramObj[key]);
  }

  return params.toString();
};
