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

The *Create journal entry* endpoint creates a new [journal entry](https://docs.codat.io/accounting-api#/schemas/JournalEntry) for a given company's connection.

[Journal entries](https://docs.codat.io/accounting-api#/schemas/JournalEntry) are  made in a company's general ledger, or accounts, when transactions are approved.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create journal entry model](https://docs.codat.io/accounting-api#/operations/get-create-journalEntries-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries) for integrations that support creating an account.


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
    createdOn: "2022-10-23T00:00:00.000Z",
    description: "laudantium",
    id: "89d9ef93-2e90-400a-93ad-8124208efd23",
    journalLines: [
      {
        accountRef: {
          id: "11898e73-879e-4fbe-8bae-babb794536e9",
          name: "Miss Shannon Hauck",
        },
        currency: "unde",
        description: "odio",
        netAmount: 4332.19,
        tracking: {
          recordRefs: [
            {
              dataType: "architecto",
              id: "720b77a5-a536-45a7-9f15-271f01c0d361",
            },
          ],
        },
      },
      {
        accountRef: {
          id: "fed8dc5e-ffb4-453e-9089-e871fdb4d697",
          name: "Bryant Strosin",
        },
        currency: "molestias",
        description: "corrupti",
        netAmount: 3623.77,
        tracking: {
          recordRefs: [
            {
              dataType: "incidunt",
              id: "3734a5d7-2d9e-4dd7-85be-5e7afe55297b",
            },
            {
              dataType: "mollitia",
              id: "6281f44e-3a23-4394-a68c-c80d30ff7216",
            },
            {
              dataType: "quaerat",
              id: "d0a91fe9-d965-453b-89e0-009c6692de7b",
            },
            {
              dataType: "ipsum",
              id: "562201a6-aab4-4ae7-b1a5-b908d4e30491",
            },
          ],
        },
      },
    ],
    journalRef: {
      id: "aa35d4a8-39f0-43ba-b77b-918f03139845",
      name: "Dr. Delores Towne",
    },
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    postedOn: "2022-10-23T00:00:00.000Z",
    recordRef: {
      dataType: "quam",
      id: "e23ecb06-0465-42e2-ba3d-6c657e9de8f7",
    },
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    supplementalData: {
      content: {
        "consequatur": {
          "fugiat": "veritatis",
        },
      },
    },
    updatedOn: "2022-10-23T00:00:00.000Z",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 526773,
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


## delete

﻿> **Use with caution**
>
>Because journal entries underpin every transaction in an accounting platform, deleting a journal entry can affect every transaction for a given company.
> 
> **Before you proceed, make sure you understand the implications of deleting journal entries from an accounting perspective.**

The *Delete journal entry* endpoint allows you to delete a specified journal entry from an accounting platform.

[Journal entries](https://docs.codat.io/accounting-api#/schemas/JournalEntry) are made in a company's general ledger, or accounts, when transactions are approved.

### Process
1. Pass the `{journalEntryId}` to the *Delete journal entry* endpoint and store the `pushOperationKey` returned.
2. Check the status of the delete by checking the status of push operation either via
   1. [Push operation webhook](https://docs.codat.io/introduction/webhooks/core-rules-types#push-operation-status-has-changed) (advised),
   2. [Push operation status endpoint](https://docs.codat.io/codat-api#/operations/get-push-operation). 
   
   A `Success` status indicates that the journal entry object was deleted from the accounting platform.
3. (Optional) Check that the journal entry was deleted from the accounting platform.

### Effect on related objects

Be aware that deleting a journal entry from an accounting platform might cause related objects to be modified. For example, if you delete the journal entry for a paid invoice in QuickBooks Online, the invoice is deleted but the payment against that invoice is not. The payment is converted to a payment on account.

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
  journalEntryId: "ex",
}).then((res: DeleteJournalEntryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteJournalEntryRequest](../../models/operations/deletejournalentryrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteJournalEntryResponse](../../models/operations/deletejournalentryresponse.md)>**


## get

The *Get journal entry* endpoint returns a single journal entry for a given journalEntryId.

[Journal entries](https://docs.codat.io/accounting-api#/schemas/JournalEntry) are  made in a company's general ledger, or accounts, when transactions are approved.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries) for integrations that support getting a specific journal entry.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).


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
  journalEntryId: "dolorum",
}).then((res: GetJournalEntryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetJournalEntryRequest](../../models/operations/getjournalentryrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `retries`                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetJournalEntryResponse](../../models/operations/getjournalentryresponse.md)>**


## getCreateModel

﻿The *Get create journal entry model* endpoint returns the expected data for the request payload when creating a [journal entry](https://docs.codat.io/accounting-api#/schemas/JournalEntry) for a given company and integration.

[Journal entries](https://docs.codat.io/accounting-api#/schemas/JournalEntry) are  made in a company's general ledger, or accounts, when transactions are approved.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries) for integrations that support creating a journal entry.


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

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.GetCreateJournalEntriesModelRequest](../../models/operations/getcreatejournalentriesmodelrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `retries`                                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                           | :heavy_minus_sign:                                                                                               | Configuration to override the default retry behavior of the client.                                              |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.GetCreateJournalEntriesModelResponse](../../models/operations/getcreatejournalentriesmodelresponse.md)>**


## list

The *List journal entries* endpoint returns a list of [journal entries](https://docs.codat.io/accounting-api#/schemas/JournalEntry) for a given company's connection.

[Journal entries](https://docs.codat.io/accounting-api#/schemas/JournalEntry) are  made in a company's general ledger, or accounts, when transactions are approved.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
    

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
  query: "officia",
}).then((res: ListJournalEntriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListJournalEntriesRequest](../../models/operations/listjournalentriesrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListJournalEntriesResponse](../../models/operations/listjournalentriesresponse.md)>**

