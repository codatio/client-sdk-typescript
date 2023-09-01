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
import { AccountingAddressType, PurchaseOrderStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.purchaseOrders.create({
  purchaseOrder: {
    currency: "USD",
    currencyRate: 9054.35,
    deliveryDate: "2022-10-23T00:00:00.000Z",
    expectedDeliveryDate: "2022-10-23T00:00:00.000Z",
    id: "5ffa906a-e559-4b72-ab67-46030fe18376",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "bedee767-90ed-40c1-aa7b-a478404489f6",
          name: "Courtney Bednar",
        },
        description: "ipsa",
        discountAmount: 3059.71,
        discountPercentage: 5075.68,
        itemRef: {
          id: "091a2ba2-5ee6-4c75-af8a-60a7ae346e09",
          name: "Misty Toy",
        },
        quantity: 9569.24,
        subTotal: 8931.29,
        taxAmount: 4306.16,
        taxRateRef: {
          effectiveTaxRate: 72.7,
          id: "acaca645-de98-4675-91a9-cce61ec2c79a",
          name: "Miriam Pfannerstill",
        },
        totalAmount: 6840.34,
        trackingCategoryRefs: [
          {
            id: "d5a65b4d-5562-4d9b-bd9e-2d6fcf557629",
            name: "Kerry Lockman",
          },
          {
            id: "c3a89028-2a51-4f41-8f67-96ed3d724c18",
            name: "Dr. Leon Ledner",
          },
        ],
        unitAmount: 5132.8,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "minus",
    paymentDueDate: "2022-10-23T00:00:00.000Z",
    purchaseOrderNumber: "consectetur",
    shipTo: {
      address: {
        city: "La Habra",
        country: "British Indian Ocean Territory (Chagos Archipelago)",
        line1: "autem",
        line2: "aliquid",
        postalCode: "08608",
        region: "dolor",
        type: AccountingAddressType.Delivery,
      },
      contact: {
        email: "Giles.Bogan99@yahoo.com",
        name: "James Marvin",
        phone: "(373) 362-1857 x481",
      },
    },
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: PurchaseOrderStatus.Open,
    subTotal: 958.62,
    supplierRef: {
      id: "0e1673d9-05cb-44be-9ef3-c127c3909955",
      supplierName: "consequuntur",
    },
    totalAmount: 5021.78,
    totalDiscount: 1730.52,
    totalTaxAmount: 3712.26,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 57599,
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
  purchaseOrderId: "pariatur",
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
  query: "maxime",
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
import { AccountingAddressType, PurchaseOrderStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.purchaseOrders.update({
  purchaseOrder: {
    currency: "EUR",
    currencyRate: 7439.49,
    deliveryDate: "2022-10-23T00:00:00.000Z",
    expectedDeliveryDate: "2022-10-23T00:00:00.000Z",
    id: "3b121b88-c1ee-45e7-a061-391cc8fa0b7d",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "64926b0c-f5e6-4cb6-abab-e5e0b99f3b13",
          name: "Billie Stokes",
        },
        description: "corrupti",
        discountAmount: 4401.02,
        discountPercentage: 7240.6,
        itemRef: {
          id: "b7aecbe5-69d7-40cb-8699-07f989441452",
          name: "Mr. Perry Wiza",
        },
        quantity: 2102.37,
        subTotal: 3116.04,
        taxAmount: 2769.43,
        taxRateRef: {
          effectiveTaxRate: 1795.24,
          id: "c61be133-bacd-4e53-ab65-26f862853fe2",
          name: "Ronnie McKenzie",
        },
        totalAmount: 2499.78,
        trackingCategoryRefs: [
          {
            id: "2231fe66-64c4-41d2-bba5-cba069b8d291",
            name: "Percy Renner Jr.",
          },
        ],
        unitAmount: 6653.38,
      },
      {
        accountRef: {
          id: "2aa87494-79ed-4d4f-8f7b-50cf87f08f39",
          name: "Ms. Joy Blick",
        },
        description: "culpa",
        discountAmount: 1832.7,
        discountPercentage: 2964.52,
        itemRef: {
          id: "b40c8f08-bff1-4081-a88f-86996c8e22be",
          name: "Marguerite Emmerich",
        },
        quantity: 2955.55,
        subTotal: 4539.1,
        taxAmount: 5001.01,
        taxRateRef: {
          effectiveTaxRate: 5720.7,
          id: "3bd23f86-600c-461c-b834-273caa9118b3",
          name: "Emilio Bogisich",
        },
        totalAmount: 810,
        trackingCategoryRefs: [
          {
            id: "331a54dc-1029-44f9-afed-939ba8f71e29",
            name: "Adam Schroeder DVM",
          },
          {
            id: "e1228ac3-adc6-447d-a40b-c11ea482824c",
            name: "Gregg Jacobs",
          },
          {
            id: "f0f5b9d3-cb11-4a76-87d3-100e8e2b9b0d",
            name: "Bertha Hudson",
          },
        ],
        unitAmount: 6766.65,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "quisquam",
    paymentDueDate: "2022-10-23T00:00:00.000Z",
    purchaseOrderNumber: "fugiat",
    shipTo: {
      address: {
        city: "Fort Mariannatown",
        country: "Turkey",
        line1: "quam",
        line2: "iste",
        postalCode: "65779-3904",
        region: "sint",
        type: AccountingAddressType.Delivery,
      },
      contact: {
        email: "Flossie.Bailey93@yahoo.com",
        name: "Margaret Kutch",
        phone: "1-425-541-2767 x78041",
      },
    },
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: PurchaseOrderStatus.Closed,
    subTotal: 8436.48,
    supplierRef: {
      id: "61918d27-9c10-4c18-916f-d78be2621272",
      supplierName: "ea",
    },
    totalAmount: 1382.52,
    totalDiscount: 5494.57,
    totalTaxAmount: 9854.77,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  purchaseOrderId: "officia",
  timeoutInMinutes: 352126,
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

