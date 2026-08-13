# SourceAccountBatchCreateResponse

Account ID and resulting object of the batch `Create source account` request.

## Example Usage

```typescript
import { SourceAccountBatchCreateResponse } from "@codat/bank-feeds/sdk/models/shared";

let value: SourceAccountBatchCreateResponse = {
  sourceAccountId: "12345",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `sourceAccountId`                                                                                     | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Unique ID for the source account.                                                                     | 12345                                                                                                 |
| `result`                                                                                              | [shared.SourceAccountBatchCreateResult](../../../sdk/models/shared/sourceaccountbatchcreateresult.md) | :heavy_minus_sign:                                                                                    | Status details and corresponding object of the `Create account` operation.                            |                                                                                                       |