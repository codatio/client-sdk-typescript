# GetAccountingCreditNoteRequest

## Example Usage

```typescript
import { GetAccountingCreditNoteRequest } from "@codat/lending/sdk/models/operations";

let value: GetAccountingCreditNoteRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  creditNoteId: "<id>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `companyId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a company.     | 8a210b68-6988-11ed-a1eb-0242ac120002 |
| `creditNoteId`                       | *string*                             | :heavy_check_mark:                   | Unique identifier for a credit note. |                                      |