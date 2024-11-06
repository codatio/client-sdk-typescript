# CreateBankAccountMappingRequest

## Example Usage

```typescript
import { CreateBankAccountMappingRequest } from "@codat/bank-feeds/sdk/models/operations";

let value: CreateBankAccountMappingRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  bankFeedAccountMapping: {
    sourceAccountId: "acc-002",
    targetAccountId: "account-081",
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `companyId`                                                                           | *string*                                                                              | :heavy_check_mark:                                                                    | Unique identifier for a company.                                                      | 8a210b68-6988-11ed-a1eb-0242ac120002                                                  |
| `connectionId`                                                                        | *string*                                                                              | :heavy_check_mark:                                                                    | Unique identifier for a connection.                                                   | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                                  |
| `bankFeedAccountMapping`                                                              | [shared.BankFeedAccountMapping](../../../sdk/models/shared/bankfeedaccountmapping.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   | {<br/>"sourceAccountId": "acc-002",<br/>"targetAccountId": "account-081"<br/>}        |