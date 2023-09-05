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

The *Create bill* endpoint creates a new [bill](https://docs.codat.io/sync-for-payables-api#/schemas/Bill) for a given company's connection.

[Bills](https://docs.codat.io/sync-for-payables-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update bill model](https://docs.codat.io/sync-for-payables-api#/operations/get-create-update-bills-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support creating a bill.


### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { CreateBillResponse } from "@codat/sync-for-payables/dist/sdk/models/operations";
import { BilledToType, BillStatus } from "@codat/sync-for-payables/dist/sdk/models/shared";

const sdk = new CodatSyncPayables({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bills.create({
  bill: {
    amountDue: 3442.89,
    currency: "USD",
    currencyRate: 5488.49,
    dueDate: "2022-10-23T00:00:00.000Z",
    id: "dc1ac600-dec0-401a-8802-e2ec09ff8f0f",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "6ff3477c-13e9-402c-9412-5b0960a66815",
          name: "Harriet Gottlieb",
        },
        description: "deserunt",
        discountAmount: 9650.95,
        discountPercentage: 6095.37,
        isDirectCost: false,
        itemRef: {
          id: "23c5949f-83f3-450c-b876-ffb901c6ecbb",
          name: "Silvia Considine",
        },
        quantity: 7581.94,
        subTotal: 9928.87,
        taxAmount: 4598.75,
        taxRateRef: {
          effectiveTaxRate: 5000.21,
          id: "9ffafeda-53e5-4ae6-a0ac-184c2b9c247c",
          name: "Byron Farrell",
        },
        totalAmount: 6751.26,
        tracking: {
          categoryRefs: [
            {
              id: "0e1942f3-2e55-4055-b56f-5d56d0bd0af2",
              name: "Mrs. Jerald Waelchi",
            },
            {
              id: "b4f62cba-3f89-441a-abc0-b80a6924d3b2",
              name: "Earnest Wisoky",
            },
          ],
          customerRef: {
            companyName: "quos",
            id: "f895010f-5dd3-4d6f-a180-4e54c82f168a",
          },
          isBilledTo: BilledToType.Unknown,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "3c8873e4-8438-40b1-b6b8-ca275a60a04c",
            name: "Sheryl Hermiston",
          },
        },
        trackingCategoryRefs: [
          {
            id: "99171b51-c1bd-4b1c-b4b8-88ebdfc4ccca",
            name: "Tracy Reinger",
          },
          {
            id: "fc0b2dce-1087-43e4-ab00-6d678878ba85",
            name: "Joe Orn",
          },
        ],
        unitAmount: 1681.42,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "quas",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 9580.68,
          totalAmount: 9016.51,
        },
        payment: {
          accountRef: {
            id: "fa9c95f2-eac5-4565-9307-cfee81206e28",
            name: "Peggy Windler",
          },
          currency: "USD",
          currencyRate: 2666.8,
          id: "1c480d3f-2132-4af0-b102-d514f4cc6f18",
          note: "expedita",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "excepturi",
          totalAmount: 3966.1,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 6273.41,
          totalAmount: 4087.74,
        },
        payment: {
          accountRef: {
            id: "a4f77a87-ee3e-44be-b52c-65b34418e3bb",
            name: "Joshua Schiller",
          },
          currency: "USD",
          currencyRate: 4834.59,
          id: "5e0e8419-d8f8-44f1-84f3-e07edcc4aa5f",
          note: "sequi",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "laborum",
          totalAmount: 7489.73,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 162.52,
          totalAmount: 3699.41,
        },
        payment: {
          accountRef: {
            id: "a972e056-7282-427b-ad30-9470bf7a4fa8",
            name: "Jody Wolff",
          },
          currency: "USD",
          currencyRate: 6750.58,
          id: "6fae54eb-f60c-4321-b023-b75d2367fe1a",
          note: "accusantium",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "minus",
          totalAmount: 5509.94,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 4857.95,
          totalAmount: 5886.62,
        },
        payment: {
          accountRef: {
            id: "f0a396d9-0c36-44b7-815d-fbace188b1c4",
            name: "Cornelius Corwin",
          },
          currency: "EUR",
          currencyRate: 4283.78,
          id: "ce611fee-b1c7-4cbd-b6ee-c74378ba2531",
          note: "iusto",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "magnam",
          totalAmount: 4877.99,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "c915ad2c-af5d-4d67-a3dc-0f5ae2f3a6b7",
        purchaseOrderNumber: "doloremque",
      },
      {
        id: "08787561-43f5-4a6c-98b5-5554080d40bc",
        purchaseOrderNumber: "similique",
      },
      {
        id: "cc6cbd6b-5f3e-4c90-9304-f926bad25538",
        purchaseOrderNumber: "quasi",
      },
      {
        id: "9b474b0e-d20e-4562-88ff-f639a910abdc",
        purchaseOrderNumber: "fuga",
      },
    ],
    reference: "tempore",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: BillStatus.Unknown,
    subTotal: 3830.66,
    supplementalData: {
      content: {
        "nisi": {
          "provident": "laboriosam",
          "accusamus": "ab",
        },
        "itaque": {
          "eaque": "alias",
          "qui": "consequuntur",
          "vitae": "quidem",
          "sequi": "amet",
        },
      },
    },
    supplierRef: {
      id: "5d89acb3-ecfd-4a8d-8c54-9ef03004978a",
      supplierName: "ex",
    },
    taxAmount: 1017.7,
    totalAmount: 9535.64,
    withholdingTax: [
      {
        amount: 842.88,
        name: "Ms. Darnell Denesik",
      },
      {
        amount: 5199.85,
        name: "Jared Koepp DVM",
      },
      {
        amount: 9686.89,
        name: "Jared Blick",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 681578,
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
    2. [Push operation status endpoint](https://docs.codat.io/sync-for-payables-api#/operations/get-push-operation).

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
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { DeleteBillResponse } from "@codat/sync-for-payables/dist/sdk/models/operations";

const sdk = new CodatSyncPayables({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bills.delete({
  billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
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

[Bills](https://docs.codat.io/sync-for-payables-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support downloading a bill attachment.


### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { DownloadBillAttachmentResponse } from "@codat/sync-for-payables/dist/sdk/models/operations";

const sdk = new CodatSyncPayables({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bills.downloadAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  billId: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
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

The *Get bill* endpoint returns a single bill for a given `billId`.

[Bills](https://docs.codat.io/sync-for-payables-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support getting a specific bill.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-payables-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { GetBillResponse } from "@codat/sync-for-payables/dist/sdk/models/operations";

const sdk = new CodatSyncPayables({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bills.get({
  billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
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

[Bills](https://docs.codat.io/sync-for-payables-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support getting a bill attachment.


### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { GetBillAttachmentResponse } from "@codat/sync-for-payables/dist/sdk/models/operations";

const sdk = new CodatSyncPayables({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bills.getAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  billId: "EILBDVJVNUAGVKRQ",
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

﻿The *Get create/update bill model* endpoint returns the expected data for the request payload when creating and updating a [bill](https://docs.codat.io/sync-for-payables-api#/schemas/Bill) for a given company and integration.

[Bills](https://docs.codat.io/sync-for-payables-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support creating and updating a bill.


### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { GetCreateUpdateBillModelResponse } from "@codat/sync-for-payables/dist/sdk/models/operations";

const sdk = new CodatSyncPayables({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bills.getCreateUpdateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateUpdateBillModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetCreateUpdateBillModelRequest](../../models/operations/getcreateupdatebillmodelrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `retries`                                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                   | :heavy_minus_sign:                                                                                       | Configuration to override the default retry behavior of the client.                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetCreateUpdateBillModelResponse](../../models/operations/getcreateupdatebillmodelresponse.md)>**


## list

The *List bills* endpoint returns a list of [bills](https://docs.codat.io/sync-for-payables-api#/schemas/Bill) for a given company's connection.

[Bills](https://docs.codat.io/sync-for-payables-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-payables-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { ListBillsResponse } from "@codat/sync-for-payables/dist/sdk/models/operations";

const sdk = new CodatSyncPayables({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bills.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "sed",
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

[Bills](https://docs.codat.io/sync-for-payables-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support listing bill attachments.


### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { ListBillAttachmentsResponse } from "@codat/sync-for-payables/dist/sdk/models/operations";

const sdk = new CodatSyncPayables({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bills.listAttachments({
  billId: "7110701885",
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

The *Update bill* endpoint updates an existing [bill](https://docs.codat.io/sync-for-payables-api#/schemas/Bill) for a given company's connection.

[Bills](https://docs.codat.io/sync-for-payables-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update bill model](https://docs.codat.io/sync-for-payables-api#/operations/get-create-update-bills-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support creating a bill.


### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { UpdateBillResponse } from "@codat/sync-for-payables/dist/sdk/models/operations";
import { BilledToType, BillStatus } from "@codat/sync-for-payables/dist/sdk/models/shared";

const sdk = new CodatSyncPayables({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bills.update({
  bill: {
    amountDue: 1975.19,
    currency: "EUR",
    currencyRate: 5283.15,
    dueDate: "2022-10-23T00:00:00.000Z",
    id: "a97ff334-cddf-4857-a9e6-1876c6ab21d2",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "fc94d6fe-cd79-4939-8066-a6d2d0003553",
          name: "Billie Schmitt",
        },
        description: "doloremque",
        discountAmount: 5168.33,
        discountPercentage: 4352.66,
        isDirectCost: false,
        itemRef: {
          id: "fa21e915-2cb3-4119-967b-8e3c8db03408",
          name: "Leslie Sporer",
        },
        quantity: 3078.74,
        subTotal: 9382.44,
        taxAmount: 9454.31,
        taxRateRef: {
          effectiveTaxRate: 8267.97,
          id: "455906d1-263d-448e-935c-2c9e81f30be3",
          name: "Leroy Fisher Sr.",
        },
        totalAmount: 8488.6,
        tracking: {
          categoryRefs: [
            {
              id: "21657650-6641-4870-99d2-1f9ad030c4ec",
              name: "Carl Breitenberg V",
            },
            {
              id: "36429068-b850-42a5-9e7f-73bc845e320a",
              name: "Christine Mueller",
            },
          ],
          customerRef: {
            companyName: "rerum",
            id: "adf947c9-a867-4bc4-a426-665816ddca8e",
          },
          isBilledTo: BilledToType.Project,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "1fcb4c59-3ec1-42cd-aad0-ec7afedbd80d",
            name: "Barry Funk",
          },
        },
        trackingCategoryRefs: [
          {
            id: "7f9390c5-8880-4983-9abf-9ef3ffdd9f7f",
            name: "Lillie Moen",
          },
          {
            id: "4d35724c-db0f-44d2-8118-7d56844eded8",
            name: "Ms. Madeline Miller",
          },
        ],
        unitAmount: 9090.93,
      },
      {
        accountRef: {
          id: "628bdfc2-032b-46c8-b992-3b7e13584f7a",
          name: "Carl Davis",
        },
        description: "praesentium",
        discountAmount: 6155.97,
        discountPercentage: 1120.14,
        isDirectCost: false,
        itemRef: {
          id: "f82ce115-7172-4305-b77d-cfa89df975e3",
          name: "Gertrude Kautzer",
        },
        quantity: 444.43,
        subTotal: 5968.2,
        taxAmount: 1458.41,
        taxRateRef: {
          effectiveTaxRate: 9320.57,
          id: "9c3ddc5f-111d-4ea1-826d-541a4d190feb",
          name: "Evelyn Kuhlman MD",
        },
        totalAmount: 8119.03,
        tracking: {
          categoryRefs: [
            {
              id: "c0dbbddb-4847-408f-b4e3-91e6bc158c4c",
              name: "Lila Hermiston",
            },
            {
              id: "99ea3422-60e9-4b20-8ce7-8a1bd8fb7a0a",
              name: "Julie Homenick",
            },
            {
              id: "723d4097-fa30-4e9a-b725-b29122030d83",
              name: "Dan Nolan",
            },
            {
              id: "7799d22e-8c1f-4849-b825-fdc42c876c2c",
              name: "Marcella Windler",
            },
          ],
          customerRef: {
            companyName: "eligendi",
            id: "fc1c7623-0f84-41fb-9bd2-3fdb14db6be5",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "85998e22-ae20-4da1-afc2-b271a289c57e",
            name: "Maurice Friesen",
          },
        },
        trackingCategoryRefs: [
          {
            id: "439d2224-6569-4462-8070-84f7ab37cef0",
            name: "Lois Crooks V",
          },
        ],
        unitAmount: 2907.61,
      },
      {
        accountRef: {
          id: "db55410a-dc66-49af-90a2-6c7cdc981f06",
          name: "Dr. Austin Little",
        },
        description: "libero",
        discountAmount: 7225,
        discountPercentage: 2253.83,
        isDirectCost: false,
        itemRef: {
          id: "3cfaa348-c31b-4f40-bee4-fcf0c42b78f1",
          name: "Sue Cronin",
        },
        quantity: 5681.62,
        subTotal: 5493.48,
        taxAmount: 6679.77,
        taxRateRef: {
          effectiveTaxRate: 217.01,
          id: "dc766324-ccb0-46c8-8a12-d02529270b8d",
          name: "Courtney Conroy",
        },
        totalAmount: 8506.28,
        tracking: {
          categoryRefs: [
            {
              id: "95b8bcf2-4db9-4596-9335-2f74533994d7",
              name: "Gustavo Ullrich",
            },
            {
              id: "6e9389f5-abb7-4f66-a550-a28382ac483a",
              name: "Rufus Conn II",
            },
            {
              id: "bba65016-4e06-4f5b-b6ae-591bc8bdef36",
              name: "Denise Reilly",
            },
          ],
          customerRef: {
            companyName: "quod",
            id: "205fda84-0774-4a68-a9a3-5d086b6f66fe",
          },
          isBilledTo: BilledToType.Project,
          isRebilledTo: BilledToType.Unknown,
          projectRef: {
            id: "20e9f443-b425-47b9-92c8-dbda6a61efa2",
            name: "Sheryl Littel",
          },
        },
        trackingCategoryRefs: [
          {
            id: "fd0a9eba-47f7-4d3e-b049-640d6a1831c8",
            name: "Harriet Smitham",
          },
          {
            id: "96fdf1ad-837a-4e80-81c1-9c95ba998678",
            name: "Doug Ernser",
          },
          {
            id: "96991af3-88ce-4036-9444-8c7977a0ef2f",
            name: "Mr. Edna Howe",
          },
        ],
        unitAmount: 8905.05,
      },
      {
        accountRef: {
          id: "feef9341-52ed-47e2-93f4-c157deaa7170",
          name: "Randall Greenholt",
        },
        description: "quo",
        discountAmount: 8042.1,
        discountPercentage: 9670.06,
        isDirectCost: false,
        itemRef: {
          id: "667aaf9b-bad1-485f-a431-d6bf5c838fbb",
          name: "Miss Jermaine Cole",
        },
        quantity: 4062.72,
        subTotal: 4836.26,
        taxAmount: 9630.94,
        taxRateRef: {
          effectiveTaxRate: 7949.27,
          id: "4b425e99-e623-44c9-b7b7-9dfeb77a5c38",
          name: "Theodore Reichert",
        },
        totalAmount: 5851.09,
        tracking: {
          categoryRefs: [
            {
              id: "e506ef89-0a54-4b47-9f16-f56d385a3c4a",
              name: "Miss Ben Ferry",
            },
          ],
          customerRef: {
            companyName: "provident",
            id: "e26ced8f-9fdb-4941-8f63-bbf817837b01",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "dd788624-189e-4b44-873f-5033f19dbf12",
            name: "Della Trantow II",
          },
        },
        trackingCategoryRefs: [
          {
            id: "eab9cd7e-5224-4a6a-8e12-3b7847ec59e1",
            name: "Milton Kirlin",
          },
        ],
        unitAmount: 7675.55,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "optio",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 7293.86,
          totalAmount: 3805.83,
        },
        payment: {
          accountRef: {
            id: "d7696ff3-c574-4750-9357-e44f51f8b084",
            name: "Norman Casper",
          },
          currency: "EUR",
          currencyRate: 1182.36,
          id: "93a24546-7f94-4874-82d5-cc4972233e66",
          note: "cum",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "rem",
          totalAmount: 9774.72,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 8309.09,
          totalAmount: 129.17,
        },
        payment: {
          accountRef: {
            id: "0b979ef2-0387-4320-990c-cc1096400313",
            name: "Nathan Toy II",
          },
          currency: "GBP",
          currencyRate: 9622.8,
          id: "65fe72dc-4077-4d0c-83f4-08efc15ceb4d",
          note: "ea",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "quasi",
          totalAmount: 8834.26,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 296,
          totalAmount: 9807.05,
        },
        payment: {
          accountRef: {
            id: "75aedf2a-cab5-48b9-91c9-26ddb589461e",
            name: "Miss Elaine Considine",
          },
          currency: "EUR",
          currencyRate: 4128.97,
          id: "d9502f0e-a930-4b69-b7ac-2f72f8850090",
          note: "tempora",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "quasi",
          totalAmount: 829.15,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 5585.23,
          totalAmount: 1728.78,
        },
        payment: {
          accountRef: {
            id: "07888ec6-6183-4bfe-9659-eb40ec16faf7",
            name: "Olivia Auer",
          },
          currency: "GBP",
          currencyRate: 1808.11,
          id: "a4da37cb-aaf4-4452-8484-2c9b2ad32daf",
          note: "necessitatibus",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "quasi",
          totalAmount: 6493.73,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "8f444457-3fec-4d47-b53f-63c8209379aa",
        purchaseOrderNumber: "ex",
      },
      {
        id: "9cd5fbcf-79da-418a-b822-bf95894e6861",
        purchaseOrderNumber: "animi",
      },
      {
        id: "db55f9e5-d751-4c9f-a8f7-502bfdc34508",
        purchaseOrderNumber: "modi",
      },
    ],
    reference: "illo",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: BillStatus.Unknown,
    subTotal: 4742.67,
    supplementalData: {
      content: {
        "dolore": {
          "nostrum": "ex",
          "amet": "voluptate",
        },
        "molestias": {
          "ipsum": "hic",
          "quidem": "odit",
          "molestiae": "accusamus",
          "quia": "inventore",
        },
      },
    },
    supplierRef: {
      id: "f862657b-36fc-46b9-b587-ce525c67641a",
      supplierName: "totam",
    },
    taxAmount: 2443.32,
    totalAmount: 968.03,
    withholdingTax: [
      {
        amount: 8897.63,
        name: "Brenda Greenholt",
      },
    ],
  },
  billId: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 766005,
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

[Bills](https://docs.codat.io/sync-for-payables-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.

**Integration-specific behaviour**

For more details on supported file types by integration see [Attachments](https://docs.codat.io/sync-for-payables-api#/schemas/Attachment).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support uploading a bill attachment.


### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { UploadBillAttachmentResponse } from "@codat/sync-for-payables/dist/sdk/models/operations";

const sdk = new CodatSyncPayables({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bills.uploadAttachment({
  requestBody: {
    content: "quia".encode(),
    requestBody: "beatae",
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

