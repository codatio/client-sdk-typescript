/* tslint:disable */

import type { AttachmentUpload } from '../shared/attachmentupload';
/* eslint-disable */

export interface UploadBillAttachmentRequest {
    companyId: string;
    connectionId: string;
    billId: string;
    attachmentUpload?: AttachmentUpload | undefined;
}

export interface BillAttachmentUploadRequestBody {
    companyId: string;
    connectionId: string;
    billId: string;
    attachmentUpload?: AttachmentUpload | undefined;
}

export interface UploadBillAttachmentRequestBody {
    companyId: string;
    connectionId: string;
    billId: string;
    attachmentUpload?: AttachmentUpload | undefined;
}
