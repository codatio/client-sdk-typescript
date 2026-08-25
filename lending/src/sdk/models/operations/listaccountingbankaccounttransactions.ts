/* tslint:disable */
/* eslint-disable */

export interface ListAccountingBankAccountTransactionsRequest {
    companyId: string;
    connectionId: string;
    accountId: string;
    page?: number;
    pageSize?: number;
    query?: string;
    orderBy?: string;
}
