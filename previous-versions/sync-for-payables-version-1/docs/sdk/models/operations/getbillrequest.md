# GetBillRequest

## Example Usage

```typescript
import { GetBillRequest } from "@codat/sync-for-payables-version-1/sdk/models/operations";

let value: GetBillRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  billId: "EILBDVJVNUAGVKRQ",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `companyId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a company.     | 8a210b68-6988-11ed-a1eb-0242ac120002 |
| `billId`                             | *string*                             | :heavy_check_mark:                   | Unique identifier for a bill.        | 13d946f0-c5d5-42bc-b092-97ece17923ab |