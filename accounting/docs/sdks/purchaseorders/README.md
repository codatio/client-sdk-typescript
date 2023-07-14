# purchaseOrders

## Overview

Purchase orders

### Available Operations

* [create](#create) - Create purchase order
* [get](#get) - Get purchase order
* [getCreateUpdateModel](#getcreateupdatemodel) - Get create/update purchase order model
* [list](#list) - List purchase orders
* [update](#update) - Update purchase order

## create

The *Create purchase order* endpoint creates a new [purchase order](https://docs.codat.io/accounting-api#/schemas/PurchaseOrder) for a given company's connection.

[Purchase orders](https://docs.codat.io/accounting-api#/schemas/PurchaseOrder) represent a business's intent to purchase goods or services from a supplier.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update purchase order model](https://docs.codat.io/accounting-api#/operations/get-create-update-purchaseOrders-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreatePurchaseOrderResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressType, PurchaseOrderStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.purchaseOrders.create({
  purchaseOrder: {
    currency: "EUR",
    currencyRate: 5759.77,
    deliveryDate: "2022-10-23T00:00:00.000Z",
    expectedDeliveryDate: "2022-10-23T00:00:00.000Z",
    id: "5075bc25-3825-4334-bfb0-a4e66ea47578",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "71e29418-18fc-4679-b6b2-f25359b855d0",
          name: "Cathy Powlowski",
        },
        description: "eligendi",
        discountAmount: 5505.76,
        discountPercentage: 7374.84,
        itemRef: {
          id: "83a38a8a-88c1-4442-80c2-caeb1ae1ecf8",
          name: "Chad Gislason",
        },
        quantity: 4159.24,
        subTotal: 6882.17,
        taxAmount: 6973.55,
        taxRateRef: {
          effectiveTaxRate: 6797.33,
          id: "7a05a8b4-a9ec-45b3-a88c-ca363272760e",
          name: "Chester Johnson",
        },
        totalAmount: 4684.82,
        trackingCategoryRefs: [
          {
            id: "05410334-7d78-4ff2-8911-45fab9e59a4a",
            name: "Nathan Fay",
          },
          {
            id: "64eaa6bf-2ff1-44e8-81b3-52accedacc52",
            name: "Mrs. Charlene Little",
          },
          {
            id: "ca016bc4-1ea1-4342-9410-4a25ef71de57",
            name: "Keith Bradtke",
          },
          {
            id: "14a43176-92ea-4486-b3d5-22b828a90306",
            name: "Mr. Michelle Zemlak",
          },
        ],
        unitAmount: 7532.31,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "sint",
    paymentDueDate: "2022-10-23T00:00:00.000Z",
    purchaseOrderNumber: "ut",
    shipTo: {
      address: {
        city: "Runteview",
        country: "French Guiana",
        line1: "eligendi",
        line2: "magni",
        postalCode: "16117-2556",
        region: "facere",
        type: AddressType.Delivery,
      },
      contact: {
        email: "Cathrine_Wisoky@yahoo.com",
        name: "Jon Heller",
        phone: "1-491-252-0038 x612",
      },
    },
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: PurchaseOrderStatus.Closed,
    subTotal: 5615.97,
    supplierRef: {
      id: "7d4f6212-7a60-47d1-a062-94514c3db9ca",
      supplierName: "omnis",
    },
    totalAmount: 9600.37,
    totalDiscount: 2360.34,
    totalTaxAmount: 5514.18,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 694759,
}).then((res: CreatePurchaseOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CreatePurchaseOrderRequest](../../models/operations/createpurchaseorderrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `retries`                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                         | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreatePurchaseOrderResponse](../../models/operations/createpurchaseorderresponse.md)>**


## get

The *Get purchase order* endpoint returns a single purchase order for a given purchaseOrderId.

[Purchase orders](https://docs.codat.io/accounting-api#/schemas/PurchaseOrder) represent a business's intent to purchase goods or services from a supplier.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders) for integrations that support getting a specific purchase order.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetPurchaseOrderResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.purchaseOrders.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  purchaseOrderId: "at",
}).then((res: GetPurchaseOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetPurchaseOrderRequest](../../models/operations/getpurchaseorderrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetPurchaseOrderResponse](../../models/operations/getpurchaseorderresponse.md)>**


## getCreateUpdateModel

The *Get create/update purchase order model* endpoint returns the expected data for the request payload when creating and updating a [purchase order](https://docs.codat.io/accounting-api#/schemas/PurchaseOrder) for a given company and integration.

[Purchase orders](https://docs.codat.io/accounting-api#/schemas/PurchaseOrder) represent a business's intent to purchase goods or services from a supplier.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders) for integrations that support creating and updating a purchase order.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateUpdatePurchaseOrdersModelResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.purchaseOrders.getCreateUpdateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateUpdatePurchaseOrdersModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.GetCreateUpdatePurchaseOrdersModelRequest](../../models/operations/getcreateupdatepurchaseordersmodelrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `retries`                                                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                       | :heavy_minus_sign:                                                                                                           | Configuration to override the default retry behavior of the client.                                                          |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.GetCreateUpdatePurchaseOrdersModelResponse](../../models/operations/getcreateupdatepurchaseordersmodelresponse.md)>**


## list

The *List purchase orders* endpoint returns a list of [purchase orders](https://docs.codat.io/accounting-api#/schemas/PurchaseOrder) for a given company's connection.

[Purchase orders](https://docs.codat.io/accounting-api#/schemas/PurchaseOrder) represent a business's intent to purchase goods or services from a supplier.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListPurchaseOrdersResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.purchaseOrders.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "quia",
}).then((res: ListPurchaseOrdersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListPurchaseOrdersRequest](../../models/operations/listpurchaseordersrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListPurchaseOrdersResponse](../../models/operations/listpurchaseordersresponse.md)>**


## update

The *Update purchase order* endpoint updates an existing [purchase order](https://docs.codat.io/accounting-api#/schemas/PurchaseOrder) for a given company's connection.

[Purchase orders](https://docs.codat.io/accounting-api#/schemas/PurchaseOrder) represent a business's intent to purchase goods or services from a supplier.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update purchase order model](https://docs.codat.io/accounting-api#/operations/get-create-update-purchaseOrders-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdatePurchaseOrderResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressType, PurchaseOrderStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.purchaseOrders.update({
  purchaseOrder: {
    currency: "EUR",
    currencyRate: 8782.83,
    deliveryDate: "2022-10-23T00:00:00.000Z",
    expectedDeliveryDate: "2022-10-23T00:00:00.000Z",
    id: "8703493f-49aa-4846-9a32-83279b719d1c",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "673d86e3-b35e-449a-b135-778ce54cacb0",
          name: "Chris Terry",
        },
        description: "ducimus",
        discountAmount: 3264.82,
        discountPercentage: 276.36,
        itemRef: {
          id: "45bacf63-b215-4186-ab5e-3a022614315d",
          name: "Bernice Jakubowski",
        },
        quantity: 5766.94,
        subTotal: 5813.68,
        taxAmount: 9207.5,
        taxRateRef: {
          effectiveTaxRate: 3778.77,
          id: "1afc7186-ff20-4b7a-b3df-40ca0d7657c1",
          name: "Esther Bernier",
        },
        totalAmount: 9823,
        trackingCategoryRefs: [
          {
            id: "55271b25-11dd-4606-9d1b-28272bc9c322",
            name: "Tara Marquardt",
          },
        ],
        unitAmount: 822.04,
      },
      {
        accountRef: {
          id: "880fcbb2-b93c-415f-a70b-d1784831653e",
          name: "Kerry Farrell",
        },
        description: "vero",
        discountAmount: 1407.83,
        discountPercentage: 3102.85,
        itemRef: {
          id: "1c310998-3663-4c66-9cbb-7df6cb09c8b4",
          name: "Ms. Irma Walter I",
        },
        quantity: 4775.18,
        subTotal: 4482.26,
        taxAmount: 2986.6,
        taxRateRef: {
          effectiveTaxRate: 8337.81,
          id: "e4fee101-d978-40a1-8c47-b95040d6c8b2",
          name: "Mr. Roberto Wilkinson",
        },
        totalAmount: 1526.43,
        trackingCategoryRefs: [
          {
            id: "7e4048f9-0009-4ed2-9027-8eb4ae9d6416",
            name: "Mrs. Delia Moore Jr.",
          },
        ],
        unitAmount: 1887.19,
      },
      {
        accountRef: {
          id: "23b2c09b-9247-471f-9669-e5b7ec762664",
          name: "Woodrow Littel",
        },
        description: "tempore",
        discountAmount: 5923.78,
        discountPercentage: 9275.83,
        itemRef: {
          id: "4cfd2276-e0b8-48fb-87d6-fa5b6e8dbf81",
          name: "Nettie Kuvalis",
        },
        quantity: 809.04,
        subTotal: 7530.97,
        taxAmount: 6568.11,
        taxRateRef: {
          effectiveTaxRate: 4189.32,
          id: "a9ffc561-929c-4ca9-960a-1395918da1d4",
          name: "Rolando Kovacek",
        },
        totalAmount: 2178.8,
        trackingCategoryRefs: [
          {
            id: "f8e1143d-a930-48b2-ba08-af22184439b3",
            name: "Rolando Lesch",
          },
          {
            id: "6ccce470-cd21-447b-ae61-52cf01d0d8c3",
            name: "Clifford Quigley",
          },
          {
            id: "5bf935df-e974-4fa4-b1e9-c097eda62344",
            name: "Alexis Braun",
          },
          {
            id: "237e9984-c80b-4479-a891-923c18ca8d69",
            name: "Jon Jacobs",
          },
        ],
        unitAmount: 1303.91,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "tempora",
    paymentDueDate: "2022-10-23T00:00:00.000Z",
    purchaseOrderNumber: "animi",
    shipTo: {
      address: {
        city: "North Caylatown",
        country: "Japan",
        line1: "officiis",
        line2: "eius",
        postalCode: "69025-7849",
        region: "ab",
        type: AddressType.Delivery,
      },
      contact: {
        email: "Cicero_Schowalter67@hotmail.com",
        name: "Cody Zemlak",
        phone: "876-479-9089 x35968",
      },
    },
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: PurchaseOrderStatus.Closed,
    subTotal: 1625.48,
    supplierRef: {
      id: "ee70be06-9fb3-46ad-9704-080e0a3fc73a",
      supplierName: "ullam",
    },
    totalAmount: 6283.94,
    totalDiscount: 465.74,
    totalTaxAmount: 2391.23,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  purchaseOrderId: "aliquam",
  timeoutInMinutes: 744576,
}).then((res: UpdatePurchaseOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdatePurchaseOrderRequest](../../models/operations/updatepurchaseorderrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `retries`                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                         | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdatePurchaseOrderResponse](../../models/operations/updatepurchaseorderresponse.md)>**

