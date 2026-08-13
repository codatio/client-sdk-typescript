/* tslint:disable */

import type { StartUploadSessionRequest } from '../shared/startuploadsessionrequest';
/* eslint-disable */

export interface StartBankStatementUploadSessionRequest {
    companyId: string;
    connectionId: string;
    startUploadSessionRequest?: StartUploadSessionRequest | undefined;
}
