import type { AxiosRequestConfig, AxiosResponse } from 'axios';

// API 응답 데이터 타입 정의
export type APIResponseData<DATA = any> = {
  data: DATA; // 실제 데이터
  returnCode: number; // 응답 코드
  returnMessage: string; // 응답 메시지
  success: boolean; // 성공 여부
  isAxiosError?: true; // Axios 에러 여부 (선택적)
};

// 객체의 모든 속성을 선택적으로 만드는 유틸리티 타입
export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>; // 재귀적으로 모든 속성을 선택적으로 만듦
    }
  : T;

// Axios 요청 설정 타입
export type Config<D> = AxiosRequestConfig<D>;

// 응답 인터셉터 핸들러 타입
export type InterceptorHandler =
  | ((
      value: AxiosResponse,
    ) => AxiosResponse['data'] | Promise<AxiosResponse['data']>) // 응답 데이터를 반환하거나 Promise로 반환
  | null;

// 요청 인터셉터 핸들러 타입
export type InterceptorRequestHandler<V> =
  | ((value: V) => V | Promise<V>)
  | null; // 요청 데이터를 반환하거나 Promise로 반환

// API 응답 타입
export type APIResponse = AxiosResponse<APIResponseData>;
