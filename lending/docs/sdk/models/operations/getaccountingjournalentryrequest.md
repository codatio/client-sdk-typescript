# GetAccountingJournalEntryRequest

## Example Usage

```typescript
import { GetAccountingJournalEntryRequest } from "@codat/lending/sdk/models/operations";

let value: GetAccountingJournalEntryRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  journalEntryId: "<value>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `companyId`                            | *string*                               | :heavy_check_mark:                     | Unique identifier for a company.       | 8a210b68-6988-11ed-a1eb-0242ac120002   |
| `journalEntryId`                       | *string*                               | :heavy_check_mark:                     | Unique identifier for a journal entry. |                                        |