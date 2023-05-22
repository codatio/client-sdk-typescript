# reports

## Overview

Reports

### Available Operations

* [getAgedCreditorsReport](#getagedcreditorsreport) - Aged creditors report
* [getAgedDebtorsReport](#getageddebtorsreport) - Aged debtors report
* [getBalanceSheet](#getbalancesheet) - Get balance sheet
* [getCashFlowStatement](#getcashflowstatement) - Get cash flow statement
* [getProfitAndLoss](#getprofitandloss) - Get profit and loss
* [isAgedCreditorsReportAvailable](#isagedcreditorsreportavailable) - Aged creditors report available
* [isAgedDebtorReportAvailable](#isageddebtorreportavailable) - Aged debtors report available

## getAgedCreditorsReport

Returns aged creditors report for company that shows the total balance owed by a business to its suppliers over time.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetAgedCreditorsReportResponse } from "@codat/accounting/dist/sdk/models/operations";
import { RFCDate } from "@codat/accounting/dist/sdk/types";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getAgedCreditorsReport({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  numberOfPeriods: 12,
  periodLengthDays: 30,
  reportDate: new RFCDate("2022-12-31"),
}).then((res: GetAgedCreditorsReportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getAgedDebtorsReport

Returns aged debtors report for company that shows the total outstanding balance due from customers to the business over time.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetAgedDebtorsReportResponse } from "@codat/accounting/dist/sdk/models/operations";
import { RFCDate } from "@codat/accounting/dist/sdk/types";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getAgedDebtorsReport({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  numberOfPeriods: 12,
  periodLengthDays: 30,
  reportDate: new RFCDate("2022-12-31"),
}).then((res: GetAgedDebtorsReportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getBalanceSheet

Gets the latest balance sheet for a company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetBalanceSheetResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getBalanceSheet({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  periodLength: 4,
  periodsToCompare: 20,
  startMonth: "ducimus",
}).then((res: GetBalanceSheetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCashFlowStatement

Gets the latest cash flow statement for a company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCashFlowStatementResponse } from "@codat/accounting/dist/sdk/models/operations";
import { ReportBasis, ReportInput } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getCashFlowStatement({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  periodLength: 4,
  periodsToCompare: 20,
  startMonth: "nemo",
}).then((res: GetCashFlowStatementResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getProfitAndLoss

Gets the latest profit and loss for a company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetProfitAndLossResponse } from "@codat/accounting/dist/sdk/models/operations";
import { ReportBasis } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.getProfitAndLoss({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  periodLength: 4,
  periodsToCompare: 20,
  startMonth: "illo",
}).then((res: GetProfitAndLossResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## isAgedCreditorsReportAvailable

Indicates whether the aged creditor report is available for the company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { IsAgedCreditorsReportAvailableResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.isAgedCreditorsReportAvailable({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: IsAgedCreditorsReportAvailableResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## isAgedDebtorReportAvailable

Indicates whether the aged debtor report is available for the company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { IsAgedDebtorReportAvailableResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.isAgedDebtorReportAvailable({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: IsAgedDebtorReportAvailableResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
