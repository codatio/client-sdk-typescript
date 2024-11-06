# GetAccountingBillCreditNoteRequest

## Example Usage

```typescript
import { GetAccountingBillCreditNoteRequest } from "@codat/lending/sdk/models/operations";

let value: GetAccountingBillCreditNoteRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  billCreditNoteId: "7110701885",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `companyId`                               | *string*                                  | :heavy_check_mark:                        | Unique identifier for a company.          | 8a210b68-6988-11ed-a1eb-0242ac120002      |
| `billCreditNoteId`                        | *string*                                  | :heavy_check_mark:                        | Unique identifier for a bill credit note. | 13d946f0-c5d5-42bc-b092-97ece17923ab      |