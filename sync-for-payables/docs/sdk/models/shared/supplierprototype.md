# SupplierPrototype

## Example Usage

```typescript
import { SupplierPrototype } from "@codat/sync-for-payables/sdk/models/shared";

let value: SupplierPrototype = {
  supplierName: "<value>",
  phone: "01224 658 999",
  status: "Archived",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `supplierName`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | Name of the supplier as recorded in the accounting system, typically the company name. |                                                                                        |
| `contactName`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | Name of the main contact for the supplier.                                             |                                                                                        |
| `emailAddress`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | Email address that the supplier may be contacted on.                                   |                                                                                        |
| `phone`                                                                                | *string*                                                                               | :heavy_minus_sign:                                                                     | Phone number that the supplier may be contacted on.                                    | +44 25691 154789                                                                       |
| `addresses`                                                                            | [shared.Address](../../../sdk/models/shared/address.md)[]                              | :heavy_minus_sign:                                                                     | An array of Addresses.                                                                 |                                                                                        |
| `status`                                                                               | [shared.SupplierStatus](../../../sdk/models/shared/supplierstatus.md)                  | :heavy_check_mark:                                                                     | Status of the supplier.                                                                |                                                                                        |
| `balance`                                                                              | *Decimal*                                                                              | :heavy_minus_sign:                                                                     | Amount outstanding against the supplier.                                               |                                                                                        |
| `defaultCurrency`                                                                      | *string*                                                                               | :heavy_minus_sign:                                                                     | Default currency the supplier's transactional data is recorded in.                     |                                                                                        |