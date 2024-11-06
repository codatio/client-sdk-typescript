# ItemRef

## Example Usage

```typescript
import { ItemRef } from "@codat/lending/sdk/models/shared";

let value: ItemRef = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_minus_sign:                                           | The id of the object, e.g. the Journal entry.                |
| `dataConnectionId`                                           | *string*                                                     | :heavy_minus_sign:                                           | The data connection id being referenced.                     |
| `type`                                                       | *string*                                                     | :heavy_minus_sign:                                           | The data type the loan transaction entry was extracted from. |