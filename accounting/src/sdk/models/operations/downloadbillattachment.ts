/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DownloadBillAttachmentRequest extends SpeakeasyBase {
    /**
     * Unique identifier for an attachment
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attachmentId" })
    attachmentId: string;

    /**
     * Unique identifier for a bill
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billId" })
    billId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
    connectionId: string;
}

export class DownloadBillAttachmentResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Success
     */
    @SpeakeasyMetadata()
    data?: Uint8Array;

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
