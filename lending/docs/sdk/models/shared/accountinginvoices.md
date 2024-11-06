# AccountingInvoices

## Example Usage

```typescript
import { AccountingInvoices } from "@codat/lending/sdk/models/shared";
import { Decimal } from "@codat/lending/sdk/types";

let value: AccountingInvoices = {
  results: [
    {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      issueDate: "2022-10-23T00:00:00Z",
      dueDate: "2022-10-23T00:00:00Z",
      paidOnDate: "2022-10-23T00:00:00Z",
      currency: "USD",
      lineItems: [
        {
          unitAmount: new Decimal("6532.01"),
          quantity: new Decimal("6521.03"),
          accountRef: {},
          tracking: {
            categoryRefs: [
              {
                id: "<id>",
              },
            ],
            isBilledTo: "NotApplicable",
            isRebilledTo: "Project",
            recordRef: {
              dataType: "invoice",
            },
          },
        },
      ],
      paymentAllocations: [
        {
          payment: {
            accountRef: {},
            currency: "USD",
            paidOnDate: "2022-10-23T00:00:00Z",
          },
          allocation: {
            currency: "EUR",
            allocatedOnDate: "2022-10-23T00:00:00Z",
          },
        },
      ],
      totalTaxAmount: new Decimal("1002.27"),
      totalAmount: new Decimal("9194.83"),
      amountDue: new Decimal("7142.41"),
      status: "Void",
    },
  ],
  pageNumber: 1,
  pageSize: 10,
  totalResults: 1,
  links: {
    self: {
      href: "/companies/{id}/data/{dataType}",
    },
    current: {
      href: "/companies/{id}/data/{dataType}?page=1&pageSize=10",
    },
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `results`                                                                                         | [shared.AccountingInvoice](../../../sdk/models/shared/accountinginvoice.md)[]                     | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `pageNumber`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | Current page number.                                                                              |                                                                                                   |
| `pageSize`                                                                                        | *number*                                                                                          | :heavy_check_mark:                                                                                | Number of items to return in results array.                                                       |                                                                                                   |
| `totalResults`                                                                                    | *number*                                                                                          | :heavy_check_mark:                                                                                | Total number of items.                                                                            |                                                                                                   |
| `links`                                                                                           | [shared.Links](../../../sdk/models/shared/links.md)                                               | :heavy_check_mark:                                                                                | N/A                                                                                               | {<br/>"self": {<br/>"href": "/companies"<br/>},<br/>"current": {<br/>"href": "/companies?page=1\u0026pageSize=10"<br/>}<br/>} |