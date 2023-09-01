# journalEntries

## Overview

Journal entries

### Available Operations

* [create](#create) - Create journal entry
* [getCreateModel](#getcreatemodel) - Get create journal entry model

## create

The *Create journal entry* endpoint creates a new [journal entry](https://docs.codat.io/sync-for-payables-api#/schemas/JournalEntry) for a given company's connection.

[Journal entries](https://docs.codat.io/sync-for-payables-api#/schemas/JournalEntry) are  made in a company's general ledger, or accounts, when transactions are approved.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create journal entry model](https://docs.codat.io/sync-for-payables-api#/operations/get-create-journalEntries-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries) for integrations that support creating a journal entry.


### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { CreateJournalEntryResponse } from "@codat/sync-for-payables/dist/sdk/models/operations";

const sdk = new CodatSyncPayables({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.journalEntries.create({
  journalEntry: {
    createdOn: "2022-10-23T00:00:00.000Z",
    description: "nam",
    id: "dc41ff5d-4e2a-4e4f-b5cb-35d17638f1ed",
    journalLines: [
      {
        accountRef: {
          id: "78359ecc-5cb8-460f-8cd5-80ba73810e4f",
          name: "Don Hagenes",
        },
        currency: "magni",
        description: "excepturi",
        netAmount: 4576.85,
        tracking: {
          recordRefs: [
            {
              dataType: "transfer",
              id: "3b1dd3bb-ce24-47b7-a84e-ff50126d71cf",
            },
            {
              dataType: "transfer",
              id: "bd0eb74b-8421-4953-b44b-d3c43159d33e",
            },
            {
              dataType: "invoice",
              id: "953c0011-3986-43aa-81e6-c31cc2f1fcb5",
            },
            {
              dataType: "journalEntry",
              id: "c9a41ffb-e9cb-4d79-9ee6-5e076cc7abf6",
            },
          ],
        },
      },
      {
        accountRef: {
          id: "16ea5c71-6419-434b-90f2-e09d19d2fc2f",
          name: "Merle Cormier Jr.",
        },
        currency: "nemo",
        description: "provident",
        netAmount: 2529.57,
        tracking: {
          recordRefs: [
            {
              dataType: "accountTransaction",
              id: "935d237a-72f9-4084-9d6a-ed4aecb7537c",
            },
            {
              dataType: "transfer",
              id: "9222c9ff-5749-41aa-bfa2-e761f0ca4d45",
            },
          ],
        },
      },
      {
        accountRef: {
          id: "6ef1031e-6899-4f0c-a001-e22cd55cc058",
          name: "Hattie Botsford",
        },
        currency: "possimus",
        description: "nihil",
        netAmount: 3758.77,
        tracking: {
          recordRefs: [
            {
              dataType: "accountTransaction",
              id: "71fc820c-65b0-437b-b8e0-cc885187e4de",
            },
            {
              dataType: "journalEntry",
              id: "4af28c5d-ddb4-46aa-9cfd-6d828da01319",
            },
            {
              dataType: "journalEntry",
              id: "12964664-5c1d-481f-a904-2f569b7aff0e",
            },
            {
              dataType: "accountTransaction",
              id: "2216cbe0-71bc-4163-a279-a3b084da9925",
            },
          ],
        },
      },
    ],
    journalRef: {
      id: "7d04f408-47a7-442d-8449-6cbdeecf6b99",
      name: "Wilbert Jerde",
    },
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    postedOn: "2022-10-23T00:00:00.000Z",
    recordRef: {
      dataType: "transfer",
      id: "bfdf55c2-94c0-460b-86a1-287764eef6d0",
    },
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    supplementalData: {
      content: {
        "temporibus": {
          "itaque": "nulla",
          "excepturi": "quod",
        },
        "in": {
          "temporibus": "temporibus",
        },
      },
    },
    updatedOn: "2022-10-23T00:00:00.000Z",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 247927,
}).then((res: CreateJournalEntryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CreateJournalEntryRequest](../../models/operations/createjournalentryrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateJournalEntryResponse](../../models/operations/createjournalentryresponse.md)>**


## getCreateModel

﻿The *Get create journal entry model* endpoint returns the expected data for the request payload when creating a [journal entry](https://docs.codat.io/sync-for-payables-api#/schemas/JournalEntry) for a given company and integration.

[Journal entries](https://docs.codat.io/sync-for-payables-api#/schemas/JournalEntry) are  made in a company's general ledger, or accounts, when transactions are approved.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries) for integrations that support creating a journal entry.


### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { GetCreateJournalEntryModelResponse } from "@codat/sync-for-payables/dist/sdk/models/operations";

const sdk = new CodatSyncPayables({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.journalEntries.getCreateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateJournalEntryModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.GetCreateJournalEntryModelRequest](../../models/operations/getcreatejournalentrymodelrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `retries`                                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                       | :heavy_minus_sign:                                                                                           | Configuration to override the default retry behavior of the client.                                          |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.GetCreateJournalEntryModelResponse](../../models/operations/getcreatejournalentrymodelresponse.md)>**

