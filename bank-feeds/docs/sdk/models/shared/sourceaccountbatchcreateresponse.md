# SourceAccountBatchCreateResponse

The account ID and source account object of the successfully created source account.

## Example Usage

```typescript
import { SourceAccountBatchCreateResponse } from "@codat/bank-feeds/sdk/models/shared";
import { Decimal } from "@codat/bank-feeds/sdk/types";

let value: SourceAccountBatchCreateResponse = {
  sourceAccountId: "12345",
  result: {
    id: "acc-002",
    accountName: "account-081",
    accountType: "Credit",
    accountNumber: "12345670",
    sortCode: "123456",
    currency: "GBP",
    balance: new Decimal("99.99"),
    modifiedDate: "2023-01-09T14:14:14.1057478Z",
    status: "pending",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                             | Example                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceAccountId`                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                      | Unique ID for the source account.                                                                                                                                                                                                       | 12345                                                                                                                                                                                                                                   |
| `result`                                                                                                                                                                                                                                | [shared.SourceAccount](../../../sdk/models/shared/sourceaccount.md)                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                      | The target bank account in a supported accounting software for ingestion into a bank feed.                                                                                                                                              | {<br/>"id": "acc-002",<br/>"accountName": "account-081",<br/>"sortCode": "123456",<br/>"accountType": "Credit",<br/>"accountNumber": "12345670",<br/>"currency": "GBP",<br/>"balance": 99.99,<br/>"modifiedDate": "2023-01-09T14:14:14.1057478Z",<br/>"status": "pending"<br/>} |