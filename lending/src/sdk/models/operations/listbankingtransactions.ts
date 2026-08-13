/* tslint:disable */
/* eslint-disable */

export interface ListBankingTransactionsRequest {
    companyId: string;
    connectionId: string;
    page?: number;
    pageSize?: number;
    query?: string;
    orderBy?: string;
}
