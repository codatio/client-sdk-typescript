# CreateSupplierRequest

## Example Usage

```typescript
import { CreateSupplierRequest } from "@codat/sync-for-payables/sdk/models/operations";

let value: CreateSupplierRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  supplierPrototype: {
    supplierName: "<value>",
    phone: "+44 25691 154789",
    status: "Active",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `companyId`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | Unique identifier for a company.                                            | 8a210b68-6988-11ed-a1eb-0242ac120002                                        |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | Unique identifier for a connection.                                         | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                        |
| `idempotencyKey`                                                            | *string*                                                                    | :heavy_minus_sign:                                                          | A unique identifier to ensure idempotent behaviour for subsequent requests. |                                                                             |
| `supplierPrototype`                                                         | [shared.SupplierPrototype](../../../sdk/models/shared/supplierprototype.md) | :heavy_minus_sign:                                                          | N/A                                                                         |                                                                             |