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

import { apiInstance, getParams } from "@common/api";
import type { User } from "../types/swagger-user.ts";

export const UserApi = {
  /**
   * No description
   * * @tags user
   * @name CreateUsersWithListInput
   * @summary Creates list of users with given input array
   * @request POST:/user/createWithList
   */

  async createUsersWithListInput() {
    const response = await apiInstance.post("/user/createWithList", payload);
    return response;
  },

  /**
   * No description
   * * @tags user
   * @name GetUserByName
   * @summary Get user by user name
   * @request GET:/user/{username}
   */

  async getUserByName<T = User>() {
    const response = await apiInstance.get<T>("/user/${username}");
    return response;
  },

  /**
   * @description This can only be done by the logged in user.
   * * @tags user
   * @name UpdateUser
   * @summary Updated user
   * @request PUT:/user/{username}
   */

  async updateUser() {
    const response = await apiInstance.put("/user/${username}", payload);
    return response;
  },

  /**
   * @description This can only be done by the logged in user.
   * * @tags user
   * @name DeleteUser
   * @summary Delete user
   * @request DELETE:/user/{username}
   */

  async deleteUser() {
    const response = await apiInstance.delete("/user/${username}");
    return response;
  },

  /**
   * No description
   * * @tags user
   * @name LoginUser
   * @summary Logs user into the system
   * @request GET:/user/login
   */

  async loginUser<T = string>(username: string, password: string) {
    const response = await apiInstance.get<T>("/user/login", {
      params: getParams(["username", "password"], [username, password]),
    });
    return response;
  },

  /**
   * No description
   * * @tags user
   * @name LogoutUser
   * @summary Logs out current logged in user session
   * @request GET:/user/logout
   */

  async logoutUser<T = any>() {
    const response = await apiInstance.get<T>("/user/logout");
    return response;
  },

  /**
   * No description
   * * @tags user
   * @name CreateUsersWithArrayInput
   * @summary Creates list of users with given input array
   * @request POST:/user/createWithArray
   */

  async createUsersWithArrayInput() {
    const response = await apiInstance.post("/user/createWithArray", payload);
    return response;
  },

  /**
   * @description This can only be done by the logged in user.
   * * @tags user
   * @name CreateUser
   * @summary Create user
   * @request POST:/user
   */

  async createUser() {
    const response = await apiInstance.post("/user", payload);
    return response;
  },
};
