# accountingJournalEntries

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
    description: "excepturi",
    id: "e81f30be-3e43-4202-9721-657650664187",
    journalLines: [
      {
        accountRef: {
          id: "d9d21f9a-d030-4c4e-8c11-a0836429068b",
          name: "Pedro Armstrong",
        },
        currency: "quaerat",
        description: "corporis",
        netAmount: 8843.25,
        tracking: {
          recordRefs: [
            {
              dataType: "transfer",
              id: "73bc845e-320a-4319-b4ba-df947c9a867b",
            },
            {
              dataType: "transfer",
              id: "42426665-816d-4dca-8ef5-1fcb4c593ec1",
            },
          ],
        },
      },
    ],
    journalRef: {
      id: "2cdaad0e-c7af-4edb-980d-f448a47f9390",
      name: "Derek Lubowitz",
    },
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    postedOn: "2022-10-23T00:00:00.000Z",
    recordRef: {
      dataType: "accountTransaction",
      id: "3dabf9ef-3ffd-4d9f-bf07-9af4d35724cd",
    },
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    supplementalData: {
      content: {
        "reiciendis": {
          "vero": "eos",
          "quas": "quasi",
        },
      },
    },
    updatedOn: "2022-10-23T00:00:00.000Z",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 509799,
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

