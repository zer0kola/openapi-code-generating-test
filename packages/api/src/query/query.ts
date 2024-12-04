
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

import { APIResponseData, PetApi } from "@common/api";
import { useQuery } from "@tanstack/vue-query";
import type { Pet } from "../types/swagger-pet.ts";

/**
 * @description Multiple status values can be provided with comma separated strings
 *
 * @tags pet
 * @name FindPetsByStatus
 * @summary Finds Pets by status
 * @request GET:/pet/findByStatus
 * @secure
 */

export const usePetQueryFindPetsByStatus = <T = Pet[],>(
  key: { status?: "available" | "pending" | "sold" },
  config?: Record<string, any>,
) => {
  return useQuery<APIResponseData<T>>({
    ...config,
    queryKey: ["/pet/findByStatus", key],
    queryFn: () => PetApi.findPetsByStatus<T>(key.status),
  });
};

/**
 * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 *
 * @tags pet
 * @name FindPetsByTags
 * @summary Finds Pets by tags
 * @request GET:/pet/findByTags
 * @secure
 */

export const usePetQueryFindPetsByTags = <T = Pet[],>(key: { tags?: string[] }, config?: Record<string, any>) => {
  return useQuery<APIResponseData<T>>({
    ...config,
    queryKey: ["/pet/findByTags", key],
    queryFn: () => PetApi.findPetsByTags<T>(key.tags),
  });
};

/**
 * @description Returns a single pet
 *
 * @tags pet
 * @name GetPetById
 * @summary Find pet by ID
 * @request GET:/pet/{petId}
 * @secure
 */

export const usePetQueryGetPetById = <T = Pet,>(config?: Record<string, any>) => {
  return useQuery<APIResponseData<T>>({
    ...config,
    queryKey: ["/pet/${petId}"],
    queryFn: () => PetApi.getPetById<T>(),
  });
};


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

import { APIResponseData, StoreApi } from "@common/api";
import { useQuery } from "@tanstack/vue-query";
import type { Order } from "../types/swagger-store.ts";

/**
 * @description Returns a map of status codes to quantities
 *
 * @tags store
 * @name GetInventory
 * @summary Returns pet inventories by status
 * @request GET:/store/inventory
 * @secure
 */

export const useStoreQueryGetInventory = <T = Record<string, number>,>(config?: Record<string, any>) => {
  return useQuery<APIResponseData<T>>({
    ...config,
    queryKey: ["/store/inventory"],
    queryFn: () => StoreApi.getInventory<T>(),
  });
};

/**
 * @description For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
 *
 * @tags store
 * @name GetOrderById
 * @summary Find purchase order by ID
 * @request GET:/store/order/{orderId}
 */

export const useStoreQueryGetOrderById = <T = Order,>(config?: Record<string, any>) => {
  return useQuery<APIResponseData<T>>({
    ...config,
    queryKey: ["/store/order/${orderId}"],
    queryFn: () => StoreApi.getOrderById<T>(),
  });
};


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

import { APIResponseData, UserApi } from "@common/api";
import { useQuery } from "@tanstack/vue-query";
import type { User } from "../types/swagger-user.ts";

/**
 * No description
 *
 * @tags user
 * @name LoginUser
 * @summary Logs user into the system
 * @request GET:/user/login
 */

export const useUserQueryLoginUser = <T = string,>(
  key: { username?: string; password?: string },
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

