/* tslint:disable */
/* eslint-disable */

import { RFCDate } from '../../types/rfcdate';

export interface GetAccountingAgedDebtorsReportRequest {
    companyId: string;
    reportDate?: RFCDate;
    numberOfPeriods?: number;
    periodLengthDays?: number;
}
