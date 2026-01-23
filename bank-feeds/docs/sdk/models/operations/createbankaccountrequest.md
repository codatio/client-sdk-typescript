# CreateBankAccountRequest

## Example Usage

```typescript
import { CreateBankAccountRequest } from "@codat/bank-feeds/sdk/models/operations";

let value: CreateBankAccountRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `companyId`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | Unique identifier for a company.                                                  | 8a210b68-6988-11ed-a1eb-0242ac120002                                              |
| `connectionId`                                                                    | *string*                                                                          | :heavy_check_mark:                                                                | Unique identifier for a connection.                                               | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                              |
| `timeoutInMinutes`                                                                | *number*                                                                          | :heavy_minus_sign:                                                                | Time limit for the push operation to complete before it is timed out.             |                                                                                   |
| `bankAccountPrototype`                                                            | [shared.BankAccountPrototype](../../../sdk/models/shared/bankaccountprototype.md) | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |