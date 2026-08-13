# SourceAccountWebhookPayload

## Example Usage

```typescript
import { SourceAccountWebhookPayload } from "@codat/bank-feeds/sdk/models/shared";

let value: SourceAccountWebhookPayload = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `referenceCompany`                                                        | [shared.CompanyReference](../../../sdk/models/shared/companyreference.md) | :heavy_minus_sign:                                                        | N/A                                                                       |
| `companyId`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | Unique identifier for your SMB in Codat.                                  |
| `connectionId`                                                            | *string*                                                                  | :heavy_minus_sign:                                                        | Unique identifier for a company's data connection.                        |
| `sourceAccount`                                                           | *SourceAccountV2 | SourceAccount*                                         | :heavy_minus_sign:                                                        | N/A                                                                       |