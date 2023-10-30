/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListSyncTransactionsRequest extends SpeakeasyBase {
    /**
     * Unique identifier for a company.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;

    /**
     * Page number. [Read more](https://docs.codat.io/using-the-api/paging).
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
    page?: number;

    /**
     * Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
    pageSize?: number;

    /**
     * Unique identifier for a sync.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=syncId" })
    syncId: string;
}

export class ListSyncTransactionsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Your `query` parameter was not correctly formed
     */
    @SpeakeasyMetadata()
    errorMessage?: shared.ErrorMessage;

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
     * Success
     */
    @SpeakeasyMetadata()
    transactions?: shared.Transactions;
}
