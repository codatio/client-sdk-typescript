# items

## Overview

Items

### Available Operations

* [create](#create) - Create item
* [get](#get) - Get item
* [getCreateModel](#getcreatemodel) - Get create item model
* [list](#list) - List items

## create

The *Create item* endpoint creates a new [item](https://docs.codat.io/accounting-api#/schemas/Item) for a given company's connection.

[Items](https://docs.codat.io/accounting-api#/schemas/Item) allow your customers to save and track details of the products and services that they buy and sell.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create item model](https://docs.codat.io/accounting-api#/operations/get-create-items-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=items) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateItemResponse } from "@codat/accounting/dist/sdk/models/operations";
import { ItemStatus, ItemType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.items.create({
  item: {
    billItem: {
      accountRef: {
        id: "b7a73df4-0ca0-4d76-97c1-641bbf055271",
        name: "Mr. Alan Haley",
      },
      description: "assumenda",
      taxRateRef: {
        effectiveTaxRate: 3834.21,
        id: "06dd1b28-272b-4c9c-b221-697b1880fcbb",
        name: "Verna Marks",
      },
      unitPrice: 702.82,
    },
    code: "nostrum",
    id: "f670bd17-8483-4165-beeb-3b6e241c3109",
    invoiceItem: {
      accountRef: {
        id: "983663c6-6dcb-4b7d-b6cb-09c8b408e071",
        name: "Minnie Kirlin",
      },
      description: "saepe",
      taxRateRef: {
        effectiveTaxRate: 2505.06,
        id: "fee101d9-780a-410c-87b9-5040d6c8b2a5",
        name: "John Aufderhar",
      },
      unitPrice: 249.94,
    },
    isBillItem: false,
    isInvoiceItem: false,
    itemStatus: ItemStatus.Active,
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    name: "Brenda Greenholt",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    type: ItemType.Unknown,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 4409,
}).then((res: CreateItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.CreateItemRequest](../../models/operations/createitemrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `retries`                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                       | :heavy_minus_sign:                                                           | Configuration to override the default retry behavior of the client.          |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateItemResponse](../../models/operations/createitemresponse.md)>**


## get

The *Get item* endpoint returns a single item for a given itemId.

[Items](https://docs.codat.io/accounting-api#/schemas/Item) allow your customers to save and track details of the products and services that they buy and sell.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=items) for integrations that support getting a specific item.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetItemResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.items.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  itemId: "sit",
}).then((res: GetItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [operations.GetItemRequest](../../models/operations/getitemrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `retries`                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                 | :heavy_minus_sign:                                                     | Configuration to override the default retry behavior of the client.    |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.GetItemResponse](../../models/operations/getitemresponse.md)>**


## getCreateModel

The *Get create item model* endpoint returns the expected data for the request payload when creating an [item](https://docs.codat.io/accounting-api#/schemas/Item) for a given company and integration.

[Items](https://docs.codat.io/accounting-api#/schemas/Item) allow your customers to save and track details of the products and services that they buy and sell.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=items) for integrations that support creating an item.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateItemsModelResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.items.getCreateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateItemsModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetCreateItemsModelRequest](../../models/operations/getcreateitemsmodelrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `retries`                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                         | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetCreateItemsModelResponse](../../models/operations/getcreateitemsmodelresponse.md)>**


## list

The *List items* endpoint returns a list of [items](https://docs.codat.io/accounting-api#/schemas/Item) for a given company's connection.

[Items](https://docs.codat.io/accounting-api#/schemas/Item) allow your customers to save and track details of the products and services that they buy and sell.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListItemsResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.items.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "iste",
}).then((res: ListItemsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.ListItemsRequest](../../models/operations/listitemsrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `retries`                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                     | :heavy_minus_sign:                                                         | Configuration to override the default retry behavior of the client.        |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ListItemsResponse](../../models/operations/listitemsresponse.md)>**

