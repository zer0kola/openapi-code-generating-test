import type { AxiosRequestConfig, AxiosResponse } from "axios";

export type APIResponseData<DATA = any> = {
  data: DATA;
  returnCode: number;
  returnMessage: string;
  success: boolean;
  isAxiosError?: true;
};

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type Config<D> = AxiosRequestConfig<D>;

export type InterceptorHandler =
  | ((value: AxiosResponse) => AxiosResponse["data"] | Promise<AxiosResponse["data"]>)
  | null;

export type InterceptorRequestHandler<V> = ((value: V) => V | Promise<V>) | null;

export type APIResponse = AxiosResponse<APIResponseData>;
