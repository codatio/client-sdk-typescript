/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateAccountRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    accountingAccount?: shared.AccountingAccount;

    /**
     * Allow a sync upon push completion.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowSyncOnPushComplete" })
    allowSyncOnPushComplete?: boolean;

    /**
     * Unique identifier for a company.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;

    /**
     * Unique identifier for a connection.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
    connectionId: string;

    /**
     * Time limit for the push operation to complete before it is timed out.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
    timeoutInMinutes?: number;
}

export class CreateAccountResponse extends SpeakeasyBase {
    /**
     * Success
     */
    @SpeakeasyMetadata()
    accountingCreateAccountResponse?: shared.AccountingCreateAccountResponse;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The request made is not valid.
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
}
