# CommerceConfiguration

## Example Usage

```typescript
import { CommerceConfiguration } from "@codat/sync-for-commerce/sdk/models/shared";

let value: CommerceConfiguration = {
  sales: {
    accounts: {
      "key": {
        accountOptions: [
          {
            classification: "Bank Nominal",
          },
        ],
      },
    },
    invoiceStatus: {
      selectedInvoiceStatus: "Submitted",
    },
  },
  payments: {
    accounts: {
      "key": {
        accountOptions: [
          {
            classification: "Bank Nominal",
          },
        ],
      },
    },
  },
  newPayments: {
    accounts: {
      "key": {
        accountOptions: [
          {
            classification: "Bank Nominal",
          },
        ],
      },
    },
  },
  fees: {
    accounts: {
      "key": {
        accountOptions: [
          {
            classification: "Bank Nominal",
          },
        ],
      },
    },
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `countryCode`                                                                             | *string*                                                                                  | :heavy_minus_sign:                                                                        | The country code outlining where the company is based.                                    |
| `mapSettings`                                                                             | [shared.ConfigurationMapSettings](../../../sdk/models/shared/configurationmapsettings.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `sales`                                                                                   | [shared.SalesConfiguration](../../../sdk/models/shared/salesconfiguration.md)             | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `payments`                                                                                | [shared.PaymentsConfiguration](../../../sdk/models/shared/paymentsconfiguration.md)       | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `newPayments`                                                                             | [shared.NewPaymentsConfiguration](../../../sdk/models/shared/newpaymentsconfiguration.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `fees`                                                                                    | [shared.FeesConfiguration](../../../sdk/models/shared/feesconfiguration.md)               | :heavy_minus_sign:                                                                        | N/A                                                                                       |