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
* [getEnhancedBalanceSheet](#getenhancedbalancesheet) - Enhanced Balance Sheet
* [getEnhancedCashFlowTransactions](#getenhancedcashflowtransactions) - Get enhanced cash flow report
* [getEnhancedFinancialMetrics](#getenhancedfinancialmetrics) - List financial metrics
* [getEnhancedInvoicesReport](#getenhancedinvoicesreport) - Enhanced Invoices Report
* [getEnhancedProfitAndLoss](#getenhancedprofitandloss) - Enhanced Profit and Loss
* [getRecurringRevenueMetrics](#getrecurringrevenuemetrics) - Get key metrics for subscription revenue
* [requestRecurringRevenueMetrics](#requestrecurringrevenuemetrics) - Request production of key subscription revenue metrics

## getAccountsForEnhancedBalanceSheet

The Enhanced Balance Sheet Accounts endpoint returns a list of categorized accounts that appear on a company’s Balance Sheet along with a balance per financial statement date.

Codat suggests a category for each account automatically, but you can [change it](/docs/assess-categorizing-accounts-ecommerce-lending) to a more suitable one.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import {
  GetAccountsForEnhancedBalanceSheetRequest,
  GetAccountsForEnhancedBalanceSheetResponse,
} from "@codat/assess/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetAccountsForEnhancedBalanceSheetRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  numberOfPeriods: 979587,
  reportDate: "29-09-2020",
};

sdk.reports.getAccountsForEnhancedBalanceSheet(req).then((res: GetAccountsForEnhancedBalanceSheetResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import {
  GetAccountsForEnhancedProfitAndLossRequest,
  GetAccountsForEnhancedProfitAndLossResponse,
} from "@codat/assess/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetAccountsForEnhancedProfitAndLossRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  numberOfPeriods: 120196,
  reportDate: "29-09-2020",
};

sdk.reports.getAccountsForEnhancedProfitAndLoss(req).then((res: GetAccountsForEnhancedProfitAndLossResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCommerceCustomerRetentionMetrics

Gets the customer retention metrics for a specific company connection, over one or more periods of time.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import {
  GetCommerceCustomerRetentionMetricsRequest,
  GetCommerceCustomerRetentionMetricsResponse,
} from "@codat/assess/dist/sdk/models/operations";
import { PeriodUnitEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCommerceCustomerRetentionMetricsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 359444,
  periodLength: 296140,
  periodUnit: PeriodUnitEnum.Week,
  reportDate: "29-09-2020",
};

sdk.reports.getCommerceCustomerRetentionMetrics(req).then((res: GetCommerceCustomerRetentionMetricsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCommerceLifetimeValueMetrics

Gets the lifetime value metric for a specific company connection, over one or more periods of time.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetCommerceLifetimeValueMetricsRequest, GetCommerceLifetimeValueMetricsResponse } from "@codat/assess/dist/sdk/models/operations";
import { PeriodUnitEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCommerceLifetimeValueMetricsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 118727,
  periodLength: 688661,
  periodUnit: PeriodUnitEnum.Week,
  reportDate: "29-09-2020",
};

sdk.reports.getCommerceLifetimeValueMetrics(req).then((res: GetCommerceLifetimeValueMetricsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCommerceOrdersMetrics

Gets the order information for a specific company connection, over one or more periods of time.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetCommerceOrdersMetricsRequest, GetCommerceOrdersMetricsResponse } from "@codat/assess/dist/sdk/models/operations";
import { PeriodUnitEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCommerceOrdersMetricsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 880476,
  periodLength: 414263,
  periodUnit: PeriodUnitEnum.Year,
  reportDate: "29-09-2020",
};

sdk.reports.getCommerceOrdersMetrics(req).then((res: GetCommerceOrdersMetricsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCommerceRefundsMetrics

Gets the refunds information for a specific company connection, over one or more periods of time.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetCommerceRefundsMetricsRequest, GetCommerceRefundsMetricsResponse } from "@codat/assess/dist/sdk/models/operations";
import { PeriodUnitEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCommerceRefundsMetricsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 64147,
  periodLength: 216822,
  periodUnit: PeriodUnitEnum.Month,
  reportDate: "29-09-2020",
};

sdk.reports.getCommerceRefundsMetrics(req).then((res: GetCommerceRefundsMetricsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCommerceRevenueMetrics

Get the revenue and revenue growth for a specific company connection, over one or more periods of time.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetCommerceRevenueMetricsRequest, GetCommerceRevenueMetricsResponse } from "@codat/assess/dist/sdk/models/operations";
import { PeriodUnitEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCommerceRevenueMetricsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 565189,
  periodLength: 566602,
  periodUnit: PeriodUnitEnum.Year,
  reportDate: "29-09-2020",
};

sdk.reports.getCommerceRevenueMetrics(req).then((res: GetCommerceRevenueMetricsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getEnhancedBalanceSheet

Gets a fully categorized balance sheet statement for a given company, over one or more period(s).

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetEnhancedBalanceSheetRequest, GetEnhancedBalanceSheetResponse } from "@codat/assess/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetEnhancedBalanceSheetRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 265389,
  periodLength: 508969,
  reportDate: "29-09-2020",
};

sdk.reports.getEnhancedBalanceSheet(req).then((res: GetEnhancedBalanceSheetResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getEnhancedCashFlowTransactions

The Enhanced Cash Flow Transactions endpoint provides a fully categorized list of banking transactions for a company. Accounts and transaction data are obtained from the company's banking data sources.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetEnhancedCashFlowTransactionsRequest, GetEnhancedCashFlowTransactionsResponse } from "@codat/assess/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetEnhancedCashFlowTransactionsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  page: 1,
  pageSize: 100,
  query: "rem",
};

sdk.reports.getEnhancedCashFlowTransactions(req).then((res: GetEnhancedCashFlowTransactionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getEnhancedFinancialMetrics

Gets all the available financial metrics for a given company, over one or more periods.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetEnhancedFinancialMetricsRequest, GetEnhancedFinancialMetricsResponse } from "@codat/assess/dist/sdk/models/operations";
import {
  FinancialMetricErrorsTypeEnum,
  FinancialMetricErrorTypeEnum,
  FinancialMetricKeyEnum,
  FinancialMetricMetricUnitEnum,
  FinancialMetricPeriodsErrorsTypeEnum,
  FinancialMetricsPeriodUnitEnum,
} from "@codat/assess/dist/sdk/models/shared";
import { RFCDate } from "@codat/assess/dist/sdk/types";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetEnhancedFinancialMetricsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  numberOfPeriods: 916723,
  periodLength: 93940,
  reportDate: "29-09-2020",
  showMetricInputs: false,
};

sdk.reports.getEnhancedFinancialMetrics(req).then((res: GetEnhancedFinancialMetricsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getEnhancedInvoicesReport

Gets a list of invoices linked to the corresponding banking transaction

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetEnhancedInvoicesReportRequest, GetEnhancedInvoicesReportResponse } from "@codat/assess/dist/sdk/models/operations";
import { InvoiceStatusEnum, PaymentLinkTypeEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetEnhancedInvoicesReportRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  page: 1,
  pageSize: 100,
  query: "repudiandae",
};

sdk.reports.getEnhancedInvoicesReport(req).then((res: GetEnhancedInvoicesReportResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getEnhancedProfitAndLoss

Gets a fully categorized profit and loss statement for a given company, over one or more period(s).

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetEnhancedProfitAndLossRequest, GetEnhancedProfitAndLossResponse } from "@codat/assess/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetEnhancedProfitAndLossRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 575947,
  periodLength: 83112,
  reportDate: "29-09-2020",
};

sdk.reports.getEnhancedProfitAndLoss(req).then((res: GetEnhancedProfitAndLossResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getRecurringRevenueMetrics

Gets key metrics for subscription revenue.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetRecurringRevenueMetricsRequest, GetRecurringRevenueMetricsResponse } from "@codat/assess/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetRecurringRevenueMetricsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.reports.getRecurringRevenueMetrics(req).then((res: GetRecurringRevenueMetricsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## requestRecurringRevenueMetrics

Request production of key subscription revenue metrics.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { RequestRecurringRevenueMetricsRequest, RequestRecurringRevenueMetricsResponse } from "@codat/assess/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: RequestRecurringRevenueMetricsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.reports.requestRecurringRevenueMetrics(req).then((res: RequestRecurringRevenueMetricsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
