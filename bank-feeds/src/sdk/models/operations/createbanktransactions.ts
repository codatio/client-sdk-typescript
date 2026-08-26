/* tslint:disable */

import type { CreateBankTransactions } from '../shared/createbanktransactions';
/* eslint-disable */

export interface CreateBankTransactionsRequest {
    companyId: string;
    connectionId: string;
    accountId: string;
    timeoutInMinutes?: number;
    allowSyncOnPushComplete?: boolean;
    createBankTransactions?: CreateBankTransactions | undefined;
}
