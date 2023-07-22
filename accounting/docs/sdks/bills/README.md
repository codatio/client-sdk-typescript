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
    amountDue: 9453.2,
    currency: "USD",
    currencyRate: 3712.95,
    dueDate: "2022-10-23T00:00:00.000Z",
    id: "a9e61876-c6ab-421d-a9df-c94d6fecd799",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "0066a6d2-d000-4355-b38c-ec086fa21e91",
          name: "Kathryn Runolfsdottir",
        },
        description: "beatae",
        discountAmount: 1234.95,
        discountPercentage: 5658.45,
        isDirectCost: false,
        itemRef: {
          id: "167b8e3c-8db0-4340-8d6d-364ffd455906",
          name: "Keith Crist",
        },
        quantity: 8436.59,
        subTotal: 2552.64,
        taxAmount: 5231.09,
        taxRateRef: {
          effectiveTaxRate: 8846.22,
          id: "935c2c9e-81f3-40be-be43-202d72165765",
          name: "Kristin Howell IV",
        },
        totalAmount: 4935.79,
        tracking: {
          categoryRefs: [
            {
              id: "d9d21f9a-d030-4c4e-8c11-a0836429068b",
              name: "Pedro Armstrong",
            },
          ],
          customerRef: {
            companyName: "quaerat",
            id: "5e7f73bc-845e-4320-a319-f4badf947c9a",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "7bc42426-6658-416d-9ca8-ef51fcb4c593",
            name: "Devin Boyle",
          },
        },
        trackingCategoryRefs: [
          {
            id: "aad0ec7a-fedb-4d80-9f44-8a47f9390c58",
            name: "Willard Barrows",
          },
          {
            id: "3dabf9ef-3ffd-4d9f-bf07-9af4d35724cd",
            name: "Jeffrey Wisoky",
          },
          {
            id: "281187d5-6844-4ede-985a-9065e628bdfc",
            name: "Elizabeth Douglas",
          },
          {
            id: "6c879923-b7e1-4358-8f7a-e12c6891f82c",
            name: "Keith Bode",
          },
        ],
        unitAmount: 823.96,
      },
      {
        accountRef: {
          id: "72305377-dcfa-489d-b975-e356686092e9",
          name: "Norman Skiles",
        },
        description: "minima",
        discountAmount: 9519.01,
        discountPercentage: 1048.34,
        isDirectCost: false,
        itemRef: {
          id: "11dea102-6d54-41a4-9190-feb21780bccc",
          name: "Muriel Reichel",
        },
        quantity: 8504.06,
        subTotal: 7468.34,
        taxAmount: 2973.25,
        taxRateRef: {
          effectiveTaxRate: 5123.49,
          id: "4708fb4e-391e-46bc-958c-4c4e54599ea3",
          name: "Nicole Christiansen DVM",
        },
        totalAmount: 5757.53,
        tracking: {
          categoryRefs: [
            {
              id: "200ce78a-1bd8-4fb7-a0a1-16ce723d4097",
              name: "Dr. Doug Dibbert",
            },
            {
              id: "af725b29-1220-430d-83f5-aeb7799d22e8",
              name: "Roger Zulauf",
            },
            {
              id: "93825fdc-42c8-476c-ac2d-fb4cfc1c7623",
              name: "Johanna Lueilwitz DVM",
            },
          ],
          customerRef: {
            companyName: "nam",
            id: "1bd23fdb-14db-46be-9a68-5998e22ae20d",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.Unknown,
          projectRef: {
            id: "6fc2b271-a289-4c57-a854-e90439d22246",
            name: "Kristin McDermott",
          },
        },
        trackingCategoryRefs: [
          {
            id: "407084f7-ab37-4cef-8222-5194db55410a",
            name: "Garrett Hoeger",
          },
        ],
        unitAmount: 6668.17,
      },
      {
        accountRef: {
          id: "f90a26c7-cdc9-481f-8689-81d6bb33cfaa",
          name: "Clara Larson",
        },
        description: "veritatis",
        discountAmount: 7217.23,
        discountPercentage: 9747.75,
        isDirectCost: false,
        itemRef: {
          id: "407ee4fc-f0c4-42b7-8f15-626398a0dc76",
          name: "Rosa Considine",
        },
        quantity: 8031.44,
        subTotal: 7133.71,
        taxAmount: 371.81,
        taxRateRef: {
          effectiveTaxRate: 4086.77,
          id: "c8ca12d0-2529-4270-b8d5-722dd895b8bc",
          name: "Ernest Grimes",
        },
        totalAmount: 5854.45,
        tracking: {
          categoryRefs: [
            {
              id: "9693352f-7453-4399-8d78-de3b6e9389f5",
              name: "Gerardo Ritchie",
            },
            {
              id: "662550a2-8382-4ac4-83af-d2315bba6501",
              name: "Ms. Eva Upton",
            },
          ],
          customerRef: {
            companyName: "veniam",
            id: "bf6ae591-bc8b-4def-b612-b63c205fda84",
          },
          isBilledTo: BilledToType.Unknown,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "74a68a9a-35d0-486b-af66-fef020e9f443",
            name: "Randall Daniel",
          },
        },
        trackingCategoryRefs: [
          {
            id: "992c8dbd-a6a6-41ef-a219-8258fd0a9eba",
            name: "Allison Wiza",
          },
          {
            id: "3ef04964-0d6a-4183-9c87-adf596fdf1ad",
            name: "Tony Konopelski",
          },
          {
            id: "80c1c19c-95ba-4998-a78f-a3f696991af3",
            name: "Daryl Schmitt I",
          },
        ],
        unitAmount: 4209.1,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "numquam",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 7914.54,
          totalAmount: 4524.81,
        },
        payment: {
          accountRef: {
            id: "977a0ef2-f536-4028-afee-f934152ed7e2",
            name: "Ethel Windler",
          },
          currency: "GBP",
          currencyRate: 3534.93,
          id: "7deaa717-0f44-45ac-8f66-7aaf9bbad185",
          note: "sapiente",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "ut",
          totalAmount: 2010.05,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 3843.54,
          totalAmount: 6963.24,
        },
        payment: {
          accountRef: {
            id: "f5c838fb-b8c2-40cb-a7fc-4b425e99e623",
            name: "Robyn McCullough",
          },
          currency: "EUR",
          currencyRate: 4473.23,
          id: "9dfeb77a-5c38-4d4b-af91-e506ef890a54",
          note: "nam",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "odio",
          totalAmount: 3427.72,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "16f56d38-5a3c-44ac-a31b-99e26ced8f9f",
        purchaseOrderNumber: "repellendus",
      },
      {
        id: "b9410f63-bbf8-4178-b7b0-1afdd7886241",
        purchaseOrderNumber: "blanditiis",
      },
      {
        id: "9eb44873-f503-43f1-9dbf-125ce4152eab",
        purchaseOrderNumber: "error",
      },
      {
        id: "cd7e5224-a6a0-4e12-bb78-47ec59e1f67f",
        purchaseOrderNumber: "amet",
      },
    ],
    reference: "cumque",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: BillStatus.Void,
    subTotal: 7763.34,
    supplementalData: {
      content: {
        "tempora": {
          "suscipit": "illum",
          "iusto": "aliquid",
          "sint": "aliquid",
        },
        "repellat": {
          "consectetur": "eligendi",
          "ullam": "nihil",
          "eius": "dignissimos",
          "corporis": "perferendis",
        },
        "architecto": {
          "corporis": "nihil",
        },
        "officiis": {
          "magnam": "maiores",
          "ipsam": "dicta",
        },
      },
    },
    supplierRef: {
      id: "f8b084c3-197e-4193-a245-467f94874c2d",
      supplierName: "ipsam",
    },
    taxAmount: 7503.43,
    totalAmount: 7841.2,
    withholdingTax: [
      {
        amount: 5961.33,
        name: "Lois Dibbert",
      },
      {
        amount: 9041.93,
        name: "Beth Ritchie",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 977472,
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
  billId: "EILBDVJVNUAGVKRQ",
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
  billId: "EILBDVJVNUAGVKRQ",
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
  query: "voluptatem",
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
    amountDue: 5684.19,
    currency: "USD",
    currencyRate: 6091.61,
    dueDate: "2022-10-23T00:00:00.000Z",
    id: "f2038732-0590-4ccc-9096-400313b3e504",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "65fe72dc-4077-4d0c-83f4-08efc15ceb4d",
          name: "Cecelia Boyer",
        },
        description: "necessitatibus",
        discountAmount: 296,
        discountPercentage: 9807.05,
        isDirectCost: false,
        itemRef: {
          id: "75aedf2a-cab5-48b9-91c9-26ddb589461e",
          name: "Miss Elaine Considine",
        },
        quantity: 9245.59,
        subTotal: 4128.97,
        taxAmount: 8203.22,
        taxRateRef: {
          effectiveTaxRate: 5890.98,
          id: "502f0ea9-30b6-49f7-ac2f-72f885009049",
          name: "Ms. Carolyn Jacobson",
        },
        totalAmount: 170.4,
        tracking: {
          categoryRefs: [
            {
              id: "888ec661-83bf-4e96-99eb-40ec16faf75b",
              name: "Juana Herman",
            },
            {
              id: "a4da37cb-aaf4-4452-8484-2c9b2ad32daf",
              name: "Bob Boyle",
            },
          ],
          customerRef: {
            companyName: "blanditiis",
            id: "f4444573-fecd-4473-93f6-3c8209379aa6",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "d5fbcf79-da18-4a78-a2bf-95894e6861ad",
            name: "Pedro Haley",
          },
        },
        trackingCategoryRefs: [
          {
            id: "5d751c9f-e8f7-4502-bfdc-3450841f1764",
            name: "Bernice Jaskolski",
          },
          {
            id: "9f3fb27e-21f8-4626-97b3-6fc6b9f587ce",
            name: "Sara Hegmann",
          },
          {
            id: "7641a831-2e50-447b-8c21-ccb423abcdc9",
            name: "Lana Pfannerstill",
          },
          {
            id: "dd88e71f-6c48-4252-9777-1e7fd074009e",
            name: "Jaime Schumm",
          },
        ],
        unitAmount: 8304.73,
      },
      {
        accountRef: {
          id: "e1dd7097-b5da-408c-97fa-6c78a216e19b",
          name: "Randal Walker",
        },
        description: "laboriosam",
        discountAmount: 717.34,
        discountPercentage: 5842.92,
        isDirectCost: false,
        itemRef: {
          id: "1498140b-64ff-48ae-970e-f03b5f37e4aa",
          name: "Ricardo Lynch",
        },
        quantity: 3573.88,
        subTotal: 6141.75,
        taxAmount: 4116.69,
        taxRateRef: {
          effectiveTaxRate: 4196,
          id: "732aa5dc-b668-42cb-b0f8-cfd5fb6e91b9",
          name: "Ross Wilderman",
        },
        totalAmount: 5110.54,
        tracking: {
          categoryRefs: [
            {
              id: "6e2c3309-db05-436d-9e75-ca006f5392c1",
              name: "Jodi Crona",
            },
            {
              id: "8bf92f97-428a-4d9a-9f8b-f8221125359d",
              name: "Guy Feest",
            },
          ],
          customerRef: {
            companyName: "repellat",
            id: "7a79cd72-cd24-484d-a217-29f2ac41ef57",
          },
          isBilledTo: BilledToType.Unknown,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "f1169ac1-e41d-48a2-bc23-e34f2dfa4a19",
            name: "Elsa Kerluke",
          },
        },
        trackingCategoryRefs: [
          {
            id: "22151fe1-7120-4998-93e9-f543d854439e",
            name: "Randy Collier",
          },
          {
            id: "60443bc1-5418-48c2-b56e-85da7832eabd",
            name: "Frances Kuhlman",
          },
          {
            id: "b0d51a44-bf01-4bad-8706-d46082bfbdc4",
            name: "Lucia Wintheiser",
          },
        ],
        unitAmount: 2975.85,
      },
      {
        accountRef: {
          id: "e2ae4fb5-cb35-4d17-a38f-1edb78359ecc",
          name: "Blanca Prohaska",
        },
        description: "doloremque",
        discountAmount: 9640.52,
        discountPercentage: 5582.01,
        isDirectCost: false,
        itemRef: {
          id: "cd580ba7-3810-4e4f-a444-7297cd3b1dd3",
          name: "Randolph Russel",
        },
        quantity: 2814.16,
        subTotal: 4724.44,
        taxAmount: 6906.54,
        taxRateRef: {
          effectiveTaxRate: 4559.58,
          id: "684eff50-126d-471c-bfbd-0eb74b842195",
          name: "Melody Grady",
        },
        totalAmount: 8614.06,
        tracking: {
          categoryRefs: [
            {
              id: "c43159d3-3e59-453c-8011-39863aa41e6c",
              name: "Rebecca Schmitt DVM",
            },
          ],
          customerRef: {
            companyName: "dicta",
            id: "fcb51c9a-41ff-4be9-8bd7-95ee65e076cc",
          },
          isBilledTo: BilledToType.NotApplicable,
          isRebilledTo: BilledToType.Customer,
          projectRef: {
            id: "bf616ea5-c716-4419-b4b9-0f2e09d19d2f",
            name: "Nicholas Wisoky",
          },
        },
        trackingCategoryRefs: [
          {
            id: "e105944b-935d-4237-a72f-90849d6aed4a",
            name: "Earnest Rogahn",
          },
        ],
        unitAmount: 2048.77,
      },
      {
        accountRef: {
          id: "7cd9222c-9ff5-4749-9aab-fa2e761f0ca4",
          name: "Francisco Hauck",
        },
        description: "reiciendis",
        discountAmount: 1170.53,
        discountPercentage: 234.1,
        isDirectCost: false,
        itemRef: {
          id: "31e6899f-0c20-401e-a2cd-55cc0584a184",
          name: "Christian Hirthe",
        },
        quantity: 4525.15,
        subTotal: 1150.77,
        taxAmount: 9714.36,
        taxRateRef: {
          effectiveTaxRate: 7665.01,
          id: "820c65b0-37bb-48e0-8c88-5187e4de04af",
          name: "Naomi Schneider",
        },
        totalAmount: 8135.45,
        tracking: {
          categoryRefs: [
            {
              id: "b46aa1cf-d6d8-428d-a013-191129646645",
              name: "Raymond Sporer DVM",
            },
            {
              id: "29042f56-9b7a-4ff0-aa22-16cbe071bc16",
              name: "Rochelle Cormier",
            },
            {
              id: "a3b084da-9925-47d0-8f40-847a742d8449",
              name: "Chelsea Reynolds",
            },
            {
              id: "ecf6b99b-c635-462e-bfdf-55c294c060b0",
              name: "Janie Bogisich",
            },
          ],
          customerRef: {
            companyName: "molestiae",
            id: "764eef6d-0c6d-46ed-9c73-dd634571509a",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "870d3c5a-1f9c-4242-87b6-6a1f30c73df5",
            name: "Ms. Angel Kreiger",
          },
        },
        trackingCategoryRefs: [
          {
            id: "0f42a4bb-438d-485b-a605-91d745e3c205",
            name: "Sylvester Mante",
          },
          {
            id: "f567e0e2-5276-45b1-962f-cdace1f01216",
            name: "Cornelius Crooks",
          },
          {
            id: "9e8f25cd-0d19-4d95-9f43-9e39266cbd95",
            name: "Clinton Oberbrunner",
          },
        ],
        unitAmount: 6980.88,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "magnam",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 3911.05,
          totalAmount: 5979.51,
        },
        payment: {
          accountRef: {
            id: "5d1e6698-fcc4-4596-a17c-297767633425",
            name: "Mary Fisher",
          },
          currency: "EUR",
          currencyRate: 7169.75,
          id: "5971e981-9055-4738-9ced-bac7fda39594",
          note: "pariatur",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "laboriosam",
          totalAmount: 7444.74,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "2ae48063-2b99-454b-afa2-206369828553",
        purchaseOrderNumber: "optio",
      },
      {
        id: "b10006be-f492-41ec-a053-b749366ac8ee",
        purchaseOrderNumber: "voluptatem",
      },
      {
        id: "f2bf1958-8d40-4d03-b3de-ba297be3e90b",
        purchaseOrderNumber: "nobis",
      },
      {
        id: "40df868f-d524-405c-b331-d492f4f127fb",
        purchaseOrderNumber: "aperiam",
      },
    ],
    reference: "saepe",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: BillStatus.Void,
    subTotal: 9438.65,
    supplementalData: {
      content: {
        "delectus": {
          "fugit": "inventore",
          "reprehenderit": "sint",
          "dignissimos": "voluptatum",
        },
      },
    },
    supplierRef: {
      id: "d0acca77-aeb7-4b70-a1a5-2046b64e99fb",
      supplierName: "doloremque",
    },
    taxAmount: 8871.99,
    totalAmount: 3942.08,
    withholdingTax: [
      {
        amount: 8997.35,
        name: "Daisy Graham",
      },
      {
        amount: 9504.65,
        name: "Kristopher Herman",
      },
    ],
  },
  billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 924506,
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
    content: "a".encode(),
    requestBody: "exercitationem",
  },
  billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
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

