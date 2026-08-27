/* tslint:disable */

import type { ReportType } from './_speakeasy_enums';
/* eslint-disable */

export interface GetReportStatusRequest {
    companyId: string;
    reportType: ReportType;
    reportId: any;
    maxAge?: string;
}
