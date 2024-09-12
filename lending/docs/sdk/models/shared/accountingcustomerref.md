# AccountingCustomerRef

## Example Usage

```typescript
import { AccountingCustomerRef } from "@codat/lending/sdk/models/shared";

let value: AccountingCustomerRef = {
  id: "<id>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `id`                                       | *string*                                   | :heavy_check_mark:                         | `id` from the Customers data type          |
| `companyName`                              | *string*                                   | :heavy_minus_sign:                         | `customerName` from the Customer data type |