/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetBillRequest extends SpeakeasyBase {
    /**
     * Unique identifier for a bill
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billId" })
    billId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;
}

export class GetBillResponse extends SpeakeasyBase {
    /**
     * Success
     */
    @SpeakeasyMetadata()
    bill?: shared.Bill;

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
