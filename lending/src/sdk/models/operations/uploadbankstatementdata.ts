/* tslint:disable */

import type { Path } from '../_internal_enums';
import type { UploadBankStatementDataRequestBody } from './uploadbankstatementdatarequestbody';
/* eslint-disable */

export interface UploadBankStatementDataRequest {
    companyId: string;
    connectionId: string;
    datasetId: string;
    path?: Path;
    requestBody?: UploadBankStatementDataRequestBody;
}

export interface BankStatementDataUploadRequestBody {
    companyId: string;
    connectionId: string;
    datasetId: string;
    path?: string;
    requestBody?: UploadBankStatementDataRequestBody;
}
