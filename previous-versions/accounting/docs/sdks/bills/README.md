# bills

## Overview

Bills

### Available Operations

* [create](#create) - Create bill
* [delete](#delete) - Delete bill
* [downloadAttachment](#downloadattachment) - Download bill attachment
* [get](#get) - Get bill
* [getAttachment](#getattachment) - Get bill attachment
* [getCreateUpdateModel](#getcreateupdatemodel) - Get create/update bill model
* [list](#list) - List bills
* [listAttachments](#listattachments) - List bill attachments
* [update](#update) - Update bill
* [uploadAttachment](#uploadattachment) - Upload bill attachment

## create

The *Create bill* endpoint creates a new [bill](https://docs.codat.io/accounting-api#/schemas/Bill) for a given company's connection.

[Bills](https://docs.codat.io/accounting-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update bill model](https://docs.codat.io/accounting-api#/operations/get-create-update-bills-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateBillResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType, BillStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bills.create({
  bill: {
    amountDue: 1017.7,
    currency: "EUR",
    currencyRate: 6730.1,
    dueDate: "2022-10-23T00:00:00.000Z",
    id: "cf20688f-77c1-4ffc-b1dc-a163f2a3c80a",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "ff334cdd-f857-4a9e-a187-6c6ab21d29df",
          name: "Austin Grady",
        },
        description: "doloribus",
        discountAmount: 9260.27,
        discountPercentage: 7874.52,
        isDirectCost: false,
        itemRef: {
          id: "d7993900-66a6-4d2d-8003-55338cec086f",
          name: "Billy Boehm",
        },
        quantity: 1164.63,
        subTotal: 3690.99,
        taxAmount: 1631.81,
        taxRateRef: {
          effectiveTaxRate: 7652.71,
          id: "b3119167-b8e3-4c8d-b034-08d6d364ffd4",
          name: "Ms. Samantha Metz",
        },
        totalAmount: 1168.67,
        tracking: {
          categoryRefs: [
            {
              id: "63d48e93-5c2c-49e8-9f30-be3e43202d72",
              name: "Beth Hand",
            },
          ],
          customerRef: {
            companyName: "minima",
            id: "06641870-d9d2-41f9-ad03-0c4ecc11a083",
          },
          isBilledTo: BilledToType.NotApplicable,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "29068b85-02a5-45e7-b73b-c845e320a319",
            name: "Herbert Prohaska",
          },
        },
        trackingCategoryRefs: [
          {
            id: "947c9a86-7bc4-4242-a665-816ddca8ef51",
            name: "Spencer Rath",
          },
          {
            id: "593ec12c-daad-40ec-bafe-dbd80df448a4",
            name: "Lela Moore",
          },
          {
            id: "0c588809-83da-4bf9-af3f-fdd9f7f079af",
            name: "Muriel Durgan",
          },
          {
            id: "24cdb0f4-d281-4187-9568-44eded85a906",
            name: "Laverne Hudson",
          },
        ],
        unitAmount: 6977.29,
      },
      {
        accountRef: {
          id: "dfc2032b-6c87-4992-bb7e-13584f7ae12c",
          name: "Dr. Maxine Morissette",
        },
        description: "aspernatur",
        discountAmount: 7552.4,
        discountPercentage: 9178.77,
        isDirectCost: false,
        itemRef: {
          id: "11571723-0537-47dc-ba89-df975e356686",
          name: "Katrina Considine",
        },
        quantity: 7677.78,
        subTotal: 2250.01,
        taxAmount: 8339.46,
        taxRateRef: {
          effectiveTaxRate: 8373.27,
          id: "c5f111de-a102-46d5-81a4-d190feb21780",
          name: "Clark Schmitt PhD",
        },
        totalAmount: 7188.79,
        tracking: {
          categoryRefs: [
            {
              id: "ddb48470-8fb4-4e39-9e6b-c158c4c4e545",
              name: "Marion Ward",
            },
            {
              id: "42260e9b-200c-4e78-a1bd-8fb7a0a116ce",
              name: "Tammy Dickens",
            },
            {
              id: "097fa30e-9af7-425b-a912-2030d83f5aeb",
              name: "Stella Medhurst",
            },
          ],
          customerRef: {
            companyName: "sunt",
            id: "2e8c1f84-9382-45fd-842c-876c2c2dfb4c",
          },
          isBilledTo: BilledToType.Project,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "1c76230f-841f-4b1b-923f-db14db6be5a6",
            name: "Lewis Mante",
          },
        },
        trackingCategoryRefs: [
          {
            id: "22ae20da-16fc-42b2-b1a2-89c57e854e90",
            name: "Tiffany Mayert",
          },
          {
            id: "22465694-6240-4708-8f7a-b37cef022251",
            name: "Marcus Stehr",
          },
          {
            id: "5410adc6-69af-490a-a6c7-cdc981f06898",
            name: "Ernestine Jast",
          },
          {
            id: "33cfaa34-8c31-4bf4-87ee-4fcf0c42b78f",
            name: "Samantha Huels",
          },
        ],
        unitAmount: 1913.12,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "corrupti",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 7702.62,
          totalAmount: 4972.31,
        },
        payment: {
          accountRef: {
            id: "66324ccb-06c8-4ca1-ad02-529270b8d572",
            name: "Lynette Stark",
          },
          currency: "USD",
          currencyRate: 7399.38,
          id: "8bcf24db-9596-4933-92f7-4533994d78de",
          note: "amet",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "vel",
          totalAmount: 9004.38,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 5456.29,
          totalAmount: 5873.37,
        },
        payment: {
          accountRef: {
            id: "f5abb7f6-6255-40a2-8382-ac483afd2315",
            name: "Malcolm O'Connell",
          },
          currency: "GBP",
          currencyRate: 767.86,
          id: "64e06f5b-f6ae-4591-bc8b-def3612b63c2",
          note: "alias",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "a",
          totalAmount: 8168.25,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 3106.48,
          totalAmount: 458.5,
        },
        payment: {
          accountRef: {
            id: "774a68a9-a35d-4086-b6f6-6fef020e9f44",
            name: "Celia Gottlieb",
          },
          currency: "USD",
          currencyRate: 7289.48,
          id: "992c8dbd-a6a6-41ef-a219-8258fd0a9eba",
          note: "labore",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "voluptatibus",
          totalAmount: 4668.62,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "3ef04964-0d6a-4183-9c87-adf596fdf1ad",
        purchaseOrderNumber: "praesentium",
      },
      {
        id: "37ae80c1-c19c-495b-a998-678fa3f69699",
        purchaseOrderNumber: "ab",
      },
      {
        id: "af388ce0-3614-4448-8797-7a0ef2f53602",
        purchaseOrderNumber: "voluptatum",
      },
      {
        id: "efeef934-152e-4d7e-a53f-4c157deaa717",
        purchaseOrderNumber: "consequatur",
      },
    ],
    reference: "delectus",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: BillStatus.Open,
    subTotal: 3626.93,
    supplementalData: {
      content: {
        "quo": {
          "delectus": "laboriosam",
          "laboriosam": "quam",
          "fuga": "officia",
          "repellat": "cupiditate",
        },
        "soluta": {
          "culpa": "fugiat",
          "inventore": "atque",
          "ad": "sapiente",
        },
        "voluptates": {
          "nesciunt": "ab",
          "quibusdam": "suscipit",
        },
      },
    },
    supplierRef: {
      id: "bf5c838f-bb8c-420c-b67f-c4b425e99e62",
      supplierName: "amet",
    },
    taxAmount: 2796.79,
    totalAmount: 7835.39,
    withholdingTax: [
      {
        amount: 9707.03,
        name: "Whitney King",
      },
      {
        amount: 9503.37,
        name: "Rudolph Kshlerin",
      },
      {
        amount: 3216.54,
        name: "Philip Leannon",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 722889,
}).then((res: CreateBillResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.CreateBillRequest](../../models/operations/createbillrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `retries`                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                       | :heavy_minus_sign:                                                           | Configuration to override the default retry behavior of the client.          |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateBillResponse](../../models/operations/createbillresponse.md)>**


## delete

﻿The *Delete bill* endpoint allows you to delete a specified bill from an accounting platform. 

[Bills](https://docs.codat.io/accounting-api#/schemas/Bill) are itemized records of goods received or services provided to the SMB.

### Process 
1. Pass the `{billId}` to the *Delete bill* endpoint and store the `pushOperationKey` returned.
2. Check the status of the delete operation by checking the status of push operation either via
    1. [Push operation webhook](https://docs.codat.io/introduction/webhooks/core-rules-types#push-operation-status-has-changed) (advised),
    2. [Push operation status endpoint](https://docs.codat.io/codat-api#/operations/get-push-operation).

   A `Success` status indicates that the bill object was deleted from the accounting platform.
3. (Optional) Check that the bill was deleted from the accounting platform.

### Effect on related objects

Be aware that deleting a bill from an accounting platform might cause related objects to be modified. For example, if you delete a paid bill in QuickBooks Online, the bill is deleted but the bill payment against that bill is not. The bill payment is converted to a payment on account.

## Integration specifics
Integrations that support soft delete do not permanently delete the object in the accounting platform.

| Integration | Soft Delete | Details                                                                                                      |  
|-------------|-------------|--------------------------------------------------------------------------------------------------------------|
| QuickBooks Online | No          | -                                                                                                            |
| Oracle NetSuite   | No          | When deleting a bill that's already linked to a bill payment, you must delete the linked bill payment first. |

> **Supported Integrations**
> 
> This functionality is currently only supported for our QuickBooks Online abd Oracle NetSuite integrations. Check out our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) to see what we're building next, and to submit ideas for new features.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DeleteBillResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bills.delete({
  billId: "7110701885",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: DeleteBillResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.DeleteBillRequest](../../models/operations/deletebillrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `retries`                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                       | :heavy_minus_sign:                                                           | Configuration to override the default retry behavior of the client.          |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.DeleteBillResponse](../../models/operations/deletebillresponse.md)>**


## downloadAttachment

The *Download bill attachment* endpoint downloads a specific attachment for a given `billId` and `attachmentId`.

[Bills](https://docs.codat.io/accounting-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support downloading a bill attachment.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadBillAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bills.downloadAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  billId: "EILBDVJVNUAGVKRQ",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: DownloadBillAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.DownloadBillAttachmentRequest](../../models/operations/downloadbillattachmentrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `retries`                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                   | Configuration to override the default retry behavior of the client.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.DownloadBillAttachmentResponse](../../models/operations/downloadbillattachmentresponse.md)>**


## get

The *Get bill* endpoint returns a single bill for a given billId.

[Bills](https://docs.codat.io/accounting-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support getting a specific bill.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetBillResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bills.get({
  billId: "7110701885",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetBillResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [operations.GetBillRequest](../../models/operations/getbillrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `retries`                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                 | :heavy_minus_sign:                                                     | Configuration to override the default retry behavior of the client.    |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.GetBillResponse](../../models/operations/getbillresponse.md)>**


## getAttachment

The *Get bill attachment* endpoint returns a specific attachment for a given `billId` and `attachmentId`.

[Bills](https://docs.codat.io/accounting-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support getting a bill attachment.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetBillAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bills.getAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetBillAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetBillAttachmentRequest](../../models/operations/getbillattachmentrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetBillAttachmentResponse](../../models/operations/getbillattachmentresponse.md)>**


## getCreateUpdateModel

﻿The *Get create/update bill model* endpoint returns the expected data for the request payload when creating and updating a [bill](https://docs.codat.io/accounting-api#/schemas/Bill) for a given company and integration.

[Bills](https://docs.codat.io/accounting-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support creating and updating a bill.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateUpdateBillsModelResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bills.getCreateUpdateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateUpdateBillsModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetCreateUpdateBillsModelRequest](../../models/operations/getcreateupdatebillsmodelrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetCreateUpdateBillsModelResponse](../../models/operations/getcreateupdatebillsmodelresponse.md)>**


## list

The *List bills* endpoint returns a list of [bills](https://docs.codat.io/accounting-api#/schemas/Bill) for a given company's connection.

[Bills](https://docs.codat.io/accounting-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListBillsResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bills.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "saepe",
}).then((res: ListBillsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.ListBillsRequest](../../models/operations/listbillsrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `retries`                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                     | :heavy_minus_sign:                                                         | Configuration to override the default retry behavior of the client.        |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ListBillsResponse](../../models/operations/listbillsresponse.md)>**


## listAttachments

The *List bill attachments* endpoint returns a list of attachments available to download for a given `billId`.

[Bills](https://docs.codat.io/accounting-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support listing bill attachments.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListBillAttachmentsResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bills.listAttachments({
  billId: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: ListBillAttachmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListBillAttachmentsRequest](../../models/operations/listbillattachmentsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `retries`                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                         | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListBillAttachmentsResponse](../../models/operations/listbillattachmentsresponse.md)>**


## update

The *Update bill* endpoint updates an existing [bill](https://docs.codat.io/accounting-api#/schemas/Bill) for a given company's connection.

[Bills](https://docs.codat.io/accounting-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update bill model](https://docs.codat.io/accounting-api#/operations/get-create-update-bills-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateBillResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType, BillStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bills.update({
  bill: {
    amountDue: 524.07,
    currency: "USD",
    currencyRate: 9101.32,
    dueDate: "2022-10-23T00:00:00.000Z",
    id: "890a54b4-75f1-46f5-ad38-5a3c4ac631b9",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "26ced8f9-fdb9-4410-b63b-bf817837b01a",
          name: "Josh Sporer",
        },
        description: "rem",
        discountAmount: 4245.53,
        discountPercentage: 1777.9,
        isDirectCost: false,
        itemRef: {
          id: "4189eb44-873f-4503-bf19-dbf125ce4152",
          name: "Julius Ratke",
        },
        quantity: 8382.27,
        subTotal: 4547.61,
        taxAmount: 9354.93,
        taxRateRef: {
          effectiveTaxRate: 3272.63,
          id: "224a6a0e-123b-4784-bec5-9e1f67f3c4cc",
          name: "Ricky Rempel",
        },
        totalAmount: 4785.76,
        tracking: {
          categoryRefs: [
            {
              id: "96ff3c57-4750-4135-be44-f51f8b084c31",
              name: "Ms. Jamie Torphy",
            },
            {
              id: "a245467f-9487-44c2-95cc-4972233e66bd",
              name: "Jan Torphy",
            },
          ],
          customerRef: {
            companyName: "aut",
            id: "0b979ef2-0387-4320-990c-cc1096400313",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.Unknown,
          projectRef: {
            id: "e5044f65-fe72-4dc4-877d-0cc3f408efc1",
            name: "Pat Upton",
          },
        },
        trackingCategoryRefs: [
          {
            id: "6e1eae0f-75ae-4df2-acab-58b991c926dd",
            name: "Jon Lockman",
          },
          {
            id: "61e7421c-be6d-4950-af0e-a930b69f7ac2",
            name: "Erik Champlin",
          },
          {
            id: "85009049-1160-4820-b888-ec66183bfe96",
            name: "Lindsey Trantow",
          },
          {
            id: "0ec16faf-75b0-4b53-aa4d-a37cbaaf4452",
            name: "Jon Lemke DDS",
          },
        ],
        unitAmount: 5867.23,
      },
      {
        accountRef: {
          id: "b2ad32da-fe81-4a88-b444-4573fecd4735",
          name: "Lana Keeling",
        },
        description: "quos",
        discountAmount: 1523.02,
        discountPercentage: 544.98,
        isDirectCost: false,
        itemRef: {
          id: "9379aa69-cd5f-4bcf-b9da-18a7822bf958",
          name: "Tom Thiel",
        },
        quantity: 4331.94,
        subTotal: 1151.37,
        taxAmount: 6574.85,
        taxRateRef: {
          effectiveTaxRate: 8187.39,
          id: "b55f9e5d-751c-49fe-8f75-02bfdc345084",
          name: "Josefina Borer",
        },
        totalAmount: 2943.14,
        tracking: {
          categoryRefs: [
            {
              id: "56379f3f-b27e-421f-8626-57b36fc6b9f5",
              name: "Mathew Schmitt",
            },
            {
              id: "25c67641-a831-42e5-847b-4c21ccb423ab",
              name: "Josh Rutherford DVM",
            },
          ],
          customerRef: {
            companyName: "fuga",
            id: "abdd88e7-1f6c-4482-92d7-771e7fd07400",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "f8d29de1-dd70-497b-9da0-8c57fa6c78a2",
            name: "Ms. Eileen Thompson",
          },
        },
        trackingCategoryRefs: [
          {
            id: "feca6191-4981-440b-a4ff-8ae170ef03b5",
            name: "Mike Kovacek",
          },
          {
            id: "aa868555-9667-432a-a5dc-b6682cb70f8c",
            name: "Kristopher Herman",
          },
          {
            id: "6e91b9a9-f748-446e-ac33-09db0536d9e7",
            name: "Mr. Vicky Parker",
          },
        ],
        unitAmount: 9386.72,
      },
      {
        accountRef: {
          id: "5392c11a-25a8-4bf9-af97-428ad9a9f8bf",
          name: "Mr. Roy Conn",
        },
        description: "ad",
        discountAmount: 2449.9,
        discountPercentage: 3556.85,
        isDirectCost: false,
        itemRef: {
          id: "9d98387f-7a79-4cd7-acd2-484da21729f2",
          name: "Dr. Guillermo Funk",
        },
        quantity: 3495.58,
        subTotal: 4682.21,
        taxAmount: 1547.23,
        taxRateRef: {
          effectiveTaxRate: 3361.23,
          id: "f1169ac1-e41d-48a2-bc23-e34f2dfa4a19",
          name: "Elsa Kerluke",
        },
        totalAmount: 6107.22,
        tracking: {
          categoryRefs: [
            {
              id: "2151fe17-1209-4985-be9f-543d854439ee",
              name: "Nicole Goyette",
            },
          ],
          customerRef: {
            companyName: "accusantium",
            id: "443bc154-188c-42f5-ae85-da7832eabd61",
          },
          isBilledTo: BilledToType.NotApplicable,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "3b0d51a4-4bf0-41ba-9870-6d46082bfbdc",
            name: "Jean Windler",
          },
        },
        trackingCategoryRefs: [
          {
            id: "4e2ae4fb-5cb3-45d1-b638-f1edb78359ec",
            name: "Warren Runolfsson",
          },
          {
            id: "60f8cd58-0ba7-4381-8e4f-e4447297cd3b",
            name: "Angel Stokes",
          },
          {
            id: "bce247b7-684e-4ff5-8126-d71cffbd0eb7",
            name: "Beulah Kuvalis",
          },
          {
            id: "1953b44b-d3c4-4315-9d33-e5953c001139",
            name: "Gilbert Dickinson",
          },
        ],
        unitAmount: 2664.61,
      },
      {
        accountRef: {
          id: "1e6c31cc-2f1f-4cb5-9c9a-41ffbe9cbd79",
          name: "Casey Weber",
        },
        description: "debitis",
        discountAmount: 414.36,
        discountPercentage: 4582.74,
        isDirectCost: false,
        itemRef: {
          id: "6cc7abf6-16ea-45c7-9641-934b90f2e09d",
          name: "Faye Senger",
        },
        quantity: 7687.72,
        subTotal: 1277.84,
        taxAmount: 9668.01,
        taxRateRef: {
          effectiveTaxRate: 6189.9,
          id: "e2e10594-4b93-45d2-b7a7-2f90849d6aed",
          name: "Amelia Upton",
        },
        totalAmount: 4929.22,
        tracking: {
          categoryRefs: [
            {
              id: "37cd9222-c9ff-4574-91aa-bfa2e761f0ca",
              name: "Meredith Green",
            },
            {
              id: "ef1031e6-899f-40c2-801e-22cd55cc0584",
              name: "Carl Larson",
            },
          ],
          customerRef: {
            companyName: "nihil",
            id: "6d971fc8-20c6-45b0-b7bb-8e0cc885187e",
          },
          isBilledTo: BilledToType.NotApplicable,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "e04af28c-5ddd-4b46-aa1c-fd6d828da013",
            name: "Mr. Sabrina Blick",
          },
        },
        trackingCategoryRefs: [
          {
            id: "46645c1d-81f2-4904-af56-9b7aff0ea221",
            name: "Nichole Renner IV",
          },
          {
            id: "1bc163e2-79a3-4b08-8da9-9257d04f4084",
            name: "Kayla Kilback",
          },
        ],
        unitAmount: 8310.89,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "ut",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 8124.31,
          totalAmount: 7335.71,
        },
        payment: {
          accountRef: {
            id: "deecf6b9-9bc6-4356-aebf-df55c294c060",
            name: "Steven Jast Sr.",
          },
          currency: "USD",
          currencyRate: 4767.7,
          id: "764eef6d-0c6d-46ed-9c73-dd634571509a",
          note: "blanditiis",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "deleniti",
          totalAmount: 4930.17,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 2381.67,
          totalAmount: 7937.52,
        },
        payment: {
          accountRef: {
            id: "5a1f9c24-2c7b-466a-9f30-c73df5b67198",
            name: "Gary Wisozk",
          },
          currency: "EUR",
          currencyRate: 2723.96,
          id: "bb438d85-b260-4591-9745-e3c2059c9c3f",
          note: "veniam",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "esse",
          totalAmount: 8871.67,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "e252765b-1d62-4fcd-ace1-f01216ce2239",
        purchaseOrderNumber: "accusamus",
      },
    ],
    reference: "deleniti",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: BillStatus.Unknown,
    subTotal: 3184.71,
    supplementalData: {
      content: {
        "quibusdam": {
          "nulla": "inventore",
        },
        "omnis": {
          "excepturi": "nostrum",
          "sint": "doloribus",
          "magnam": "adipisci",
          "natus": "necessitatibus",
        },
        "velit": {
          "eos": "nisi",
          "commodi": "impedit",
          "facilis": "temporibus",
        },
        "error": {
          "delectus": "molestiae",
          "deserunt": "laborum",
        },
      },
    },
    supplierRef: {
      id: "2b241136-95d1-4e66-98fc-c4596217c297",
      supplierName: "molestiae",
    },
    taxAmount: 3968.2,
    totalAmount: 4547.05,
    withholdingTax: [
      {
        amount: 2325.57,
        name: "Rhonda Collins",
      },
      {
        amount: 17.82,
        name: "Penny Rice",
      },
    ],
  },
  billId: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 584483,
}).then((res: UpdateBillResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.UpdateBillRequest](../../models/operations/updatebillrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `retries`                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                       | :heavy_minus_sign:                                                           | Configuration to override the default retry behavior of the client.          |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.UpdateBillResponse](../../models/operations/updatebillresponse.md)>**


## uploadAttachment

The *Upload bill attachment* endpoint uploads an attachment and assigns it against a specific `billId`.

[Bills](https://docs.codat.io/accounting-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

**Integration-specific behaviour**

For more details on supported file types by integration see [Attachments](https://docs.codat.io/accounting-api#/schemas/Attachment).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support uploading a bill attachment.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UploadBillAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bills.uploadAttachment({
  requestBody: {
    content: "molestiae".encode(),
    requestBody: "et",
  },
  billId: "EILBDVJVNUAGVKRQ",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: UploadBillAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UploadBillAttachmentRequest](../../models/operations/uploadbillattachmentrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `retries`                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                           | :heavy_minus_sign:                                                                               | Configuration to override the default retry behavior of the client.                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UploadBillAttachmentResponse](../../models/operations/uploadbillattachmentresponse.md)>**

