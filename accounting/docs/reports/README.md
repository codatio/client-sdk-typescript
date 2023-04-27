# reports

## Overview

Reports

### Available Operations

* [getAgedCreditorsReport](#getagedcreditorsreport) - Aged creditors report
* [getAgedDebtorsReport](#getageddebtorsreport) - Aged debtors report
* [isAgedCreditorsReportAvailable](#isagedcreditorsreportavailable) - Aged creditors report available
* [isAgedDebtorReportAvailable](#isageddebtorreportavailable) - Aged debtors report available

## getAgedCreditorsReport

Returns aged creditors report for company that shows the total balance owed by a business to its suppliers over time.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetAgedCreditorsReportResponse } from "@codat/accounting/dist/sdk/models/operations";
import { RFCDate } from "@codat/accounting/dist/sdk/types";
import { AxiosError } from "axios";

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
}).then((res: GetAgedCreditorsReportResponse | AxiosError) => {
  if (res instanceof GetAgedCreditorsReportResponse && res.statusCode == 200) {
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
import { AxiosError } from "axios";

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
}).then((res: GetAgedDebtorsReportResponse | AxiosError) => {
  if (res instanceof GetAgedDebtorsReportResponse && res.statusCode == 200) {
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
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.isAgedCreditorsReportAvailable({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: IsAgedCreditorsReportAvailableResponse | AxiosError) => {
  if (res instanceof IsAgedCreditorsReportAvailableResponse && res.statusCode == 200) {
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
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.reports.isAgedDebtorReportAvailable({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: IsAgedDebtorReportAvailableResponse | AxiosError) => {
  if (res instanceof IsAgedDebtorReportAvailableResponse && res.statusCode == 200) {
    // handle response
  }
});
```
