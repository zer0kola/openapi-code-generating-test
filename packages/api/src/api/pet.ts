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

  async uploadFile(payload: { additionalMetadata?: string; file?: File }) {
    return await apiInstance.post("/pet/${petId}/uploadImage", payload);
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

  async addPet() {
    return await apiInstance.post("/pet", payload);
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

  async updatePet() {
    return await apiInstance.put("/pet", payload);
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
    return await apiInstance.get<T>("/pet/findByStatus", { params: { status } });
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
    return await apiInstance.get<T>("/pet/findByTags", { params: { tags } });
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
    return await apiInstance.get<T>("/pet/${petId}");
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
    return await apiInstance.post("/pet/${petId}", payload);
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
    return await apiInstance.delete("/pet/${petId}");
  },
};
