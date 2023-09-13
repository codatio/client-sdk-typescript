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
    amountDue: 5436.78,
    currency: "GBP",
    currencyRate: 2826.99,
    dueDate: "2022-10-23T00:00:00.000Z",
    id: "0ab40750-88e5-4186-a065-e904f3b1194b",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "abf603a7-9f9d-4fe0-ab7d-a8a50ce187f8",
          name: "Ms. Alison Schoen",
        },
        description: "assumenda",
        discountAmount: 4103.01,
        discountPercentage: 5391.18,
        isDirectCost: false,
        itemRef: {
          id: "9eee9526-f8d9-486e-881e-ad4f0e101256",
          name: "Elsa Maggio",
        },
        quantity: 1604.67,
        subTotal: 5801.07,
        taxAmount: 8863.05,
        taxRateRef: {
          effectiveTaxRate: 5979.37,
          id: "73e922a5-7a15-4be3-a060-807e2b6e3ab8",
          name: "Jim Hammes II",
        },
        totalAmount: 5973.03,
        tracking: {
          categoryRefs: [
            {
              id: "7a60ff2a-54a3-41e9-8764-a3e865e7956f",
              name: "Miss Bruce Hermann",
            },
          ],
          customerRef: {
            companyName: "mollitia",
            id: "9da660ff-57bf-4aad-8f9e-fc1b4512c103",
          },
          isBilledTo: BilledToType.Unknown,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "48dc2f61-5199-4ebf-90e9-fe6c632ca3ae",
            name: "Ms. William Boyle",
          },
        },
        trackingCategoryRefs: [
          {
            id: "96312fde-0477-4177-8ff6-1d017476360a",
            name: "Audrey Stiedemann",
          },
        ],
        unitAmount: 6391.87,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "aliquid",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 3747.53,
          totalAmount: 6145.28,
        },
        payment: {
          accountRef: {
            id: "a1adeaab-5851-4d6c-a45b-08b61891baa0",
            name: "Stewart Brakus",
          },
          currency: "EUR",
          currencyRate: 291.9,
          id: "08e6f8c5-f350-4d8c-9b5a-341814301042",
          note: "ab",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "quae",
          totalAmount: 2226.58,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "d5208ece-7e25-43b6-a845-1c6c6e205e16",
        purchaseOrderNumber: "at",
      },
    ],
    reference: "vero",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: BillStatus.Void,
    subTotal: 1927.18,
    supplementalData: {
      content: {
        "doloribus": {
          "repudiandae": "optio",
        },
      },
    },
    supplierRef: {
      id: "9578a645-8427-43a8-818d-162309fb0929",
      supplierName: "iste",
    },
    taxAmount: 1700.99,
    totalAmount: 813.69,
    withholdingTax: [
      {
        amount: 6863.62,
        name: "Jan Reichel",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 328379,
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
  billId: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
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
  query: "quos",
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
    amountDue: 9308.19,
    currency: "USD",
    currencyRate: 5207.61,
    dueDate: "2022-10-23T00:00:00.000Z",
    id: "4be05601-3f59-4da7-97a5-9ecfef66ef1c",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "a3383c2b-eb47-4737-bc8d-72f64d1db1f2",
          name: "Mr. Jim Franecki",
        },
        description: "ea",
        discountAmount: 1076.17,
        discountPercentage: 8777.51,
        isDirectCost: false,
        itemRef: {
          id: "96349e1c-f9e0-46e3-a437-000ae6b6bc9b",
          name: "Tommie Klocko",
        },
        quantity: 8975.43,
        subTotal: 6540.82,
        taxAmount: 7699.67,
        taxRateRef: {
          effectiveTaxRate: 3730.4,
          id: "5a9741d3-1135-4296-9bb8-a7202611435e",
          name: "Tracy Mills",
        },
        totalAmount: 8028.94,
        tracking: {
          categoryRefs: [
            {
              id: "2259b1ab-da8c-4070-a108-4cb0672d1ad8",
              name: "Daisy Tillman",
            },
          ],
          customerRef: {
            companyName: "sint",
            id: "665b85ef-bd02-4bae-8be2-d782259e3ea4",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "197f9244-3da7-4ce5-ab89-5c537c6454ef",
            name: "Jason Rempel",
          },
        },
        trackingCategoryRefs: [
          {
            id: "896c3ca5-acfb-4e2f-9570-7577929177de",
            name: "Benny Jacobs",
          },
        ],
        unitAmount: 8886.16,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "quidem",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 2114.55,
          totalAmount: 2646.19,
        },
        payment: {
          accountRef: {
            id: "09e3eb1e-5a2b-412e-b07f-116db99545fc",
            name: "Ronnie Welch",
          },
          currency: "USD",
          currencyRate: 5646.67,
          id: "70e189db-b30f-4cb3-bea0-55b197cd44e2",
          note: "asperiores",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "consequuntur",
          totalAmount: 8138.8,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "82d3513b-b6f4-48b6-96bc-db35ff2e4b27",
        purchaseOrderNumber: "nostrum",
      },
    ],
    reference: "neque",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: BillStatus.Paid,
    subTotal: 5221.76,
    supplementalData: {
      content: {
        "eligendi": {
          "fugiat": "unde",
        },
      },
    },
    supplierRef: {
      id: "e7319c17-7d52-45f7-bb11-4eeb52ff785f",
      supplierName: "quisquam",
    },
    taxAmount: 1972.59,
    totalAmount: 4671.19,
    withholdingTax: [
      {
        amount: 5349.08,
        name: "Jamie Simonis",
      },
    ],
  },
  billId: "7110701885",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 514993,
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
    content: "repudiandae".encode(),
    requestBody: "consequatur",
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

