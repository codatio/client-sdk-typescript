# journals

## Overview

Journals

### Available Operations

* [getCreateJournalsModel](#getcreatejournalsmodel) - Get create journal model
* [getJournal](#getjournal) - Get journal
* [listJournals](#listjournals) - List journals
* [pushJournal](#pushjournal) - Create journal

## getCreateJournalsModel

Get create journal model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journals) for integrations that support creating journals.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateJournalsModelRequest, GetCreateJournalsModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreateJournalsModelRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.journals.getCreateJournalsModel(req).then((res: GetCreateJournalsModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getJournal

Gets a single journal corresponding to the given ID.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetJournalRequest, GetJournalResponse } from "@codat/accounting/dist/sdk/models/operations";
import { JournalStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetJournalRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  journalId: "quibusdam",
};

sdk.journals.getJournal(req).then((res: GetJournalResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listJournals

Gets the latest journals for a company, with pagination

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListJournalsRequest, ListJournalsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { JournalStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListJournalsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "ab",
};

sdk.journals.listJournals(req).then((res: ListJournalsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## pushJournal

Posts a new journal to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create journal model](https://docs.codat.io/accounting-api#/operations/get-create-journals-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journals) for integrations that support creating journals.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { PushJournalRequest, PushJournalResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, JournalStatusEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: PushJournalRequest = {
  journal: {
    createdOn: "eligendi",
    hasChildren: false,
    id: "ea673d86-e3b3-45e4-9a31-35778ce54cac",
    journalCode: "libero",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "perferendis",
    name: "Chris Terry",
    parentId: "ducimus",
    sourceModifiedDate: "minima",
    status: JournalStatusEnum.Unknown,
    type: "labore",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 359649,
};

sdk.journals.pushJournal(req).then((res: PushJournalResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
