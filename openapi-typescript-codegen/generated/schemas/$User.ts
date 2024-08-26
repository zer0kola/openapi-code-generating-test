/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $User = {
    properties: {
        id: {
            type: 'number',
            format: 'int64',
        },
        username: {
            type: 'string',
        },
        firstName: {
            type: 'string',
        },
        lastName: {
            type: 'string',
        },
        email: {
            type: 'string',
        },
        password: {
            type: 'string',
        },
        phone: {
            type: 'string',
        },
        userStatus: {
            type: 'number',
            description: `User Status`,
            format: 'int32',
        },
    },
} as const;
