# CreateBillPaymentRequest

## Example Usage

```typescript
import { CreateBillPaymentRequest } from "@codat/sync-for-payables/sdk/models/operations";
import { Decimal } from "@codat/sync-for-payables/sdk/types";

let value: CreateBillPaymentRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  billPaymentPrototype: {
    amount: new Decimal("1329.54"),
    date: "2022-10-23T00:00:00Z",
    reference: "Bill Payment against bill c13e37b6-dfaa-4894-b3be-9fe97bda9f44",
    accountRef: {
      id: "<id>",
    },
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `companyId`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | Unique identifier for a company.                                                  | 8a210b68-6988-11ed-a1eb-0242ac120002                                              |
| `connectionId`                                                                    | *string*                                                                          | :heavy_check_mark:                                                                | Unique identifier for a connection.                                               | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                              |
| `billId`                                                                          | *string*                                                                          | :heavy_check_mark:                                                                | Unique identifier for a bill.                                                     | 13d946f0-c5d5-42bc-b092-97ece17923ab                                              |
| `idempotencyKey`                                                                  | *string*                                                                          | :heavy_minus_sign:                                                                | A unique identifier to ensure idempotent behaviour for subsequent requests.       |                                                                                   |
| `billPaymentPrototype`                                                            | [shared.BillPaymentPrototype](../../../sdk/models/shared/billpaymentprototype.md) | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |