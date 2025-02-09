# GetAccountingAgedCreditorsReportRequest

## Example Usage

```typescript
import { GetAccountingAgedCreditorsReportRequest } from "@codat/lending/sdk/models/operations";
import { RFCDate } from "@codat/lending/sdk/types";

let value: GetAccountingAgedCreditorsReportRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  reportDate: new RFCDate("2022-12-31"),
  numberOfPeriods: 12,
  periodLengthDays: 30,
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `companyId`                                 | *string*                                    | :heavy_check_mark:                          | Unique identifier for a company.            | 8a210b68-6988-11ed-a1eb-0242ac120002        |
| `reportDate`                                | [RFCDate](../../../types/rfcdate.md)        | :heavy_minus_sign:                          | Date the report is generated up to.         | 2022-12-31                                  |
| `numberOfPeriods`                           | *number*                                    | :heavy_minus_sign:                          | Number of periods to include in the report. | 12                                          |
| `periodLengthDays`                          | *number*                                    | :heavy_minus_sign:                          | The length of period in days.               | 30                                          |