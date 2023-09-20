# LoanWriteback.Transfers

### Available Operations

* [create](#create) - Create transfer
* [getCreateModel](#getcreatemodel) - Get create transfer model

## create

The *Create transfer* endpoint creates a new [transfer](https://docs.codat.io/accounting-api#/schemas/Transfer) for a given company's connection.

[Transfers](https://docs.codat.io/accounting-api#/schemas/Transfer) record the movement of money between two bank accounts, or between a bank account and a nominal account.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create transfer model](https://docs.codat.io/accounting-api#/operations/get-create-transfers-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=transfers) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { CreateTransferResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.loanWriteback.transfers.create({
  accountingTransfer: {
    contactRef: {
      dataType: "laborum",
      id: "c366c8dd-6b14-4429-8747-4778a7bd466d",
    },
    date: "2022-10-23T00:00:00.000Z",
    depositedRecordRefs: [
      {
        dataType: "accountTransaction",
        id: "c10ab3cd-ca42-4519-84e5-23c7e0bc7178",
      },
    ],
    description: "accusamus",
    from: {
      accountRef: {
        id: "4796f2a7-0c68-4828-aaa4-82562f222e98",
        name: "Tamara Vandervort IV",
      },
      amount: 8003.79,
      currency: "EUR",
    },
    id: "e61e6b7b-95bc-40ab-bc20-c4f3789fd871",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    supplementalData: {
      content: {
        "sint": {
          "pariatur": "possimus",
        },
      },
    },
    to: {
      accountRef: {
        id: "2efd121a-a6f1-4e67-8bdb-04f15756082d",
        name: "Cassandra Ward V",
      },
      amount: 9453.02,
      currency: "GBP",
    },
    trackingCategoryRefs: [
      {
        id: "d1705133-9d08-4086-a184-0394c26071f9",
        name: "Camille Hirthe III",
      },
    ],
  },
  allowSyncOnPushComplete: false,
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 310067,
}).then((res: CreateTransferResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreateTransferRequest](../../models/operations/createtransferrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `retries`                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                   | Configuration to override the default retry behavior of the client.                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateTransferResponse](../../models/operations/createtransferresponse.md)>**


## getCreateModel

The *Get create transfer model* endpoint returns the expected data for the request payload when creating a [transfer](https://docs.codat.io/accounting-api#/schemas/Transfer) for a given company and integration.

[Transfers](https://docs.codat.io/accounting-api#/schemas/Transfer) record the movement of money between two bank accounts, or between a bank account and a nominal account.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=transfers) for integrations that support creating a transfer.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetCreateTransfersModelResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.loanWriteback.transfers.getCreateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateTransfersModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetCreateTransfersModelRequest](../../models/operations/getcreatetransfersmodelrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `retries`                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetCreateTransfersModelResponse](../../models/operations/getcreatetransfersmodelresponse.md)>**

