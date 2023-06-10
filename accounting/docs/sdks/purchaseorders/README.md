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

Posts a new purchase order to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update purchase order model](https://docs.codat.io/accounting-api#/operations/get-create-update-purchaseOrders-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders) to see which integrations support this endpoint.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreatePurchaseOrderResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressType, DataType, PurchaseOrderStatus, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.purchaseOrders.create({
  purchaseOrder: {
    currency: "USD",
    currencyRate: 8513.15,
    deliveryDate: "2022-10-23T00:00:00.000Z",
    expectedDeliveryDate: "2022-10-23T00:00:00.000Z",
    id: "0c69a3d9-06f6-4ebd-9ad7-ec7394f25f63",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "3730714e-6be8-4c3e-89c6-4d342ac299a6",
          name: "Glen Toy",
        },
        description: "earum",
        discountAmount: 9610.27,
        discountPercentage: 791.87,
        itemRef: {
          id: "3402e945-f537-443e-bde1-198221f9b1f7",
          name: "Nick Nolan",
        },
        quantity: 9212.73,
        subTotal: 4322.15,
        taxAmount: 6074.58,
        taxRateRef: {
          effectiveTaxRate: 3980.98,
          id: "82aceefb-04f8-4c51-acaa-bea708ed5798",
          name: "Lee Luettgen",
        },
        totalAmount: 2876.48,
        trackingCategoryRefs: [
          {
            id: "0599d5c3-3495-476d-9520-9e9a2253b6d7",
            name: "Lynn Lang",
          },
          {
            id: "eeae5fd4-b39f-48a1-8906-78f13c686d83",
            name: "Amos Roob",
          },
        ],
        unitAmount: 756.85,
      },
      {
        accountRef: {
          id: "75ffa906-ae55-49b7-aeb6-746030fe1837",
          name: "Sheri Cole",
        },
        description: "at",
        discountAmount: 9103.82,
        discountPercentage: 8766.6,
        itemRef: {
          id: "76790ed0-c16a-47ba-8784-04489f6770ef",
          name: "Ms. Suzanne Lang MD",
        },
        quantity: 1711.34,
        subTotal: 7457.67,
        taxAmount: 6341.57,
        taxRateRef: {
          effectiveTaxRate: 1475.97,
          id: "5ee6c75a-f8a6-40a7-ae34-6e0979e5afe6",
          name: "Cecilia Ryan",
        },
        totalAmount: 6433.94,
        trackingCategoryRefs: [
          {
            id: "45de9867-551a-49cc-a61e-c2c79a39ae5a",
            name: "Krystal Hilll",
          },
          {
            id: "5b4d5562-d9b7-4d9e-ad6f-cf557629db87",
            name: "Adrienne Donnelly",
          },
        ],
        unitAmount: 5958.7,
      },
      {
        accountRef: {
          id: "0282a51f-41cf-4679-aed3-d724c18f581e",
          name: "Dwight Sauer",
        },
        description: "consectetur",
        discountAmount: 9716.2,
        discountPercentage: 4600.54,
        itemRef: {
          id: "16600da0-e3aa-461c-afe0-9d852b53b32c",
          name: "Spencer Kuhn",
        },
        quantity: 7573.4,
        subTotal: 4608.74,
        taxAmount: 958.62,
        taxRateRef: {
          effectiveTaxRate: 6.22,
          id: "e1673d90-5cb4-4bed-af3c-127c39099552",
          name: "Dr. Phillip Hilpert",
        },
        totalAmount: 7498.85,
        trackingCategoryRefs: [
          {
            id: "cd3b121b-88c1-4ee5-a7a0-61391cc8fa0b",
            name: "Kari Breitenberg",
          },
          {
            id: "4926b0cf-5e6c-4b6e-babe-5e0b99f3b135",
            name: "Orville Hudson",
          },
          {
            id: "7bb7aecb-e569-4d70-8b06-9907f9894414",
            name: "Judith Nader",
          },
        ],
        unitAmount: 592.69,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "sapiente",
    paymentDueDate: "2022-10-23T00:00:00.000Z",
    purchaseOrderNumber: "quaerat",
    shipTo: {
      address: {
        city: "East Nya",
        country: "Isle of Man",
        line1: "inventore",
        line2: "quidem",
        postalCode: "02176-7883",
        region: "neque",
        type: AddressType.Unknown,
      },
      contact: {
        email: "Halie38@hotmail.com",
        name: "Max Homenick",
        phone: "(399) 353-5882 x111",
      },
    },
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: PurchaseOrderStatus.Unknown,
    subTotal: 9856.77,
    supplierRef: {
      id: "e6664c41-d2fb-4a5c-ba06-9b8d291beb81",
      supplierName: "eaque",
    },
    totalAmount: 6653.38,
    totalDiscount: 1485.57,
    totalTaxAmount: 6798.42,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 672553,
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

Get purchase order

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetPurchaseOrderResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressType, PurchaseOrderStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.purchaseOrders.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  purchaseOrderId: "atque",
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

Get create/update purchase order model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders) for integrations that support creating and updating purchase orders.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateUpdatePurchaseOrdersModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionType } from "@codat/accounting/dist/sdk/models/shared";

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

