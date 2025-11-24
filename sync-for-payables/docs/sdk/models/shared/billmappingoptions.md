# BillMappingOptions

The bill mapping options for a company's accounting software.

## Example Usage

```typescript
import { BillMappingOptions } from "@codat/sync-for-payables/sdk/models/shared";

let value: BillMappingOptions = {
  accounts: [
    {
      id: "1b6266d1-1e44-46c5-8eb5-a8f98e03124e",
      nominalCode: "610",
      name: "Accounts Payable",
      type: "Liability",
      currency: "GBP",
      status: "Active",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
    },
  ],
  taxRates: [
    {
      id: "d2939064-dd3a-4c0f-9865-a238c2193515",
    },
  ],
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `accounts`                                                                          | [shared.AccountMappingOption](../../../sdk/models/shared/accountmappingoption.md)[] | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `taxRates`                                                                          | [shared.TaxRateMappingOption](../../../sdk/models/shared/taxratemappingoption.md)[] | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `pagination`                                                                        | [shared.Pagination](../../../sdk/models/shared/pagination.md)                       | :heavy_minus_sign:                                                                  | N/A                                                                                 |