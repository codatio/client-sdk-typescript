# Liabilities
(*liabilities*)

## Overview

Debt and other liabilities.

### Available Operations

* [generateLoanSummary](#generateloansummary) - Generate loan summaries report
* [generateLoanTransactions](#generateloantransactions) - Generate loan transactions report
* [getLoanSummary](#getloansummary) - Get loan summaries
* [listLoanTransactions](#listloantransactions) - List loan transactions

## generateLoanSummary

The _Generate loan summaries_ endpoint requests the generation of the Loan Summaries report.

Learn more about Codat's liabilities feature [here](https://docs.codat.io/lending/features/liabilities-overview).

Make sure you have [synced a company](https://docs.codat.io/lending-api#/operations/refresh-company-data) recently before calling the endpoint.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { SourceType } from "@codat/lending/dist/sdk/models/operations";

async function run() {
  const sdk = new CodatLending({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.liabilities.generateLoanSummary({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    sourceType: SourceType.Accounting,
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
| `request`                                                                                          | [operations.GenerateLoanSummaryRequest](../../sdk/models/operations/generateloansummaryrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `retries`                                                                                          | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                           | :heavy_minus_sign:                                                                                 | Configuration to override the default retry behavior of the client.                                |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GenerateLoanSummaryResponse](../../sdk/models/operations/generateloansummaryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## generateLoanTransactions

The _Generate loan transactions_ endpoint requests the generation of the Loan Transactions report.

Learn more about Codat's liabilities feature [here](https://docs.codat.io/lending/features/liabilities-overview).

Make sure you have [synced a company](https://docs.codat.io/lending-api#/operations/refresh-company-data) recently before calling the endpoint.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { QueryParamSourceType } from "@codat/lending/dist/sdk/models/operations";

async function run() {
  const sdk = new CodatLending({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.liabilities.generateLoanTransactions({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    sourceType: QueryParamSourceType.Accounting,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.GenerateLoanTransactionsRequest](../../sdk/models/operations/generateloantransactionsrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `retries`                                                                                                    | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                           | Configuration to override the default retry behavior of the client.                                          |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.GenerateLoanTransactionsResponse](../../sdk/models/operations/generateloantransactionsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getLoanSummary

The *Get loan summaries* endpoint returns a summary by integration type of all loans identified from a company's accounting, banking, and commerce integrations.

The endpoint returns a list of a company's [loan summaries](https://docs.codat.io/lending-api#/schemas/LoanSummary) for each valid data connection.

Make sure you have [synced a company](https://docs.codat.io/lending-api#/operations/refresh-company-data) recently before calling the endpoint.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetLoanSummaryQueryParamSourceType } from "@codat/lending/dist/sdk/models/operations";

async function run() {
  const sdk = new CodatLending({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.liabilities.getLoanSummary({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    sourceType: GetLoanSummaryQueryParamSourceType.Banking,
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
| `request`                                                                                | [operations.GetLoanSummaryRequest](../../sdk/models/operations/getloansummaryrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetLoanSummaryResponse](../../sdk/models/operations/getloansummaryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listLoanTransactions

The *List loan transactions* endpoint returns all [loan transactions](https://docs.codat.io/lending-api#/schemas/LoanTransactions) identified from a company's accounting, banking, and commerce integrations.

This detail gives analysts a better idea of the loan obligations a company may have.

Make sure you have [synced a company](https://docs.codat.io/lending-api#/operations/refresh-company-data) recently before calling the endpoint.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { ListLoanTransactionsQueryParamSourceType } from "@codat/lending/dist/sdk/models/operations";

async function run() {
  const sdk = new CodatLending({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.liabilities.listLoanTransactions({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    sourceType: ListLoanTransactionsQueryParamSourceType.Commerce,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.ListLoanTransactionsRequest](../../sdk/models/operations/listloantransactionsrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `retries`                                                                                            | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                             | :heavy_minus_sign:                                                                                   | Configuration to override the default retry behavior of the client.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.ListLoanTransactionsResponse](../../sdk/models/operations/listloantransactionsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
