# EnhancedInvoicesReport

The enhanced invoices report takes the key elements of the Invoices report verifying those marked as paid in the accounting software have actually been paid by matching with the bank statement.

## Example Usage

```typescript
import { EnhancedInvoicesReport } from "@codat/lending/sdk/models/shared";

let value: EnhancedInvoicesReport = {
  reportInfo: {},
  reportItems: [
    {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      issueDate: "2022-10-23T00:00:00Z",
      dueDate: "2022-10-23T00:00:00Z",
      currency: "USD",
      payments: [
        {
          date: "2022-10-23T00:00:00Z",
          currency: "USD",
          bankingTransactionRefs: [
            {
              date: "2022-10-23T00:00:00Z",
            },
          ],
        },
      ],
      paidOnDate: "2022-10-23T00:00:00Z",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       | Example                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `reportInfo`                                                                                                                                                                      | [shared.ReportInfo](../../../sdk/models/shared/reportinfo.md)                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                | Report additional information, which is specific to Lending API reports.                                                                                                          | {<br/>"Example 1": {<br/>"value": {<br/>"pageNumber": 0,<br/>"pageSize": 0,<br/>"totalResults": 0,<br/>"reportName": "string",<br/>"companyName": "string",<br/>"generatedDate": "2023-01-26T07:36:40.487Z"<br/>}<br/>}<br/>} |
| `reportItems`                                                                                                                                                                     | [shared.EnhancedInvoiceReportItem](../../../sdk/models/shared/enhancedinvoicereportitem.md)[]                                                                                     | :heavy_minus_sign:                                                                                                                                                                | N/A                                                                                                                                                                               |                                                                                                                                                                                   |