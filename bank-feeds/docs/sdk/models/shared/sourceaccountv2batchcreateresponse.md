# SourceAccountV2BatchCreateResponse

Account ID and resulting object of the batch `Create source account` request.

## Example Usage

```typescript
import { SourceAccountV2BatchCreateResponse } from "@codat/bank-feeds/sdk/models/shared";

let value: SourceAccountV2BatchCreateResponse = {
  sourceAccountId: "12345",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `sourceAccountId`                                                                                         | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Unique ID for the source account.                                                                         | 12345                                                                                                     |
| `result`                                                                                                  | [shared.SourceAccountV2BatchCreateResult](../../../sdk/models/shared/sourceaccountv2batchcreateresult.md) | :heavy_minus_sign:                                                                                        | Status details and corresponding object of the `Create account` operation.                                |                                                                                                           |