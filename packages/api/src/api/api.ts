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

import { apiInstance } from '../config/api-instance';
import type { Pet } from '../types/pet.ts';

export const PetApi = {
  /**
   * @description Update an existing pet by Id
   *
   * @tags pet
   * @name UpdatePet
   * @summary Update an existing pet
   * @request PUT:/pet
   * @secure
   */

  async updatePet(payload: Pet) {
    return await apiInstance.put('/pet', payload);
  },

  /**
   * @description Add a new pet to the store
   *
   * @tags pet
   * @name AddPet
   * @summary Add a new pet to the store
   * @request POST:/pet
   * @secure
   */

  async addPet(payload: Pet) {
    return await apiInstance.post('/pet', payload);
  },

  /**
   * @description Multiple status values can be provided with comma separated strings
   *
   * @tags pet
   * @name FindPetsByStatus
   * @summary Finds Pets by status
   * @request GET:/pet/findByStatus
   * @secure
   */

  async findPetsByStatus<T = Pet[]>(status?: 'available' | 'pending' | 'sold') {
    return await apiInstance.get<T>('/pet/findByStatus', {
      params: { status },
    });
  },

  /**
   * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   *
   * @tags pet
   * @name FindPetsByTags
   * @summary Finds Pets by tags
   * @request GET:/pet/findByTags
   * @secure
   */

  async findPetsByTags<T = Pet[]>(tags?: string[]) {
    return await apiInstance.get<T>('/pet/findByTags', { params: { tags } });
  },

  /**
   * @description Returns a single pet
   *
   * @tags pet
   * @name GetPetById
   * @summary Find pet by ID
   * @request GET:/pet/{petId}
   * @secure
   */

  async getPetById<T = Pet>() {
    return await apiInstance.get<T>('/pet/${petId}');
  },

  /**
   * No description
   *
   * @tags pet
   * @name UpdatePetWithForm
   * @summary Updates a pet in the store with form data
   * @request POST:/pet/{petId}
   * @secure
   */

  async updatePetWithForm(payload: { name?: string; status?: string }) {
    return await apiInstance.post('/pet/${petId}', payload);
  },

  /**
   * No description
   *
   * @tags pet
   * @name DeletePet
   * @summary Deletes a pet
   * @request DELETE:/pet/{petId}
   * @secure
   */

  async deletePet() {
    return await apiInstance.delete('/pet/${petId}');
  },

  /**
   * No description
   *
   * @tags pet
   * @name UploadFile
   * @summary uploads an image
   * @request POST:/pet/{petId}/uploadImage
   * @secure
   */

  async uploadFile(payload: { File; additionalMetadata?: string }) {
    return await apiInstance.post('/pet/${petId}/uploadImage', payload);
  },
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

import { apiInstance } from '../config/api-instance';
import type { Order } from '../types/store.ts';

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
    return await apiInstance.get<T>('/store/inventory');
  },

  /**
   * @description Place a new order in the store
   *
   * @tags store
   * @name PlaceOrder
   * @summary Place an order for a pet
   * @request POST:/store/order
   */

  async placeOrder(payload: Order) {
    return await apiInstance.post('/store/order', payload);
  },

  /**
   * @description For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
   *
   * @tags store
   * @name GetOrderById
   * @summary Find purchase order by ID
   * @request GET:/store/order/{orderId}
   */

  async getOrderById<T = Order>() {
    return await apiInstance.get<T>('/store/order/${orderId}');
  },

  /**
   * @description For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
   *
   * @tags store
   * @name DeleteOrder
   * @summary Delete purchase order by ID
   * @request DELETE:/store/order/{orderId}
   */

  async deleteOrder() {
    return await apiInstance.delete('/store/order/${orderId}');
  },
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

import { apiInstance } from '../config/api-instance';
import type { User } from '../types/user.ts';

export const UserApi = {
  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name CreateUser
   * @summary Create user
   * @request POST:/user
   */

  async createUser(payload: User) {
    return await apiInstance.post('/user', payload);
  },

  /**
   * @description Creates list of users with given input array
   *
   * @tags user
   * @name CreateUsersWithListInput
   * @summary Creates list of users with given input array
   * @request POST:/user/createWithList
   */

  async createUsersWithListInput(payload: User[]) {
    return await apiInstance.post('/user/createWithList', payload);
  },

  /**
   * No description
   *
   * @tags user
   * @name LoginUser
   * @summary Logs user into the system
   * @request GET:/user/login
   */

  async loginUser<T = string>(username?: string, password?: string) {
    return await apiInstance.get<T>('/user/login', {
      params: { username, password },
    });
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
    return await apiInstance.get<T>('/user/logout');
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
    return await apiInstance.get<T>('/user/${username}');
  },

  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name UpdateUser
   * @summary Update user
   * @request PUT:/user/{username}
   */

  async updateUser(payload: User) {
    return await apiInstance.put('/user/${username}', payload);
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
    return await apiInstance.delete('/user/${username}');
  },
};
