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
    description: "pariatur",
    id: "e008e6f8-c5f3-450d-8cdb-5a3418143010",
    journalLines: [
      {
        accountRef: {
          id: "421813d5-208e-4ce7-a253-b668451c6c6e",
          name: "Helen Heller III",
        },
        currency: "at",
        description: "vero",
        netAmount: 6675.93,
        tracking: {
          recordRefs: [
            {
              dataType: "accountTransaction",
              id: "3fec9578-a645-4842-b3a8-418d162309fb",
            },
          ],
        },
      },
    ],
    journalRef: {
      id: "0929921a-efb9-4f58-84d8-6e68e4be0560",
      name: "Sheila Wolff",
    },
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    postedOn: "2022-10-23T00:00:00.000Z",
    recordRef: {
      dataType: "invoice",
      id: "57a59ecf-ef66-4ef1-8aa3-383c2beb4773",
    },
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    supplementalData: {
      content: {
        "neque": {
          "quo": "deleniti",
        },
      },
    },
    updatedOn: "2022-10-23T00:00:00.000Z",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 437814,
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

