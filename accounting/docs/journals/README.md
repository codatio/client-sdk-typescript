# journals

## Overview

Journals

### Available Operations

* [create](#create) - Create journal
* [get](#get) - Get journal
* [getCreateModel](#getcreatemodel) - Get create journal model
* [list](#list) - List journals

## create

Posts a new journal to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create journal model](https://docs.codat.io/accounting-api#/operations/get-create-journals-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journals) for integrations that support creating journals.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateJournalResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, JournalStatusEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.journals.create({
  journal: {
    createdOn: "eos",
    hasChildren: false,
    id: "3394a68c-c80d-430f-b721-64d0a91fe9d9",
    journalCode: "autem",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "minima",
    name: "Sherry Reynolds",
    parentId: "necessitatibus",
    sourceModifiedDate: "perferendis",
    status: JournalStatusEnum.Unknown,
    type: "doloremque",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 569651,
}).then((res: CreateJournalResponse | AxiosError) => {
  if (res instanceof CreateJournalResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## get

Gets a single journal corresponding to the given ID.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetJournalResponse } from "@codat/accounting/dist/sdk/models/operations";
import { JournalStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.journals.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  journalId: "quod",
}).then((res: GetJournalResponse | AxiosError) => {
  if (res instanceof GetJournalResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateModel

Get create journal model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journals) for integrations that support creating journals.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateJournalsModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.journals.getCreateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateJournalsModelResponse | AxiosError) => {
  if (res instanceof GetCreateJournalsModelResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets the latest journals for a company, with pagination

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListJournalsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { JournalStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.journals.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "vel",
}).then((res: ListJournalsResponse | AxiosError) => {
  if (res instanceof ListJournalsResponse && res.statusCode == 200) {
    // handle response
  }
});
```
