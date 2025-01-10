# GetCommercePaymentMethodRequest

## Example Usage

```typescript
import { GetCommercePaymentMethodRequest } from "@codat/lending/sdk/models/operations";

let value: GetCommercePaymentMethodRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  paymentMethodId: "EILBDVJVNUAGVKRQ",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `companyId`                             | *string*                                | :heavy_check_mark:                      | Unique identifier for a company.        | 8a210b68-6988-11ed-a1eb-0242ac120002    |
| `connectionId`                          | *string*                                | :heavy_check_mark:                      | Unique identifier for a connection.     | 2e9d2c44-f675-40ba-8049-353bfcb5e171    |
| `paymentMethodId`                       | *string*                                | :heavy_check_mark:                      | Unique identifier for a payment method. | 13d946f0-c5d5-42bc-b092-97ece17923ab    |