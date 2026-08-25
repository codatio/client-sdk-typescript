/* tslint:disable */

import type { ExpenseTransaction } from '../shared/expensetransaction';
/* eslint-disable */

export interface CreateExpenseTransactionRequest {
    companyId: string;
    requestBody?: Array<ExpenseTransaction>;
}

export interface CreateExpenseTransactionRequestBody {
    companyId: string;
    requestBody?: any;
}

export interface ExpenseTransactionCreateRequestBody {
    companyId: string;
    requestBody?: any;
}
