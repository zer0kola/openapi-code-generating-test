/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { useQuery } from "@tanstack/react-query";
import { APIResponseData, UserApi } from "../";
import type { User } from "../types";

/**
 * No description
 *
 * @tags user
 * @name GetUserByName
 * @summary Get user by user name
 * @request GET:/user/{username}
 */

export const useUserQueryGetUserByName = <T = User,>(config?: Record<string, any>) => {
  return useQuery<APIResponseData<T>>({
    ...config,
    queryKey: ["/user/${username}"],
    queryFn: () => UserApi.getUserByName<T>(),
  });
};

/**
 * No description
 *
 * @tags user
 * @name LoginUser
 * @summary Logs user into the system
 * @request GET:/user/login
 */

export const useUserQueryLoginUser = <T = string,>(
  key: { username: string; password: string },
  config?: Record<string, any>,
) => {
  return useQuery<APIResponseData<T>>({
    ...config,
    queryKey: ["/user/login", key],
    queryFn: () => UserApi.loginUser<T>(key.username, key.password),
  });
};

/**
 * No description
 *
 * @tags user
 * @name LogoutUser
 * @summary Logs out current logged in user session
 * @request GET:/user/logout
 */

export const useUserQueryLogoutUser = <T = any,>(config?: Record<string, any>) => {
  return useQuery<APIResponseData<T>>({
    ...config,
    queryKey: ["/user/logout"],
    queryFn: () => UserApi.logoutUser<T>(),
  });
};
