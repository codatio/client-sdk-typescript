/* tslint:disable */

import type { BankFeedAccountMapping } from '../shared/bankfeedaccountmapping';
/* eslint-disable */

export interface CreateBankAccountMappingRequest {
    companyId: string;
    connectionId: string;
    bankFeedAccountMapping?: BankFeedAccountMapping | undefined;
}
