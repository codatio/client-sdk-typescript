# CreateBillPaymentRequest

## Example Usage

```typescript
import { CreateBillPaymentRequest } from "@codat/sync-for-payables-version-1/sdk/models/operations";

let value: CreateBillPaymentRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                           | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Unique identifier for a company.                                                                                      | 8a210b68-6988-11ed-a1eb-0242ac120002                                                                                  |
| `connectionId`                                                                                                        | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Unique identifier for a connection.                                                                                   | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                                                                  |
| `timeoutInMinutes`                                                                                                    | *number*                                                                                                              | :heavy_minus_sign:                                                                                                    | Time limit for the push operation to complete before it is timed out.                                                 |                                                                                                                       |
| `billPayment`                                                                                                         | [shared.BillPayment](../../../sdk/models/shared/billpayment.md)                                                       | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   | {<br/>"totalAmount": 1000,<br/>"lines": [<br/>{<br/>"amount": 1000,<br/>"links": [<br/>{<br/>"type": "Bill",<br/>"id": "x",<br/>"amount": -1000<br/>}<br/>]<br/>}<br/>]<br/>} |