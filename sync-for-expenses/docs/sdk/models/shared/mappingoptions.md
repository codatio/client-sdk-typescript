# MappingOptions

## Example Usage

```typescript
import { MappingOptions } from "@codat/sync-for-expenses/sdk/models/shared";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

let value: MappingOptions = {
  expenseProvider: "Partner Expense",
  accounts: [
    {
      id: "127f3b99-8dc2-4b7e-854c-91ef9bd2757b",
      nominalCode: "300",
      name: "Purchases",
      currency: "GBP",
      accountType: "Expense",
      fullyQualifiedCategory: "Expense.DirectCosts",
      validTransactionTypes: [
        "Payment",
      ],
      validFor: [
        "expense-transactions.Payment",
      ],
    },
  ],
  trackingCategories: [
    {
      id: "DEPARTMENT_2",
      name: "New York",
      parentId: "DEPARTMENTS",
    },
  ],
  taxRates: [
    {
      id: "23_Bills",
      name: "20% Bill tax Bills",
      code: "20% Bill tax",
      effectiveTaxRate: new Decimal("20"),
      totalTaxRate: new Decimal("20"),
      validTransactionTypes: [
        "Payment",
      ],
    },
  ],
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `expenseProvider`                                                                                 | *string*                                                                                          | :heavy_minus_sign:                                                                                | Name of the expense integration.                                                                  | Partner Expense                                                                                   |
| `accounts`                                                                                        | [shared.AccountMappingInfo](../../../sdk/models/shared/accountmappinginfo.md)[]                   | :heavy_minus_sign:                                                                                | Array of available accounts for mapping.                                                          |                                                                                                   |
| `trackingCategories`                                                                              | [shared.TrackingCategoryMappingInfo](../../../sdk/models/shared/trackingcategorymappinginfo.md)[] | :heavy_minus_sign:                                                                                | Array of available tracking categories for mapping.                                               |                                                                                                   |
| `taxRates`                                                                                        | [shared.TaxRateMappingInfo](../../../sdk/models/shared/taxratemappinginfo.md)[]                   | :heavy_minus_sign:                                                                                | Array of available tax rates for mapping.                                                         |                                                                                                   |