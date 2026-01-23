# SourceAccountBatchCreateResponse

Account ID and resulting object of the batch `Create source account` request.

## Example Usage

```typescript
import { SourceAccountBatchCreateResponse } from "@codat/bank-feeds/sdk/models/shared";
import { Decimal } from "@codat/bank-feeds/sdk/types";

let value: SourceAccountBatchCreateResponse = {
  sourceAccountId: "12345",
  result: {
    account: {
      id: "acc-002",
      accountName: "account-081",
      accountType: "Credit",
      accountNumber: "12345670",
      sortCode: "123456",
      currency: "GBP",
      balance: new Decimal("99.99"),
      modifiedDate: "2023-01-09T14:14:14.1057478Z",
      status: "pending",
    },
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `sourceAccountId`                                                                                     | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Unique ID for the source account.                                                                     | 12345                                                                                                 |
| `result`                                                                                              | [shared.SourceAccountBatchCreateResult](../../../sdk/models/shared/sourceaccountbatchcreateresult.md) | :heavy_minus_sign:                                                                                    | Status details and corresponding object of the `Create account` operation.                            |                                                                                                       |