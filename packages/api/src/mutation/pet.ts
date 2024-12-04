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

import { useMutation } from "@tanstack/react-query";
import { PetApi } from "../";

/**
 * No description
 *
 * @tags pet
 * @name UploadFile
 * @summary uploads an image
 * @request POST:/pet/{petId}/uploadImage
 * @secure
 */

export const usePetMutationUploadFile = (config?: Record<string, any>) => {
  return useMutation({ ...config, mutationFn: PetApi.uploadFile });
};

/**
 * No description
 *
 * @tags pet
 * @name AddPet
 * @summary Add a new pet to the store
 * @request POST:/pet
 * @secure
 */

export const usePetMutationAddPet = (config?: Record<string, any>) => {
  return useMutation({ ...config, mutationFn: PetApi.addPet });
};

/**
 * No description
 *
 * @tags pet
 * @name UpdatePet
 * @summary Update an existing pet
 * @request PUT:/pet
 * @secure
 */

export const usePetMutationUpdatePet = (config?: Record<string, any>) => {
  return useMutation({ ...config, mutationFn: PetApi.updatePet });
};

/**
 * No description
 *
 * @tags pet
 * @name UpdatePetWithForm
 * @summary Updates a pet in the store with form data
 * @request POST:/pet/{petId}
 * @secure
 */

export const usePetMutationUpdatePetWithForm = (config?: Record<string, any>) => {
  return useMutation({ ...config, mutationFn: PetApi.updatePetWithForm });
};
