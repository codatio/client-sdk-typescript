# SyncAsBankFeeds

## Example Usage

```typescript
import { SyncAsBankFeeds } from "@codat/bank-feeds/sdk/models/shared";

let value: SyncAsBankFeeds = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `enableSync`                                                                  | *boolean*                                                                     | :heavy_minus_sign:                                                            | True if bank feeds sync is enabled.                                           |
| `selectedBankAccountId`                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | The bank account ID being synced.                                             |
| `bankAccountOptions`                                                          | [shared.BankAccountOption](../../../sdk/models/shared/bankaccountoption.md)[] | :heavy_minus_sign:                                                            | N/A                                                                           |