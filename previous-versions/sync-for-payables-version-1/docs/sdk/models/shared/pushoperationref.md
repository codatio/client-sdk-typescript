# PushOperationRef

## Example Usage

```typescript
import { PushOperationRef } from "@codat/sync-for-payables-version-1/sdk/models/shared";

let value: PushOperationRef = {
  dataType: "invoices",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `id`                                                                        | *string*                                                                    | :heavy_minus_sign:                                                          | Unique identifier for a push operation.                                     |                                                                             |
| `dataType`                                                                  | [shared.PropertieDataType](../../../sdk/models/shared/propertiedatatype.md) | :heavy_minus_sign:                                                          | Available data types                                                        | invoices                                                                    |