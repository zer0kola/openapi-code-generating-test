/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * Creates list of users with given input array
     * @returns any successful operation
     * @throws ApiError
     */
    public static createUsersWithListInput({
        body,
    }: {
        /**
         * List of user object
         */
        body: Array<User>,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/createWithList',
            body: body,
        });
    }
    /**
     * Get user by user name
     * @returns User successful operation
     * @throws ApiError
     */
    public static getUserByName({
        username,
    }: {
        /**
         * The name that needs to be fetched. Use user1 for testing.
         */
        username: string,
    }): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/{username}',
            path: {
                'username': username,
            },
            errors: {
                400: `Invalid username supplied`,
                404: `User not found`,
            },
        });
    }
    /**
     * Updated user
     * This can only be done by the logged in user.
     * @returns void
     * @throws ApiError
     */
    public static updateUser({
        username,
        body,
    }: {
        /**
         * name that need to be updated
         */
        username: string,
        /**
         * Updated user object
         */
        body: User,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/{username}',
            path: {
                'username': username,
            },
            body: body,
            errors: {
                400: `Invalid user supplied`,
                404: `User not found`,
            },
        });
    }
    /**
     * Delete user
     * This can only be done by the logged in user.
     * @returns void
     * @throws ApiError
     */
    public static deleteUser({
        username,
    }: {
        /**
         * The name that needs to be deleted
         */
        username: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/{username}',
            path: {
                'username': username,
            },
            errors: {
                400: `Invalid username supplied`,
                404: `User not found`,
            },
        });
    }
    /**
     * Logs user into the system
     * @returns string successful operation
     * @throws ApiError
     */
    public static loginUser({
        username,
        password,
    }: {
        /**
         * The user name for login
         */
        username: string,
        /**
         * The password for login in clear text
         */
        password: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/login',
            query: {
                'username': username,
                'password': password,
            },
            errors: {
                400: `Invalid username/password supplied`,
            },
        });
    }
    /**
     * Logs out current logged in user session
     * @returns any successful operation
     * @throws ApiError
     */
    public static logoutUser(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/logout',
        });
    }
    /**
     * Creates list of users with given input array
     * @returns any successful operation
     * @throws ApiError
     */
    public static createUsersWithArrayInput({
        body,
    }: {
        /**
         * List of user object
         */
        body: Array<User>,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/createWithArray',
            body: body,
        });
    }
    /**
     * Create user
     * This can only be done by the logged in user.
     * @returns any successful operation
     * @throws ApiError
     */
    public static createUser({
        body,
    }: {
        /**
         * Created user object
         */
        body: User,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user',
            body: body,
        });
    }
}
