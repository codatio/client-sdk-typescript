# SalesConfiguration

## Example Usage

```typescript
import { SalesConfiguration } from "@codat/sync-for-commerce/sdk/models/shared";

let value: SalesConfiguration = {
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
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `syncSales`                                                                                       | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | Boolean indicator for syncing sales.                                                              |
| `accounts`                                                                                        | Record<string, [shared.AccountConfiguration](../../../sdk/models/shared/accountconfiguration.md)> | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `invoiceStatus`                                                                                   | [shared.InvoiceStatus](../../../sdk/models/shared/invoicestatus.md)                               | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `salesCustomer`                                                                                   | [shared.SalesCustomer](../../../sdk/models/shared/salescustomer.md)                               | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `taxRates`                                                                                        | Record<string, [shared.TaxRateAmount](../../../sdk/models/shared/taxrateamount.md)>               | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `newTaxRates`                                                                                     | [shared.NewTaxRates](../../../sdk/models/shared/newtaxrates.md)                                   | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `grouping`                                                                                        | [shared.Grouping](../../../sdk/models/shared/grouping.md)                                         | :heavy_minus_sign:                                                                                | N/A                                                                                               |