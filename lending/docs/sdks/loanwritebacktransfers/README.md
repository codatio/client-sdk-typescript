# LoanWriteback.Transfers

### Available Operations

* [create](#create) - Create transfer
* [getCreateModel](#getcreatemodel) - Get create transfer model

## create

The *Create transfer* endpoint creates a new [transfer](https://docs.codat.io/lending-api#/schemas/Transfer) for a given company's connection.

[Transfers](https://docs.codat.io/lending-api#/schemas/Transfer) record the movement of money between two bank accounts, or between a bank account and a nominal account.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create transfer model](https://docs.codat.io/lending-api#/operations/get-create-transfers-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=transfers) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { CreateTransferResponse } from "@codat/lending/dist/sdk/models/operations";
import { DataType } from "@codat/lending/dist/sdk/models/shared";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.loanWriteback.transfers.create({
  accountingTransfer: {
    contactRef: {
      dataType: DataType.Invoices,
      id: "ac366c8d-d6b1-4442-9074-74778a7bd466",
    },
    date: "2022-10-23T00:00:00.000Z",
    depositedRecordRefs: [
      {
        dataType: "journalEntry",
        id: "8c10ab3c-dca4-4251-904e-523c7e0bc717",
      },
    ],
    description: "totam",
    from: {
      accountRef: {
        id: "e4796f2a-70c6-4882-82aa-482562f222e9",
        name: "Carl Koch",
      },
      amount: 829.71,
      currency: "USD",
    },
    id: "cbe61e6b-7b95-4bc0-ab3c-20c4f3789fd8",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    supplementalData: {
      content: {
        "a": {
          "error": "sint",
        },
      },
    },
    to: {
      accountRef: {
        id: "dd2efd12-1aa6-4f1e-a74b-db04f1575608",
        name: "Rosemarie Jacobs",
      },
      amount: 6802.7,
      currency: "GBP",
    },
    trackingCategoryRefs: [
      {
        id: "9f1d1705-1339-4d08-886a-1840394c2607",
        name: "Elisa Mosciski",
      },
    ],
  },
  allowSyncOnPushComplete: false,
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 374323,
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

The *Get create transfer model* endpoint returns the expected data for the request payload when creating a [transfer](https://docs.codat.io/lending-api#/schemas/Transfer) for a given company and integration.

[Transfers](https://docs.codat.io/lending-api#/schemas/Transfer) record the movement of money between two bank accounts, or between a bank account and a nominal account.

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

