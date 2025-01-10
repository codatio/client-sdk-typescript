# GetAccountingBillPaymentRequest

## Example Usage

```typescript
import { GetAccountingBillPaymentRequest } from "@codat/lending/sdk/models/operations";

let value: GetAccountingBillPaymentRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  billPaymentId: "EILBDVJVNUAGVKRQ",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `companyId`                           | *string*                              | :heavy_check_mark:                    | Unique identifier for a company.      | 8a210b68-6988-11ed-a1eb-0242ac120002  |
| `billPaymentId`                       | *string*                              | :heavy_check_mark:                    | Unique identifier for a bill payment. | 13d946f0-c5d5-42bc-b092-97ece17923ab  |