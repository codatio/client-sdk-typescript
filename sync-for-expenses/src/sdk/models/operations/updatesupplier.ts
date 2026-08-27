/* tslint:disable */

import type { Supplier } from '../shared/supplier';
/* eslint-disable */

export interface UpdateSupplierRequest {
    companyId: string;
    connectionId: string;
    supplierId: string;
    timeoutInMinutes?: number;
    allowSyncOnPushComplete?: boolean;
    forceUpdate?: boolean;
    supplier?: Supplier | undefined;
}
