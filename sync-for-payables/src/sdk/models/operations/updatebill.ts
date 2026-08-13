/* tslint:disable */

import type { BillPrototype } from '../shared/billprototype';
/* eslint-disable */

export interface UpdateBillRequest {
    companyId: string;
    connectionId: string;
    billId: string;
    idempotencyKey?: string;
    billPrototype?: BillPrototype | undefined;
}
