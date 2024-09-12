# EnhancedFinancialReport

## Example Usage

```typescript
import { EnhancedFinancialReport } from "@codat/lending/sdk/models/shared";
import { Decimal } from "@codat/lending/sdk/types";

let value: EnhancedFinancialReport = {
  reportInfo: {
    currency: "GBP",
    reportName: "EnhancedProfitAndLossAccounts",
    companyName: "ABC LTD",
    generatedDate: "2022-01-01",
  },
  reportItems: [
    {
      date: "2022-01-01",
      balance: new Decimal("70"),
      accountName: "Sales UK",
      accountId: "13931cbf-ea06-4d6e-9538-a8457fa66011",
      accountCategory: {
        status: "Suggested",
        levels: [
          {
            levelName: "Income",
            confidence: new Decimal("0.95"),
          },
          {
            levelName: "Revenue",
            confidence: new Decimal("0.9"),
          },
        ],
      },
    },
    {
      date: "2022-01-01",
      balance: new Decimal("30"),
      accountName: "Sales US",
      accountId: "13931cbf-ea06-4d6e-9538-a8457fa66011",
      accountCategory: {
        status: "Suggested",
        levels: [
          {
            levelName: "Income",
            confidence: new Decimal("0.95"),
          },
          {
            levelName: "Revenue",
            confidence: new Decimal("0.9"),
          },
        ],
      },
    },
    {
      date: "2022-01-01",
      balance: new Decimal("70"),
      accountName: "Amazon",
      accountId: "13931cbf-ea06-4d6e-9538-a8457fa66011",
      accountCategory: {
        status: "Suggested",
        levels: [
          {
            levelName: "Income",
            confidence: new Decimal("0.95"),
          },
          {
            levelName: "Revenue",
            confidence: new Decimal("0.95"),
          },
          {
            levelName: "Online",
            confidence: new Decimal("0.8"),
          },
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `reportInfo`                                                                  | [shared.EnhancedReportInfo](../../../sdk/models/shared/enhancedreportinfo.md) | :heavy_minus_sign:                                                            | N/A                                                                           |
| `reportItems`                                                                 | [shared.ReportItem](../../../sdk/models/shared/reportitem.md)[]               | :heavy_minus_sign:                                                            | An array of report items.                                                     |