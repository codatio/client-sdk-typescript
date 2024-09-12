# GetAccountingBillRequest

## Example Usage

```typescript
import { GetAccountingBillRequest } from "@codat/lending/sdk/models/operations";

let value: GetAccountingBillRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  billId: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `companyId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a company.     | 8a210b68-6988-11ed-a1eb-0242ac120002 |
| `billId`                             | *string*                             | :heavy_check_mark:                   | Unique identifier for a bill.        |                                      |