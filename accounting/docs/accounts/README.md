# accounts

## Overview

Accounts

### Available Operations

* [createAccount](#createaccount) - Create account
* [getAccount](#getaccount) - Get account
* [getCreateChartOfAccountsModel](#getcreatechartofaccountsmodel) - Get create account model
* [listAccounts](#listaccounts) - List accounts

## createAccount

Creates a new account for a given company.

Required data may vary by integration. To see what data to post, first call [Get create account model](https://docs.codat.io/accounting-api#/operations/get-create-chartOfAccounts-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=chartOfAccounts) for integrations that support creating an account.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateAccountRequest, CreateAccountResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  AccountStatusEnum,
  AccountTypeEnum,
  DataTypeEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
} from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateAccountRequest = {
  account: {
    currency: "quibusdam",
    currentBalance: 6027.63,
    description: "nulla",
    fullyQualifiedCategory: "corrupti",
    fullyQualifiedName: "illum",
    id: "69a674e0-f467-4cc8-b96e-d151a05dfc2d",
    isBankAccount: false,
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "at",
    name: "Javier Schmidt",
    nominalCode: "totam",
    sourceModifiedDate: "porro",
    status: AccountStatusEnum.Archived,
    type: AccountTypeEnum.Unknown,
    validDatatypeLinks: [
      {
        links: [
          "occaecati",
          "fugit",
          "deleniti",
        ],
        property: "hic",
      },
      {
        links: [
          "totam",
          "beatae",
          "commodi",
          "molestiae",
        ],
        property: "modi",
      },
      {
        links: [
          "impedit",
        ],
        property: "cum",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 456150,
};

sdk.accounts.createAccount(req).then((res: CreateAccountResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getAccount

Gets a single account corresponding to the given ID.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetAccountRequest, GetAccountResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AccountStatusEnum, AccountTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetAccountRequest = {
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.accounts.getAccount(req).then((res: GetAccountResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateChartOfAccountsModel

Get create account model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=chartOfAccounts) for integrations that support creating an account.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateChartOfAccountsModelRequest, GetCreateChartOfAccountsModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreateChartOfAccountsModelRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.accounts.getCreateChartOfAccountsModel(req).then((res: GetCreateChartOfAccountsModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listAccounts

Gets the latest accounts for a company

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListAccountsRequest, ListAccountsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AccountStatusEnum, AccountTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListAccountsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "ipsum",
};

sdk.accounts.listAccounts(req).then((res: ListAccountsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
