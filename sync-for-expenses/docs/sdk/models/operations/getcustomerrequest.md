# GetCustomerRequest

## Example Usage

```typescript
import { GetCustomerRequest } from "@codat/sync-for-expenses/sdk/models/operations";

let value: GetCustomerRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  customerId: "EILBDVJVNUAGVKRQ",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `companyId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a company.     | 8a210b68-6988-11ed-a1eb-0242ac120002 |
| `customerId`                         | *string*                             | :heavy_check_mark:                   | Unique identifier for a customer.    | 13d946f0-c5d5-42bc-b092-97ece17923ab |