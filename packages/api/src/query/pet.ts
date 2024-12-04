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
import { APIResponseData, PetApi } from "../";
import type { Pet } from "../types";

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
  key: { status: "available" | "pending" | "sold"[] },
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
 * @deprecated
 * @secure
 */

export const usePetQueryFindPetsByTags = <T = Pet[],>(key: { tags: string[] }, config?: Record<string, any>) => {
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
