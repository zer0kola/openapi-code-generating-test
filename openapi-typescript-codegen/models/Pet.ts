/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from './Category';
import type { Tag } from './Tag';
export type Pet = {
    id?: number;
    category?: Category;
    name: string;
    photoUrls: Array<string>;
    tags?: Array<Tag>;
    /**
     * pet status in the store
     */
    status?: 'available' | 'pending' | 'sold';
};

