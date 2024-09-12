# CommercePaymentMethod

A Payment Method represents the payment method(s) used to make payments.

Explore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-paymentMethods) for this data type.

## Example Usage

```typescript
import { CommercePaymentMethod } from "@codat/lending/sdk/models/shared";

let value: CommercePaymentMethod = {
  modifiedDate: "2022-10-23T00:00:00Z",
  sourceModifiedDate: "2022-10-23T00:00:00Z",
  id: "EILBDVJVNUAGVKRQ",
  name: "Alipay",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `modifiedDate`                                                                                  | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | 2022-10-23 00:00:00 +0000 UTC                                                                   |
| `sourceModifiedDate`                                                                            | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | 2022-10-23 00:00:00 +0000 UTC                                                                   |
| `id`                                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | A unique, persistent identifier for this record                                                 | 13d946f0-c5d5-42bc-b092-97ece17923ab                                                            |
| `name`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | The name of the PaymentMethod                                                                   | Alipay                                                                                          |
| `status`                                                                                        | [shared.CommercePaymentMethodStatus](../../../sdk/models/shared/commercepaymentmethodstatus.md) | :heavy_minus_sign:                                                                              | Status of the Payment Method.                                                                   |                                                                                                 |