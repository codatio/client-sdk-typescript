/* tslint:disable */

import type { SupplierPrototype } from '../shared/supplierprototype';
/* eslint-disable */

export interface UpdateSupplierRequest {
    companyId: string;
    connectionId: string;
    supplierId: string;
    supplierPrototype?: SupplierPrototype | undefined;
}
