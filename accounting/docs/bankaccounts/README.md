# bankAccounts

## Overview

Bank accounts

### Available Operations

* [createBankAccount](#createbankaccount) - Create bank account
* [getAllBankAccount](#getallbankaccount) - Get bank account
* [getBankAccount](#getbankaccount) - Get bank account
* [getCreateUpdateBankAccountsModel](#getcreateupdatebankaccountsmodel) - Get create/update bank account model
* [listBankAccounts](#listbankaccounts) - List bank accounts
* [updateBankAccount](#updatebankaccount) - Update bank account

## createBankAccount

Posts a new bank account to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call []().

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankAccounts) for integrations that support creating bank accounts.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateBankAccountRequest, CreateBankAccountResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  AccountStatusEnum,
  AccountTypeEnum,
  BankAccountBankAccountTypeEnum,
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

const req: CreateBankAccountRequest = {
  bankAccount: {
    accountName: "repellat",
    accountNumber: "mollitia",
    accountType: BankAccountBankAccountTypeEnum.Credit,
    availableBalance: 2532.91,
    balance: 4143.69,
    currency: "quam",
    iBan: "molestiae",
    id: "39251aa5-2c3f-45ad-819d-a1ffe78f097b",
    institution: "perferendis",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "doloremque",
    nominalCode: "reprehenderit",
    overdraftLimit: 2828.07,
    sortCode: "maiores",
    sourceModifiedDate: "dicta",
  },
  allowSyncOnPushComplete: false,
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 359444,
};

sdk.bankAccounts.createBankAccount(req).then((res: CreateBankAccountResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getAllBankAccount

Gets the bank account for given account ID.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetAllBankAccountRequest, GetAllBankAccountResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetAllBankAccountRequest = {
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  query: "dolore",
};

sdk.bankAccounts.getAllBankAccount(req).then((res: GetAllBankAccountResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getBankAccount

Gets the bank account with a given ID

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetBankAccountRequest, GetBankAccountResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BankAccountBankAccountTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetBankAccountRequest = {
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.bankAccounts.getBankAccount(req).then((res: GetBankAccountResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateUpdateBankAccountsModel

Get create/update bank account model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankAccounts) for integrations that support creating and updating bank accounts.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import {
  GetCreateUpdateBankAccountsModelRequest,
  GetCreateUpdateBankAccountsModelResponse,
} from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreateUpdateBankAccountsModelRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.bankAccounts.getCreateUpdateBankAccountsModel(req).then((res: GetCreateUpdateBankAccountsModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listBankAccounts

Gets the list of bank accounts for a given connection

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListBankAccountsRequest, ListBankAccountsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BankAccountBankAccountTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListBankAccountsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "iusto",
};

sdk.bankAccounts.listBankAccounts(req).then((res: ListBankAccountsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateBankAccount

Posts an updated bank account to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call []().

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankAccounts) for integrations that support updating bank accounts.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateBankAccountRequest, UpdateBankAccountResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  BankAccountBankAccountTypeEnum,
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

const req: UpdateBankAccountRequest = {
  bankAccount: {
    accountName: "dicta",
    accountNumber: "harum",
    accountType: BankAccountBankAccountTypeEnum.Unknown,
    availableBalance: 8804.76,
    balance: 4142.63,
    currency: "repudiandae",
    iBan: "quae",
    id: "3b99d488-e1e9-41e4-90ad-2abd44269802",
    institution: "assumenda",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "ipsam",
    nominalCode: "alias",
    overdraftLimit: 1464.41,
    sortCode: "dolorum",
    sourceModifiedDate: "excepturi",
  },
  bankAccountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 270008,
};

sdk.bankAccounts.updateBankAccount(req).then((res: UpdateBankAccountResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
