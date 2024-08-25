/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Order = {
    properties: {
        id: {
            type: 'number',
            format: 'int64',
        },
        petId: {
            type: 'number',
            format: 'int64',
        },
        quantity: {
            type: 'number',
            format: 'int32',
        },
        shipDate: {
            type: 'string',
            format: 'date-time',
        },
        status: {
            type: 'Enum',
        },
        complete: {
            type: 'boolean',
        },
    },
} as const;
