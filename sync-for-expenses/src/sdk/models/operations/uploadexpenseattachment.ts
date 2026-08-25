/* tslint:disable */

import type { AttachmentUpload } from '../shared/attachmentupload';
/* eslint-disable */

export interface UploadExpenseAttachmentRequest {
    companyId: string;
    syncId: string;
    transactionId: string;
    attachmentUpload?: AttachmentUpload | undefined;
}

export interface ExpenseAttachmentUploadRequestBody {
    companyId: string;
    syncId: string;
    transactionId: string;
    attachmentUpload?: AttachmentUpload | undefined;
}

export interface UploadExpenseAttachmentRequestBody {
    companyId: string;
    syncId: string;
    transactionId: string;
    attachmentUpload?: AttachmentUpload | undefined;
}
