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

import { apiInstance } from "../config/api-instance";
import type { Order } from "../types";

export const StoreApi = {
  /**
   * @description Returns a map of status codes to quantities
   *
   * @tags store
   * @name GetInventory
   * @summary Returns pet inventories by status
   * @request GET:/store/inventory
   * @secure
   */

  async getInventory<T = Record<string, number>>() {
    return await apiInstance.get<T>("/store/inventory");
  },

  /**
   * No description
   *
   * @tags store
   * @name PlaceOrder
   * @summary Place an order for a pet
   * @request POST:/store/order
   */

  async placeOrder() {
    return await apiInstance.post("/store/order", payload);
  },

  /**
   * @description For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
   *
   * @tags store
   * @name GetOrderById
   * @summary Find purchase order by ID
   * @request GET:/store/order/{orderId}
   */

  async getOrderById<T = Order>() {
    return await apiInstance.get<T>("/store/order/${orderId}");
  },

  /**
   * @description For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
   *
   * @tags store
   * @name DeleteOrder
   * @summary Delete purchase order by ID
   * @request DELETE:/store/order/{orderId}
   */

  async deleteOrder() {
    return await apiInstance.delete("/store/order/${orderId}");
  },
};
