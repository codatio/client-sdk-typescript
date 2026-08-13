/* tslint:disable */

import type { SupplierPrototype } from '../shared/supplierprototype';
/* eslint-disable */

export interface CreateSupplierRequest {
    companyId: string;
    connectionId: string;
    idempotencyKey?: string;
    supplierPrototype?: SupplierPrototype | undefined;
}
