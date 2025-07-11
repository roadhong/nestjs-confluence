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
/* tslint:disable:no-unused-variable member-ordering */

import { Injectable, Optional } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable, from, of, switchMap } from 'rxjs';
import { PostRedactPageRequest } from '../model/postRedactPageRequest';
import { RedactionResponse } from '../model/redactionResponse';
import { Configuration } from '../configuration';
import { COLLECTION_FORMATS } from '../variables';


@Injectable()
export class RedactionsService {

    protected basePath = 'https://no-default/wiki/api/v2';
    public defaultHeaders: Record<string,string> = {};
    public configuration = new Configuration();
    protected httpClient: HttpService;

    constructor(httpClient: HttpService, @Optional() configuration: Configuration) {
        this.configuration = configuration || this.configuration;
        this.basePath = configuration?.basePath || this.basePath;
        this.httpClient = configuration?.httpClient || httpClient;
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        return consumes.includes(form);
    }

    /**
     * Redact Content in a Confluence Blog Post
     * Redacts sensitive content in a Confluence blog post by replacing specified text ranges with redaction markers.  Each redaction in the response includes a unique UUID for restoration (except code block redactions).  The response metadata items maintain the same order as the input redaction pointers, and completely  overlapping redactions are merged into a single redaction with one UUID.  **Note**: This endpoint requires **Atlassian Guard Premium**. 
     * @param id The ID of the blog post to redact content from.
     * @param postRedactPageRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     * @param {*} [postRedactBlogOpts.config] Override http request option.
     */
    public postRedactBlog(id: number, postRedactPageRequest?: PostRedactPageRequest, postRedactBlogOpts?: { config?: AxiosRequestConfig }): Observable<AxiosResponse<RedactionResponse>>;
    public postRedactBlog(id: number, postRedactPageRequest?: PostRedactPageRequest, postRedactBlogOpts?: { config?: AxiosRequestConfig }): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling postRedactBlog.');
        }

        let headers = {...this.defaultHeaders};

        let accessTokenObservable: Observable<any> = of(null);

        // authentication (basicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers['Authorization'] = 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password);
        }

        // authentication (oAuthDefinitions) required
        if (this.configuration.accessToken) {
            accessTokenObservable = typeof this.configuration.accessToken === 'function'
                ? from(Promise.resolve(this.configuration.accessToken()))
                : from(Promise.resolve(this.configuration.accessToken))
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return accessTokenObservable.pipe(
            switchMap((accessToken) => {
                if (accessToken) {
                    headers['Authorization'] = `Bearer ${accessToken}`;
                }

                return this.httpClient.post<RedactionResponse>(`${this.basePath}/blogposts/${encodeURIComponent(String(id))}/redact`,
                    postRedactPageRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        ...postRedactBlogOpts?.config,
                        headers: {...headers, ...postRedactBlogOpts?.config?.headers},
                    }
                );
            })
        );
    }
    /**
     * Redact Content in a Confluence Page
     * Redacts sensitive content in a Confluence page by replacing specified text ranges with redaction markers.  Each redaction in the response includes a unique UUID for restoration (except code block redactions).  The response metadata items maintain the same order as the input redaction pointers, and completely  overlapping redactions are merged into a single redaction with one UUID.  **Note**: This endpoint requires **Atlassian Guard Premium**. 
     * @param id The ID of the page to redact content from.
     * @param postRedactPageRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     * @param {*} [postRedactPageOpts.config] Override http request option.
     */
    public postRedactPage(id: number, postRedactPageRequest?: PostRedactPageRequest, postRedactPageOpts?: { config?: AxiosRequestConfig }): Observable<AxiosResponse<RedactionResponse>>;
    public postRedactPage(id: number, postRedactPageRequest?: PostRedactPageRequest, postRedactPageOpts?: { config?: AxiosRequestConfig }): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling postRedactPage.');
        }

        let headers = {...this.defaultHeaders};

        let accessTokenObservable: Observable<any> = of(null);

        // authentication (basicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers['Authorization'] = 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password);
        }

        // authentication (oAuthDefinitions) required
        if (this.configuration.accessToken) {
            accessTokenObservable = typeof this.configuration.accessToken === 'function'
                ? from(Promise.resolve(this.configuration.accessToken()))
                : from(Promise.resolve(this.configuration.accessToken))
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return accessTokenObservable.pipe(
            switchMap((accessToken) => {
                if (accessToken) {
                    headers['Authorization'] = `Bearer ${accessToken}`;
                }

                return this.httpClient.post<RedactionResponse>(`${this.basePath}/pages/${encodeURIComponent(String(id))}/redact`,
                    postRedactPageRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        ...postRedactPageOpts?.config,
                        headers: {...headers, ...postRedactPageOpts?.config?.headers},
                    }
                );
            })
        );
    }
}
