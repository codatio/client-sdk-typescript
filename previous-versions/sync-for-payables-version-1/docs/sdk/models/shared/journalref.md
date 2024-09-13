# JournalRef

Links journal entries to the relevant journal in accounting integrations that use multi-book accounting (multiple journals).

## Example Usage

```typescript
import { JournalRef } from "@codat/sync-for-payables-version-1/sdk/models/shared";

let value: JournalRef = {
  id: "<id>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `id`                            | *string*                        | :heavy_check_mark:              | GUID of the underlying journal. |
| `name`                          | *string*                        | :heavy_minus_sign:              | Name of journal                 |