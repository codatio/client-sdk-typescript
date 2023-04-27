# journalEntries

## Overview

Journal entries

### Available Operations

* [create](#create) - Create journal entry
* [delete](#delete) - Delete journal entry
* [get](#get) - Get journal entry
* [getCreateModel](#getcreatemodel) - Get create journal entry model
* [list](#list) - List journal entries

## create

Posts a new journalEntry to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create journal entry model](https://docs.codat.io/accounting-api#/operations/get-create-journalEntries-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries) for integrations that support creating journal entries.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateJournalEntryResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.journalEntries.create({
  journalEntry: {
    createdOn: "delectus",
    description: "id",
    id: "1011a091-b3ec-48b5-b862-de1a9d14fe72",
    journalLines: [
      {
        accountRef: {
          id: "521f9030-3dfc-4338-b97f-ffa6d1d32090",
          name: "Salvatore Boyer",
        },
        currency: "mollitia",
        description: "cumque",
        netAmount: 5632.6,
        tracking: {
          recordRefs: [
            {
              dataType: "accusamus",
              id: "1961ce9b-e41c-4869-9d7d-9719d07b200a",
            },
            {
              dataType: "corporis",
              id: "8ffd2967-df8f-4d88-aa8e-60be620cd9c5",
            },
            {
              dataType: "officia",
              id: "fdd04c37-5251-42be-ae1d-87ecc5fdcea8",
            },
            {
              dataType: "eveniet",
              id: "7a883116-62cd-4a6d-b7c1-d86066237d42",
            },
          ],
        },
      },
      {
        accountRef: {
          id: "27866db8-a749-4e39-8451-1cc75e4f0c00",
          name: "Patty Harber",
        },
        currency: "molestiae",
        description: "ipsam",
        netAmount: 5541.62,
        tracking: {
          recordRefs: [
            {
              dataType: "nobis",
              id: "94562f00-6968-45fc-91a1-73d84bbe24f2",
            },
            {
              dataType: "error",
              id: "834afb07-35cb-4628-9d4a-29aaa1e16915",
            },
            {
              dataType: "nisi",
              id: "f7d2ee20-9505-4bf0-ba93-e94480ca37fb",
            },
            {
              dataType: "ab",
              id: "0789032a-c333-4172-a2dd-79ec74ba7e88",
            },
          ],
        },
      },
      {
        accountRef: {
          id: "ddb36fd1-ccc3-441c-8657-3474f0a740fb",
          name: "Sandy Reichel",
        },
        currency: "illo",
        description: "impedit",
        netAmount: 2164.48,
        tracking: {
          recordRefs: [
            {
              dataType: "doloremque",
              id: "9e763995-d808-4bbe-b944-55ebc550a1c4",
            },
            {
              dataType: "qui",
              id: "6b59c836-6fdc-4c13-9582-c1b855e889d9",
            },
            {
              dataType: "officiis",
              id: "f932e900-0a13-4ad8-9242-08efd2341189",
            },
          ],
        },
      },
      {
        accountRef: {
          id: "8e73879e-fbe8-4bae-babb-794536e90351",
          name: "Rickey Miller",
        },
        currency: "adipisci",
        description: "architecto",
        netAmount: 4393.34,
        tracking: {
          recordRefs: [
            {
              dataType: "voluptatem",
              id: "b77a5a53-65a7-49f1-9271-f01c0d361fed",
            },
          ],
        },
      },
    ],
    journalRef: {
      id: "8dc5effb-453e-4908-9e87-1fdb4d697bdd",
      name: "Sylvester Maggio",
    },
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "repudiandae",
    postedOn: "incidunt",
    recordRef: {
      dataType: "neque",
      id: "734a5d72-d9ed-4d78-9be5-e7afe55297ba",
    },
    sourceModifiedDate: "laboriosam",
    supplementalData: {
      content: {
        "laudantium": {
          "repellat": "aliquam",
        },
      },
    },
    updatedOn: "modi",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 907650,
}).then((res: CreateJournalEntryResponse | AxiosError) => {
  if (res instanceof CreateJournalEntryResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## delete

Deletes a journal entry from the accounting package for a given company.

> **Supported Integrations**
> 
> This functionality is currently only supported for our QuickBooks Online integration. Check out our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) to see what we're building next, and to submit ideas for new features.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DeleteJournalEntryResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.journalEntries.delete({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  journalEntryId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: DeleteJournalEntryResponse | AxiosError) => {
  if (res instanceof DeleteJournalEntryResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## get

Gets a single JournalEntry corresponding to the given ID.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetJournalEntryResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.journalEntries.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  journalEntryId: "dolorem",
}).then((res: GetJournalEntryResponse | AxiosError) => {
  if (res instanceof GetJournalEntryResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateModel

Get create journal entry model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries) for integrations that support creating journal entries.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateJournalEntriesModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.journalEntries.getCreateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateJournalEntriesModelResponse | AxiosError) => {
  if (res instanceof GetCreateJournalEntriesModelResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets the latest journal entries for a company, with pagination

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListJournalEntriesResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.journalEntries.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "laborum",
}).then((res: ListJournalEntriesResponse | AxiosError) => {
  if (res instanceof ListJournalEntriesResponse && res.statusCode == 200) {
    // handle response
  }
});
```
