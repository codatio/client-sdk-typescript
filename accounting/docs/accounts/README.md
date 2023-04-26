# accounts

## Overview

Accounts

### Available Operations

* [create](#create) - Create account
* [get](#get) - Get account
* [getCreateModel](#getcreatemodel) - Get create account model
* [list](#list) - List accounts

## create

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
    description: "Invoices the business has issued but has not yet collected payment on.",
    fullyQualifiedCategory: "Asset.Current",
    fullyQualifiedName: "Asset.Current.Accounts Receivable",
    id: "1b6266d1-1e44-46c5-8eb5-a8f98e03124e",
    isBankAccount: false,
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "nulla",
    name: "Accounts Receivable",
    nominalCode: "610",
    sourceModifiedDate: "corrupti",
    status: AccountStatusEnum.Active,
    type: AccountTypeEnum.Asset,
    validDatatypeLinks: [
      {
        links: [
          "error",
          "deserunt",
        ],
        property: "suscipit",
      },
      {
        links: [
          "magnam",
          "debitis",
        ],
        property: "ipsa",
      },
      {
        links: [
          "tempora",
          "suscipit",
          "molestiae",
          "minus",
        ],
        property: "placeat",
      },
      {
        links: [
          "iusto",
          "excepturi",
          "nisi",
        ],
        property: "recusandae",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 836079,
};

sdk.accounts.create(req).then((res: CreateAccountResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## get

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

sdk.accounts.get(req).then((res: GetAccountResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateModel

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

sdk.accounts.getCreateModel(req).then((res: GetCreateChartOfAccountsModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

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
  query: "ab",
};

sdk.accounts.list(req).then((res: ListAccountsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
