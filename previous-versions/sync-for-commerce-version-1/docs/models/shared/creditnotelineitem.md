# CreditNoteLineItem


## Fields

| Field                                                                                                                                                                                           | Type                                                                                                                                                                                            | Required                                                                                                                                                                                        | Description                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountRef`                                                                                                                                                                                    | [AccountRef](../../models/shared/accountref.md)                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                              | Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.                                           |
| `description`                                                                                                                                                                                   | *string*                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                              | Friendly name of each line item. For example, the goods or service for which credit has been issued.                                                                                            |
| `discountAmount`                                                                                                                                                                                | *number*                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                              | Value of any discounts applied.                                                                                                                                                                 |
| `discountPercentage`                                                                                                                                                                            | *number*                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                              | Percentage rate of any discount applied to the line item.                                                                                                                                       |
| `isDirectIncome`                                                                                                                                                                                | *boolean*                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `itemRef`                                                                                                                                                                                       | [ItemRef](../../models/shared/itemref.md)                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                              | Reference to the product, service type, or inventory item to which the direct cost is linked.                                                                                                   |
| `quantity`                                                                                                                                                                                      | *number*                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                              | Number of units of the goods or service for which credit has been issued.                                                                                                                       |
| `subTotal`                                                                                                                                                                                      | *number*                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                              | Amount of credit associated with the line item, including discounts but excluding tax.                                                                                                          |
| `taxAmount`                                                                                                                                                                                     | *number*                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                              | Amount of tax associated with the line item.                                                                                                                                                    |
| `taxRateRef`                                                                                                                                                                                    | [TaxRateRef](../../models/shared/taxrateref.md)                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                              | Reference to the tax rate to which the line item is linked.                                                                                                                                     |
| `totalAmount`                                                                                                                                                                                   | *number*                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                              | Total amount of the line item, including discounts and tax.                                                                                                                                     |
| `tracking`                                                                                                                                                                                      | [CreditNoteLineItemTracking](../../models/shared/creditnotelineitemtracking.md)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                              | Categories, and a project and customer, against which the item is tracked.                                                                                                                      |
| ~~`trackingCategoryRefs`~~                                                                                                                                                                      | [TrackingCategoryRefsitems](../../models/shared/trackingcategoryrefsitems.md)[]                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                              | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Reference to the tracking categories to which the line item is linked. |
| `unitAmount`                                                                                                                                                                                    | *number*                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                              | Unit price of the goods or service.                                                                                                                                                             |