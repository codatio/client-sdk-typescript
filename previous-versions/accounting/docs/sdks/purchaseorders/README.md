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
    currency: "USD",
    currencyRate: 7740.9,
    deliveryDate: "2022-10-23T00:00:00.000Z",
    expectedDeliveryDate: "2022-10-23T00:00:00.000Z",
    id: "a645de98-6755-41a9-8ce6-1ec2c79a39ae",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "4d5a65b4-d556-42d9-b7d9-e2d6fcf55762",
          name: "Drew Pollich",
        },
        description: "ad",
        discountAmount: 7877.69,
        discountPercentage: 1972.67,
        itemRef: {
          id: "a890282a-51f4-41cf-a796-ed3d724c18f5",
          name: "Jonathan Tromp",
        },
        quantity: 7803.32,
        subTotal: 7948.94,
        taxAmount: 8856.75,
        taxRateRef: {
          effectiveTaxRate: 2355.79,
          id: "f716600d-a0e3-4aa6-9c6f-e09d852b53b3",
          name: "Nichole Kutch",
        },
        totalAmount: 8112.21,
        trackingCategoryRefs: [
          {
            id: "c710e167-3d90-45cb-8bed-ef3c127c3909",
            name: "Alvin Hartmann",
          },
        ],
        unitAmount: 1730.52,
      },
      {
        accountRef: {
          id: "50dcbbcd-3b12-41b8-8c1e-e5e7a061391c",
          name: "Dwight Wisoky DDS",
        },
        description: "iusto",
        discountAmount: 8302.89,
        discountPercentage: 1060.35,
        itemRef: {
          id: "764926b0-cf5e-46cb-aeba-be5e0b99f3b1",
          name: "Veronica Luettgen",
        },
        quantity: 6429.43,
        subTotal: 5465.01,
        taxAmount: 4401.02,
        taxRateRef: {
          effectiveTaxRate: 7240.6,
          id: "b7aecbe5-69d7-40cb-8699-07f989441452",
          name: "Mr. Perry Wiza",
        },
        totalAmount: 2102.37,
        trackingCategoryRefs: [
          {
            id: "42c61be1-33ba-4cde-932b-6526f862853f",
            name: "Alan Langworth",
          },
          {
            id: "ce322231-fe66-464c-81d2-fba5cba069b8",
            name: "Miss Billy McCullough",
          },
        ],
        unitAmount: 7299.76,
      },
      {
        accountRef: {
          id: "810a2aa8-7494-479e-9d4f-cf7b50cf87f0",
          name: "Emmett Ernser",
        },
        description: "esse",
        discountAmount: 762.27,
        discountPercentage: 197.89,
        itemRef: {
          id: "76a24b40-c8f0-48bf-b108-1e88f86996c8",
          name: "Fred Dare",
        },
        quantity: 164.13,
        subTotal: 6264.24,
        taxAmount: 2164.67,
        taxRateRef: {
          effectiveTaxRate: 8056.07,
          id: "f47893bd-23f8-4660-8c61-c7834273caa9",
          name: "Anna Lemke",
        },
        totalAmount: 5420.06,
        trackingCategoryRefs: [
          {
            id: "1b61a331-a54d-4c10-a94f-92fed939ba8f",
            name: "Janet Upton",
          },
          {
            id: "92c20ee1-228a-4c3a-9c64-7d240bc11ea4",
            name: "Mrs. Nicholas Leannon",
          },
          {
            id: "cc6a2f0f-5b9d-43cb-91a7-687d3100e8e2",
            name: "Dr. Salvador Roberts",
          },
          {
            id: "46d2a7c7-d1ea-40e7-9fa9-bbe5f179f650",
            name: "Arthur Wehner IV",
          },
        ],
        unitAmount: 9205.44,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "officiis",
    paymentDueDate: "2022-10-23T00:00:00.000Z",
    purchaseOrderNumber: "neque",
    shipTo: {
      address: {
        city: "Haliemouth",
        country: "Brazil",
        line1: "non",
        line2: "soluta",
        postalCode: "77804-1678",
        region: "ex",
        type: AddressType.Unknown,
      },
      contact: {
        email: "Blaise.Leffler44@yahoo.com",
        name: "Dr. Wilbert Buckridge IV",
        phone: "(239) 845-6914 x101",
      },
    },
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: PurchaseOrderStatus.Unknown,
    subTotal: 4110.09,
    supplierRef: {
      id: "28fa5039-6286-47e7-ab3a-65024b157f9b",
      supplierName: "nobis",
    },
    totalAmount: 3859.93,
    totalDiscount: 9232.4,
    totalTaxAmount: 9998.39,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 437621,
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
  purchaseOrderId: "aspernatur",
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
  query: "similique",
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
    currency: "GBP",
    currencyRate: 600.68,
    deliveryDate: "2022-10-23T00:00:00.000Z",
    expectedDeliveryDate: "2022-10-23T00:00:00.000Z",
    id: "1d99b661-a7de-4f16-8b6c-cb2822b4a985",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "d2f4a1e9-c4ae-4551-80e7-5726e003c2f0",
          name: "Ms. Ada Haag",
        },
        description: "enim",
        discountAmount: 991.13,
        discountPercentage: 5431.77,
        itemRef: {
          id: "cee41c99-9f46-49f6-b1cf-1a3f023c669e",
          name: "Fannie Jerde",
        },
        quantity: 324.74,
        subTotal: 680.19,
        taxAmount: 1256.22,
        taxRateRef: {
          effectiveTaxRate: 8751.44,
          id: "ba057988-c672-40c3-903f-1a40c0f3ec86",
          name: "Clayton Yost",
        },
        totalAmount: 8912.43,
        trackingCategoryRefs: [
          {
            id: "6fc03128-f0aa-4aee-a004-eba7bf8732be",
            name: "Linda McKenzie",
          },
          {
            id: "087131f0-6f0b-4ce5-9a86-87143c97905f",
            name: "Kurt Marvin",
          },
          {
            id: "5da664b7-e778-4a74-baaa-2832bb65862d",
            name: "Dr. Lee Frami",
          },
          {
            id: "b14aa6bd-ec7f-4444-a32e-9a5dee1acd72",
            name: "Jaime McKenzie",
          },
        ],
        unitAmount: 711.51,
      },
      {
        accountRef: {
          id: "b58fe682-e1c2-4dbe-a3d5-8e8247d122c9",
          name: "Gilbert Kshlerin",
        },
        description: "praesentium",
        discountAmount: 9796.97,
        discountPercentage: 6607.28,
        itemRef: {
          id: "27958367-363d-4a07-9096-faeb86480730",
          name: "Armando Wiza",
        },
        quantity: 5237.4,
        subTotal: 6038.54,
        taxAmount: 8675.31,
        taxRateRef: {
          effectiveTaxRate: 6062.34,
          id: "ca607565-6fc0-4ebe-a715-5e2d06a3070d",
          name: "Sonja Christiansen",
        },
        totalAmount: 9410.3,
        trackingCategoryRefs: [
          {
            id: "81fabaaa-7d80-4108-8076-ff5f6ed29814",
            name: "Mrs. Brandy Lehner",
          },
          {
            id: "b6a70b0d-d82f-494f-bfbd-1e1e21ddc690",
            name: "Dr. Margie Powlowski IV",
          },
        ],
        unitAmount: 4675.79,
      },
      {
        accountRef: {
          id: "b51eb5fd-30bf-4e03-890c-f20254a95904",
          name: "Kendra Rau",
        },
        description: "aspernatur",
        discountAmount: 8202.86,
        discountPercentage: 3958.97,
        itemRef: {
          id: "bc9917f9-8e47-492b-979a-413d6a8c9168",
          name: "Alison Stroman",
        },
        quantity: 992.09,
        subTotal: 8469.9,
        taxAmount: 606.59,
        taxRateRef: {
          effectiveTaxRate: 8453.97,
          id: "98ccf89d-3861-4186-ad76-c002facb13ac",
          name: "Debbie Schowalter II",
        },
        totalAmount: 1929.94,
        trackingCategoryRefs: [
          {
            id: "866c575a-1e26-4687-b0be-37b0e8fbc48d",
            name: "Cedric Koch",
          },
          {
            id: "9b535105-0501-44dc-a105-882484c36e94",
            name: "Byron Mayert",
          },
          {
            id: "82d34e0b-8fc0-4d59-b57b-9f9820be0780",
            name: "Leland Douglas",
          },
        ],
        unitAmount: 5874.85,
      },
      {
        accountRef: {
          id: "e2f70344-e00f-4478-ab53-9483f748eefc",
          name: "Kelvin Keebler",
        },
        description: "minima",
        discountAmount: 2545.32,
        discountPercentage: 700.77,
        itemRef: {
          id: "b4b393f3-5666-425b-aa32-201dec379c59",
          name: "Dr. Elias Nitzsche",
        },
        quantity: 5072.63,
        subTotal: 7816.86,
        taxAmount: 3272.41,
        taxRateRef: {
          effectiveTaxRate: 8119.2,
          id: "2f9e21d9-0fd5-4377-abfc-7677f0f504a6",
          name: "Oscar Lesch",
        },
        totalAmount: 9417.31,
        trackingCategoryRefs: [
          {
            id: "6daee19c-26c0-4cb6-98c6-331cabdab767",
            name: "Miguel Goldner",
          },
          {
            id: "d0da0abe-58eb-43d5-8ba1-cb3ad49b8e5c",
            name: "Lena Pouros",
          },
          {
            id: "e87f6482-3255-4be9-9c0c-bcb2ca87908d",
            name: "Miss Tiffany Lowe",
          },
        ],
        unitAmount: 116.47,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "doloribus",
    paymentDueDate: "2022-10-23T00:00:00.000Z",
    purchaseOrderNumber: "eum",
    shipTo: {
      address: {
        city: "New Brunswick",
        country: "Cameroon",
        line1: "qui",
        line2: "totam",
        postalCode: "34033-6304",
        region: "numquam",
        type: AddressType.Delivery,
      },
      contact: {
        email: "Zula_Ritchie@hotmail.com",
        name: "Duane Legros",
        phone: "(365) 620-2242 x60633",
      },
    },
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: PurchaseOrderStatus.Unknown,
    subTotal: 3727.48,
    supplierRef: {
      id: "3876e39d-ef9c-4765-9fd7-354e5cb94977",
      supplierName: "voluptatem",
    },
    totalAmount: 963.17,
    totalDiscount: 4507.31,
    totalTaxAmount: 6874.97,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  purchaseOrderId: "quia",
  timeoutInMinutes: 375533,
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

