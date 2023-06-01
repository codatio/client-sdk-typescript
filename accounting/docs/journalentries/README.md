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

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries) to see which integrations support this endpoint.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateJournalEntryResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.journalEntries.create({
  journalEntry: {
    createdOn: "quas",
    description: "soluta",
    id: "d380c29a-a8dd-471b-9daa-30b7b91449ae",
    journalLines: [
      {
        accountRef: {
          id: "9c088d41-8bb7-4180-8f42-3d543935f377",
          name: "Devin Hintz",
        },
        currency: "nam",
        description: "ducimus",
        netAmount: 8873.03,
        tracking: {
          recordRefs: [
            {
              dataType: "velit",
              id: "b6a3c523-105e-47c3-8cab-0ecb812a6614",
            },
            {
              dataType: "atque",
              id: "944a8e90-8507-45bc-a538-253343fb0a4e",
            },
            {
              dataType: "autem",
              id: "6ea47578-d171-4e29-8181-8fc679b6b2f2",
            },
          ],
        },
      },
      {
        accountRef: {
          id: "5359b855-d015-4b62-88b8-3a38a8a88c14",
          name: "Miss Andrea Bartell",
        },
        currency: "maxime",
        description: "deserunt",
        netAmount: 9204.81,
        tracking: {
          recordRefs: [
            {
              dataType: "et",
              id: "ae1ecf8c-3494-46bb-a7a0-5a8b4a9ec5b3",
            },
            {
              dataType: "eum",
              id: "88cca363-2727-460e-966e-97e054103347",
            },
            {
              dataType: "pariatur",
              id: "78ff2491-145f-4ab9-a59a-4af336664eaa",
            },
          ],
        },
      },
    ],
    journalRef: {
      id: "6bf2ff14-e8c1-4b35-aacc-edacc5227814",
      name: "Mr. Sherman Pfannerstill",
    },
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "cum",
    postedOn: "quo",
    recordRef: {
      dataType: "aliquam",
      id: "1ea1342d-4104-4a25-af71-de57a11d614a",
    },
    sourceModifiedDate: "tempora",
    supplementalData: {
      content: {
        "dicta": {
          "laboriosam": "sint",
          "dolores": "repudiandae",
        },
      },
    },
    updatedOn: "fuga",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 284514,
}).then((res: CreateJournalEntryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## delete

﻿> **Use with caution**
>
>Because Journal Entries underpin every transaction in an accounting platform, deleting a Journal Entry can affect every transaction for a given company.
> 
> **Before you proceed, make sure you understand the implications of deleting Journal Entries from an accounting perspective.**

The _Delete Journal entries_ endpoint allows you to delete a specified Journal entry from an accounting platform.

### Process
1. Pass the `{journalEntryId}` to the _Delete Journal Entries_ endpoint and store the `pushOperationKey` returned.
2. Check the status of the delete by checking the status of push operation either via
   1. [Push operation webhook](/introduction/webhooks/core-rules-types#push-operation-status-has-changed) (advised),
   2. [Push operation status endpoint](https://docs.codat.io/codat-api#/operations/get-push-operation). 
   
   A `Success` status indicates that the Journal Entry object was deleted from the accounting platform.
3. (Optional) Check that the Journal Entry was deleted from the accounting platform.

### Effect on related objects

Be aware that deleting a Journal Entry from an accounting platform might cause related objects to be modified. For example, if you delete the Journal Entry for a paid invoice in QuickBooks Online, the invoice is deleted but the payment against that invoice is not. The payment is converted to a payment on account.

## Integration specifics
Integrations that support soft delete do not permanently delete the object in the accounting platform.

| Integration | Soft Deleted | 
|-------------|--------------|
| QuickBooks Online | Yes    |       

> **Supported Integrations**
> 
> This functionality is currently only supported for our QuickBooks Online integration. Check out our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) to see what we're building next, and to submit ideas for new features.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DeleteJournalEntryResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.journalEntries.delete({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  journalEntryId: "totam",
}).then((res: DeleteJournalEntryResponse) => {
  if (res.statusCode == 200) {
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

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.journalEntries.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  journalEntryId: "laboriosam",
}).then((res: GetJournalEntryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateModel

﻿Get create journal entry model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries) for integrations that support creating journal entries.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateJournalEntriesModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.journalEntries.getCreateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateJournalEntriesModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

﻿Gets the latest journal entries for a company, with pagination.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListJournalEntriesResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.journalEntries.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "esse",
}).then((res: ListJournalEntriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
