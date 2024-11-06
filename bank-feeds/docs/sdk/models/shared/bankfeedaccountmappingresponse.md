# BankFeedAccountMappingResponse

## Example Usage

```typescript
import { BankFeedAccountMappingResponse } from "@codat/bank-feeds/sdk/models/shared";

let value: BankFeedAccountMappingResponse = {
  sourceAccountId: "acc-002",
  targetAccountId: "account-081",
  status: "Failed",
  error: "A feed connection already exists to this account",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `sourceAccountId`                      | *string*                               | :heavy_minus_sign:                     | Unique ID for the source account.      |
| `targetAccountId`                      | *string*                               | :heavy_minus_sign:                     | Unique ID for the target account.      |
| `status`                               | *string*                               | :heavy_minus_sign:                     | Status of the POST request.            |
| `error`                                | *string*                               | :heavy_minus_sign:                     | Error returned during the post request |