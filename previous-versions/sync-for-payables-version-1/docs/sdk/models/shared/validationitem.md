# ValidationItem

## Example Usage

```typescript
import { ValidationItem } from "@codat/sync-for-payables-version-1/sdk/models/shared";

let value: ValidationItem = {};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `itemId`                                     | *string*                                     | :heavy_minus_sign:                           | Unique identifier for a validation item.     |
| `message`                                    | *string*                                     | :heavy_minus_sign:                           | A message outlining validation item's issue. |
| `validatorName`                              | *string*                                     | :heavy_minus_sign:                           | Name of validator.                           |