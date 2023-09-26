# LoanWriteback.DirectCosts

### Available Operations

* [create](#create) - Create direct cost
* [getCreateModel](#getcreatemodel) - Get create direct cost model

## create

The *Create direct cost* endpoint creates a new [direct cost](https://docs.codat.io/lending-api#/schemas/DirectCost) for a given company's connection.

[Direct costs](https://docs.codat.io/lending-api#/schemas/DirectCost) are the expenses associated with a business' operations. For example, purchases of raw materials that are paid off at the point of the purchase and service fees are considered direct costs.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create direct cost model](https://docs.codat.io/lending-api#/operations/get-create-directCosts-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { CreateDirectCostResponse } from "@codat/lending/dist/sdk/models/operations";
import { DataType } from "@codat/lending/dist/sdk/models/shared";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.loanWriteback.directCosts.create({
  accountingDirectCost: {
    contactRef: {
      dataType: DataType.Invoices,
      id: "02d502a9-4bb4-4f63-8969-e9a3efa77dfb",
    },
    currency: "GBP",
    currencyRate: 2974.37,
    id: "cd66ae39-5efb-49ba-88f3-a66997074ba4",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "69b6e214-1959-4890-afa5-63e2516fe4c8",
          name: "Dr. Arnold Bradtke",
        },
        description: "expedita",
        discountAmount: 4692.49,
        discountPercentage: 9988.48,
        itemRef: {
          id: "d2ed0289-21cd-4dc6-9260-1fb576b0d5f0",
          name: "Vincent Anderson",
        },
        quantity: 9441.24,
        subTotal: 7299.91,
        taxAmount: 7499.99,
        taxRateRef: {
          effectiveTaxRate: 1716.29,
          id: "58705320-2c73-4d5f-a9b9-0c28909b3fe4",
          name: "Omar Leuschke",
        },
        totalAmount: 7508.44,
        tracking: {
          invoiceTo: {
            dataType: "accountTransaction",
            id: "f4863332-3f9b-477f-ba41-00674ebf6928",
          },
          recordRefs: [
            {
              dataType: "journalEntry",
              id: "d1ba77a8-9ebf-4737-ae42-03ce5e6a95d8",
            },
          ],
        },
        trackingCategoryRefs: [
          {
            id: "a0d446ce-2af7-4a73-8f3b-e453f870b326",
            name: "Glen Oberbrunner",
          },
        ],
        unitAmount: 2776.28,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "cupiditate",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 7470.8,
          totalAmount: 1175.31,
        },
        payment: {
          accountRef: {
            id: "a8422bb6-79d2-4322-b15b-f0cbb1e31b8b",
            name: "Kevin Willms",
          },
          currency: "GBP",
          currencyRate: 2408.29,
          id: "a1108e0a-dcf4-4b92-9879-fce953f73ef7",
          note: "hic",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "quod",
          totalAmount: 4861.6,
        },
      },
    ],
    reference: "similique",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    subTotal: 8742.88,
    supplementalData: {
      content: {
        "ducimus": {
          "dolore": "quibusdam",
        },
      },
    },
    taxAmount: 8489.44,
    totalAmount: 1943.42,
  },
  allowSyncOnPushComplete: false,
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 617877,
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

The *Get create direct cost model* endpoint returns the expected data for the request payload when creating a [direct cost](https://docs.codat.io/lending-api#/schemas/DirectCost) for a given company and integration.

[Direct costs](https://docs.codat.io/lending-api#/schemas/DirectCost) are purchases of items that are paid off at the point of the purchase.

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

