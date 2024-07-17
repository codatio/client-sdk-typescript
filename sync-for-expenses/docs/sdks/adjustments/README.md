# Adjustments
(*adjustments*)

## Overview

Create transactions that represent your adjustments to your customers' spend.

### Available Operations

* [create](#create) - Create adjustment transaction

## create

Use the *Create adjustment expense* endpoint to create an [adjustment](https://docs.codat.io/sync-for-expenses-api#/schemas/AdjustmentTransactionRequest) in the accounting platform for a given company's connection. 

Adjustments represent write-offs and transaction alterations, such as foreign exchange adjustments, in the form of a journal entry. 

The _Create adjustment_ endpoint is currently only available for QuickBooks Desktop. 

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { Decimal } from "@codat/sync-for-expenses/sdk/types";

const codatSyncExpenses = new CodatSyncExpenses({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncExpenses.adjustments.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    requestBody: [
      {
        id: "77ad642c-1fc6-4fe0-b241-bcdd89dc7fa5",
        date: "2022-10-23T00:00:00Z",
        currency: "Fiji Dollar",
        lines: [
          {
            amount: new Decimal("50"),
            accountRef: {
              id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
            },
            description: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
            trackingRefs: [
              {
                id: "e9a1b63d-9ff0-40e7-8038-016354b987e6",
                dataType: "trackingCategories",
              },
            ],
            invoiceTo: {
              id: "80000002-1674552702",
              type: "customer",
            },
          },
        ],
      },
    ],
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAdjustmentTransactionRequest](../../sdk/models/operations/createadjustmenttransactionrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[shared.AdjustmentTransactionResponse](../../sdk/models/shared/adjustmenttransactionresponse.md)\>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 400,401,402,403,404,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |
