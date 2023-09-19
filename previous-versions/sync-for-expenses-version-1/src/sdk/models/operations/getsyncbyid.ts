/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetSyncByIdRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;

    /**
     * Unique identifier for a sync.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=syncId" })
    syncId: string;
}

export class GetSyncByIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    @SpeakeasyMetadata()
    companySyncStatus?: shared.CompanySyncStatus;

    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Your API request was not properly authorized.
     */
    @SpeakeasyMetadata()
    errorMessage?: shared.ErrorMessage;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}