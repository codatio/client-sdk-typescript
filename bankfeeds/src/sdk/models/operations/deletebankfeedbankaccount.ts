/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeleteBankFeedBankAccountRequest extends SpeakeasyBase {
    /**
     * Unique identifier for an account
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
    accountId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
    connectionId: string;
}

export class DeleteBankFeedBankAccountResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Your API request was not properly authorized.
     */
    @SpeakeasyMetadata()
    schema?: shared.Schema;
}
