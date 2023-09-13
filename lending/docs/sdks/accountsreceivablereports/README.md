# accountsReceivableReports

### Available Operations

* [getAgedCreditors](#getagedcreditors) - Aged creditors report
* [getAgedDebtors](#getageddebtors) - Aged debtors report
* [isAgedCreditorsAvailable](#isagedcreditorsavailable) - Aged creditors report available
* [isAgedDebtorsAvailable](#isageddebtorsavailable) - Aged debtors report available

## getAgedCreditors

Returns aged creditors report for company that shows the total balance owed by a business to its suppliers over time.

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetAccountingAgedCreditorsReportResponse } from "@codat/lending/dist/sdk/models/operations";
import { RFCDate } from "@codat/lending/dist/sdk/types";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountsReceivableReports.getAgedCreditors({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  numberOfPeriods: 12,
  periodLengthDays: 30,
  reportDate: new RFCDate("2022-12-31"),
}).then((res: GetAccountingAgedCreditorsReportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.GetAccountingAgedCreditorsReportRequest](../../models/operations/getaccountingagedcreditorsreportrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `retries`                                                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                       | Configuration to override the default retry behavior of the client.                                                      |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.GetAccountingAgedCreditorsReportResponse](../../models/operations/getaccountingagedcreditorsreportresponse.md)>**


## getAgedDebtors

Returns aged debtors report for company that shows the total outstanding balance due from customers to the business over time.

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetAccountingAgedDebtorsReportResponse } from "@codat/lending/dist/sdk/models/operations";
import { RFCDate } from "@codat/lending/dist/sdk/types";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountsReceivableReports.getAgedDebtors({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  numberOfPeriods: 12,
  periodLengthDays: 30,
  reportDate: new RFCDate("2022-12-31"),
}).then((res: GetAccountingAgedDebtorsReportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.GetAccountingAgedDebtorsReportRequest](../../models/operations/getaccountingageddebtorsreportrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `retries`                                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                               | :heavy_minus_sign:                                                                                                   | Configuration to override the default retry behavior of the client.                                                  |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.GetAccountingAgedDebtorsReportResponse](../../models/operations/getaccountingageddebtorsreportresponse.md)>**


## isAgedCreditorsAvailable

Indicates whether the aged creditor report is available for the company.

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { IsAgedCreditorsReportAvailableResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountsReceivableReports.isAgedCreditorsAvailable({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: IsAgedCreditorsReportAvailableResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.IsAgedCreditorsReportAvailableRequest](../../models/operations/isagedcreditorsreportavailablerequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `retries`                                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                               | :heavy_minus_sign:                                                                                                   | Configuration to override the default retry behavior of the client.                                                  |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.IsAgedCreditorsReportAvailableResponse](../../models/operations/isagedcreditorsreportavailableresponse.md)>**


## isAgedDebtorsAvailable

Indicates whether the aged debtors report is available for the company.

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { IsAgedDebtorsReportAvailableResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountsReceivableReports.isAgedDebtorsAvailable({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: IsAgedDebtorsReportAvailableResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.IsAgedDebtorsReportAvailableRequest](../../models/operations/isageddebtorsreportavailablerequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `retries`                                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                           | :heavy_minus_sign:                                                                                               | Configuration to override the default retry behavior of the client.                                              |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.IsAgedDebtorsReportAvailableResponse](../../models/operations/isageddebtorsreportavailableresponse.md)>**

