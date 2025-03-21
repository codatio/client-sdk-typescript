# Items

## Example Usage

```typescript
import { Items } from "@codat/sync-for-expenses/sdk/models/shared";

let value: Items = {
  type: "Unknown",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `type`                                                                              | [shared.AccountingAddressType](../../../sdk/models/shared/accountingaddresstype.md) | :heavy_check_mark:                                                                  | The type of the address                                                             |
| `line1`                                                                             | *string*                                                                            | :heavy_minus_sign:                                                                  | Line 1 of the customer address.                                                     |
| `line2`                                                                             | *string*                                                                            | :heavy_minus_sign:                                                                  | Line 2 of the customer address.                                                     |
| `city`                                                                              | *string*                                                                            | :heavy_minus_sign:                                                                  | City of the customer address.                                                       |
| `region`                                                                            | *string*                                                                            | :heavy_minus_sign:                                                                  | Region of the customer address.                                                     |
| `country`                                                                           | *string*                                                                            | :heavy_minus_sign:                                                                  | Country of the customer address.                                                    |
| `postalCode`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | Postal code or zip code.                                                            |