# CreateAccountRequest

## Example Usage

```typescript
import { CreateAccountRequest } from "@codat/lending/sdk/models/operations";
import { Decimal } from "@codat/lending/sdk/types";

let value: CreateAccountRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  accountPrototype: {
    nominalCode: "610",
    name: "Accounts Receivable",
    description:
      "Invoices the business has issued but has not yet collected payment on.",
    fullyQualifiedCategory: "Asset.Current",
    fullyQualifiedName: "Fixed Asset",
    currency: "GBP",
    currentBalance: new Decimal("0"),
    type: "Asset",
    status: "Active",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `companyId`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | Unique identifier for a company.                                          | 8a210b68-6988-11ed-a1eb-0242ac120002                                      |
| `connectionId`                                                            | *string*                                                                  | :heavy_check_mark:                                                        | Unique identifier for a connection.                                       | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                      |
| `timeoutInMinutes`                                                        | *number*                                                                  | :heavy_minus_sign:                                                        | Time limit for the push operation to complete before it is timed out.     |                                                                           |
| `allowSyncOnPushComplete`                                                 | *boolean*                                                                 | :heavy_minus_sign:                                                        | Allow a sync upon push completion.                                        |                                                                           |
| `accountPrototype`                                                        | [shared.AccountPrototype](../../../sdk/models/shared/accountprototype.md) | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |