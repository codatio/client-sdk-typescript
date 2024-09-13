# CreateBillPaymentRequest

## Example Usage

```typescript
import { CreateBillPaymentRequest } from "@codat/sync-for-payables-version-1/sdk/models/operations";
import { Decimal } from "@codat/sync-for-payables-version-1/sdk/types";

let value: CreateBillPaymentRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  billPayment: {
    modifiedDate: "2022-10-23T00:00:00Z",
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    id: "3d5a8e00-d108-4045-8823-7f342676cffa",
    totalAmount: new Decimal("250"),
    currency: "GBP",
    date: "2022-10-23T00:00:00Z",
    note: "Bill Payment against bill c13e37b6-dfaa-4894-b3be-9fe97bda9f44",
    paymentMethodRef: {
      id: "EILBDVJVNUAGVKRQ",
      name: "AliPay",
    },
    lines: [
      {
        amount: new Decimal("0"),
        links: [
          {
            type: "Bill",
            id: "x",
            amount: new Decimal("-750"),
          },
          {
            type: "CreditNote",
            id: "y",
            amount: new Decimal("750"),
          },
        ],
        allocatedOnDate: "2022-10-23T00:00:00Z",
      },
      {
        amount: new Decimal("250"),
        links: [
          {
            type: "Bill",
            id: "x",
            amount: new Decimal("-250"),
          },
        ],
        allocatedOnDate: "2022-10-23T00:00:00Z",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                           | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Unique identifier for a company.                                                                                      | 8a210b68-6988-11ed-a1eb-0242ac120002                                                                                  |
| `connectionId`                                                                                                        | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Unique identifier for a connection.                                                                                   | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                                                                  |
| `timeoutInMinutes`                                                                                                    | *number*                                                                                                              | :heavy_minus_sign:                                                                                                    | Time limit for the push operation to complete before it is timed out.                                                 |                                                                                                                       |
| `billPayment`                                                                                                         | [shared.BillPayment](../../../sdk/models/shared/billpayment.md)                                                       | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   | {<br/>"totalAmount": 1000,<br/>"lines": [<br/>{<br/>"amount": 1000,<br/>"links": [<br/>{<br/>"type": "Bill",<br/>"id": "x",<br/>"amount": -1000<br/>}<br/>]<br/>}<br/>]<br/>} |