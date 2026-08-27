/* tslint:disable */

import type { BillPrototype } from '../shared/billprototype';
/* eslint-disable */

export interface CreateBillRequest {
    companyId: string;
    connectionId: string;
    idempotencyKey?: string;
    billPrototype?: BillPrototype | undefined;
}
