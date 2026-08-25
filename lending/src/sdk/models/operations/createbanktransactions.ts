/* tslint:disable */

import type { AccountingCreateBankTransactions } from '../shared/accountingcreatebanktransactions';
/* eslint-disable */

export interface CreateBankTransactionsRequest {
    companyId: string;
    connectionId: string;
    accountId: string;
    timeoutInMinutes?: number;
    allowSyncOnPushComplete?: boolean;
    accountingCreateBankTransactions?: AccountingCreateBankTransactions | undefined;
}
