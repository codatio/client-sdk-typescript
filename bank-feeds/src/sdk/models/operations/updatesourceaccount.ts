/* tslint:disable */

import type { SourceAccount } from '../shared/sourceaccount';
/* eslint-disable */

export interface UpdateSourceAccountRequest {
    companyId: string;
    connectionId: string;
    accountId: string;
    sourceAccount?: SourceAccount | undefined;
}
