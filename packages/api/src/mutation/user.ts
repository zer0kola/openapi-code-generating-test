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

import { useMutation } from "@tanstack/react-query";
import { UserApi } from "../";

/**
 * No description
 *
 * @tags user
 * @name CreateUsersWithListInput
 * @summary Creates list of users with given input array
 * @request POST:/user/createWithList
 */

export const useUserMutationCreateUsersWithListInput = (config?: Record<string, any>) => {
  return useMutation({ ...config, mutationFn: UserApi.createUsersWithListInput });
};

/**
 * @description This can only be done by the logged in user.
 *
 * @tags user
 * @name UpdateUser
 * @summary Updated user
 * @request PUT:/user/{username}
 */

export const useUserMutationUpdateUser = (config?: Record<string, any>) => {
  return useMutation({ ...config, mutationFn: UserApi.updateUser });
};

/**
 * No description
 *
 * @tags user
 * @name CreateUsersWithArrayInput
 * @summary Creates list of users with given input array
 * @request POST:/user/createWithArray
 */

export const useUserMutationCreateUsersWithArrayInput = (config?: Record<string, any>) => {
  return useMutation({ ...config, mutationFn: UserApi.createUsersWithArrayInput });
};

/**
 * @description This can only be done by the logged in user.
 *
 * @tags user
 * @name CreateUser
 * @summary Create user
 * @request POST:/user
 */

export const useUserMutationCreateUser = (config?: Record<string, any>) => {
  return useMutation({ ...config, mutationFn: UserApi.createUser });
};
