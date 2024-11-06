# LoanSummary

## Example Usage

```typescript
import { LoanSummary } from "@codat/lending/sdk/models/shared";
import { Decimal } from "@codat/lending/sdk/types";

let value: LoanSummary = {
  reportInfo: {
    reportName: "LoanSummaryReport",
    companyName: "The Coffee shop",
    generatedDate: "2022-10-23T00:00:00Z",
  },
  reportItems: [
    {
      recordRef: {
        id: "string",
        dataConnectionId: "DE34E8E3-089F-4DF4-89E9-F7C43618FCAAA",
        integrationType: "Accounting",
        recordRefType: "accounts",
      },
      description: "string",
      startDate: "2021-01-01",
      totalRepayments: new Decimal("83481.72"),
      balance: new Decimal("42513.18"),
      lender: "Barclays Bank",
    },
  ],
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `reportInfo`                                                                          | [shared.LoanSummaryReportInfo](../../../sdk/models/shared/loansummaryreportinfo.md)   | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `reportItems`                                                                         | [shared.LoanSummaryReportItem](../../../sdk/models/shared/loansummaryreportitem.md)[] | :heavy_minus_sign:                                                                    | Returns a summary of all loan activity for that integration type                      |