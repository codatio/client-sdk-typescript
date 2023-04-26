# journalEntries

## Overview

Journal entries

### Available Operations

* [createJournalEntry](#createjournalentry) - Create journal entry
* [deleteJournalEntry](#deletejournalentry) - Delete journal entry
* [getCreateJournalEntriesModel](#getcreatejournalentriesmodel) - Get create journal entry model
* [getJournalEntry](#getjournalentry) - Get journal entry
* [listJournalEntries](#listjournalentries) - List journal entries

## createJournalEntry

Posts a new journalEntry to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create journal entry model](https://docs.codat.io/accounting-api#/operations/get-create-journalEntries-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries) for integrations that support creating journal entries.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateJournalEntryRequest, CreateJournalEntryResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateJournalEntryRequest = {
  journalEntry: {
    createdOn: "tempora",
    description: "nesciunt",
    id: "fb0a4e66-ea47-4578-9171-e2941818fc67",
    journalLines: [
      {
        accountRef: {
          id: "b6b2f253-59b8-455d-815b-62c8b83a38a8",
          name: "Dwayne MacGyver I",
        },
        currency: "labore",
        description: "consequuntur",
        netAmount: 317.03,
        tracking: {
          recordRefs: [
            {
              dataType: "optio",
              id: "2caeb1ae-1ecf-48c3-8946-bba7a05a8b4a",
            },
          ],
        },
      },
      {
        accountRef: {
          id: "9ec5b368-8cca-4363-a727-60e966e97e05",
          name: "Teresa Anderson",
        },
        currency: "aliquam",
        description: "esse",
        netAmount: 8634.7,
        tracking: {
          recordRefs: [
            {
              dataType: "corrupti",
              id: "ff249114-5fab-49e5-9a4a-f336664eaa6b",
            },
            {
              dataType: "sapiente",
              id: "2ff14e8c-1b35-42ac-8eda-cc5227814eca",
            },
          ],
        },
      },
      {
        accountRef: {
          id: "016bc41e-a134-42d4-904a-25ef71de57a1",
          name: "Mrs. Janis Keeling",
        },
        currency: "tempora",
        description: "velit",
        netAmount: 1191.73,
        tracking: {
          recordRefs: [
            {
              dataType: "laboriosam",
              id: "92ea4867-3d52-42b8-a8a9-030660f024c7",
            },
            {
              dataType: "sint",
              id: "b4cc64c2-b3a3-42c4-88ad-e62f6aa558a6",
            },
          ],
        },
      },
    ],
    journalRef: {
      id: "5e208301-6ca3-44bb-87d4-f62127a607d1",
      name: "Betty Jacobi",
    },
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "quaerat",
    postedOn: "nostrum",
    recordRef: {
      dataType: "beatae",
      id: "4c3db9ca-9f38-4bd2-be87-8703493f49aa",
    },
    sourceModifiedDate: "laudantium",
    supplementalData: {
      content: {
        "ex": {
          "mollitia": "sequi",
          "eos": "laudantium",
        },
        "adipisci": {
          "iusto": "natus",
        },
      },
    },
    updatedOn: "facilis",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 465310,
};

sdk.journalEntries.createJournalEntry(req).then((res: CreateJournalEntryResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteJournalEntry

Deletes a journal entry from the accounting package for a given company.

> **Supported Integrations**
> 
> This functionality is currently only supported for our QuickBooks Online integration. Check out our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) to see what we're building next, and to submit ideas for new features.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DeleteJournalEntryRequest, DeleteJournalEntryResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteJournalEntryRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  journalEntryId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.journalEntries.deleteJournalEntry(req).then((res: DeleteJournalEntryResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateJournalEntriesModel

Get create journal entry model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries) for integrations that support creating journal entries.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateJournalEntriesModelRequest, GetCreateJournalEntriesModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreateJournalEntriesModelRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.journalEntries.getCreateJournalEntriesModel(req).then((res: GetCreateJournalEntriesModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getJournalEntry

Gets a single JournalEntry corresponding to the given ID.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetJournalEntryRequest, GetJournalEntryResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetJournalEntryRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  journalEntryId: "beatae",
};

sdk.journalEntries.getJournalEntry(req).then((res: GetJournalEntryResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listJournalEntries

Gets the latest journal entries for a company, with pagination

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListJournalEntriesRequest, ListJournalEntriesResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListJournalEntriesRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "error",
};

sdk.journalEntries.listJournalEntries(req).then((res: ListJournalEntriesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
