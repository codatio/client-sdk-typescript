/* tslint:disable */

import type { UpdateExpenseRequest } from '../shared/updateexpenserequest';
/* eslint-disable */

export interface UpdateExpenseTransactionRequest {
    companyId: string;
    transactionId: string;
    updateExpenseRequest?: UpdateExpenseRequest | undefined;
}
