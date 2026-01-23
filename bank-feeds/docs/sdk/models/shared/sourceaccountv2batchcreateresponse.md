# SourceAccountV2BatchCreateResponse

Account ID and resulting object of the batch `Create source account` request.

## Example Usage

```typescript
import { SourceAccountV2BatchCreateResponse } from "@codat/bank-feeds/sdk/models/shared";
import { Decimal } from "@codat/bank-feeds/sdk/types";

let value: SourceAccountV2BatchCreateResponse = {
  sourceAccountId: "12345",
  result: {
    account: {
      id: "acc-001",
      accountName: "account-081",
      accountType: "checking",
      accountNumber: "12345670",
      routingInfo: {
        bankCode: "21001088",
      },
      currency: "GBP",
      balance: new Decimal("99.99"),
      accountInfo: {
        description: "account description 1",
        nickname: "account 123",
        accountOpenDate: "2023-05-06",
        availableBalance: new Decimal("10"),
      },
      modifiedDate: "2024-08-02T00:00:00.000Z",
      status: "pending",
      feedStartDate: "2024-05-01",
    },
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `sourceAccountId`                                                                                         | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Unique ID for the source account.                                                                         | 12345                                                                                                     |
| `result`                                                                                                  | [shared.SourceAccountV2BatchCreateResult](../../../sdk/models/shared/sourceaccountv2batchcreateresult.md) | :heavy_minus_sign:                                                                                        | Status details and corresponding object of the `Create account` operation.                                |                                                                                                           |