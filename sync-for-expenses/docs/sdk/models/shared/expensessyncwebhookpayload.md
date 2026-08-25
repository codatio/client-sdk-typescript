# ExpensesSyncWebhookPayload

## Example Usage

```typescript
import { ExpensesSyncWebhookPayload } from "@codat/sync-for-expenses/sdk/models/shared";

let value: ExpensesSyncWebhookPayload = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `referenceCompany`                                                                    | [shared.CompanyReference](../../../sdk/models/shared/companyreference.md)             | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `syncId`                                                                              | *string*                                                                              | :heavy_minus_sign:                                                                    | Unique identifier of the sync.                                                        |
| `transactions`                                                                        | [shared.DefinitionTransaction](../../../sdk/models/shared/definitiontransaction.md)[] | :heavy_minus_sign:                                                                    | N/A                                                                                   |