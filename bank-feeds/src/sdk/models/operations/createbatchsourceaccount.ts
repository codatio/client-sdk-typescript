/* tslint:disable */

import type { CreateBatchSourceAccountRequestBody } from './createbatchsourceaccountrequestbody';
/* eslint-disable */

export interface CreateBatchSourceAccountRequest {
    companyId: string;
    connectionId: string;
    requestBody?: CreateBatchSourceAccountRequestBody | undefined;
}

export interface BatchSourceAccountCreateRequestBody {
    companyId: string;
    connectionId: string;
    requestBody?: CreateBatchSourceAccountRequestBody | undefined;
}
