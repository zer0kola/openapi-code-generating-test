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

import type { User } from "../";
import { apiInstance } from "../config/api-instance";

export const UserApi = {
  /**
   * No description
   * @tags user
   * @name CreateUsersWithListInput
   * @summary Creates list of users with given input array
   * @request POST:/user/createWithList */

  async createUsersWithListInput(payload: User[]) {
    const method = "post";
    const endpoint = `/user/createWithList`;
    const options = payload;

    return await apiInstance[method](endpoint, options);
  },

  /**
   * No description
   * @tags user
   * @name GetUserByName
   * @summary Get user by user name
   * @request GET:/user/{username} */

  async getUserByName<T = User>(payload: { username: string }) {
    const method = "get";
    const endpoint = `/user/${payload.username}`;
    const options = undefined;

    return await apiInstance[method]<T>(endpoint, options);
  },

  /**
   * @description This can only be done by the logged in user.
   * @tags user
   * @name UpdateUser
   * @summary Updated user
   * @request PUT:/user/{username} */

  async updateUser(payload: { username: string; user: User }) {
    const method = "put";
    const endpoint = `/user/${payload.username}`;
    const options = payload;

    return await apiInstance[method](endpoint, options);
  },

  /**
   * @description This can only be done by the logged in user.
   * @tags user
   * @name DeleteUser
   * @summary Delete user
   * @request DELETE:/user/{username} */

  async deleteUser(payload: { username: string }) {
    const method = "delete";
    const endpoint = `/user/${payload.username}`;
    const options = undefined;

    return await apiInstance[method](endpoint, options);
  },

  /**
   * No description
   * @tags user
   * @name LoginUser
   * @summary Logs user into the system
   * @request GET:/user/login */

  async loginUser<T = string>() {
    const method = "get";
    const endpoint = `/user/login`;
    const options = undefined;

    return await apiInstance[method]<T>(endpoint, options);
  },

  /**
   * No description
   * @tags user
   * @name LogoutUser
   * @summary Logs out current logged in user session
   * @request GET:/user/logout */

  async logoutUser<T = any>() {
    const method = "get";
    const endpoint = `/user/logout`;
    const options = undefined;

    return await apiInstance[method]<T>(endpoint, options);
  },

  /**
   * No description
   * @tags user
   * @name CreateUsersWithArrayInput
   * @summary Creates list of users with given input array
   * @request POST:/user/createWithArray */

  async createUsersWithArrayInput(payload: User[]) {
    const method = "post";
    const endpoint = `/user/createWithArray`;
    const options = payload;

    return await apiInstance[method](endpoint, options);
  },

  /**
   * @description This can only be done by the logged in user.
   * @tags user
   * @name CreateUser
   * @summary Create user
   * @request POST:/user */

  async createUser(payload: User) {
    const method = "post";
    const endpoint = `/user`;
    const options = payload;

    return await apiInstance[method](endpoint, options);
  },
};
