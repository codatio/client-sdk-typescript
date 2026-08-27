/* tslint:disable */

import type { BankAccountPrototype } from '../shared/bankaccountprototype';
/* eslint-disable */

export interface CreateBankAccountRequest {
    companyId: string;
    connectionId: string;
    idempotencyKey?: string;
    bankAccountPrototype?: BankAccountPrototype | undefined;
}
