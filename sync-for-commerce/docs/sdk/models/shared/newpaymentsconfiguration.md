# NewPaymentsConfiguration

## Example Usage

```typescript
import { NewPaymentsConfiguration } from "@codat/sync-for-commerce/sdk/models/shared";

let value: NewPaymentsConfiguration = {
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
| `syncPayments`                                                                                    | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | Boolean indicator for syncing payments.                                                           |
| `accounts`                                                                                        | Record<string, [shared.AccountConfiguration](../../../sdk/models/shared/accountconfiguration.md)> | :heavy_minus_sign:                                                                                | N/A                                                                                               |