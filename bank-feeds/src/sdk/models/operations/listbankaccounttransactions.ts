/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class ListBankAccountTransactionsRequest extends SpeakeasyBase {
    /**
     * Unique identifier for an account
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
    accountId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
    connectionId: string;

    /**
     * Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
    orderBy?: string;

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
     * Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
    query?: string;
}

/**
 * The data type's dataset has not been requested or is still syncing.
 */
export class ListBankAccountTransactions409ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "canBeRetried" })
    canBeRetried?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "correlationId" })
    correlationId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "detailedErrorCode" })
    detailedErrorCode?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "service" })
    service?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "statusCode" })
    statusCode?: number;
}

export class ListBankAccountTransactionsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    @SpeakeasyMetadata()
    bankTransactionsResponse?: shared.BankTransactionsResponse;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * The data type's dataset has not been requested or is still syncing.
     */
    @SpeakeasyMetadata()
    listBankAccountTransactions409ApplicationJSONObject?: ListBankAccountTransactions409ApplicationJSON;

    /**
     * Your `query` parameter was not correctly formed
     */
    @SpeakeasyMetadata()
    schema?: shared.Schema;
}