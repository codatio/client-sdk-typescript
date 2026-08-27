/* tslint:disable */

import type { AccountingTransfer } from '../shared/accountingtransfer';
/* eslint-disable */

export interface CreateTransferRequest {
    companyId: string;
    connectionId: string;
    timeoutInMinutes?: number;
    allowSyncOnPushComplete?: boolean;
    accountingTransfer?: AccountingTransfer | undefined;
}
