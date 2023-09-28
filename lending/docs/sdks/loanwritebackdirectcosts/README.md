# LoanWritebackDirectCosts
(*loanWriteback.directCosts*)

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
      id: "502a94bb-4f63-4c96-9e9a-3efa77dfb14c",
    },
    currency: "EUR",
    currencyRate: 4118.2,
    id: "6ae395ef-b9ba-488f-ba66-997074ba4469",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "6e214195-9890-4afa-963e-2516fe4c8b71",
          name: "Elvira Herman",
        },
        description: "repellat",
        discountAmount: 8411.4,
        discountPercentage: 1494.48,
        itemRef: {
          id: "ed028921-cddc-4692-a01f-b576b0d5f0d3",
          name: "Erma Hessel",
        },
        quantity: 7499.99,
        subTotal: 1716.29,
        taxAmount: 3394.04,
        taxRateRef: {
          effectiveTaxRate: 5210.37,
          id: "7053202c-73d5-4fe9-b90c-28909b3fe49a",
          name: "Ervin McLaughlin",
        },
        totalAmount: 9644.9,
        tracking: {
          invoiceTo: {
            dataType: "invoice",
            id: "8633323f-9b77-4f3a-8100-674ebf69280d",
          },
          recordRefs: [
            {
              dataType: "journalEntry",
              id: "ba77a89e-bf73-47ae-8203-ce5e6a95d8a0",
            },
          ],
        },
        trackingCategoryRefs: [
          {
            id: "d446ce2a-f7a7-43cf-bbe4-53f870b326b5",
            name: "Darryl Emard",
          },
        ],
        unitAmount: 5867.84,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "pariatur",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 6748.48,
          totalAmount: 5173.79,
        },
        payment: {
          accountRef: {
            id: "422bb679-d232-4271-9bf0-cbb1e31b8b90",
            name: "Mike Greenholt",
          },
          currency: "EUR",
          currencyRate: 1002.94,
          id: "108e0adc-f4b9-4218-b9fc-e953f73ef7fb",
          note: "quod",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "similique",
          totalAmount: 7085.48,
        },
      },
    ],
    reference: "vero",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    subTotal: 2930.2,
    supplementalData: {
      content: {
        "quibusdam": {
          "illum": "sequi",
        },
      },
    },
    taxAmount: 6178.77,
    totalAmount: 7733.26,
  },
  allowSyncOnPushComplete: false,
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 13236,
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

