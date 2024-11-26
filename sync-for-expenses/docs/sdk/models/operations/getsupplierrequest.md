# GetSupplierRequest

## Example Usage

```typescript
import { GetSupplierRequest } from "@codat/sync-for-expenses/sdk/models/operations";

let value: GetSupplierRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  supplierId: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `companyId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a company.     | 8a210b68-6988-11ed-a1eb-0242ac120002 |
| `supplierId`                         | *string*                             | :heavy_check_mark:                   | Unique identifier for a supplier.    | 13d946f0-c5d5-42bc-b092-97ece17923ab |