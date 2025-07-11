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
import { CreateFooterCommentModelBody } from './createFooterCommentModelBody';
import { UpdateFooterCommentModelVersion } from './updateFooterCommentModelVersion';


export interface UpdateFooterCommentModel { 
    version?: UpdateFooterCommentModelVersion;
    body?: CreateFooterCommentModelBody;
}

