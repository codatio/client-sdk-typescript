# PaymentsConfiguration

## Example Usage

```typescript
import { PaymentsConfiguration } from "@codat/sync-for-commerce/sdk/models/shared";

let value: PaymentsConfiguration = {
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
| `syncPayments`                                                                                    | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | Boolean indicator for syncing sales.                                                              |
| `accounts`                                                                                        | Record<string, [shared.AccountConfiguration](../../../sdk/models/shared/accountconfiguration.md)> | :heavy_minus_sign:                                                                                | N/A                                                                                               |