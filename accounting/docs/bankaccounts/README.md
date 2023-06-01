# bankAccounts

## Overview

Bank accounts

### Available Operations

* [create](#create) - Create bank account
* [~~get~~](#get) - Get bank account :warning: **Deprecated**
* [getCreateUpdateModel](#getcreateupdatemodel) - Get create/update bank account model
* [list](#list) - List bank accounts
* [update](#update) - Update bank account

## create

Posts a new bank account to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update bank account model](https://docs.codat.io/accounting-api#/operations/get-create-update-bankAccounts-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankAccounts) to see which integrations support this endpoint.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateBankAccountResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  AccountStatus,
  AccountType,
  BankAccountBankAccountType,
  DataType,
  PushChangeType,
  PushOperationStatus,
} from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bankAccounts.create({
  bankAccount: {
    accountName: "natus",
    accountNumber: "laboriosam",
    accountType: BankAccountBankAccountType.Debit,
    availableBalance: 9025.99,
    balance: 6818.2,
    currency: "in",
    iBan: "corporis",
    id: "96eb10fa-aa23-452c-9955-907aff1a3a2f",
    institution: "mollitia",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "occaecati",
    nominalCode: "numquam",
    overdraftLimit: 4143.69,
    sortCode: "quam",
    sourceModifiedDate: "molestiae",
  },
  allowSyncOnPushComplete: false,
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 244425,
}).then((res: CreateBankAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## ~~get~~

Gets the bank account with a given ID

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetBankAccountResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BankAccountBankAccountType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bankAccounts.get({
  accountId: "error",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetBankAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateUpdateModel

Get create/update bank account model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankAccounts) for integrations that support creating and updating bank accounts.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateUpdateBankAccountsModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bankAccounts.getCreateUpdateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateUpdateBankAccountsModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets the list of bank accounts for a given connection

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListBankAccountsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BankAccountBankAccountType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bankAccounts.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "quia",
}).then((res: ListBankAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## update

Posts an updated bank account to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call []().

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankAccounts) for integrations that support updating bank accounts.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateBankAccountResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BankAccountBankAccountType, DataType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bankAccounts.update({
  bankAccount: {
    accountName: "quis",
    accountNumber: "vitae",
    accountType: BankAccountBankAccountType.Debit,
    availableBalance: 6563.3,
    balance: 3172.02,
    currency: "odit",
    iBan: "quo",
    id: "3f5ad019-da1f-4fe7-8f09-7b0074f15471",
    institution: "harum",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "enim",
    nominalCode: "accusamus",
    overdraftLimit: 4142.63,
    sortCode: "repudiandae",
    sourceModifiedDate: "quae",
  },
  bankAccountId: "ipsum",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 692472,
}).then((res: UpdateBankAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
