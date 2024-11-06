# TransactionCategoryRef

An object of bank transaction category reference data.

## Example Usage

```typescript
import { TransactionCategoryRef } from "@codat/lending/sdk/models/shared";

let value: TransactionCategoryRef = {
  id: "<id>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | The unique category reference id for the bank transaction. |
| `name`                                                     | *string*                                                   | :heavy_minus_sign:                                         | The category name reference for the bank transaction.      |