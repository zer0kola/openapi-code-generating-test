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
import type { Pet } from "../types";

export const PetApi = {
  /**
   * No description
   *
   * @tags pet
   * @name UploadFile
   * @summary uploads an image
   * @request POST:/pet/{petId}/uploadImage
   * @secure
   */

  async uploadFile(payload: {
    /** Additional data to pass to server */
    additionalMetadata?: string;
    /** file to upload */
    file?: File;
  }) {
    try {
      const method = "post";
      const endpoint = "/pet/${petId}/uploadImage";
      const options = payload;

      return await apiInstance[method](endpoint, options);
    } catch (error) {
      throw error;
    }
  },

  /**
   * No description
   *
   * @tags pet
   * @name AddPet
   * @summary Add a new pet to the store
   * @request POST:/pet
   * @secure
   */

  async addPet(payload: Pet) {
    try {
      const method = "post";
      const endpoint = "/pet";
      const options = payload;

      return await apiInstance[method](endpoint, options);
    } catch (error) {
      throw error;
    }
  },

  /**
   * No description
   *
   * @tags pet
   * @name UpdatePet
   * @summary Update an existing pet
   * @request PUT:/pet
   * @secure
   */

  async updatePet(payload: Pet) {
    try {
      const method = "put";
      const endpoint = "/pet";
      const options = payload;

      return await apiInstance[method](endpoint, options);
    } catch (error) {
      throw error;
    }
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

  async findPetsByStatus<T = Pet[]>(status: "available" | "pending" | "sold"[]) {
    try {
      const method = "get";
      const endpoint = "/pet/findByStatus";
      const options = { params: { status } };

      return await apiInstance[method]<T>(endpoint, options);
    } catch (error) {
      throw error;
    }
  },

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

  async findPetsByTags<T = Pet[]>(tags: string[]) {
    try {
      const method = "get";
      const endpoint = "/pet/findByTags";
      const options = { params: { tags } };

      return await apiInstance[method]<T>(endpoint, options);
    } catch (error) {
      throw error;
    }
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
    try {
      const method = "get";
      const endpoint = "/pet/${petId}";
      const options = undefined;

      return await apiInstance[method]<T>(endpoint, options);
    } catch (error) {
      throw error;
    }
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

  async updatePetWithForm(payload: {
    /** Updated name of the pet */
    name?: string;
    /** Updated status of the pet */
    status?: string;
  }) {
    try {
      const method = "post";
      const endpoint = "/pet/${petId}";
      const options = payload;

      return await apiInstance[method](endpoint, options);
    } catch (error) {
      throw error;
    }
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
    try {
      const method = "delete";
      const endpoint = "/pet/${petId}";
      const options = undefined;

      return await apiInstance[method](endpoint, options);
    } catch (error) {
      throw error;
    }
  },
};
