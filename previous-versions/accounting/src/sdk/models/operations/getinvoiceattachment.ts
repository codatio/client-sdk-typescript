/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetInvoiceAttachmentRequest extends SpeakeasyBase {
    /**
     * Unique identifier for an attachment
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attachmentId" })
    attachmentId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
    connectionId: string;

    /**
     * Unique identifier for an invoice
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoiceId" })
    invoiceId: string;
}

export class GetInvoiceAttachmentResponse extends SpeakeasyBase {
    /**
     * Success
     */
    @SpeakeasyMetadata()
    attachment?: shared.Attachment;

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