/* tslint:disable */

import type { PeriodUnit } from '../_internal_enums';
/* eslint-disable */

export interface GetCommerceRefundsReportRequest {
    companyId: string;
    connectionId: string;
    reportDate: string;
    periodLength: number;
    numberOfPeriods: number;
    periodUnit: PeriodUnit;
    includeDisplayNames?: boolean;
}
