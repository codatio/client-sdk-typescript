/* tslint:disable */

import type { BankFeedBankAccountMapping } from '../shared/bankfeedbankaccountmapping';
/* eslint-disable */

export interface CreateBankAccountMappingRequest {
    companyId: string;
    connectionId: string;
    bankFeedBankAccountMapping?: BankFeedBankAccountMapping | undefined;
}
