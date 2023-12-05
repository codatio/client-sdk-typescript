# ExcelReports
(*excelReports*)

## Overview

Download reports in Excel format.

### Available Operations

* [download](#download) - Download Excel report
* [generate](#generate) - Generate Excel report
* [getStatus](#getstatus) - Get Excel report status

## download

﻿The *Download Excel report* endpoint downloads the latest successfully generated Excel report of a specified report type for a given company. 

The downloadable Excel file is returned in the response. You can save it to your local machine.

You can [learn more](https://docs.codat.io/lending/excel/overview) about valid Excel report types.

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { ExcelReportTypes } from "@codat/lending/dist/sdk/models/shared";

async function run() {
  const sdk = new CodatLending({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.excelReports.download({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportType: ExcelReportTypes.EnhancedFinancials,
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
| `request`                                                                                          | [operations.DownloadExcelReportRequest](../../sdk/models/operations/downloadexcelreportrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `retries`                                                                                          | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                           | :heavy_minus_sign:                                                                                 | Configuration to override the default retry behavior of the client.                                |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.DownloadExcelReportResponse](../../sdk/models/operations/downloadexcelreportresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## generate

The *Generate Excel report* endpoint requests the production of a downloadable Excel file for a report type specified in the `reportType` query parameter.

In response, the endpoint returns the [status](https://docs.codat.io/lending-api#/schemas/ExcelStatus) detailing the current state of the report generation request.

### Report types

| reportType                                                                           | Description                                                                                                                                   |
|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| [audit](https://docs.codat.io/lending/excel/audit-report)                            | Identifies inaccurate or out-of-date accounts, helping you to make decisions with confidence.                                                   || [audit](https://docs.codat.io/lending/excel/audit-report)                            | Identify inaccurate or out-of-date accounts, helping you to make decisions with confidence.                                                   |
| [enhancedCashFlow](https://docs.codat.io/lending/excel/enhanced-invoices-report)     | Provides a fully categorized list of bank transactions for a company, allowing lenders to accurately forecast a company's cash flow.  |
| [enhancedFinancials](https://docs.codat.io/lending/excel/enhanced-financials-report) | Supports decision-making using fully categorized financial statements to allow lenders to automate their underwriting processes.                |
| [enhancedInvoices](https://docs.codat.io/lending/excel/enhanced-invoices-report)     | Helps verify that payments have been made against historic invoices. Great for invoice finance lenders.                                       |

[Learn more](https://docs.codat.io/lending/excel/overview) about valid Excel report types.




### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { ExcelReportTypes } from "@codat/lending/dist/sdk/models/shared";

async function run() {
  const sdk = new CodatLending({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.excelReports.generate({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportType: ExcelReportTypes.EnhancedInvoices,
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

## getStatus

﻿The *Get Excel report status* returns the status of the report mostly recently requested for Excel generation. It does not return the status of any historical report requests. 

Poll this endpoint to check the progress of the report once you have requested its generation. This will not affect the generation of the report. 

When the report generation completes successfully, the `inProgress` property will be marked as `false` and the `success` field will be marked as `true`.

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { ExcelReportTypes } from "@codat/lending/dist/sdk/models/shared";

async function run() {
  const sdk = new CodatLending({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.excelReports.getStatus({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportType: ExcelReportTypes.EnhancedCashFlow,
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
