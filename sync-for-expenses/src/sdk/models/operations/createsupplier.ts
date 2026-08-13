/* tslint:disable */

import type { Supplier } from '../shared/supplier';
/* eslint-disable */

export interface CreateSupplierRequest {
    companyId: string;
    connectionId: string;
    timeoutInMinutes?: number;
    allowSyncOnPushComplete?: boolean;
    supplier?: Supplier | undefined;
}
