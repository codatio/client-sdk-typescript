/* tslint:disable */

import type { BillPaymentPrototype } from '../shared/billpaymentprototype';
/* eslint-disable */

export interface CreateBillPaymentRequest {
    companyId: string;
    connectionId: string;
    billId: string;
    idempotencyKey?: string;
    billPaymentPrototype?: BillPaymentPrototype | undefined;
}
