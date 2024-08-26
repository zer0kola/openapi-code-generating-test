/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Pet = {
    properties: {
        id: {
            type: 'number',
            format: 'int64',
        },
        category: {
            type: 'Category',
        },
        name: {
            type: 'string',
            isRequired: true,
        },
        photoUrls: {
            type: 'array',
            contains: {
                type: 'string',
            },
            isRequired: true,
        },
        tags: {
            type: 'array',
            contains: {
                type: 'Tag',
            },
        },
        status: {
            type: 'Enum',
        },
    },
} as const;
