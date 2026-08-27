# FinancialSummary

## Overview

View financial summary information for a company, including credit model reports and accounting score.

### Available Operations

* [downloadCreditModelExcel](#downloadcreditmodelexcel) - Download credit model Excel
* [getFinancialSummary](#getfinancialsummary) - Get financial summary insights

## downloadCreditModelExcel

> **Available as beta release**
>
> This endpoint is part of a beta release. Please contact your account manager if you want to enable it.

Use the *Download Credit Model Excel* endpoint to download the credit model Excel file. 

Before using it, you must call the [Generate report](https://docs.codat.io/lending-api#/operations/generate-report) endpoint of type `creditModel`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="download-credit-model-excel" method="get" path="/companies/{companyId}/reports/creditModel/{reportId}/excel" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.financialSummary.downloadCreditModelExcel({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    maxAge: "2022-10-23T00:00:00Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { financialSummaryDownloadCreditModelExcel } from "@codat/lending/funcs/financialSummaryDownloadCreditModelExcel.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await financialSummaryDownloadCreditModelExcel(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    maxAge: "2022-10-23T00:00:00Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("financialSummaryDownloadCreditModelExcel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | DownloadCreditModelExcelRequest                                                                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[Uint8Array](../../models/.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 400, 401, 402, 403, 404, 429 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |

## getFinancialSummary

> **Available as beta release**
>
> This endpoint is part of a beta release. Please contact your account manager if you want to enable it.

Financial summary insights provide high-level indicators about the accuracy and completeness of a business’s financial data. These insights include:
- Closed Books Indicator – An estimate of the most recent accounting period officially closed by a business
- Accounting Score – An evaluation of the quality and completeness of a business’s bookkeeping

Before accessing this endpoint, you must call the [Generate report](https://docs.codat.io/lending-api#/operations/generate-report) endpoint of type `creditModel`.

> Please note that missing elements might be disabled for the account. Please contact account manager for more details.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-financial-summary" method="get" path="/companies/{companyId}/reports/creditModel/{reportId}/financialSummary" -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.financialSummary.getFinancialSummary({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { financialSummaryGetFinancialSummary } from "@codat/lending/funcs/financialSummaryGetFinancialSummary.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await financialSummaryGetFinancialSummary(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("financialSummaryGetFinancialSummary failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | GetFinancialSummaryRequest                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.FinancialSummary](../../models/.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 400, 401, 402, 403, 404, 429 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |