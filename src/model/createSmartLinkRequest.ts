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


export interface CreateSmartLinkRequest { 
    /**
     * ID of the space.
     */
    spaceId: string;
    /**
     * Title of the Smart Link in the content tree.
     */
    title?: string;
    /**
     * The parent content ID of the Smart Link in the content tree.
     */
    parentId?: string;
    /**
     * The URL that the Smart Link in the content tree should be populated with.
     */
    embedUrl?: string;
}

