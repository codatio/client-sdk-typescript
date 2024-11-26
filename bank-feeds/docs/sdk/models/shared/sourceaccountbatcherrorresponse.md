# SourceAccountBatchErrorResponse

Describes the error that occured when trying to create the specified source account.

## Example Usage

```typescript
import { SourceAccountBatchErrorResponse } from "@codat/bank-feeds/sdk/models/shared";

let value: SourceAccountBatchErrorResponse = {
  sourceAccountId: "12345",
  result: {
    statusCode: "409",
    error: "A bank account already exists with the same Id",
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `sourceAccountId`                                     | *string*                                              | :heavy_minus_sign:                                    | Unique ID for the source account.                     | 12345                                                 |
| `result`                                              | [shared.Result](../../../sdk/models/shared/result.md) | :heavy_minus_sign:                                    | N/A                                                   |                                                       |