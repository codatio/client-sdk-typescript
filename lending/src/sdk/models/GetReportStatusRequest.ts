/* tslint:disable */

import type { ReportType } from './_internal_enums';
/* eslint-disable */

export interface GetReportStatusRequest {
    companyId: string;
    reportType: ReportType;
    reportId: any;
    maxAge?: string;
}
