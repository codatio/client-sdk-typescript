# GetAccountingBillCreditNoteRequest

## Example Usage

```typescript
import { GetAccountingBillCreditNoteRequest } from "@codat/lending/sdk/models/operations";

let value: GetAccountingBillCreditNoteRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  billCreditNoteId: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `companyId`                               | *string*                                  | :heavy_check_mark:                        | Unique identifier for a company.          | 8a210b68-6988-11ed-a1eb-0242ac120002      |
| `billCreditNoteId`                        | *string*                                  | :heavy_check_mark:                        | Unique identifier for a bill credit note. |                                           |