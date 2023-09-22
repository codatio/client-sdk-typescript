# LoanWriteback.DirectCosts

### Available Operations

* [create](#create) - Create direct cost
* [getCreateModel](#getcreatemodel) - Get create direct cost model

## create

The *Create direct cost* endpoint creates a new [direct cost](https://docs.codat.io/accounting-api#/schemas/DirectCost) for a given company's connection.

[Direct costs](https://docs.codat.io/accounting-api#/schemas/DirectCost) are the expenses associated with a business' operations. For example, purchases of raw materials that are paid off at the point of the purchase and service fees are considered direct costs.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create direct cost model](https://docs.codat.io/accounting-api#/operations/get-create-directCosts-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { CreateDirectCostResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.loanWriteback.directCosts.create({
  accountingDirectCost: {
    contactRef: {
      dataType: "magni",
      id: "d502a94b-b4f6-43c9-a9e9-a3efa77dfb14",
    },
    currency: "EUR",
    currencyRate: 8137.98,
    id: "66ae395e-fb9b-4a88-b3a6-6997074ba446",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "b6e21419-5989-40af-a563-e2516fe4c8b7",
          name: "Diane VonRueden",
        },
        description: "nihil",
        discountAmount: 9988.48,
        discountPercentage: 8411.4,
        itemRef: {
          id: "2ed02892-1cdd-4c69-a601-fb576b0d5f0d",
          name: "Jennifer Runolfsdottir",
        },
        quantity: 7299.91,
        subTotal: 7499.99,
        taxAmount: 1716.29,
        taxRateRef: {
          effectiveTaxRate: 3394.04,
          id: "87053202-c73d-45fe-9b90-c28909b3fe49",
          name: "Casey Stracke",
        },
        totalAmount: 7301.22,
        tracking: {
          invoiceTo: {
            dataType: "transfer",
            id: "48633323-f9b7-47f3-a410-0674ebf69280",
          },
          recordRefs: [
            {
              dataType: "transfer",
              id: "1ba77a89-ebf7-437a-a420-3ce5e6a95d8a",
            },
          ],
        },
        trackingCategoryRefs: [
          {
            id: "0d446ce2-af7a-473c-b3be-453f870b326b",
            name: "Joanna Kohler",
          },
        ],
        unitAmount: 1864.58,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "maxime",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 1175.31,
          totalAmount: 6748.48,
        },
        payment: {
          accountRef: {
            id: "8422bb67-9d23-4227-95bf-0cbb1e31b8b9",
            name: "Dixie Durgan",
          },
          currency: "GBP",
          currencyRate: 6772.63,
          id: "1108e0ad-cf4b-4921-879f-ce953f73ef7f",
          note: "distinctio",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "odio",
          totalAmount: 6304.48,
        },
      },
    ],
    reference: "facilis",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    subTotal: 4981.4,
    supplementalData: {
      content: {
        "dolore": {
          "quibusdam": "illum",
        },
      },
    },
    taxAmount: 1943.42,
    totalAmount: 6178.77,
  },
  allowSyncOnPushComplete: false,
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 773326,
}).then((res: CreateDirectCostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateDirectCostRequest](../../models/operations/createdirectcostrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateDirectCostResponse](../../models/operations/createdirectcostresponse.md)>**


## getCreateModel

The *Get create direct cost model* endpoint returns the expected data for the request payload when creating a [direct cost](https://docs.codat.io/accounting-api#/schemas/DirectCost) for a given company and integration.

[Direct costs](https://docs.codat.io/accounting-api#/schemas/DirectCost) are purchases of items that are paid off at the point of the purchase.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support creating a direct cost.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetCreateDirectCostsModelResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.loanWriteback.directCosts.getCreateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateDirectCostsModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetCreateDirectCostsModelRequest](../../models/operations/getcreatedirectcostsmodelrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetCreateDirectCostsModelResponse](../../models/operations/getcreatedirectcostsmodelresponse.md)>**

