import axios from 'axios';
import type {
  AxiosInstance,
  AxiosRequestConfig,
  CreateAxiosDefaults,
} from 'axios';
import type {
  APIResponse,
  APIResponseData,
  Config,
  InterceptorHandler,
  InterceptorRequestHandler,
} from './types.ts';

/**
 * 응답 인터셉터를 처리하는 함수
 * @param response - API 응답 객체
 * @returns 처리된 응답 데이터 또는 에러
 * @throws {Promise} 응답이 실패한 경우 에러를 반환
 */
const handleResponseInterceptor: InterceptorHandler = (
  response: APIResponse,
) => {
  // Blob나 ArrayBuffer 타입의 응답은 그대로 반환
  if (response.data instanceof Blob || response.data instanceof ArrayBuffer) {
    return response.data;
  }

  // 응답이 실패한 경우 에러로 처리
  if (!response.data.success) {
    response.data.isAxiosError = true;
    return Promise.reject(response.data);
  }

  return response.data;
};

/**
 * 요청 인터셉터를 처리하는 함수
 * @param config - Axios 요청 설정 객체
 * @returns 수정된 요청 설정 객체
 * @description 쿠키에서 인증 토큰을 추출하여 요청 헤더에 추가
 */
const handleRequestInterceptor: InterceptorRequestHandler<any> = (
  config: AxiosRequestConfig<any>,
) => {
  if (!config.headers) return config;

  // 현재는 로그인 기능이 없기 때문에 인증 토큰을 추출하는 로직은 주석 처리
  // const token = document.cookie
  //   .split('; ')
  //   .find((cookie) => cookie.startsWith('Authorization='))
  //   ?.split('Authorization=');

  // if (token?.[1]) config.headers['Authorization'] = `Bearer ${token[1]}`;

  return config;
};

/**
 * API 요청 핸들러들을 생성하는 함수
 * @param instance - Axios 인스턴스
 * @returns HTTP 메서드별 요청 핸들러 객체
 */
const createHandlers = (instance: AxiosInstance) => ({
  /**
   * GET 요청을 수행하는 함수
   * @param url - 요청 URL
   * @param config - 요청 설정
   * @returns Promise<APIResponseData<T>>
   */
  async get<T = any, R = APIResponseData<T>, D = any>(
    url: string,
    config?: Config<D>,
  ) {
    return instance.get<T, R, D>(url, config);
  },

  /**
   * POST 요청을 수행하는 함수
   * @param url - 요청 URL
   * @param data - 요청 데이터
   * @param config - 요청 설정
   * @returns Promise<APIResponseData<T>>
   */
  async post<T = any, R = APIResponseData<T>, D = any>(
    url: string,
    data?: D,
    config?: Config<D>,
  ) {
    return instance.post<T, R, D>(url, data, config);
  },

  /**
   * PUT 요청을 수행하는 함수
   * @param url - 요청 URL
   * @param data - 요청 데이터
   * @param config - 요청 설정
   * @returns Promise<APIResponseData<T>>
   */
  async put<T = any, R = APIResponseData<T>, D = any>(
    url: string,
    data?: D,
    config?: Config<D>,
  ) {
    return instance.put<T, R, D>(url, data, config);
  },

  /**
   * DELETE 요청을 수행하는 함수
   * @param url - 요청 URL
   * @param config - 요청 설정
   * @returns Promise<APIResponseData<T>>
   */
  async delete<T = any, R = APIResponseData<T>, D = any>(
    url: string,
    config?: Config<D>,
  ) {
    return instance.delete<T, R, D>(url, config);
  },
});

/**
 * API 인스턴스를 생성하는 함수
 * @param config - Axios 인스턴스 생성 설정
 * @returns 확장된 Axios 인스턴스
 * @description 인터셉터가 설정된 Axios 인스턴스와 요청 핸들러를 생성
 */
const createApiInstance = (config: CreateAxiosDefaults<any>) => {
  const instance = axios.create(config);

  instance.interceptors.request.use(handleRequestInterceptor);
  instance.interceptors.response.use(handleResponseInterceptor);

  return {
    ...instance,
    ...createHandlers(instance),
  };
};

/**
 * 기본 API 인스턴스
 * @description 기본 API 엔드포인트에 대한 요청을 처리하는 인스턴스
 */
export const apiInstance = createApiInstance({
  // 테스트용 API 엔드포인트
  baseURL: 'https://petstore.swagger.io/v2',
});

/**
 * URL 파라미터 직렬화 설정
 * @description 객체 형태의 파라미터를 URL 쿼리 문자열로 변환
 */
apiInstance.defaults.paramsSerializer = function (paramObj) {
  const params = new URLSearchParams();
  for (const key in paramObj) {
    params.append(key, paramObj[key]);
  }

  return params.toString();
};
