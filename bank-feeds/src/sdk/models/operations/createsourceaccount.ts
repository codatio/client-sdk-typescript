/* tslint:disable */

import type { CreateSourceAccountRequestBody } from './createsourceaccountrequestbody';
/* eslint-disable */

export interface CreateSourceAccountRequest {
    companyId: string;
    connectionId: string;
    requestBody?: CreateSourceAccountRequestBody | undefined;
}

export interface SourceAccountCreateRequestBody {
    companyId: string;
    connectionId: string;
    requestBody?: CreateSourceAccountRequestBody | undefined;
}
