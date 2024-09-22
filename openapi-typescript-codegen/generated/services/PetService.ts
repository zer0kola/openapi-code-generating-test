/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponse } from '../models/ApiResponse';
import type { Pet } from '../models/Pet';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PetService {
    /**
     * uploads an image
     * @returns ApiResponse successful operation
     * @throws ApiError
     */
    public static uploadFile({
        petId,
        additionalMetadata,
        file,
    }: {
        /**
         * ID of pet to update
         */
        petId: number,
        /**
         * Additional data to pass to server
         */
        additionalMetadata?: string,
        /**
         * file to upload
         */
        file?: Blob,
    }): CancelablePromise<ApiResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/pet/{petId}/uploadImage',
            path: {
                'petId': petId,
            },
            formData: {
                'additionalMetadata': additionalMetadata,
                'file': file,
            },
        });
    }
    /**
     * Add a new pet to the store
     * @returns void
     * @throws ApiError
     */
    public static addPet({
        body,
    }: {
        /**
         * Pet object that needs to be added to the store
         */
        body: Pet,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/pet',
            body: body,
            errors: {
                405: `Invalid input`,
            },
        });
    }
    /**
     * Update an existing pet
     * @returns void
     * @throws ApiError
     */
    public static updatePet({
        body,
    }: {
        /**
         * Pet object that needs to be added to the store
         */
        body: Pet,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/pet',
            body: body,
            errors: {
                400: `Invalid ID supplied`,
                404: `Pet not found`,
                405: `Validation exception`,
            },
        });
    }
    /**
     * Finds Pets by status
     * Multiple status values can be provided with comma separated strings
     * @returns Pet successful operation
     * @throws ApiError
     */
    public static findPetsByStatus({
        status,
    }: {
        /**
         * Status values that need to be considered for filter
         */
        status: Array<string>,
    }): CancelablePromise<Array<Pet>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pet/findByStatus',
            query: {
                'status': status,
            },
            errors: {
                400: `Invalid status value`,
            },
        });
    }
    /**
     * @deprecated
     * Finds Pets by tags
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @returns Pet successful operation
     * @throws ApiError
     */
    public static findPetsByTags({
        tags,
    }: {
        /**
         * Tags to filter by
         */
        tags: Array<string>,
    }): CancelablePromise<Array<Pet>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pet/findByTags',
            query: {
                'tags': tags,
            },
            errors: {
                400: `Invalid tag value`,
            },
        });
    }
    /**
     * Find pet by ID
     * Returns a single pet
     * @returns Pet successful operation
     * @throws ApiError
     */
    public static getPetById({
        petId,
    }: {
        /**
         * ID of pet to return
         */
        petId: number,
    }): CancelablePromise<Pet> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pet/{petId}',
            path: {
                'petId': petId,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `Pet not found`,
            },
        });
    }
    /**
     * Updates a pet in the store with form data
     * @returns void
     * @throws ApiError
     */
    public static updatePetWithForm({
        petId,
        name,
        status,
    }: {
        /**
         * ID of pet that needs to be updated
         */
        petId: number,
        /**
         * Updated name of the pet
         */
        name?: string,
        /**
         * Updated status of the pet
         */
        status?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/pet/{petId}',
            path: {
                'petId': petId,
            },
            formData: {
                'name': name,
                'status': status,
            },
            errors: {
                405: `Invalid input`,
            },
        });
    }
    /**
     * Deletes a pet
     * @returns void
     * @throws ApiError
     */
    public static deletePet({
        petId,
        apiKey,
    }: {
        /**
         * Pet id to delete
         */
        petId: number,
        apiKey?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/pet/{petId}',
            path: {
                'petId': petId,
            },
            headers: {
                'api_key': apiKey,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `Pet not found`,
            },
        });
    }
}
