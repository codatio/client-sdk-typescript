/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class GetPaymentMethodRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
    connectionId: string;

    /**
     * Unique identifier for a payment method.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentMethodId" })
    paymentMethodId: string;
}

/**
 * The data type's dataset has not been requested or is still syncing.
 */
export class GetPaymentMethod409ApplicationJSON extends SpeakeasyBase {
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

export class GetPaymentMethodResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    paymentMethod?: shared.PaymentMethod;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * The data type's dataset has not been requested or is still syncing.
     */
    @SpeakeasyMetadata()
    getPaymentMethod409ApplicationJSONObject?: GetPaymentMethod409ApplicationJSON;

    /**
     * Your API request was not properly authorized.
     */
    @SpeakeasyMetadata()
    schema?: shared.Schema;
}
