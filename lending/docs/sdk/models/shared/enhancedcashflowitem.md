# EnhancedCashFlowItem

## Example Usage

```typescript
import { EnhancedCashFlowItem } from "@codat/lending/sdk/models/shared";

let value: EnhancedCashFlowItem = {
  transactions: [
    {
      date: "2022-10-23T00:00:00Z",
      currency: "USD",
      transactionCategory: {},
      sourceRef: {},
      accountRef: {},
      modifiedDate: "2022-10-23T00:00:00Z",
    },
  ],
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `transactions`                                                                                    | [shared.EnhancedCashFlowTransaction](../../../sdk/models/shared/enhancedcashflowtransaction.md)[] | :heavy_minus_sign:                                                                                | An array of transaction data.                                                                     |