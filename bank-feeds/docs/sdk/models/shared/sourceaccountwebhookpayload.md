# SourceAccountWebhookPayload

## Example Usage

```typescript
import { SourceAccountWebhookPayload } from "@codat/bank-feeds/sdk/models/shared";

let value: SourceAccountWebhookPayload = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `referenceCompany`                                                        | [shared.CompanyReference](../../../sdk/models/shared/companyreference.md) | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |
| `companyId`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | Unique identifier for your SMB in Codat.                                  | 8a210b68-6988-11ed-a1eb-0242ac120002                                      |
| `connectionId`                                                            | *string*                                                                  | :heavy_minus_sign:                                                        | Unique identifier for a company's data connection.                        | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                      |
| `sourceAccount`                                                           | *SourceAccountV2 | SourceAccount*                                         | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |