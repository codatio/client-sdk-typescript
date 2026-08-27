/* tslint:disable */

import type { TransferTransactionRequest } from '../shared/transfertransactionrequest';
/* eslint-disable */

export interface CreateTransferTransactionRequest {
    companyId: string;
    transactionId: string;
    transferTransactionRequest?: TransferTransactionRequest | undefined;
}
