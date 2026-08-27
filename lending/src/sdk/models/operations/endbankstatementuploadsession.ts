/* tslint:disable */

import type { EndUploadSessionRequest } from '../shared/enduploadsessionrequest';
/* eslint-disable */

export interface EndBankStatementUploadSessionRequest {
    companyId: string;
    connectionId: string;
    datasetId: string;
    endUploadSessionRequest?: EndUploadSessionRequest | undefined;
}
