# accounts

## Overview

Where payments are made or received, and bank transactions are recorded.

### Available Operations

* [get](#get) - Get account
* [list](#list) - List accounts

## get

Gets a specified bank account for a given company

### Example Usage

```typescript
import { CodatBanking } from "@codat/banking";
import { GetAccountResponse } from "@codat/banking/dist/sdk/models/operations";
import { AccountIdentifierType, AccountType } from "@codat/banking/dist/sdk/models/shared";

const sdk = new CodatBanking({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accounts.get({
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets a list of all bank accounts of the SMB, with rich data like balances, account numbers and institutions holdingthe accounts.

### Example Usage

```typescript
import { CodatBanking } from "@codat/banking";
import { ListAccountsResponse } from "@codat/banking/dist/sdk/models/operations";
import { AccountIdentifierType, AccountType } from "@codat/banking/dist/sdk/models/shared";

const sdk = new CodatBanking({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accounts.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "distinctio",
}).then((res: ListAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
