# accounts

## Overview

Accounts

### Available Operations

* [create](#create) - Create account
* [get](#get) - Get account
* [getCreateModel](#getcreatemodel) - Get create account model
* [list](#list) - List accounts

## create

The *Create accounts* endpoint creates a new [account](https://docs.codat.io/accounting-api#/schemas/Account) for a given company's connection.

[Accounts](https://docs.codat.io/accounting-api#/schemas/Account) are the categories a business uses to record accounting transactions.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create account model](https://docs.codat.io/accounting-api#/operations/get-create-chartOfAccounts-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=chartOfAccounts) for integrations that support creating an account.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateAccountResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AccountStatus, AccountType, DataType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accounts.create({
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
    status: AccountStatus.Active,
    type: AccountType.Asset,
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
}).then((res: CreateAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

﻿The *Get account* endpoint returns a single [account](https://docs.codat.io/accounting-api#/schemas/Account) for a given `accountId`.

[Accounts](https://docs.codat.io/accounting-api#/schemas/Account) are the categories a business uses to record accounting transactions.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetAccountResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AccountStatus, AccountType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accounts.get({
  accountId: "ab",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateModel

﻿The *Get create account model* endpoint returns the expected data for the request payload when creating an [account](https://docs.codat.io/accounting-api#/schemas/Account) for a given company and integration.

[Accounts](https://docs.codat.io/accounting-api#/schemas/Account) are the categories a business uses to record accounting transactions.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=chartOfAccounts) for integrations that support creating an account.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateChartOfAccountsModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accounts.getCreateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateChartOfAccountsModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

﻿The *List accounts* endpoint returns a list of [accounts](https://docs.codat.io/accounting-api#/schemas/Account) for a given company's connection.

[Accounts](https://docs.codat.io/accounting-api#/schemas/Account) are the categories a business uses to record accounting transactions.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListAccountsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AccountStatus, AccountType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accounts.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "quis",
}).then((res: ListAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
