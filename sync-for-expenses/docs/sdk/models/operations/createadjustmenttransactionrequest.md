# CreateAdjustmentTransactionRequest

## Example Usage

```typescript
import { CreateAdjustmentTransactionRequest } from "@codat/sync-for-expenses/sdk/models/operations";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

let value: CreateAdjustmentTransactionRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  requestBody: [
    {
      id: "84b65de0-35df-4fe4-9f31-f3b0be465b32",
      date: "2022-10-23T00:00:00Z",
      currency: "Tunisian Dinar",
      lines: [
        {
          amount: new Decimal("50"),
          accountRef: {
            id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
          },
          description: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
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

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | Unique identifier for a company.                                                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                                                |
| `requestBody`                                                                                       | [shared.AdjustmentTransactionRequest](../../../sdk/models/shared/adjustmenttransactionrequest.md)[] | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |                                                                                                     |