Get purchase orders

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListPurchaseOrdersResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressType, PurchaseOrderStatus } from "@codat/accounting/dist/sdk/models/shared";

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
  query: "molestiae",
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

Posts an updated purchase order to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call []().

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders) for integrations that support updating purchase orders.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdatePurchaseOrderResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressType, DataType, PurchaseOrderStatus, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.purchaseOrders.update({
  purchaseOrder: {
    currency: "GBP",
    currencyRate: 5976.63,
    deliveryDate: "2022-10-23T00:00:00.000Z",
    expectedDeliveryDate: "2022-10-23T00:00:00.000Z",
    id: "9edd4fcf-7b50-4cf8-bf08-f39271076a24",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "0c8f08bf-f108-41e8-8f86-996c8e22be0a",
          name: "Kendra White",
        },
        description: "blanditiis",
        discountAmount: 5720.7,
        discountPercentage: 2089.59,
        itemRef: {
          id: "bd23f866-00c6-41c7-8342-73caa9118b38",
          name: "Harold Ritchie MD",
        },
        quantity: 2482.29,
        subTotal: 1910.69,
        taxAmount: 781.25,
        taxRateRef: {
          effectiveTaxRate: 6791.41,
          id: "54dc1029-4f92-4fed-939b-a8f71e2992c2",
          name: "Mr. Casey Towne",
        },
        totalAmount: 5593.62,
        trackingCategoryRefs: [
          {
            id: "c3adc647-d240-4bc1-9ea4-82824ccc6a2f",
            name: "Johanna Heathcote",
          },
          {
            id: "d3cb11a7-687d-4310-8e8e-2b9b0d746d2a",
            name: "Adrienne Kreiger PhD",
          },
          {
            id: "a0e79fa9-bbe5-4f17-9f65-0b1e707e7e43",
            name: "Mrs. Angel Kuhn",
          },
        ],
        unitAmount: 6307.18,
      },
      {
        accountRef: {
          id: "cce072ab-d619-418d-a79c-10c18516fd78",
          name: "Grady Considine",
        },
        description: "ab",
        discountAmount: 1562.87,
        discountPercentage: 4579.62,
        itemRef: {
          id: "2628fa50-3962-4867-a72b-3a65024b157f",
          name: "Pete Rohan",
        },
        quantity: 9998.39,
        subTotal: 4376.21,
        taxAmount: 1341.14,
        taxRateRef: {
          effectiveTaxRate: 6278.1,
          id: "50871d99-b661-4a7d-af16-8b6ccb2822b4",
          name: "Enrique Larson DVM",
        },
        totalAmount: 8556.65,
        trackingCategoryRefs: [
          {
            id: "f4a1e9c4-ae55-4140-a757-26e003c2f029",
            name: "Diane Marks",
          },
        ],
        unitAmount: 991.13,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "cumque",
    paymentDueDate: "2022-10-23T00:00:00.000Z",
    purchaseOrderNumber: "accusamus",
    shipTo: {
      address: {
        city: "North Orin",
        country: "Nauru",
        line1: "excepturi",
        line2: "natus",
        postalCode: "23594-9179",
        region: "quasi",
        type: AddressType.Delivery,
      },
      contact: {
        email: "Velma19@gmail.com",
        name: "Ricardo Johnston",
        phone: "1-741-500-1876 x034",
      },
    },
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: PurchaseOrderStatus.Open,
    subTotal: 5264.74,
    supplierRef: {
      id: "c6720c31-03f1-4a40-80f3-ec8688fd8ec6",
      supplierName: "tenetur",
    },
    totalAmount: 7601.6,
    totalDiscount: 64.47,
    totalTaxAmount: 2341.76,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  purchaseOrderId: "illo",
  timeoutInMinutes: 175186,
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

