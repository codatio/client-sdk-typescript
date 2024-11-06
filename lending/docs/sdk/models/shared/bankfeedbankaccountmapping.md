# BankFeedBankAccountMapping

## Example Usage

```typescript
import { BankFeedBankAccountMapping } from "@codat/lending/sdk/models/shared";

let value: BankFeedBankAccountMapping = {
  sourceAccountId: "acc-002",
  targetAccountId: "account-081",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `sourceAccountId`                | *string*                         | :heavy_check_mark:               | Unique ID for the source account |
| `targetAccountId`                | *string*                         | :heavy_minus_sign:               | Unique ID for the target account |