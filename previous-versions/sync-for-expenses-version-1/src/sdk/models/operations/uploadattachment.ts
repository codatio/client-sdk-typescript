/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class UploadAttachmentRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
    attachmentUpload?: shared.AttachmentUpload;

    /**
     * Unique identifier for a company.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;

    /**
     * Unique identifier for a sync.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=syncId" })
    syncId: string;

    /**
     * The unique identifier for your SMB's transaction.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transactionId" })
    transactionId: string;
}

export class UploadAttachmentResponse extends SpeakeasyBase {
    /**
     * OK
     */
    @SpeakeasyMetadata()
    attachment?: shared.Attachment;

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
    rawResponse: AxiosResponse;
}
