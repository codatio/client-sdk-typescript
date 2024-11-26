# CreateExpenseTransactionRequest

## Example Usage

```typescript
import { CreateExpenseTransactionRequest } from "@codat/sync-for-expenses/sdk/models/operations";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

let value: CreateExpenseTransactionRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  requestBody: [
    {
      id: "a44135b0-6882-489a-83fe-a0c57a4afb19",
      type: "Payment",
      issueDate: "2024-05-21T00:00:00+00:00",
      currency: "GBP",
      currencyRate: new Decimal("1"),
      contactRef: {
        id: "430",
        type: "Supplier",
      },
      bankAccountRef: {
        id: "97",
      },
      merchantName: "Amazon UK",
      lines: [
        {
          netAmount: new Decimal("100"),
          taxAmount: new Decimal("20"),
          taxRateRef: {
            id: "23_Bills",
          },
          accountRef: {
            id: "35",
          },
          trackingRefs: [
            {
              id: "DEPARTMENT_3",
            },
            {
              dataType: "trackingCategories",
            },
          ],
          invoiceTo: {
            id: "504",
            type: "customer",
          },
        },
      ],
      notes: "amazon purchase",
    },
  ],
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `companyId`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | Unique identifier for a company.                                                | 8a210b68-6988-11ed-a1eb-0242ac120002                                            |
| `requestBody`                                                                   | [shared.ExpenseTransaction](../../../sdk/models/shared/expensetransaction.md)[] | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |