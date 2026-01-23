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
    id: "acc-001",
    accountName: "account-081",
    accountType: "checking",
    accountNumber: "12345670",
    routingInfo: {
      bankCode: "21001088",
      type: "bankcode",
    },
    currency: "GBP",
    balance: new Decimal("99.99"),
    accountInfo: {
      description: "account description 1",
      nickname: "account 123",
      accountOpenDate: "2023-05-06",
      availableBalance: new Decimal("10"),
    },
    modifiedDate: "2024-08-02T00:00:00.000Z",
    status: "pending",
    feedStartDate: "2024-05-01",
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