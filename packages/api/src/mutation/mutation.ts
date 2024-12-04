
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

import { PetApi } from "@common/api";
import { useMutation } from "@tanstack/vue-query";

/**
 * @description Update an existing pet by Id
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
 * @description Add a new pet to the store
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
 * @name UpdatePetWithForm
 * @summary Updates a pet in the store with form data
 * @request POST:/pet/{petId}
 * @secure
 */

export const usePetMutationUpdatePetWithForm = (config?: Record<string, any>) => {
  return useMutation({ ...config, mutationFn: PetApi.updatePetWithForm });
};

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

import { StoreApi } from "@common/api";
import { useMutation } from "@tanstack/vue-query";

/**
 * @description Place a new order in the store
 *
 * @tags store
 * @name PlaceOrder
 * @summary Place an order for a pet
 * @request POST:/store/order
 */

export const useStoreMutationPlaceOrder = (config?: Record<string, any>) => {
  return useMutation({ ...config, mutationFn: StoreApi.placeOrder });
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

import { UserApi } from "@common/api";
import { useMutation } from "@tanstack/vue-query";

/**
 * @description This can only be done by the logged in user.
 *
 * @tags user
 * @name CreateUser
 * @summary Create user
 * @request POST:/user
 */

export const useUserMutationCreateUser = (config?: Record<string, any>) => {
  return useMutation({ ...config, mutationFn: UserApi.createUser });
};

/**
 * @description Creates list of users with given input array
 *
 * @tags user
 * @name CreateUsersWithListInput
 * @summary Creates list of users with given input array
 * @request POST:/user/createWithList
 */

export const useUserMutationCreateUsersWithListInput = (config?: Record<string, any>) => {
  return useMutation({ ...config, mutationFn: UserApi.createUsersWithListInput });
};

/**
 * @description This can only be done by the logged in user.
 *
 * @tags user
 * @name UpdateUser
 * @summary Update user
 * @request PUT:/user/{username}
 */

export const useUserMutationUpdateUser = (config?: Record<string, any>) => {
  return useMutation({ ...config, mutationFn: UserApi.updateUser });
};

