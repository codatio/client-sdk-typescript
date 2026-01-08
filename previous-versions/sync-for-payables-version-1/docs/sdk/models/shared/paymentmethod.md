# PaymentMethod

## Overview

A Payment Method represents the payment method(s) used to pay a Bill. Payment Methods are referenced on [Bill Payments](https://docs.codat.io/sync-for-payables-api#/schemas/BillPayment) and [Payments](https://docs.codat.io/sync-for-payables-api#/schemas/Payment).

## Example Usage

```typescript
import { PaymentMethod } from "@codat/sync-for-payables-version-1/sdk/models/shared";

let value: PaymentMethod = {
  modifiedDate: "2022-10-23T00:00:00Z",
  sourceModifiedDate: "2022-10-23T00:00:00Z",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `modifiedDate`                                                                  | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             | 2022-10-23T00:00:00Z                                                            |
| `sourceModifiedDate`                                                            | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             | 2022-10-23T00:00:00Z                                                            |
| `id`                                                                            | *string*                                                                        | :heavy_minus_sign:                                                              | Unique identifier for the payment method.                                       |                                                                                 |
| `name`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | Name of the payment method.                                                     |                                                                                 |
| `type`                                                                          | [shared.PaymentMethodType](../../../sdk/models/shared/paymentmethodtype.md)     | :heavy_minus_sign:                                                              | Method of payment.                                                              |                                                                                 |
| `status`                                                                        | [shared.PaymentMethodStatus](../../../sdk/models/shared/paymentmethodstatus.md) | :heavy_minus_sign:                                                              | Status of the Payment Method.                                                   |                                                                                 |
| `metadata`                                                                      | [shared.Metadata](../../../sdk/models/shared/metadata.md)                       | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |