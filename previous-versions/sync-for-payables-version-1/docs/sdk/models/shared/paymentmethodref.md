# PaymentMethodRef

The Payment Method to which the payment is linked in the accounting software.

## Example Usage

```typescript
import { PaymentMethodRef } from "@codat/sync-for-payables-version-1/sdk/models/shared";

let value: PaymentMethodRef = {
  id: "EILBDVJVNUAGVKRQ",
  name: "AliPay",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `id`                                                    | *string*                                                | :heavy_check_mark:                                      | The unique identifier of the location being referenced. |
| `name`                                                  | *string*                                                | :heavy_minus_sign:                                      | Name of the location being referenced.                  |