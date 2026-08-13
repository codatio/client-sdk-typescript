/* tslint:disable */

import type { ExcelReportTypes } from '../shared/excelreporttypes';
/* eslint-disable */

export interface DownloadExcelReportRequest {
    companyId: string;
    reportType: ExcelReportTypes;
}
