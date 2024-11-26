# DefinitionTransaction

## Example Usage

```typescript
import { DefinitionTransaction } from "@codat/sync-for-expenses/sdk/models/shared";

let value: DefinitionTransaction = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | Unique identifier of the transaction.                                         |
| `status`                                                                      | [shared.TransactionStatus1](../../../sdk/models/shared/transactionstatus1.md) | :heavy_minus_sign:                                                            | Status of transaction.                                                        |
| `errorMessage`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | Error message for failed transaction.                                         |