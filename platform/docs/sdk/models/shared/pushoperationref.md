# PushOperationRef

## Example Usage

```typescript
import { PushOperationRef } from "@codat/platform/sdk/models/shared";

let value: PushOperationRef = {
  dataType: "invoices",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `id`                                                      | *string*                                                  | :heavy_minus_sign:                                        | Unique identifier for a push operation.                   |                                                           |
| `dataType`                                                | [shared.DataType](../../../sdk/models/shared/datatype.md) | :heavy_minus_sign:                                        | Available data types                                      | invoices                                                  |