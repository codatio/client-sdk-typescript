/* tslint:disable */

import type { ReimbursableExpenseTransaction } from '../shared/reimbursableexpensetransaction';
/* eslint-disable */

export interface CreateReimbursableExpenseTransactionRequest {
    companyId: string;
    requestBody?: Array<ReimbursableExpenseTransaction>;
}

export interface CreateReimbursableExpenseTransactionRequestBody {
    companyId: string;
    requestBody?: any;
}

export interface ReimbursableExpenseTransactionCreateRequestBody {
    companyId: string;
    requestBody?: any;
}
