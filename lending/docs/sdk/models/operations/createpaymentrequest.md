# CreatePaymentRequest

## Example Usage

```typescript
import { CreatePaymentRequest } from "@codat/lending/sdk/models/operations";
import { Decimal } from "@codat/lending/sdk/types";

let value: CreatePaymentRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  accountingPayment: {
    modifiedDate: "2022-10-23T00:00:00Z",
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    accountRef: {},
    paymentMethodRef: {
      id: "EILBDVJVNUAGVKRQ",
      name: "AliPay",
    },
    currency: "USD",
    date: "2022-10-23T00:00:00Z",
    lines: [
      {
        amount: new Decimal("5446.47"),
        allocatedOnDate: "2022-10-23T00:00:00Z",
      },
    ],
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `companyId`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | Unique identifier for a company.                                            | 8a210b68-6988-11ed-a1eb-0242ac120002                                        |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | Unique identifier for a connection.                                         | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                        |
| `timeoutInMinutes`                                                          | *number*                                                                    | :heavy_minus_sign:                                                          | Time limit for the push operation to complete before it is timed out.       |                                                                             |
| `allowSyncOnPushComplete`                                                   | *boolean*                                                                   | :heavy_minus_sign:                                                          | Allow a sync upon push completion.                                          |                                                                             |
| `accountingPayment`                                                         | [shared.AccountingPayment](../../../sdk/models/shared/accountingpayment.md) | :heavy_minus_sign:                                                          | N/A                                                                         |                                                                             |