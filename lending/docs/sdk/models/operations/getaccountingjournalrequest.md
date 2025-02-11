# GetAccountingJournalRequest

## Example Usage

```typescript
import { GetAccountingJournalRequest } from "@codat/lending/sdk/models/operations";

let value: GetAccountingJournalRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  journalId: "<id>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `companyId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a company.     | 8a210b68-6988-11ed-a1eb-0242ac120002 |
| `journalId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a journal.     |                                      |