# RecordLineReference

Reference to the purchase order line this line was generated from.

## Example Usage

```typescript
import { RecordLineReference } from "@codat/lending/sdk/models/shared";

let value: RecordLineReference = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | 'id' of the underlying record.                                                    |
| `dataType`                                                                        | [shared.BillLineItemDataType](../../../sdk/models/shared/billlineitemdatatype.md) | :heavy_minus_sign:                                                                | Allowed name of the 'dataType'.                                                   |
| `lineNumber`                                                                      | *string*                                                                          | :heavy_minus_sign:                                                                | Line number of the underlying record.                                             |