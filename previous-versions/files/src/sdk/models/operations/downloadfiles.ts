/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class DownloadFilesRequest extends SpeakeasyBase {
    /**
     * Unique identifier for a company.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;

    /**
     * Only download files uploaded on this date.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
    date?: string;
}

/**
 * You are using an outdated API key or a key not associated with that resource.
 */
export class DownloadFilesErrorMessage extends SpeakeasyBase {
    /**
     * `True` if the error occurred transiently and can be retried.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "canBeRetried" })
    canBeRetried?: string;

    /**
     * Unique identifier used to propagate to all downstream services and determine the source of the error.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "correlationId" })
    correlationId?: string;

    /**
     * Machine readable error code used to automate processes based on the code returned.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "detailedErrorCode" })
    detailedErrorCode?: number;

    /**
     * A brief description of the error.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error?: string;

    /**
     * Codat's service the returned the error.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "service" })
    service?: string;

    /**
     * The HTTP status code returned by the error.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "statusCode" })
    statusCode?: number;
}

export class DownloadFilesResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Success
     */
    @SpeakeasyMetadata()
    data?: Uint8Array;

    /**
     * You are using an outdated API key or a key not associated with that resource.
     */
    @SpeakeasyMetadata()
    errorMessage?: DownloadFilesErrorMessage;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * The request made is not valid.
     */
    @SpeakeasyMetadata()
    schema?: shared.Schema;
}
