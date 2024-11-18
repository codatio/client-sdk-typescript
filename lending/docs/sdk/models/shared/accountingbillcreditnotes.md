# AccountingBillCreditNotes

## Example Usage

```typescript
import { AccountingBillCreditNotes } from "@codat/lending/sdk/models/shared";
import { Decimal } from "@codat/lending/sdk/types";

let value: AccountingBillCreditNotes = {
  results: [
    {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      id: "6a0e9dfb-87b0-47d3-aaaf-9753ae9e757d",
      billCreditNoteNumber: "14763237",
      supplierRef: {
        id: "67C6A7A1-5E84-4AC4-B950-24A114E379D0",
        supplierName: "Chin's Gas and Oil",
      },
      totalAmount: new Decimal("693"),
      totalDiscount: new Decimal("0"),
      subTotal: new Decimal("805.78"),
      totalTaxAmount: new Decimal("0"),
      discountPercentage: new Decimal("0"),
      remainingCredit: new Decimal("693"),
      status: "Submitted",
      issueDate: "2019-02-18T16:03:07.268Z",
      allocatedOnDate: "2022-10-23T00:00:00Z",
      currency: "USD",
      lineItems: [
        {
          description: "AcmeMagnet",
          unitAmount: new Decimal("25"),
          quantity: new Decimal("4"),
          discountAmount: new Decimal("0"),
          subTotal: new Decimal("100"),
          taxAmount: new Decimal("10"),
          totalAmount: new Decimal("110"),
          accountRef: {
            id: "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
          },
          taxRateRef: {
            id: "6c88aff3-7cb9-4980-a3d3-443e72e02498",
          },
          itemRef: {
            id: "3",
          },
          createdFromLineRef: {},
          trackingCategoryRefs: [
            {
              id: "department_1",
              name: "ACMERockets",
            },
            {
              id: "costcode_2",
              name: "ACM2-ACMESigns",
            },
          ],
        },
        {
          description: "ACMEDisintegratingPistol",
          unitAmount: new Decimal("25"),
          quantity: new Decimal("3"),
          discountAmount: new Decimal("0"),
          subTotal: new Decimal("75"),
          taxAmount: new Decimal("7.5"),
          totalAmount: new Decimal("82.5"),
          accountRef: {
            id: "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
          },
          taxRateRef: {
            id: "6c88aff3-7cb9-4980-a3d3-443e72e02498",
          },
          itemRef: {
            id: "3abf0883-03f7-44c6-bc15-1372522d25e1",
          },
        },
        {
          description: "ACMEWhippedCreamDispenser",
          unitAmount: new Decimal("52"),
          quantity: new Decimal("6"),
          discountAmount: new Decimal("0"),
          subTotal: new Decimal("312"),
          taxAmount: new Decimal("31.2"),
          totalAmount: new Decimal("343.2"),
          accountRef: {
            id: "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
          },
          taxRateRef: {
            id: "6c88aff3-7cb9-4980-a3d3-443e72e02498",
          },
          itemRef: {
            id: "3691f3d9-0ff7-4358-8a93-bed31c1b4b03",
          },
        },
        {
          description: "ACMEJetPropelledPogoStick",
          unitAmount: new Decimal("130"),
          quantity: new Decimal("1"),
          discountAmount: new Decimal("0"),
          subTotal: new Decimal("130"),
          taxAmount: new Decimal("27.3"),
          totalAmount: new Decimal("157.3"),
          accountRef: {
            id: "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
          },
          taxRateRef: {
            id: "d606732b-db18-44d7-823b-7f15f42c32ea",
          },
          itemRef: {
            id: "075410d4-7edc-4936-ba52-9e1e43cbe300",
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
            currency: "EUR",
            allocatedOnDate: "2022-10-23T00:00:00Z",
          },
        },
      ],
      createdFromRefs: [
        {
          dataType: "transfer",
        },
      ],
      note: "Track separately",
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
| `results`                                                                                         | [shared.AccountingBillCreditNote](../../../sdk/models/shared/accountingbillcreditnote.md)[]       | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `pageNumber`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | Current page number.                                                                              |                                                                                                   |
| `pageSize`                                                                                        | *number*                                                                                          | :heavy_check_mark:                                                                                | Number of items to return in results array.                                                       |                                                                                                   |
| `totalResults`                                                                                    | *number*                                                                                          | :heavy_check_mark:                                                                                | Total number of items.                                                                            |                                                                                                   |
| `links`                                                                                           | [shared.Links](../../../sdk/models/shared/links.md)                                               | :heavy_check_mark:                                                                                | N/A                                                                                               | {<br/>"self": {<br/>"href": "/companies"<br/>},<br/>"current": {<br/>"href": "/companies?page=1\u0026pageSize=10"<br/>}<br/>} |