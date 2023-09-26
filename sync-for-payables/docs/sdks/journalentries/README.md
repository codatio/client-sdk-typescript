# JournalEntries

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
    description: "eaque",
    id: "e189dbb3-0fcb-433e-a055-b197cd44e2f5",
    journalLines: [
      {
        accountRef: {
          id: "2d82d351-3bb6-4f48-b656-bcdb35ff2e4b",
          name: "Bessie Hegmann",
        },
        currency: "est",
        description: "rem",
        netAmount: 7538.9,
        tracking: {
          recordRefs: [
            {
              dataType: "transfer",
              id: "9e7319c1-77d5-425f-b7b1-14eeb52ff785",
            },
          ],
        },
      },
    ],
    journalRef: {
      id: "fc37814d-4c98-4e0c-abb8-9eb75dad636c",
      name: "Maria Bartoletti I",
    },
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    postedOn: "2022-10-23T00:00:00.000Z",
    recordRef: {
      dataType: "accountTransaction",
      id: "b31180f7-39ae-49e0-97eb-809e2810331f",
    },
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    supplementalData: {
      content: {
        "occaecati": {
          "atque": "beatae",
        },
      },
    },
    updatedOn: "2022-10-23T00:00:00.000Z",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 287544,
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

