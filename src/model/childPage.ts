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
import { OnlyArchivedAndCurrentContentStatus } from './onlyArchivedAndCurrentContentStatus';


export interface ChildPage { 
    /**
     * ID of the page.
     */
    id?: string;
    status?: OnlyArchivedAndCurrentContentStatus;
    /**
     * Title of the page.
     */
    title?: string;
    /**
     * ID of the space the page is in.
     */
    spaceId?: string;
    /**
     * Position of child page within the given parent page tree.
     */
    childPosition?: number | null;
}
export namespace ChildPage {
}


