/* tslint:disable */

import type { PeriodUnit } from '../_speakeasy_enums';
/* eslint-disable */

export interface GetCommerceOrdersReportRequest {
    companyId: string;
    connectionId: string;
    reportDate: string;
    periodLength: number;
    numberOfPeriods: number;
    periodUnit: PeriodUnit;
    includeDisplayNames?: boolean;
}
