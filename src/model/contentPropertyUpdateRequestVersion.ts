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


/**
 * New version number and associated message
 */
export interface ContentPropertyUpdateRequestVersion { 
    /**
     * Version number of the new version. Should be 1 more than the current version number.
     */
    number?: number;
    /**
     * Message to be associated with the new version.
     */
    message?: string;
}

