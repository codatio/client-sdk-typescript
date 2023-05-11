# reports

## Overview

Data integrity is important

### Available Operations

* [getAccountsForEnhancedBalanceSheet](#getaccountsforenhancedbalancesheet) - Enhanced Balance Sheet Accounts
* [getAccountsForEnhancedProfitAndLoss](#getaccountsforenhancedprofitandloss) - Enhanced Profit and Loss Accounts
* [getCommerceCustomerRetentionMetrics](#getcommercecustomerretentionmetrics) - Get the customer retention metrics for a specific company.
* [getCommerceLifetimeValueMetrics](#getcommercelifetimevaluemetrics) - Get the lifetime value metric for a specific company.
* [getCommerceOrdersMetrics](#getcommerceordersmetrics) - Get order information for a specific company
* [getCommerceRefundsMetrics](#getcommercerefundsmetrics) - Get the refunds information for a specific company
* [getCommerceRevenueMetrics](#getcommercerevenuemetrics) - Commerce Revenue Metrics
* [~~getEnhancedBalanceSheet~~](#getenhancedbalancesheet) - Enhanced Balance Sheet :warning: **Deprecated**
* [getEnhancedCashFlowTransactions](#getenhancedcashflowtransactions) - Get enhanced cash flow report
* [~~getEnhancedFinancialMetrics~~](#getenhancedfinancialmetrics) - List financial metrics :warning: **Deprecated**
* [getEnhancedInvoicesReport](#getenhancedinvoicesreport) - Enhanced Invoices Report
* [~~getEnhancedProfitAndLoss~~](#getenhancedprofitandloss) - Enhanced Profit and Loss :warning: **Deprecated**
* [getRecurringRevenueMetrics](#getrecurringrevenuemetrics) - Get key metrics for subscription revenue
* [requestRecurringRevenueMetrics](#requestrecurringrevenuemetrics) - Request production of key subscription revenue metrics

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
  numberOfPeriods: 979587,
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
  numberOfPeriods: 120196,
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
import { PeriodUnitEnum } from "@codat/assess/dist/sdk/models/shared";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getCommerceCustomerRetentionMetrics({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 359444,
  periodLength: 296140,
  periodUnit: PeriodUnitEnum.Week,
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
import { PeriodUnitEnum } from "@codat/assess/dist/sdk/models/shared";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getCommerceLifetimeValueMetrics({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 118727,
  periodLength: 688661,
  periodUnit: PeriodUnitEnum.Week,
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
import { PeriodUnitEnum } from "@codat/assess/dist/sdk/models/shared";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getCommerceOrdersMetrics({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 880476,
  periodLength: 414263,
  periodUnit: PeriodUnitEnum.Year,
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
import { PeriodUnitEnum } from "@codat/assess/dist/sdk/models/shared";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getCommerceRefundsMetrics({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 64147,
  periodLength: 216822,
  periodUnit: PeriodUnitEnum.Month,
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
import { PeriodUnitEnum } from "@codat/assess/dist/sdk/models/shared";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getCommerceRevenueMetrics({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 565189,
  periodLength: 566602,
  periodUnit: PeriodUnitEnum.Year,
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
  numberOfPeriods: 265389,
  periodLength: 508969,
  reportDate: "29-09-2020",
}).then((res: GetEnhancedBalanceSheetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getEnhancedCashFlowTransactions

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
  query: "rem",
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
  FinancialMetricErrorsTypeEnum,
  FinancialMetricErrorTypeEnum,
  FinancialMetricKeyEnum,
  FinancialMetricMetricUnitEnum,
  FinancialMetricPeriodsErrorsTypeEnum,
  FinancialMetricsPeriodUnitEnum,
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
  numberOfPeriods: 916723,
  periodLength: 93940,
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
import { InvoiceStatusEnum } from "@codat/assess/dist/sdk/models/shared";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getEnhancedInvoicesReport({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  page: 1,
  pageSize: 100,
  query: "repudiandae",
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
  numberOfPeriods: 575947,
  periodLength: 83112,
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

Request production of key subscription revenue metrics.

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
