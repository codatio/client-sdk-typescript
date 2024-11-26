# FeesConfiguration

## Example Usage

```typescript
import { FeesConfiguration } from "@codat/sync-for-commerce/sdk/models/shared";

let value: FeesConfiguration = {
  accounts: {
    "key": {
      accountOptions: [
        {
          classification: "Bank Nominal",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `feesSupplier`                                                                                    | [shared.FeesSupplier](../../../sdk/models/shared/feessupplier.md)                                 | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `syncFees`                                                                                        | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | Boolean indicator to enable syncing fees.                                                         |
| `accounts`                                                                                        | Record<string, [shared.AccountConfiguration](../../../sdk/models/shared/accountconfiguration.md)> | :heavy_minus_sign:                                                                                | N/A                                                                                               |