# CreateReimbursableExpenseTransactionRequest

## Example Usage

```typescript
import { CreateReimbursableExpenseTransactionRequest } from "@codat/sync-for-expenses/sdk/models/operations";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

let value: CreateReimbursableExpenseTransactionRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  requestBody: [
    {
      id: "4d7c6929-7770-412b-91bb-44d3bc71d111",
      contactRef: {
        id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
      },
      apAccountRef: {
        id: "8000004C-1724173136",
      },
      issueDate: "2022-10-23T00:00:00Z",
      dueDate: "2022-10-23T00:00:00Z",
      currency: "GBP",
      notes: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
      lines: [
        {
          description: "2-night hotel stay",
          netAmount: new Decimal("100"),
          taxAmount: new Decimal("20"),
          taxRateRef: {
            id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
          },
          accountRef: {
            id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
          },
          itemRef: {
            id: "80000002-1675158984",
          },
          trackingRefs: [
            {
              id: "e9a1b63d-9ff0-40e7-8038-016354b987e6",
              dataType: "trackingCategories",
            },
          ],
          invoiceTo: {
            id: "80000002-1674552702",
            type: "customer",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                             | *string*                                                                                                | :heavy_check_mark:                                                                                      | Unique identifier for a company.                                                                        | 8a210b68-6988-11ed-a1eb-0242ac120002                                                                    |
| `requestBody`                                                                                           | [shared.ReimbursableExpenseTransaction](../../../sdk/models/shared/reimbursableexpensetransaction.md)[] | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |