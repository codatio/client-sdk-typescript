# CreateCustomerRequest

## Example Usage

```typescript
import { CreateCustomerRequest } from "@codat/sync-for-expenses/sdk/models/operations";

let value: CreateCustomerRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customer: {
    modifiedDate: "2022-10-23T00:00:00Z",
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    defaultCurrency: "GBP",
    contacts: [
      {
        phone: [
          {
            number: "+44 25691 154789",
            type: "Landline",
          },
        ],
        status: "Active",
        modifiedDate: "2022-10-23T00:00:00Z",
      },
    ],
    status: "Archived",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `companyId`                                                           | *string*                                                              | :heavy_check_mark:                                                    | Unique identifier for a company.                                      | 8a210b68-6988-11ed-a1eb-0242ac120002                                  |
| `connectionId`                                                        | *string*                                                              | :heavy_check_mark:                                                    | Unique identifier for a connection.                                   | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                  |
| `timeoutInMinutes`                                                    | *number*                                                              | :heavy_minus_sign:                                                    | Time limit for the push operation to complete before it is timed out. |                                                                       |
| `allowSyncOnPushComplete`                                             | *boolean*                                                             | :heavy_minus_sign:                                                    | Allow a sync upon push completion.                                    |                                                                       |
| `customer`                                                            | [shared.Customer](../../../sdk/models/shared/customer.md)             | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |