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
import { APIResponseData, StoreApi } from "../";
import type { Order } from "../types";

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
 * @description For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
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
