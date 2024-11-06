# LoanTransactions

## Example Usage

```typescript
import { LoanTransactions } from "@codat/lending/sdk/models/shared";
import { Decimal } from "@codat/lending/sdk/types";

let value: LoanTransactions = {
  reportInfo: {
    pageNumber: 1,
    pageSize: 1000,
    totalResults: 1,
    reportName: "AccountingLoanTransactions",
    companyName: "Supermarket store",
    generatedDate: "2022-10-23T00:00:00Z",
  },
  reportItems: [
    {
      loanRef: {
        id: "332",
        dataConnectionId: "ecd2d6be-5194-40a1-838f-5577a4881aaa",
        type: "chartOfAccount",
      },
      itemRef: {
        id: "755488",
        dataConnectionId: "ecd2d6be-5194-40a1-838f-5577a4881aaa",
        type: "journalEntry",
      },
      date: "2020-08-02",
      amount: new Decimal("-455"),
      lender: "Barclays Bank",
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `reportInfo`                                                                                                               | [shared.LoanTransactionsReportInfo](../../../sdk/models/shared/loantransactionsreportinfo.md)                              | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `reportItems`                                                                                                              | [shared.ReportItems](../../../sdk/models/shared/reportitems.md)[]                                                          | :heavy_minus_sign:                                                                                                         | Contains object of reporting properties. The loan ref will reference a different object depending on the integration type. |