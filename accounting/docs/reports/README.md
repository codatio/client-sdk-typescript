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
import { GetAgedCreditorsReportRequest, GetAgedCreditorsReportResponse } from "@codat/accounting/dist/sdk/models/operations";
import { RFCDate } from "@codat/accounting/dist/sdk/types";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetAgedCreditorsReportRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  numberOfPeriods: 12,
  periodLengthDays: 30,
  reportDate: new RFCDate("2022-12-31"),
};

sdk.reports.getAgedCreditorsReport(req).then((res: GetAgedCreditorsReportResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getAgedDebtorsReport

Returns aged debtors report for company that shows the total outstanding balance due from customers to the business over time.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetAgedDebtorsReportRequest, GetAgedDebtorsReportResponse } from "@codat/accounting/dist/sdk/models/operations";
import { RFCDate } from "@codat/accounting/dist/sdk/types";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetAgedDebtorsReportRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  numberOfPeriods: 12,
  periodLengthDays: 30,
  reportDate: new RFCDate("2022-12-31"),
};

sdk.reports.getAgedDebtorsReport(req).then((res: GetAgedDebtorsReportResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## isAgedCreditorsReportAvailable

Indicates whether the aged creditor report is available for the company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { IsAgedCreditorsReportAvailableRequest, IsAgedCreditorsReportAvailableResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: IsAgedCreditorsReportAvailableRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.reports.isAgedCreditorsReportAvailable(req).then((res: IsAgedCreditorsReportAvailableResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## isAgedDebtorReportAvailable

Indicates whether the aged debtor report is available for the company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { IsAgedDebtorReportAvailableRequest, IsAgedDebtorReportAvailableResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: IsAgedDebtorReportAvailableRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.reports.isAgedDebtorReportAvailable(req).then((res: IsAgedDebtorReportAvailableResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
