# BankAccountPrototype

## Example Usage

```typescript
import { BankAccountPrototype } from "@codat/sync-for-payables/sdk/models/shared";

let value: BankAccountPrototype = {
  name: "<value>",
  accountType: "Debit",
  accountNumber: "<value>",
  currency: "GBP",
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                  | Example                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nominalCode`                                                                                                                                                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                           | Code used to identify each nominal account for a business.                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                              |
| `name`                                                                                                                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                           | Name of the bank account in the accounting software.                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                              |
| `accountType`                                                                                                                                                                                                                                                                                                                                                                                | [shared.BankAccountType](../../../sdk/models/shared/bankaccounttype.md)                                                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                           | The type of transactions and balances on the account.  <br/>For Credit accounts, positive balances are liabilities, and positive transactions **reduce** liabilities.  <br/>For Debit accounts, positive balances are assets, and positive transactions **increase** assets.                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                              |
| `accountNumber`                                                                                                                                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                           | Account number for the bank account.<br/><br/>Xero integrations<br/>Only a UK account number shows for bank accounts with GBP currency and a combined total of sort code and account number that equals 14 digits, For non-GBP accounts, the full bank account number is populated.                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                              |
| `sortCode`                                                                                                                                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                           | Sort code for the bank account. This is relevant to UK bank accounts.<br/><br/>Xero integrations<br/>The sort code is only displayed when the currency = GBP and the sort code and account number sum to 14 digits. For non-GBP accounts, this field is not populated.                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                              |
| `currency`                                                                                                                                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                           | The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.<br/><br/>## Unknown currencies<br/><br/>In line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction. <br/><br/>There are only a very small number of edge cases where this currency code is returned by the Codat system. | GBP                                                                                                                                                                                                                                                                                                                                                                                          |