# JournalEntryRecordRef

Links a journal entry to the underlying record that created it.

## Example Usage

```typescript
import { JournalEntryRecordRef } from "@codat/lending/sdk/models/shared";

let value: JournalEntryRecordRef = {
  dataType: "transfers",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`                                                                                                | *string*                                                                                            | :heavy_minus_sign:                                                                                  | 'id' of the underlying record or data type.                                                         |                                                                                                     |
| `dataType`                                                                                          | [shared.JournalEntryRecordRefDataType](../../../sdk/models/shared/journalentryrecordrefdatatype.md) | :heavy_minus_sign:                                                                                  | Name of underlying data type.                                                                       | transfers                                                                                           |