/* tslint:disable */

import type { BankAccountPrototype } from '../shared/bankaccountprototype';
/* eslint-disable */

export interface CreateBankAccountRequest {
    companyId: string;
    connectionId: string;
    timeoutInMinutes?: number;
    bankAccountPrototype?: BankAccountPrototype | undefined;
}
