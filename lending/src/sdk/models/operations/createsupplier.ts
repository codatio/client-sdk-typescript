/* tslint:disable */

import type { AccountingSupplier } from '../shared/accountingsupplier';
/* eslint-disable */

export interface CreateSupplierRequest {
    companyId: string;
    connectionId: string;
    timeoutInMinutes?: number;
    allowSyncOnPushComplete?: boolean;
    accountingSupplier?: AccountingSupplier | undefined;
}
