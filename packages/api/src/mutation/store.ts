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
import { StoreApi } from "../";

/**
 * No description
 *
 * @tags store
 * @name PlaceOrder
 * @summary Place an order for a pet
 * @request POST:/store/order
 */

export const useStoreMutationPlaceOrder = (config?: Record<string, any>) => {
  return useMutation({ ...config, mutationFn: StoreApi.placeOrder });
};
