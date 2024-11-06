# CommerceOrders

## Example Usage

```typescript
import { CommerceOrders } from "@codat/lending/sdk/models/shared";
import { Decimal } from "@codat/lending/sdk/types";

let value: CommerceOrders = {
  results: [
    {
      modifiedDate: "2022-02-02T11:02:45Z",
      sourceModifiedDate: "2021-03-28T03:00:14",
      id: "01e63721-1205-478e-8503-9d8bf8a93f44",
      orderNumber: "99123956",
      country: "CAN",
      currency: "CAD",
      closedDate: "2022-10-23T00:00:00Z",
      totalAmount: new Decimal("12"),
      totalRefund: new Decimal("0"),
      totalTaxAmount: new Decimal("2"),
      totalDiscount: new Decimal("0"),
      totalGratuity: new Decimal("1"),
      orderLineItems: [
        {
          id: "116113a6-54d3-4624-ba73-26a77a5ffd51",
          quantity: new Decimal("1"),
          taxPercentage: new Decimal("20"),
          totalAmount: new Decimal("12"),
          totalTaxAmount: new Decimal("2"),
          unitPrice: new Decimal("10"),
          taxes: [
            {
              taxComponentRef: {
                id: "72",
                name: "Sales Tax",
              },
            },
            {
              taxComponentRef: {
                id: "72",
                name: "City Tax",
              },
            },
          ],
          productRef: {
            id: "ac186646-41f2-4280-afea-1012c59459ab",
            name: "Intelligent Concrete Salad",
          },
          productVariantRef: {
            id: "f9ca9de5-9e31-460d-ac81-368f4e7c8fc0",
            name: "Small Incredible Wooden Soap",
          },
          discountAllocations: [
            {
              name: "Promotional Discount",
              totalAmount: new Decimal("15.25"),
            },
          ],
        },
      ],
      payments: [
        {
          modifiedDate: "2022-02-02T11:02:45",
          sourceModifiedDate: "2022-10-23T00:00:00Z",
          id: "defdceb6-83a3-4b7d-a74e-e9ef947d5f48",
          amount: new Decimal("12"),
          currency: "CAD",
          type: "Paypal",
          status: "Unknown",
          paymentProvider: "Checkout.com",
          dueDate: "2021-04-04T03:00:14",
          createdDate: "2021-03-28T03:00:14",
        },
      ],
      serviceCharges: [
        {
          description: "Service Charge",
          totalAmount: new Decimal("1.2"),
          taxPercentage: new Decimal("20"),
          taxAmount: new Decimal("0.2"),
          taxes: [
            {
              taxComponentRef: {
                id: "72",
                name: "Service Tax",
              },
            },
          ],
          quantity: 1,
          type: "Generic",
        },
      ],
      locationRef: {
        id: "47bbffc7-c045-4b0f-a3bb-ecf1f669edfa",
      },
      customerRef: {
        id: "2634d180-7205-43f0-a73d-84af6443a005",
        name: "Emmy Roberts",
      },
      createdDate: "2021-03-28T03:00:14",
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
| `results`                                                                                         | [shared.CommerceOrder](../../../sdk/models/shared/commerceorder.md)[]                             | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `pageNumber`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | Current page number.                                                                              |                                                                                                   |
| `pageSize`                                                                                        | *number*                                                                                          | :heavy_check_mark:                                                                                | Number of items to return in results array.                                                       |                                                                                                   |
| `totalResults`                                                                                    | *number*                                                                                          | :heavy_check_mark:                                                                                | Total number of items.                                                                            |                                                                                                   |
| `links`                                                                                           | [shared.Links](../../../sdk/models/shared/links.md)                                               | :heavy_check_mark:                                                                                | N/A                                                                                               | {<br/>"self": {<br/>"href": "/companies"<br/>},<br/>"current": {<br/>"href": "/companies?page=1\u0026pageSize=10"<br/>}<br/>} |