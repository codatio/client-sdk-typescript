# TransactionCategory

## Example Usage

```typescript
import { TransactionCategory } from "@codat/lending/sdk/models/shared";

let value: TransactionCategory = {};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `confidence`                                                                                                                                     | *Decimal*                                                                                                                                        | :heavy_minus_sign:                                                                                                                               | Returns the aggregate confidence of the suggested category for the transaction. The value is between 0 and 100.                                  |
| `confidences`                                                                                                                                    | *Decimal*[]                                                                                                                                      | :heavy_minus_sign:                                                                                                                               | An ordered array of category level confidences where each element is the confidence of the corresponding item in the `levels` array.             |
| `levels`                                                                                                                                         | *string*[]                                                                                                                                       | :heavy_minus_sign:                                                                                                                               | The suggested category is an ordered array of category levels where each element (or level) is a subcategory of the previous element (or level). |