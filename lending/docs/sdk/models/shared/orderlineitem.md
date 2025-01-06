# OrderLineItem

## Example Usage

```typescript
import { OrderLineItem } from "@codat/lending/sdk/models/shared";
import { Decimal } from "@codat/lending/sdk/types";

let value: OrderLineItem = {
  id: "7110701885",
  taxPercentage: new Decimal("0"),
  taxes: [
    {
      taxComponentRef: {
        id: "13d946f0-c5d5-42bc-b092-97ece17923ab",
        name: "<value>",
      },
    },
  ],
  productRef: {
    id: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
  },
  productVariantRef: {
    id: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
  },
  discountAllocations: [
    {
      name: "Promotional Discount",
      totalAmount: new Decimal("15.25"),
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | A unique, persistent identifier for this record                                              | 13d946f0-c5d5-42bc-b092-97ece17923ab                                                         |
| `quantity`                                                                                   | *Decimal*                                                                                    | :heavy_minus_sign:                                                                           | Number of units of the product sold.<br/>For refunds, quantity is negative.<br/>             |                                                                                              |
| `taxPercentage`                                                                              | *Decimal*                                                                                    | :heavy_minus_sign:                                                                           | Percentage rate (from 0 to 100) of any sales tax applied to the unit price.                  | 0                                                                                            |
| `totalAmount`                                                                                | *Decimal*                                                                                    | :heavy_minus_sign:                                                                           | Total amount of the line item, including discounts and tax.                                  |                                                                                              |
| `totalTaxAmount`                                                                             | *Decimal*                                                                                    | :heavy_minus_sign:                                                                           | Total amount of tax applied to the line item, factoring in any discounts.                    |                                                                                              |
| `unitPrice`                                                                                  | *Decimal*                                                                                    | :heavy_minus_sign:                                                                           | Price per unit of goods or services, excluding discounts and tax.                            |                                                                                              |
| `taxes`                                                                                      | [shared.TaxComponentAllocation](../../../sdk/models/shared/taxcomponentallocation.md)[]      | :heavy_minus_sign:                                                                           | Taxes breakdown as applied to order lines.                                                   |                                                                                              |
| `productRef`                                                                                 | [shared.ProductRef](../../../sdk/models/shared/productref.md)                                | :heavy_minus_sign:                                                                           | Reference that links the line item to the correct product details.                           |                                                                                              |
| `productVariantRef`                                                                          | [shared.ProductVariantRef](../../../sdk/models/shared/productvariantref.md)                  | :heavy_minus_sign:                                                                           | Reference that links the line item to the specific version of product that has been ordered. |                                                                                              |
| `discountAllocations`                                                                        | [shared.OrderDiscountAllocation](../../../sdk/models/shared/orderdiscountallocation.md)[]    | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |