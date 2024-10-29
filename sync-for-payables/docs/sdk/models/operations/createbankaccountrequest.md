# CreateBankAccountRequest

## Example Usage

```typescript
import { CreateBankAccountRequest } from "@codat/sync-for-payables/sdk/models/operations";

let value: CreateBankAccountRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  bankAccountPrototype: {
    name: "<value>",
    accountType: "Unknown",
    accountNumber: "<value>",
    currency: "GBP",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `companyId`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | Unique identifier for a company.                                                  | 8a210b68-6988-11ed-a1eb-0242ac120002                                              |
| `connectionId`                                                                    | *string*                                                                          | :heavy_check_mark:                                                                | Unique identifier for a connection.                                               | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                              |
| `idempotencyKey`                                                                  | *string*                                                                          | :heavy_minus_sign:                                                                | A unique identifier to ensure idempotent behaviour for subsequent requests.       |                                                                                   |
| `bankAccountPrototype`                                                            | [shared.BankAccountPrototype](../../../sdk/models/shared/bankaccountprototype.md) | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |