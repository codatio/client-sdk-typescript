/* tslint:disable */

import type { ExcelReportTypes } from '../shared/excelreporttypes';
/* eslint-disable */

export interface GetExcelReportGenerationStatusRequest {
    companyId: string;
    reportType: ExcelReportTypes;
}
