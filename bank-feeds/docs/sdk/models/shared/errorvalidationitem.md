# ErrorValidationItem

## Example Usage

```typescript
import { ErrorValidationItem } from "@codat/bank-feeds/sdk/models/shared";

let value: ErrorValidationItem = {};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `itemId`                                     | *string*                                     | :heavy_minus_sign:                           | Unique identifier for a validation item.     |
| `message`                                    | *string*                                     | :heavy_minus_sign:                           | A message outlining validation item's issue. |
| `validatorName`                              | *string*                                     | :heavy_minus_sign:                           | Name of validator.                           |