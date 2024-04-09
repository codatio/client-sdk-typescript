# Transfers
(*transfers*)

## Overview

Create transfer transactions.

### Available Operations

* [create](#create) - Create transfer transaction

## create

Use the *Create transfer* endpoint to create or update a [transfer transaction](https://docs.codat.io/sync-for-expenses-api#/schemas/TransferTransaction) in the accounting platform for a given company's connection. 

Transfers record the movement of money between two bank accounts, or between a bank account and a nominal account. Use them to represent actions such as topping up a debit card account or a balance transfer to another credit card.

The `from.amount` and `to.amount` fields are in the native currency of the account.


### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";

async function run() {
  const sdk = new CodatSyncExpenses({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.transfers.create({
    createTransferRequest: {
      date: "2022-10-23T00:00:00Z",
      description: "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
      from: {
        accountRef: {},
      },
      to: {
        accountRef: {},
      },
    },
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.CreateTransferTransactionRequest](../../sdk/models/operations/createtransfertransactionrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `retries`                                                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                       | :heavy_minus_sign:                                                                                             | Configuration to override the default retry behavior of the client.                                            |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.CreateTransferTransactionResponse](../../sdk/models/operations/createtransfertransactionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
