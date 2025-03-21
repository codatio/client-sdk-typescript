# SourceAccountWebhookPayload

## Example Usage

```typescript
import { SourceAccountWebhookPayload } from "@codat/bank-feeds/sdk/models/shared";
import { Decimal } from "@codat/bank-feeds/sdk/types";

let value: SourceAccountWebhookPayload = {
  referenceCompany: {
    id: "8a210b68-6988-11ed-a1eb-0242ac120002",
    name: "Codat Ltd.",
    description: "Requested early access to the new financing scheme.",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  sourceAccount: {
    id: "acc-003",
    accountName: "account-095",
    accountType: "Credit",
    accountNumber: "12345671",
    sortCode: "123456",
    currency: "USD",
    balance: new Decimal("0"),
    modifiedDate: "2023-01-09T14:14:14.1057478Z",
    status: "pending",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `referenceCompany`                                                        | [shared.CompanyReference](../../../sdk/models/shared/companyreference.md) | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |
| `companyId`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | Unique identifier for your SMB in Codat.                                  | 8a210b68-6988-11ed-a1eb-0242ac120002                                      |
| `connectionId`                                                            | *string*                                                                  | :heavy_minus_sign:                                                        | Unique identifier for a company's data connection.                        | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                      |
| `sourceAccount`                                                           | *shared.SourceAccountWebhookPayloadSourceAccount*                         | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |