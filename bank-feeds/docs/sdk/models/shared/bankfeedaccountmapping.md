# BankFeedAccountMapping

## Example Usage

```typescript
import { BankFeedAccountMapping } from "@codat/bank-feeds/sdk/models/shared";

let value: BankFeedAccountMapping = {
  sourceAccountId: "acc-002",
  targetAccountId: "account-081",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `sourceAccountId`                | *string*                         | :heavy_check_mark:               | Unique ID for the source account |
| `targetAccountId`                | *string*                         | :heavy_minus_sign:               | Unique ID for the target account |