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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.bankAccounts.create({
  bankAccount: {
    accountName: "dolor",
    accountNumber: "natus",
    accountType: BankAccountBankAccountType.Credit,
    availableBalance: 9437.49,
    balance: 9025.99,
    currency: "fuga",
    iBan: "in",
    id: "596eb10f-aaa2-4352-8595-5907aff1a3a2",
    institution: "repellat",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "mollitia",
    nominalCode: "occaecati",
    overdraftLimit: 2532.91,
    sortCode: "commodi",
    sourceModifiedDate: "quam",
  },
  allowSyncOnPushComplete: false,
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 474697,
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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.bankAccounts.get({
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
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
    authHeader: "YOUR_API_KEY_HERE",
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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.bankAccounts.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "velit",
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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.bankAccounts.update({
  bankAccount: {
    accountName: "error",
    accountNumber: "quia",
    accountType: BankAccountBankAccountType.Credit,
    availableBalance: 1103.75,
    balance: 6747.52,
    currency: "animi",
    iBan: "enim",
    id: "2c3f5ad0-19da-41ff-a78f-097b0074f154",
    institution: "iusto",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "dicta",
    nominalCode: "harum",
    overdraftLimit: 3179.83,
    sortCode: "accusamus",
    sourceModifiedDate: "commodi",
  },
  bankAccountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 918236,
}).then((res: UpdateBankAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
