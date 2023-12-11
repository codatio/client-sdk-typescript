# ExcelReports
(*excelReports*)

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
import { ExcelReportType } from "@codat/assess/dist/sdk/models/shared";

async function run() {
  const sdk = new CodatAssess({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.excelReports.generateExcelReport({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportType: ExcelReportType.EnhancedCashFlow,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GenerateExcelReportRequest](../../sdk/models/operations/generateexcelreportrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `retries`                                                                                          | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                           | :heavy_minus_sign:                                                                                 | Configuration to override the default retry behavior of the client.                                |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GenerateExcelReportResponse](../../sdk/models/operations/generateexcelreportresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getAccountingMarketingMetrics

Get the marketing metrics from an accounting source for a given company.

Request an Excel report for download.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { PeriodUnit } from "@codat/assess/dist/sdk/models/shared";

async function run() {
  const sdk = new CodatAssess({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.excelReports.getAccountingMarketingMetrics({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    numberOfPeriods: 644039,
    periodLength: 244044,
    periodUnit: PeriodUnit.Week,
    reportDate: "29-09-2020",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.GetAccountingMarketingMetricsRequest](../../sdk/models/operations/getaccountingmarketingmetricsrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `retries`                                                                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                               | :heavy_minus_sign:                                                                                                     | Configuration to override the default retry behavior of the client.                                                    |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetAccountingMarketingMetricsResponse](../../sdk/models/operations/getaccountingmarketingmetricsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getExcelReport

Download the previously generated Excel report to a local drive.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { ExcelReportType } from "@codat/assess/dist/sdk/models/shared";

async function run() {
  const sdk = new CodatAssess({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.excelReports.getExcelReport({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportType: ExcelReportType.EnhancedCashFlow,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetExcelReportRequest](../../sdk/models/operations/getexcelreportrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetExcelReportResponse](../../sdk/models/operations/getexcelreportresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getExcelReportGenerationStatus

Returns the status of the latest report requested.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { ExcelReportType } from "@codat/assess/dist/sdk/models/shared";

async function run() {
  const sdk = new CodatAssess({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.excelReports.getExcelReportGenerationStatus({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportType: ExcelReportType.EnhancedInvoices,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.GetExcelReportGenerationStatusRequest](../../sdk/models/operations/getexcelreportgenerationstatusrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `retries`                                                                                                                | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                 | :heavy_minus_sign:                                                                                                       | Configuration to override the default retry behavior of the client.                                                      |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.GetExcelReportGenerationStatusResponse](../../sdk/models/operations/getexcelreportgenerationstatusresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
