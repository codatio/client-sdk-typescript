# financials

## Overview

Financials

### Available Operations

* [getBalanceSheet](#getbalancesheet) - Get balance sheet
* [getCashFlowStatement](#getcashflowstatement) - Get cash flow statement
* [getProfitAndLoss](#getprofitandloss) - Get profit and loss

## getBalanceSheet

Gets the latest balance sheet for a company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetBalanceSheetResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.financials.getBalanceSheet({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  periodLength: 181836,
  periodsToCompare: 754041,
  startMonth: "perspiciatis",
}).then((res: GetBalanceSheetResponse | AxiosError) => {
  if (res instanceof GetBalanceSheetResponse && res.statusCode == 200) {
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
import { ReportBasisEnum, ReportInputEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.financials.getCashFlowStatement({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  periodLength: 431723,
  periodsToCompare: 576232,
  startMonth: "eligendi",
}).then((res: GetCashFlowStatementResponse | AxiosError) => {
  if (res instanceof GetCashFlowStatementResponse && res.statusCode == 200) {
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
import { ReportBasisEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.financials.getProfitAndLoss({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  periodLength: 276507,
  periodsToCompare: 790080,
  startMonth: "quod",
}).then((res: GetProfitAndLossResponse | AxiosError) => {
  if (res instanceof GetProfitAndLossResponse && res.statusCode == 200) {
    // handle response
  }
});
```
