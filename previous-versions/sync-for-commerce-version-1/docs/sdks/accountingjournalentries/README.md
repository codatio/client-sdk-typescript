# AccountingJournalEntries

## Overview

Journal entries

### Available Operations

* [createAccountingJournalEntry](#createaccountingjournalentry) - Create journal entry

## createAccountingJournalEntry

The *Create journal entry* endpoint creates a new [journal entry](https://docs.codat.io/accounting-api#/schemas/JournalEntry) for a given company's connection.

[Journal entries](https://docs.codat.io/accounting-api#/schemas/JournalEntry) are  made in a company's general ledger, or accounts, when transactions are approved.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create journal entry model](https://docs.codat.io/accounting-api#/operations/get-create-journalEntries-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce-version-1";
import { CreateAccountingJournalEntryResponse } from "@codat/sync-for-commerce-version-1/dist/sdk/models/operations";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountingJournalEntries.createAccountingJournalEntry({
  accountingJournalEntry: {
    createdOn: "2022-10-23T00:00:00.000Z",
    description: "nam",
    id: "5a341814-3010-4421-813d-5208ece7e253",
    journalLines: [
      {
        accountRef: {
          id: "b668451c-6c6e-4205-a16d-eab3fec9578a",
          name: "Marjorie Hickle",
        },
        currency: "aspernatur",
        description: "ducimus",
        netAmount: 2005.16,
        tracking: {
          recordRefs: [
            {
              dataType: "accountTransaction",
              id: "8418d162-309f-4b09-a992-1aefb9f58c4d",
            },
          ],
        },
      },
    ],
    journalRef: {
      id: "86e68e4b-e056-4013-b59d-a757a59ecfef",
      name: "Loretta Tremblay DDS",
    },
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    postedOn: "2022-10-23T00:00:00.000Z",
    recordRef: {
      dataType: "journalEntry",
      id: "383c2beb-4773-473c-8d72-f64d1db1f2c4",
    },
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    supplementalData: {
      content: {
        "illo": {
          "accusantium": "vel",
        },
      },
    },
    updatedOn: "2022-10-23T00:00:00.000Z",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 107617,
}).then((res: CreateAccountingJournalEntryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.CreateAccountingJournalEntryRequest](../../models/operations/createaccountingjournalentryrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `retries`                                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                           | :heavy_minus_sign:                                                                                               | Configuration to override the default retry behavior of the client.                                              |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.CreateAccountingJournalEntryResponse](../../models/operations/createaccountingjournalentryresponse.md)>**

