# excelReports

## Overview

Downloadable reports

### Available Operations

* [generateExcelReport](#generateexcelreport) - Generate Excel report
* [getAccountingMarketingMetrics](#getaccountingmarketingmetrics) - Get marketing metrics report
* [getExcelReport](#getexcelreport) - Download Excel report
* [getExcelReportGenerationStatus](#getexcelreportgenerationstatus) - Get Excel report status

## generateExcelReport

Generate an Excel report which can subsequently be downloaded.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GenerateExcelReportResponse } from "@codat/assess/dist/sdk/models/operations";
import { ExcelReportType } from "@codat/assess/dist/sdk/models/shared";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.excelReports.generateExcelReport({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  reportType: ExcelReportType.EnhancedInvoices,
}).then((res: GenerateExcelReportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getAccountingMarketingMetrics

Get the marketing metrics from an accounting source for a given company.

Request an Excel report for download.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetAccountingMarketingMetricsResponse } from "@codat/assess/dist/sdk/models/operations";
import { PeriodUnit } from "@codat/assess/dist/sdk/models/shared";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.excelReports.getAccountingMarketingMetrics({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 451159,
  periodLength: 739264,
  periodUnit: PeriodUnit.Day,
  reportDate: "29-09-2020",
  showInputValues: false,
}).then((res: GetAccountingMarketingMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getExcelReport

Download the previously generated Excel report to a local drive.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetExcelReportResponse } from "@codat/assess/dist/sdk/models/operations";
import { ExcelReportType } from "@codat/assess/dist/sdk/models/shared";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.excelReports.getExcelReport({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  reportType: ExcelReportType.Assess,
}).then((res: GetExcelReportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getExcelReportGenerationStatus

Returns the status of the latest report requested.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetExcelReportGenerationStatusResponse } from "@codat/assess/dist/sdk/models/operations";
import { ExcelReportType } from "@codat/assess/dist/sdk/models/shared";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.excelReports.getExcelReportGenerationStatus({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  reportType: ExcelReportType.EnhancedFinancials,
}).then((res: GetExcelReportGenerationStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
