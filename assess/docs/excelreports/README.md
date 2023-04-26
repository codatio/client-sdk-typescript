# excelReports

## Overview

Downloadable reports

### Available Operations

* [downloadExcelReport](#downloadexcelreport) - Download generated excel report
* [generateExcelReport](#generateexcelreport) - Generate an Excel report
* [getAccountingMarketingMetrics](#getaccountingmarketingmetrics) - Get the marketing metrics from an accounting source for a given company.
* [getExcelReport](#getexcelreport) - Download generated excel report
* [getExcelReportGenerationStatus](#getexcelreportgenerationstatus) - Get status of Excel report

## downloadExcelReport

Download the previously generated Excel report to a local drive.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { DownloadExcelReportRequest, DownloadExcelReportResponse } from "@codat/assess/dist/sdk/models/operations";
import { ExcelReportTypeEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DownloadExcelReportRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  reportType: ExcelReportTypeEnum.Audit,
};

sdk.excelReports.downloadExcelReport(req).then((res: DownloadExcelReportResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## generateExcelReport

Generate an Excel report which can subsequently be downloaded.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GenerateExcelReportRequest, GenerateExcelReportResponse } from "@codat/assess/dist/sdk/models/operations";
import { ExcelReportTypeEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GenerateExcelReportRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  reportType: ExcelReportTypeEnum.Assess,
};

sdk.excelReports.generateExcelReport(req).then((res: GenerateExcelReportResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getAccountingMarketingMetrics

Request an Excel report for download.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetAccountingMarketingMetricsRequest, GetAccountingMarketingMetricsResponse } from "@codat/assess/dist/sdk/models/operations";
import { PeriodUnitEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetAccountingMarketingMetricsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 739264,
  periodLength: 19987,
  periodUnit: PeriodUnitEnum.Day,
  reportDate: "29-09-2020",
  showInputValues: false,
};

sdk.excelReports.getAccountingMarketingMetrics(req).then((res: GetAccountingMarketingMetricsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getExcelReport

Download the previously generated Excel report to a local drive.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetExcelReportRequest, GetExcelReportResponse } from "@codat/assess/dist/sdk/models/operations";
import { ExcelReportTypeEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetExcelReportRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  reportType: ExcelReportTypeEnum.Assess,
};

sdk.excelReports.getExcelReport(req).then((res: GetExcelReportResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getExcelReportGenerationStatus

Returns the status of the latest report requested.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetExcelReportGenerationStatusRequest, GetExcelReportGenerationStatusResponse } from "@codat/assess/dist/sdk/models/operations";
import { ExcelReportTypeEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetExcelReportGenerationStatusRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  reportType: ExcelReportTypeEnum.Assess,
};

sdk.excelReports.getExcelReportGenerationStatus(req).then((res: GetExcelReportGenerationStatusResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
