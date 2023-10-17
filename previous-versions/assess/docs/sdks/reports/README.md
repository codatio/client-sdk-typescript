# Reports
(*reports*)

## Overview

Enriched reports and analyses of financial data

### Available Operations

* [generateLoanSummary](#generateloansummary) - Generate loan summaries report
* [generateLoanTransactions](#generateloantransactions) - Generate loan transactions report
* [getAccountsForEnhancedBalanceSheet](#getaccountsforenhancedbalancesheet) - Get enhanced balance sheet accounts
* [getAccountsForEnhancedProfitAndLoss](#getaccountsforenhancedprofitandloss) - Get enhanced profit and loss accounts
* [getCommerceCustomerRetentionMetrics](#getcommercecustomerretentionmetrics) - Get customer retention metrics
* [getCommerceLifetimeValueMetrics](#getcommercelifetimevaluemetrics) - Get lifetime value metric
* [getCommerceOrdersMetrics](#getcommerceordersmetrics) - Get orders report
* [getCommerceRefundsMetrics](#getcommercerefundsmetrics) - Get refunds report
* [getCommerceRevenueMetrics](#getcommercerevenuemetrics) - Get commerce revenue metrics
* [getEnhancedCashFlowTransactions](#getenhancedcashflowtransactions) - Get enhanced cash flow report
* [getEnhancedInvoicesReport](#getenhancedinvoicesreport) - Get enhanced invoices report
* [getLoanSummary](#getloansummary) - Get loan summaries
* [getRecurringRevenueMetrics](#getrecurringrevenuemetrics) - Get key subscription revenue metrics
* [listLoanTransactions](#listloantransactions) - List loan transactions
* [requestRecurringRevenueMetrics](#requestrecurringrevenuemetrics) - Generate key subscription revenue metrics

## generateLoanSummary

The _Generate loan summaries_ endpoint requests the generation of the Loan Summaries report.

Learn more about Codat's liabilities feature [here](https://docs.codat.io/lending/features/liabilities-overview).

Make sure you have [synced a company](https://docs.codat.io/codat-api#/operations/refresh-company-data) recently before calling the endpoint.


### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GenerateLoanSummarySourceType } from "@codat/assess/dist/sdk/models/operations";

(async() => {
  const sdk = new CodatAssess({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.reports.generateLoanSummary({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    sourceType: GenerateLoanSummarySourceType.Accounting,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GenerateLoanSummaryRequest](../../models/operations/generateloansummaryrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `retries`                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                         | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GenerateLoanSummaryResponse](../../models/operations/generateloansummaryresponse.md)>**


## generateLoanTransactions

The _Generate loan transactions_ endpoint requests the generation of the Loan Transactions report.

Learn more about Codat's liabilities feature [here](https://docs.codat.io/lending/features/liabilities-overview).

Make sure you have [synced a company](https://docs.codat.io/codat-api#/operations/refresh-company-data) recently before calling the endpoint.


### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GenerateLoanTransactionsSourceType } from "@codat/assess/dist/sdk/models/operations";

(async() => {
  const sdk = new CodatAssess({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.reports.generateLoanTransactions({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    sourceType: GenerateLoanTransactionsSourceType.Accounting,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GenerateLoanTransactionsRequest](../../models/operations/generateloantransactionsrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `retries`                                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                   | :heavy_minus_sign:                                                                                       | Configuration to override the default retry behavior of the client.                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GenerateLoanTransactionsResponse](../../models/operations/generateloantransactionsresponse.md)>**


## getAccountsForEnhancedBalanceSheet

The Enhanced Balance Sheet Accounts endpoint returns a list of categorized accounts that appear on a company’s Balance Sheet along with a balance per financial statement date.

Codat suggests a category for each account automatically, but you can [change it](/docs/assess-categorizing-accounts-ecommerce-lending) to a more suitable one.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";

(async() => {
  const sdk = new CodatAssess({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.reports.getAccountsForEnhancedBalanceSheet({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: "29-09-2020",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.GetAccountsForEnhancedBalanceSheetRequest](../../models/operations/getaccountsforenhancedbalancesheetrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `retries`                                                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                       | :heavy_minus_sign:                                                                                                           | Configuration to override the default retry behavior of the client.                                                          |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.GetAccountsForEnhancedBalanceSheetResponse](../../models/operations/getaccountsforenhancedbalancesheetresponse.md)>**


## getAccountsForEnhancedProfitAndLoss

The Enhanced Profit and Loss Accounts endpoint returns a list of categorized accounts that appear on a company’s Profit and Loss. It also includes a balance per the financial statement date.

Codat suggests a category for each account automatically, but you can [change it](/docs/assess-categorizing-accounts-ecommerce-lending) to a more suitable one.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";

(async() => {
  const sdk = new CodatAssess({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.reports.getAccountsForEnhancedProfitAndLoss({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: "29-09-2020",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.GetAccountsForEnhancedProfitAndLossRequest](../../models/operations/getaccountsforenhancedprofitandlossrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `retries`                                                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                         | :heavy_minus_sign:                                                                                                             | Configuration to override the default retry behavior of the client.                                                            |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.GetAccountsForEnhancedProfitAndLossResponse](../../models/operations/getaccountsforenhancedprofitandlossresponse.md)>**


## getCommerceCustomerRetentionMetrics

Gets the customer retention metrics for a specific company connection, over one or more periods of time.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { PeriodUnit } from "@codat/assess/dist/sdk/models/shared";

(async() => {
  const sdk = new CodatAssess({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.reports.getCommerceCustomerRetentionMetrics({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    numberOfPeriods: 474636,
    periodLength: 781048,
    periodUnit: PeriodUnit.Day,
    reportDate: "29-09-2020",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.GetCommerceCustomerRetentionMetricsRequest](../../models/operations/getcommercecustomerretentionmetricsrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `retries`                                                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                         | :heavy_minus_sign:                                                                                                             | Configuration to override the default retry behavior of the client.                                                            |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.GetCommerceCustomerRetentionMetricsResponse](../../models/operations/getcommercecustomerretentionmetricsresponse.md)>**


## getCommerceLifetimeValueMetrics

Gets the lifetime value metric for a specific company connection, over one or more periods of time.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { PeriodUnit } from "@codat/assess/dist/sdk/models/shared";

(async() => {
  const sdk = new CodatAssess({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.reports.getCommerceLifetimeValueMetrics({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    numberOfPeriods: 463554,
    periodLength: 892968,
    periodUnit: PeriodUnit.Day,
    reportDate: "29-09-2020",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.GetCommerceLifetimeValueMetricsRequest](../../models/operations/getcommercelifetimevaluemetricsrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `retries`                                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                 | :heavy_minus_sign:                                                                                                     | Configuration to override the default retry behavior of the client.                                                    |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetCommerceLifetimeValueMetricsResponse](../../models/operations/getcommercelifetimevaluemetricsresponse.md)>**


## getCommerceOrdersMetrics

Gets the order information for a specific company connection, over one or more periods of time.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { PeriodUnit } from "@codat/assess/dist/sdk/models/shared";

(async() => {
  const sdk = new CodatAssess({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.reports.getCommerceOrdersMetrics({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    numberOfPeriods: 661381,
    periodLength: 875123,
    periodUnit: PeriodUnit.Year,
    reportDate: "29-09-2020",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetCommerceOrdersMetricsRequest](../../models/operations/getcommerceordersmetricsrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `retries`                                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                   | :heavy_minus_sign:                                                                                       | Configuration to override the default retry behavior of the client.                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetCommerceOrdersMetricsResponse](../../models/operations/getcommerceordersmetricsresponse.md)>**


## getCommerceRefundsMetrics

Gets the refunds information for a specific company connection, over one or more periods of time.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { PeriodUnit } from "@codat/assess/dist/sdk/models/shared";

(async() => {
  const sdk = new CodatAssess({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.reports.getCommerceRefundsMetrics({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    numberOfPeriods: 806705,
    periodLength: 498153,
    periodUnit: PeriodUnit.Day,
    reportDate: "29-09-2020",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetCommerceRefundsMetricsRequest](../../models/operations/getcommercerefundsmetricsrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetCommerceRefundsMetricsResponse](../../models/operations/getcommercerefundsmetricsresponse.md)>**


## getCommerceRevenueMetrics

Get the revenue and revenue growth for a specific company connection, over one or more periods of time.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { PeriodUnit } from "@codat/assess/dist/sdk/models/shared";

(async() => {
  const sdk = new CodatAssess({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.reports.getCommerceRevenueMetrics({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    numberOfPeriods: 58448,
    periodLength: 864392,
    periodUnit: PeriodUnit.Week,
    reportDate: "29-09-2020",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetCommerceRevenueMetricsRequest](../../models/operations/getcommercerevenuemetricsrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetCommerceRevenueMetricsResponse](../../models/operations/getcommercerevenuemetricsresponse.md)>**


## getEnhancedCashFlowTransactions

> **Categorization engine**
> 
> The categorization engine uses machine learning and has been fully trained against Plaid and TrueLayer banking data sources. It is not fully trained against the Basiq banking data source.

The Enhanced Cash Flow Transactions endpoint provides a fully categorized list of banking transactions for a company. Accounts and transaction data are obtained from the company's banking data sources.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";

(async() => {
  const sdk = new CodatAssess({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.reports.getEnhancedCashFlowTransactions({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    page: 1,
    pageSize: 100,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.GetEnhancedCashFlowTransactionsRequest](../../models/operations/getenhancedcashflowtransactionsrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `retries`                                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                 | :heavy_minus_sign:                                                                                                     | Configuration to override the default retry behavior of the client.                                                    |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetEnhancedCashFlowTransactionsResponse](../../models/operations/getenhancedcashflowtransactionsresponse.md)>**


## getEnhancedInvoicesReport

Gets a list of invoices linked to the corresponding banking transaction

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";

(async() => {
  const sdk = new CodatAssess({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.reports.getEnhancedInvoicesReport({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    page: 1,
    pageSize: 100,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetEnhancedInvoicesReportRequest](../../models/operations/getenhancedinvoicesreportrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetEnhancedInvoicesReportResponse](../../models/operations/getenhancedinvoicesreportresponse.md)>**


## getLoanSummary

The *Get loan summaries* endpoint returns a summary by integration type of all loans identified from a company's accounting, banking, and commerce integrations.

The endpoint returns a list of a company's [loan summaries](https://docs.codat.io/codat-api#/schemas/LoanSummary) for each valid data connection.

Make sure you have [synced a company](https://docs.codat.io/codat-api#/operations/refresh-company-data) recently before calling the endpoint.


### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetLoanSummarySourceType } from "@codat/assess/dist/sdk/models/operations";

(async() => {
  const sdk = new CodatAssess({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.reports.getLoanSummary({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    sourceType: GetLoanSummarySourceType.Banking,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetLoanSummaryRequest](../../models/operations/getloansummaryrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `retries`                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                   | Configuration to override the default retry behavior of the client.                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetLoanSummaryResponse](../../models/operations/getloansummaryresponse.md)>**


## getRecurringRevenueMetrics

Gets key metrics for subscription revenue.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";

(async() => {
  const sdk = new CodatAssess({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.reports.getRecurringRevenueMetrics({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.GetRecurringRevenueMetricsRequest](../../models/operations/getrecurringrevenuemetricsrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `retries`                                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                       | :heavy_minus_sign:                                                                                           | Configuration to override the default retry behavior of the client.                                          |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.GetRecurringRevenueMetricsResponse](../../models/operations/getrecurringrevenuemetricsresponse.md)>**


## listLoanTransactions

The *List loan transactions* endpoint returns all [loan transactions](https://docs.codat.io/codat-api#/schemas/LoanTransactions) identified from a company's accounting, banking, and commerce integrations.

This detail gives analysts a better idea of the loan obligations a company may have.

Make sure you have [synced a company](https://docs.codat.io/codat-api#/operations/refresh-company-data) recently before calling the endpoint.


### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { ListLoanTransactionsSourceType } from "@codat/assess/dist/sdk/models/operations";

(async() => {
  const sdk = new CodatAssess({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.reports.listLoanTransactions({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    sourceType: ListLoanTransactionsSourceType.Commerce,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListLoanTransactionsRequest](../../models/operations/listloantransactionsrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `retries`                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                           | :heavy_minus_sign:                                                                               | Configuration to override the default retry behavior of the client.                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListLoanTransactionsResponse](../../models/operations/listloantransactionsresponse.md)>**


## requestRecurringRevenueMetrics

Requests production of key subscription revenue metrics.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";

(async() => {
  const sdk = new CodatAssess({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.reports.requestRecurringRevenueMetrics({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.RequestRecurringRevenueMetricsRequest](../../models/operations/requestrecurringrevenuemetricsrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `retries`                                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                               | :heavy_minus_sign:                                                                                                   | Configuration to override the default retry behavior of the client.                                                  |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.RequestRecurringRevenueMetricsResponse](../../models/operations/requestrecurringrevenuemetricsresponse.md)>**

