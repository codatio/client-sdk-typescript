# UpdateBillCreditNoteResponseRecordReference

Links the current record to the underlying record or data type that created it. 

For example, if a journal entry is generated based on an invoice, this property allows you to connect the journal entry to the underlying invoice in our data model. 

## Example Usage

```typescript
import { UpdateBillCreditNoteResponseRecordReference } from "@codat/sync-for-payables-version-1/sdk/models/shared";

let value: UpdateBillCreditNoteResponseRecordReference = {
  dataType: "journalEntry",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `id`                                        | *string*                                    | :heavy_minus_sign:                          | 'id' of the underlying record or data type. |                                             |
| `dataType`                                  | *string*                                    | :heavy_minus_sign:                          | Allowed name of the 'dataType'.             | journalEntry                                |