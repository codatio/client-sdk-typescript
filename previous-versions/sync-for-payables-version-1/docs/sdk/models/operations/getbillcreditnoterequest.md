# GetBillCreditNoteRequest

## Example Usage

```typescript
import { GetBillCreditNoteRequest } from "@codat/sync-for-payables-version-1/sdk/models/operations";

let value: GetBillCreditNoteRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  billCreditNoteId: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `companyId`                               | *string*                                  | :heavy_check_mark:                        | Unique identifier for a company.          | 8a210b68-6988-11ed-a1eb-0242ac120002      |
| `billCreditNoteId`                        | *string*                                  | :heavy_check_mark:                        | Unique identifier for a bill credit note. |                                           |