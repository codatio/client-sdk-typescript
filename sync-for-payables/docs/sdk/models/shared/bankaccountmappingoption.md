# BankAccountMappingOption

## Example Usage

```typescript
import { BankAccountMappingOption } from "@codat/sync-for-payables/sdk/models/shared";

let value: BankAccountMappingOption = {
  id: "3d5a8e00-d108-4045-8823-7f342676cffa",
  name: "Bank of Dave current account",
  status: "Active",
  sourceModifiedDate: "2022-10-23T00:00:00Z",
};
```

## Fields

| Field                                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                                             | Example                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                      | Identifier for the account, unique for the company in the accounting software.                                                                                                                                                                                          | 3d5a8e00-d108-4045-8823-7f342676cffa                                                                                                                                                                                                                                    |
| `name`                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                      | Name of the bank account in the accounting software.                                                                                                                                                                                                                    | Bank of Dave current account                                                                                                                                                                                                                                            |
| `accountNumber`                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                      | Account number for the bank account.<br/><br/>Xero integrations<br/>Only a UK account number shows for bank accounts with GBP currency and a combined total of sort code and account number that equals 14 digits, For non-GBP accounts, the full bank account number is populated. |                                                                                                                                                                                                                                                                         |
| `nominalCode`                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                      | Code used to identify each nominal account for a business.                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                         |
| `sortCode`                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                      | Sort code for the bank account.<br/><br/>Xero integrations<br/>The sort code is only displayed when the currency = GBP and the sort code and account number sum to 14 digits. For non-GBP accounts, this field is not populated.                                        |                                                                                                                                                                                                                                                                         |
| `currency`                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                      | The bank account's base currency.                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                         |
| `status`                                                                                                                                                                                                                                                                | [shared.BankAccountStatus](../../../sdk/models/shared/bankaccountstatus.md)                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                      | The current status of the bank account.                                                                                                                                                                                                                                 | Active                                                                                                                                                                                                                                                                  |
| `accountType`                                                                                                                                                                                                                                                           | [shared.BankAccountType](../../../sdk/models/shared/bankaccounttype.md)                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                      | The type of transactions and balances on the account.  <br/>For Credit accounts, positive balances are liabilities, and positive transactions **reduce** liabilities.  <br/>For Debit accounts, positive balances are assets, and positive transactions **increase** assets. |                                                                                                                                                                                                                                                                         |
| `sourceModifiedDate`                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                                                     | 2022-10-23 00:00:00 +0000 UTC                                                                                                                                                                                                                                           |