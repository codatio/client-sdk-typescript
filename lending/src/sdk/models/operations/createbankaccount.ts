/* tslint:disable */

import type { AccountingBankAccount } from '../shared/accountingbankaccount';
/* eslint-disable */

export interface CreateBankAccountRequest {
    companyId: string;
    connectionId: string;
    timeoutInMinutes?: number;
    allowSyncOnPushComplete?: boolean;
    accountingBankAccount?: AccountingBankAccount | undefined;
}
