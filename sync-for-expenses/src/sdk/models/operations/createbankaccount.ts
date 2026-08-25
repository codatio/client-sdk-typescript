/* tslint:disable */

import type { BankAccount } from '../shared/bankaccount';
/* eslint-disable */

export interface CreateBankAccountRequest {
    companyId: string;
    connectionId: string;
    timeoutInMinutes?: number;
    allowSyncOnPushComplete?: boolean;
    bankAccount?: BankAccount | undefined;
}
