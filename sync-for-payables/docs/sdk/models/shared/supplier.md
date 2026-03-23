# Supplier

﻿Suppliers are people or organizations that provide something, such as a product or service. Use the [List suppliers](https://docs.codat.io/sync-for-payables-v2-api#/operations/list-suppliers) endpoint to retrieve a list of all suppliers for a company.

Suppliers' data links to accounts payable [bills](https://docs.codat.io/sync-for-payables-v2-api#/schemas/Bill).
 

## Example Usage

```typescript
import { Supplier } from "@codat/sync-for-payables/sdk/models/shared";
import { Decimal } from "@codat/sync-for-payables/sdk/types";

let value: Supplier = {
  id: "sup-10933920",
  supplierName: "Northridge Office Supplies",
  contactName: "Sarah Johnson",
  emailAddress: "sarah.johnson@northridgesupplies.co.uk",
  phone: "+44 (0)1223 322410",
  addresses: [
    {
      type: "Billing",
      line1: "Flat 1",
      line2: "2 Dennis Avenue",
      city: "London",
      region: "Camden",
      country: "GB",
      postalCode: "EC1N 7TE",
    },
  ],
  status: "Active",
  balance: new Decimal("0"),
  defaultCurrency: "GBP",
  sourceModifiedDate: "2026-03-18T10:30:00Z",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Identifier for the supplier, unique to the company in the accounting software.                     |                                                                                                    |
| `supplierName`                                                                                     | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Name of the supplier as recorded in the accounting system, typically the company name.             |                                                                                                    |
| `contactName`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Name of the main contact for the supplier.                                                         |                                                                                                    |
| `emailAddress`                                                                                     | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Email address that the supplier may be contacted on.                                               |                                                                                                    |
| `phone`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Phone number that the supplier may be contacted on.                                                | **Example 1:** +44 25691 154789<br/>**Example 2:** (877) 492-8687<br/>**Example 3:** 01224 658 999 |
| `addresses`                                                                                        | [shared.Address](../../../sdk/models/shared/address.md)[]                                          | :heavy_minus_sign:                                                                                 | An array of Addresses.                                                                             |                                                                                                    |
| `status`                                                                                           | [shared.SupplierStatus](../../../sdk/models/shared/supplierstatus.md)                              | :heavy_minus_sign:                                                                                 | Status of the supplier.                                                                            |                                                                                                    |
| `balance`                                                                                          | *Decimal*                                                                                          | :heavy_minus_sign:                                                                                 | Amount outstanding against the supplier.                                                           |                                                                                                    |
| `defaultCurrency`                                                                                  | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Default currency the supplier's transactional data is recorded in.                                 |                                                                                                    |
| `sourceModifiedDate`                                                                               | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | **Example 1:** 2022-10-23T00:00:00Z<br/>**Example 2:** 2022-10-23                                  |