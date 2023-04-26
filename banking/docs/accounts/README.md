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
import { GetAccountRequest, GetAccountResponse } from "@codat/banking/dist/sdk/models/operations";
import { AccountIdentifierTypeEnum, AccountTypeEnum } from "@codat/banking/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatBanking({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetAccountRequest = {
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.accounts.get(req).then((res: GetAccountResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets a list of all bank accounts of the SMB, with rich data like balances, account numbers and institutions holdingthe accounts.

### Example Usage

```typescript
import { CodatBanking } from "@codat/banking";
import { ListAccountsRequest, ListAccountsResponse } from "@codat/banking/dist/sdk/models/operations";
import { AccountIdentifierTypeEnum, AccountTypeEnum } from "@codat/banking/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatBanking({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListAccountsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "distinctio",
};

sdk.accounts.list(req).then((res: ListAccountsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
