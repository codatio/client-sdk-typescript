# AccountingCreditNotes

## Example Usage

```typescript
import { AccountingCreditNotes } from "@codat/lending/sdk/models/shared";
import { Decimal } from "@codat/lending/sdk/types";

let value: AccountingCreditNotes = {
  results: [
    {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      totalAmount: new Decimal("2274.15"),
      totalDiscount: new Decimal("2543.56"),
      subTotal: new Decimal("580.29"),
      totalTaxAmount: new Decimal("4344.17"),
      discountPercentage: new Decimal("3117.96"),
      remainingCredit: new Decimal("6963.43"),
      status: "Submitted",
      issueDate: "2022-10-23T00:00:00Z",
      allocatedOnDate: "2022-10-23T00:00:00Z",
      currency: "GBP",
      lineItems: [
        {
          unitAmount: new Decimal("6793.93"),
          quantity: new Decimal("4536.97"),
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
              dataType: "transfer",
            },
          },
        },
      ],
      paymentAllocations: [
        {
          payment: {
            accountRef: {},
            currency: "GBP",
            paidOnDate: "2022-10-23T00:00:00Z",
          },
          allocation: {
            currency: "GBP",
            allocatedOnDate: "2022-10-23T00:00:00Z",
          },
        },
      ],
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
| `results`                                                                                         | [shared.AccountingCreditNote](../../../sdk/models/shared/accountingcreditnote.md)[]               | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `pageNumber`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | Current page number.                                                                              |                                                                                                   |
| `pageSize`                                                                                        | *number*                                                                                          | :heavy_check_mark:                                                                                | Number of items to return in results array.                                                       |                                                                                                   |
| `totalResults`                                                                                    | *number*                                                                                          | :heavy_check_mark:                                                                                | Total number of items.                                                                            |                                                                                                   |
| `links`                                                                                           | [shared.Links](../../../sdk/models/shared/links.md)                                               | :heavy_check_mark:                                                                                | N/A                                                                                               | {<br/>"self": {<br/>"href": "/companies"<br/>},<br/>"current": {<br/>"href": "/companies?page=1\u0026pageSize=10"<br/>}<br/>} |