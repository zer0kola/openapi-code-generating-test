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
import type { DeepPartial } from "../types";
import type { Pet } from "../types/swagger-pet.ts";

export const PetApi = {
  /**
   * No description
   * * @tags pet
   * @name UploadFile
   * @summary uploads an image
   * @request POST:/pet/{petId}/uploadImage
   * @secure
   */

  async uploadFile(payload: DeepPartial<{ additionalMetadata?: string; file?: File }>) {
    const response = await apiInstance.post("/pet/${petId}/uploadImage", payload);
    return response;
  },

  /**
   * No description
   * * @tags pet
   * @name AddPet
   * @summary Add a new pet to the store
   * @request POST:/pet
   * @secure
   */

  async addPet() {
    const response = await apiInstance.post("/pet", payload);
    return response;
  },

  /**
   * No description
   * * @tags pet
   * @name UpdatePet
   * @summary Update an existing pet
   * @request PUT:/pet
   * @secure
   */

  async updatePet() {
    const response = await apiInstance.put("/pet", payload);
    return response;
  },

  /**
   * @description Multiple status values can be provided with comma separated strings
   * * @tags pet
   * @name FindPetsByStatus
   * @summary Finds Pets by status
   * @request GET:/pet/findByStatus
   * @secure
   */

  async findPetsByStatus<T = Pet[]>(status: "available" | "pending" | "sold"[]) {
    const response = await apiInstance.get<T>("/pet/findByStatus", { params: getParams(["status"], [status]) });
    return response;
  },

  /**
   * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   * * @tags pet
   * @name FindPetsByTags
   * @summary Finds Pets by tags
   * @request GET:/pet/findByTags
   * @deprecated
   * @secure
   */

  async findPetsByTags<T = Pet[]>(tags: string[]) {
    const response = await apiInstance.get<T>("/pet/findByTags", { params: getParams(["tags"], [tags]) });
    return response;
  },

  /**
   * @description Returns a single pet
   * * @tags pet
   * @name GetPetById
   * @summary Find pet by ID
   * @request GET:/pet/{petId}
   * @secure
   */

  async getPetById<T = Pet>() {
    const response = await apiInstance.get<T>("/pet/${petId}");
    return response;
  },

  /**
   * No description
   * * @tags pet
   * @name UpdatePetWithForm
   * @summary Updates a pet in the store with form data
   * @request POST:/pet/{petId}
   * @secure
   */

  async updatePetWithForm(payload: DeepPartial<{ name?: string; status?: string }>) {
    const response = await apiInstance.post("/pet/${petId}", payload);
    return response;
  },

  /**
   * No description
   * * @tags pet
   * @name DeletePet
   * @summary Deletes a pet
   * @request DELETE:/pet/{petId}
   * @secure
   */

  async deletePet() {
    const response = await apiInstance.delete("/pet/${petId}");
    return response;
  },
};
