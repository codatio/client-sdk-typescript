/* tslint:disable */
/* eslint-disable */

import { RFCDate } from '../../types/rfcdate';

export interface GetAccountingAgedCreditorsReportRequest {
    companyId: string;
    reportDate?: RFCDate;
    numberOfPeriods?: number;
    periodLengthDays?: number;
}
