/* tslint:disable */

import type { FileUpload } from '../shared/fileupload';
/* eslint-disable */

export interface UploadFilesRequest {
    companyId: string;
    connectionId: string;
    fileUpload?: FileUpload | undefined;
}

export interface FilesUploadRequestBody {
    companyId: string;
    connectionId: string;
    fileUpload?: FileUpload | undefined;
}

export interface UploadFilesRequestBody {
    companyId: string;
    connectionId: string;
    fileUpload?: FileUpload | undefined;
}
