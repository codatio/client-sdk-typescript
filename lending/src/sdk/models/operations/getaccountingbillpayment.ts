/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetAccountingBillPaymentRequest extends SpeakeasyBase {
    /**
     * Unique identifier for a bill payment.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billPaymentId" })
    billPaymentId: string;

    /**
     * Unique identifier for a company.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;
}

export class GetAccountingBillPaymentResponse extends SpeakeasyBase {
    /**
     * Success
     */
    @SpeakeasyMetadata()
    accountingBillPayment?: shared.AccountingBillPayment;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Your API request was not properly authorized.
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
    rawResponse: AxiosResponse;
}
