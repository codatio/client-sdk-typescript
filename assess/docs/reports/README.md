# reports

## Overview

Data integrity is important

### Available Operations

* [getAccountsForEnhancedBalanceSheet](#getaccountsforenhancedbalancesheet) - Get enhanced balance sheet accounts
* [getAccountsForEnhancedProfitAndLoss](#getaccountsforenhancedprofitandloss) - Get enhanced profit and loss accounts
* [getCommerceCustomerRetentionMetrics](#getcommercecustomerretentionmetrics) - Get customer retention metrics
* [getCommerceLifetimeValueMetrics](#getcommercelifetimevaluemetrics) - Get lifetime value metric
* [getCommerceOrdersMetrics](#getcommerceordersmetrics) - Get orders report
* [getCommerceRefundsMetrics](#getcommercerefundsmetrics) - Get refunds report
* [getCommerceRevenueMetrics](#getcommercerevenuemetrics) - Get commerce revenue metrics
* [~~getEnhancedBalanceSheet~~](#getenhancedbalancesheet) - Get enhanced balance sheet report :warning: **Deprecated**
* [getEnhancedCashFlowTransactions](#getenhancedcashflowtransactions) - Get enhanced cash flow report
* [~~getEnhancedFinancialMetrics~~](#getenhancedfinancialmetrics) - List financial metrics :warning: **Deprecated**
* [getEnhancedInvoicesReport](#getenhancedinvoicesreport) - Get enhanced invoices report
* [~~getEnhancedProfitAndLoss~~](#getenhancedprofitandloss) - Get enhanced profit and loss report :warning: **Deprecated**
* [getRecurringRevenueMetrics](#getrecurringrevenuemetrics) - Get key subscription revenue metrics
* [requestRecurringRevenueMetrics](#requestrecurringrevenuemetrics) - Generate key subscription revenue metrics

## getAccountsForEnhancedBalanceSheet

The Enhanced Balance Sheet Accounts endpoint returns a list of categorized accounts that appear on a company’s Balance Sheet along with a balance per financial statement date.

Codat suggests a category for each account automatically, but you can [change it](/docs/assess-categorizing-accounts-ecommerce-lending) to a more suitable one.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetAccountsForEnhancedBalanceSheetResponse } from "@codat/assess/dist/sdk/models/operations";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getAccountsForEnhancedBalanceSheet({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  numberOfPeriods: 282807,
  reportDate: "29-09-2020",
}).then((res: GetAccountsForEnhancedBalanceSheetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getAccountsForEnhancedProfitAndLoss

The Enhanced Profit and Loss Accounts endpoint returns a list of categorized accounts that appear on a company’s Profit and Loss. It also includes a balance per the financial statement date.

Codat suggests a category for each account automatically, but you can [change it](/docs/assess-categorizing-accounts-ecommerce-lending) to a more suitable one.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetAccountsForEnhancedProfitAndLossResponse } from "@codat/assess/dist/sdk/models/operations";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getAccountsForEnhancedProfitAndLoss({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  numberOfPeriods: 979587,
  reportDate: "29-09-2020",
}).then((res: GetAccountsForEnhancedProfitAndLossResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCommerceCustomerRetentionMetrics

Gets the customer retention metrics for a specific company connection, over one or more periods of time.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetCommerceCustomerRetentionMetricsResponse } from "@codat/assess/dist/sdk/models/operations";
import { PeriodUnit } from "@codat/assess/dist/sdk/models/shared";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getCommerceCustomerRetentionMetrics({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 120196,
  periodLength: 359444,
  periodUnit: PeriodUnit.Week,
  reportDate: "29-09-2020",
}).then((res: GetCommerceCustomerRetentionMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCommerceLifetimeValueMetrics

Gets the lifetime value metric for a specific company connection, over one or more periods of time.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetCommerceLifetimeValueMetricsResponse } from "@codat/assess/dist/sdk/models/operations";
import { PeriodUnit } from "@codat/assess/dist/sdk/models/shared";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getCommerceLifetimeValueMetrics({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 480894,
  periodLength: 118727,
  periodUnit: PeriodUnit.Month,
  reportDate: "29-09-2020",
}).then((res: GetCommerceLifetimeValueMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCommerceOrdersMetrics

Gets the order information for a specific company connection, over one or more periods of time.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetCommerceOrdersMetricsResponse } from "@codat/assess/dist/sdk/models/operations";
import { PeriodUnit } from "@codat/assess/dist/sdk/models/shared";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getCommerceOrdersMetrics({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 317983,
  periodLength: 880476,
  periodUnit: PeriodUnit.Week,
  reportDate: "29-09-2020",
}).then((res: GetCommerceOrdersMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCommerceRefundsMetrics

Gets the refunds information for a specific company connection, over one or more periods of time.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetCommerceRefundsMetricsResponse } from "@codat/assess/dist/sdk/models/operations";
import { PeriodUnit } from "@codat/assess/dist/sdk/models/shared";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getCommerceRefundsMetrics({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 918236,
  periodLength: 64147,
  periodUnit: PeriodUnit.Day,
  reportDate: "29-09-2020",
}).then((res: GetCommerceRefundsMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCommerceRevenueMetrics

Get the revenue and revenue growth for a specific company connection, over one or more periods of time.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetCommerceRevenueMetricsResponse } from "@codat/assess/dist/sdk/models/operations";
import { PeriodUnit } from "@codat/assess/dist/sdk/models/shared";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getCommerceRevenueMetrics({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 692472,
  periodLength: 565189,
  periodUnit: PeriodUnit.Month,
  reportDate: "29-09-2020",
}).then((res: GetCommerceRevenueMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## ~~getEnhancedBalanceSheet~~

Gets a fully categorized balance sheet statement for a given company, over one or more period(s).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetEnhancedBalanceSheetResponse } from "@codat/assess/dist/sdk/models/operations";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getEnhancedBalanceSheet({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 865103,
  periodLength: 265389,
  reportDate: "29-09-2020",
}).then((res: GetEnhancedBalanceSheetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getEnhancedCashFlowTransactions

> **Categorization engine**
> 
> The categorization engine uses machine learning and has been fully trained against Plaid and TrueLayer banking data sources. It is not fully trained against the Basiq banking data source.

The Enhanced Cash Flow Transactions endpoint provides a fully categorized list of banking transactions for a company. Accounts and transaction data are obtained from the company's banking data sources.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetEnhancedCashFlowTransactionsResponse } from "@codat/assess/dist/sdk/models/operations";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getEnhancedCashFlowTransactions({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  page: 1,
  pageSize: 100,
  query: "praesentium",
}).then((res: GetEnhancedCashFlowTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## ~~getEnhancedFinancialMetrics~~

Gets all the available financial metrics for a given company, over one or more periods.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetEnhancedFinancialMetricsResponse } from "@codat/assess/dist/sdk/models/operations";
import {
  FinancialMetricErrorsType,
  FinancialMetricErrorType,
  FinancialMetricKey,
  FinancialMetricMetricUnit,
  FinancialMetricPeriodsErrorsType,
  FinancialMetricsPeriodUnit,
} from "@codat/assess/dist/sdk/models/shared";
import { RFCDate } from "@codat/assess/dist/sdk/types";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getEnhancedFinancialMetrics({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  numberOfPeriods: 523248,
  periodLength: 916723,
  reportDate: "29-09-2020",
  showMetricInputs: false,
}).then((res: GetEnhancedFinancialMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getEnhancedInvoicesReport

Gets a list of invoices linked to the corresponding banking transaction

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetEnhancedInvoicesReportResponse } from "@codat/assess/dist/sdk/models/operations";
import { InvoiceStatus } from "@codat/assess/dist/sdk/models/shared";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getEnhancedInvoicesReport({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  page: 1,
  pageSize: 100,
  query: "quasi",
}).then((res: GetEnhancedInvoicesReportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## ~~getEnhancedProfitAndLoss~~

Gets a fully categorized profit and loss statement for a given company, over one or more period(s).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetEnhancedProfitAndLossResponse } from "@codat/assess/dist/sdk/models/operations";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getEnhancedProfitAndLoss({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 921158,
  periodLength: 575947,
  reportDate: "29-09-2020",
}).then((res: GetEnhancedProfitAndLossResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getRecurringRevenueMetrics

Gets key metrics for subscription revenue.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetRecurringRevenueMetricsResponse } from "@codat/assess/dist/sdk/models/operations";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getRecurringRevenueMetrics({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetRecurringRevenueMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## requestRecurringRevenueMetrics

Requests production of key subscription revenue metrics.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { RequestRecurringRevenueMetricsResponse } from "@codat/assess/dist/sdk/models/operations";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.requestRecurringRevenueMetrics({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: RequestRecurringRevenueMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
