# Supplier

﻿Suppliers are people or organizations that provide something, such as a product or service. Use the [List suppliers](https://docs.codat.io/sync-for-payables-v2-api#/operations/list-suppliers) endpoint to retrieve a list of all suppliers for a company.

Suppliers' data links to accounts payable [bills](https://docs.codat.io/sync-for-payables-v2-api#/schemas/Bill).
 

## Example Usage

```typescript
import { Supplier } from "@codat/sync-for-payables/sdk/models/shared";

let value: Supplier = {
  id: "C520FFD4-F6F6-4FC2-A6D2-5D7088B2B14F",
  supplierName: "Kelly's Industrial Supplies",
  contactName: "Kelly Ipsum",
  emailAddress: "sales@kellysupplies.com",
  phone: "07999 999999",
  addresses: [
    {
      type: "Billing",
      line1: "Unit 51",
      line2: "Bakersfield Industrial Estate",
      city: "Bakersfield",
      region: "California",
      country: "USA",
    },
  ],
  status: "Active",
  defaultCurrency: "GBP",
  sourceModifiedDate: "2022-10-23T00:00:00Z",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_minus_sign:                                                                     | Identifier for the supplier, unique to the company in the accounting software.         |                                                                                        |
| `supplierName`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | Name of the supplier as recorded in the accounting system, typically the company name. |                                                                                        |
| `contactName`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | Name of the main contact for the supplier.                                             |                                                                                        |
| `emailAddress`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | Email address that the supplier may be contacted on.                                   |                                                                                        |
| `phone`                                                                                | *string*                                                                               | :heavy_minus_sign:                                                                     | Phone number that the supplier may be contacted on.                                    | +44 25691 154789                                                                       |
| `addresses`                                                                            | [shared.Address](../../../sdk/models/shared/address.md)[]                              | :heavy_minus_sign:                                                                     | An array of Addresses.                                                                 |                                                                                        |
| `status`                                                                               | [shared.SupplierStatus](../../../sdk/models/shared/supplierstatus.md)                  | :heavy_minus_sign:                                                                     | Status of the supplier.                                                                |                                                                                        |
| `balance`                                                                              | *Decimal*                                                                              | :heavy_minus_sign:                                                                     | Amount outstanding against the supplier.                                               |                                                                                        |
| `defaultCurrency`                                                                      | *string*                                                                               | :heavy_minus_sign:                                                                     | Default currency the supplier's transactional data is recorded in.                     |                                                                                        |
| `sourceModifiedDate`                                                                   | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    | 2022-10-23 00:00:00 +0000 UTC                                                          |