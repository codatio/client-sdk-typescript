# excelReports

## Overview

Downloadable reports

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
import { DownloadExcelReportResponse } from "@codat/lending/dist/sdk/models/operations";
import { ExcelReportTypes } from "@codat/lending/dist/sdk/models/shared";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.excelReports.download({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  reportType: ExcelReportTypes.EnhancedCashFlow,
}).then((res: DownloadExcelReportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DownloadExcelReportRequest](../../models/operations/downloadexcelreportrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `retries`                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                         | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DownloadExcelReportResponse](../../models/operations/downloadexcelreportresponse.md)>**


## generate

﻿The *Generate Excel report* endpoint requests the production of a downloadable Excel file for a report type specified in the `reportType` query parameter.

In response, the endpoint returns the [status](https://docs.codat.io/lending-api#/schemas/ExcelStatus) detailing the current state of the report generation request.

You can [learn more](https://docs.codat.io/lending/excel/overview) about valid Excel report types.





### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GenerateExcelReportResponse } from "@codat/lending/dist/sdk/models/operations";
import { ExcelReportTypes } from "@codat/lending/dist/sdk/models/shared";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.excelReports.generate({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  reportType: ExcelReportTypes.EnhancedInvoices,
}).then((res: GenerateExcelReportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GenerateExcelReportRequest](../../models/operations/generateexcelreportrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `retries`                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                         | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GenerateExcelReportResponse](../../models/operations/generateexcelreportresponse.md)>**


## getStatus

﻿The *Get Excel report status* returns the status of the report mostly recently requested for Excel generation. It does not return the status of any historical report requests. 

Poll this endpoint to check the progress of the report once you have requested its generation. This will not affect the generation of the report. 

When the report generation completes successfully, the `inProgress` property will be marked as `false` and the `success` field will be marked as `true`.

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetExcelReportGenerationStatusResponse } from "@codat/lending/dist/sdk/models/operations";
import { ExcelReportTypes } from "@codat/lending/dist/sdk/models/shared";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.excelReports.getStatus({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  reportType: ExcelReportTypes.Audit,
}).then((res: GetExcelReportGenerationStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.GetExcelReportGenerationStatusRequest](../../models/operations/getexcelreportgenerationstatusrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `retries`                                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                               | :heavy_minus_sign:                                                                                                   | Configuration to override the default retry behavior of the client.                                                  |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.GetExcelReportGenerationStatusResponse](../../models/operations/getexcelreportgenerationstatusresponse.md)>**

