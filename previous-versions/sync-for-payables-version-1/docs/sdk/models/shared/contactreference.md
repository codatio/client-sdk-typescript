# ContactReference

## Example Usage

```typescript
import { ContactReference } from "@codat/sync-for-payables-version-1/sdk/models/shared";

let value: ContactReference = {
  id: "<id>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `id`                                                                            | *string*                                                                        | :heavy_check_mark:                                                              | Unique identifier for a customer or supplier.                                   |
| `dataType`                                                                      | [shared.JournalLineDataType](../../../sdk/models/shared/journallinedatatype.md) | :heavy_minus_sign:                                                              | Allowed name of the 'dataType'.                                                 |