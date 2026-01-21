# BankingTransactionCategory

The Banking Transaction Categories data type provides a list of hierarchical categories associated with a transaction for greater contextual meaning to transaction activity.

Responses are paged, so you should provide `page` and `pageSize` query parameters in your request.

## Example Usage

```typescript
import { BankingTransactionCategory } from "@codat/lending/sdk/models/shared";

let value: BankingTransactionCategory = {
  modifiedDate: "2022-05-23T16:32:50",
  sourceModifiedDate: "2021-04-24T07:59:10",
  id: "auto-and-transport",
  name: "Auto & Transport",
  hasChildren: true,
  status: "Active",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `modifiedDate`                                                                                              | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         | 2022-10-23T00:00:00Z                                                                                        |
| `sourceModifiedDate`                                                                                        | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         | 2022-10-23T00:00:00Z                                                                                        |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The unique identifier of the bank transaction category.                                                     |                                                                                                             |
| `name`                                                                                                      | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The name of the bank transaction category.                                                                  |                                                                                                             |
| `parentId`                                                                                                  | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The unique identifier of the parent bank transaction category.                                              |                                                                                                             |
| `hasChildren`                                                                                               | *boolean*                                                                                                   | :heavy_minus_sign:                                                                                          | A Boolean indicating whether there are other bank transaction categories beneath this one in the hierarchy. |                                                                                                             |
| `status`                                                                                                    | [shared.TransactionCategoryStatus](../../../sdk/models/shared/transactioncategorystatus.md)                 | :heavy_minus_sign:                                                                                          | The status of the transaction category.                                                                     |                                                                                                             |