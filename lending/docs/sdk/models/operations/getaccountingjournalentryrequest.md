# GetAccountingJournalEntryRequest

## Example Usage

```typescript
import { GetAccountingJournalEntryRequest } from "@codat/lending/sdk/models/operations";

let value: GetAccountingJournalEntryRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  journalEntryId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `companyId`                            | *string*                               | :heavy_check_mark:                     | Unique identifier for a company.       | 8a210b68-6988-11ed-a1eb-0242ac120002   |
| `journalEntryId`                       | *string*                               | :heavy_check_mark:                     | Unique identifier for a journal entry. | 13d946f0-c5d5-42bc-b092-97ece17923ab   |