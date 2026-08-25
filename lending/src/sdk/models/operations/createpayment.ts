/* tslint:disable */

import type { AccountingPayment } from '../shared/accountingpayment';
/* eslint-disable */

export interface CreatePaymentRequest {
    companyId: string;
    connectionId: string;
    timeoutInMinutes?: number;
    allowSyncOnPushComplete?: boolean;
    accountingPayment?: AccountingPayment | undefined;
}
