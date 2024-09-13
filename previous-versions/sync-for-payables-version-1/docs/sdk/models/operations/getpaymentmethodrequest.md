# GetPaymentMethodRequest

## Example Usage

```typescript
import { GetPaymentMethodRequest } from "@codat/sync-for-payables-version-1/sdk/models/operations";

let value: GetPaymentMethodRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  paymentMethodId: "<value>",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `companyId`                             | *string*                                | :heavy_check_mark:                      | Unique identifier for a company.        | 8a210b68-6988-11ed-a1eb-0242ac120002    |
| `paymentMethodId`                       | *string*                                | :heavy_check_mark:                      | Unique identifier for a payment method. |                                         |