# GetSupplierRequest

## Example Usage

```typescript
import { GetSupplierRequest } from "@codat/sync-for-payables-version-1/sdk/models/operations";

let value: GetSupplierRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  supplierId: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `companyId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a company.     | 8a210b68-6988-11ed-a1eb-0242ac120002 |
| `supplierId`                         | *string*                             | :heavy_check_mark:                   | Unique identifier for a supplier.    |                                      |