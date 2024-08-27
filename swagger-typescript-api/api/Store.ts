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

import { apiInstance } from "@common/api";
import type { Order } from "../types/swagger-store.ts";

export const StoreApi = {
  /**
   * @description Returns a map of status codes to quantities
   * * @tags store
   * @name GetInventory
   * @summary Returns pet inventories by status
   * @request GET:/store/inventory
   * @secure
   */

  async getInventory<T = Record<string, number>>() {
    const response = await apiInstance.get<T>("/store/inventory");
    return response;
  },

  /**
   * No description
   * * @tags store
   * @name PlaceOrder
   * @summary Place an order for a pet
   * @request POST:/store/order
   */

  async placeOrder() {
    const response = await apiInstance.post("/store/order", payload);
    return response;
  },

  /**
   * @description For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
   * * @tags store
   * @name GetOrderById
   * @summary Find purchase order by ID
   * @request GET:/store/order/{orderId}
   */

  async getOrderById<T = Order>() {
    const response = await apiInstance.get<T>("/store/order/${orderId}");
    return response;
  },

  /**
   * @description For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
   * * @tags store
   * @name DeleteOrder
   * @summary Delete purchase order by ID
   * @request DELETE:/store/order/{orderId}
   */

  async deleteOrder() {
    const response = await apiInstance.delete("/store/order/${orderId}");
    return response;
  },
};
