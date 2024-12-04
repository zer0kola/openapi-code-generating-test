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
import type { User } from "../types";

export const UserApi = {
  /**
   * No description
   *
   * @tags user
   * @name CreateUsersWithListInput
   * @summary Creates list of users with given input array
   * @request POST:/user/createWithList
   */

  async createUsersWithListInput() {
    return await apiInstance.post("/user/createWithList", payload);
  },

  /**
   * No description
   *
   * @tags user
   * @name GetUserByName
   * @summary Get user by user name
   * @request GET:/user/{username}
   */

  async getUserByName<T = User>() {
    return await apiInstance.get<T>("/user/${username}");
  },

  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name UpdateUser
   * @summary Updated user
   * @request PUT:/user/{username}
   */

  async updateUser() {
    return await apiInstance.put("/user/${username}", payload);
  },

  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name DeleteUser
   * @summary Delete user
   * @request DELETE:/user/{username}
   */

  async deleteUser() {
    return await apiInstance.delete("/user/${username}");
  },

  /**
   * No description
   *
   * @tags user
   * @name LoginUser
   * @summary Logs user into the system
   * @request GET:/user/login
   */

  async loginUser<T = string>(username: string, password: string) {
    return await apiInstance.get<T>("/user/login", { params: { username, password } });
  },

  /**
   * No description
   *
   * @tags user
   * @name LogoutUser
   * @summary Logs out current logged in user session
   * @request GET:/user/logout
   */

  async logoutUser<T = any>() {
    return await apiInstance.get<T>("/user/logout");
  },

  /**
   * No description
   *
   * @tags user
   * @name CreateUsersWithArrayInput
   * @summary Creates list of users with given input array
   * @request POST:/user/createWithArray
   */

  async createUsersWithArrayInput() {
    return await apiInstance.post("/user/createWithArray", payload);
  },

  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name CreateUser
   * @summary Create user
   * @request POST:/user
   */

  async createUser() {
    return await apiInstance.post("/user", payload);
  },
};
