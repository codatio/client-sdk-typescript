# RefreshProductDataRequest

## Example Usage

```typescript
import { RefreshProductDataRequest } from "@codat/platform/sdk/models/operations";

let value: RefreshProductDataRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  productIdentifier: "bank-feeds",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `companyId`                                      | *string*                                         | :heavy_check_mark:                               | Unique identifier for a company.                 | 8a210b68-6988-11ed-a1eb-0242ac120002             |
| `productIdentifier`                              | *string*                                         | :heavy_check_mark:                               | Human-readable product identifier for a product. | bank-feeds                                       |