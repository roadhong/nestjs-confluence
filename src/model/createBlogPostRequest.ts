/**
 * The Confluence Cloud REST API v2
 * This document describes Confluence\'s v2 APIs. This is intended to be an iteration on the existing Confluence Cloud REST API with improvements in both endpoint definitions and performance.
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CreateBlogPostRequestBody } from './createBlogPostRequestBody';


export interface CreateBlogPostRequest { 
    /**
     * ID of the space
     */
    spaceId: string;
    /**
     * The status of the blog post, specifies if the blog post will be created as a new blog post or a draft
     */
    status?: CreateBlogPostRequest.StatusEnum;
    /**
     * Title of the blog post, required if creating non-draft.
     */
    title?: string;
    body?: CreateBlogPostRequestBody;
    /**
     * Created date of the blog post in the format of \"yyyy-MM-ddTHH:mm:ss.SSSZ\".
     */
    createdAt?: string;
}
export namespace CreateBlogPostRequest {
    export type StatusEnum = 'current' | 'draft';
    export const StatusEnum = {
        Current: 'current' as StatusEnum,
        Draft: 'draft' as StatusEnum
    };
}


