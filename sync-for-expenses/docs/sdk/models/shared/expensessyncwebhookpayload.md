# ExpensesSyncWebhookPayload

## Example Usage

```typescript
import { ExpensesSyncWebhookPayload } from "@codat/sync-for-expenses/sdk/models/shared";

let value: ExpensesSyncWebhookPayload = {
  referenceCompany: {
    id: "8a210b68-6988-11ed-a1eb-0242ac120002",
    name: "Codat Ltd.",
    description: "Requested early access to the new financing scheme.",
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `referenceCompany`                                                                    | [shared.CompanyReference](../../../sdk/models/shared/companyreference.md)             | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `syncId`                                                                              | *string*                                                                              | :heavy_minus_sign:                                                                    | Unique identifier of the sync.                                                        |
| `transactions`                                                                        | [shared.DefinitionTransaction](../../../sdk/models/shared/definitiontransaction.md)[] | :heavy_minus_sign:                                                                    | N/A                                                                                   |