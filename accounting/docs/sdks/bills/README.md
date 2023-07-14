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
    amountDue: 3759.94,
    currency: "EUR",
    currencyRate: 2420.99,
    dueDate: "2022-10-23T00:00:00.000Z",
    id: "a5acfbe2-fd57-4075-b792-9177deac646e",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "573409e3-eb1e-45a2-b12e-b07f116db995",
          name: "Bernice Yundt",
        },
        description: "enim",
        discountAmount: 9449.5,
        discountPercentage: 6573.19,
        isDirectCost: false,
        itemRef: {
          id: "88970e18-9dbb-430f-8b33-ea055b197cd4",
          name: "Kellie Corwin",
        },
        quantity: 1645.32,
        subTotal: 8138.8,
        taxAmount: 5129.05,
        taxRateRef: {
          effectiveTaxRate: 1403.84,
          id: "d3513bb6-f48b-4656-bcdb-35ff2e4b2753",
          name: "Genevieve Lebsack",
        },
        totalAmount: 6040.78,
        tracking: {
          categoryRefs: [
            {
              id: "7319c177-d525-4f77-b114-eeb52ff785fc",
              name: "Mrs. Claudia Leuschke",
            },
            {
              id: "4c98e0c2-bb89-4eb7-9dad-636c600503d8",
              name: "Mr. Jonathon Fay",
            },
            {
              id: "0f739ae9-e057-4eb8-89e2-810331f3981d",
              name: "Mr. Bethany Koch",
            },
            {
              id: "607f3c93-c73b-49da-bf2c-eda7e23f2257",
              name: "Virginia Bins",
            },
          ],
          customerRef: {
            companyName: "delectus",
            id: "4b7544e4-72e8-4028-97a5-b40463a7d575",
          },
          isBilledTo: BilledToType.Project,
          isRebilledTo: BilledToType.Unknown,
          projectRef: {
            id: "400e764a-d733-44ec-9b78-1b36a08088d1",
            name: "Jessica Turner",
          },
        },
        trackingCategoryRefs: [
          {
            id: "a200ef04-22eb-4216-8cf9-ab8366c723ff",
            name: "Cameron Mosciski III",
          },
          {
            id: "bee4825c-1fc0-4e11-9c80-bff918544ec4",
            name: "Nadine Terry",
          },
          {
            id: "ce8f1977-773e-4635-a2a7-b408f05e3d48",
            name: "Clint Ortiz",
          },
          {
            id: "13a1f5fd-9425-49c0-b36f-25ea944f3b75",
            name: "Dr. Alexandra Bernhard",
          },
        ],
        unitAmount: 7869.54,
      },
      {
        accountRef: {
          id: "37a51262-4383-45bb-805a-23a45cefc5fd",
          name: "Juan Abshire DDS",
        },
        description: "necessitatibus",
        discountAmount: 1559.78,
        discountPercentage: 1189.32,
        isDirectCost: false,
        itemRef: {
          id: "69e51001-9c6d-4c5e-b476-2799bfbbe694",
          name: "Irvin Rippin",
        },
        quantity: 7202.66,
        subTotal: 2791.72,
        taxAmount: 9253.95,
        taxRateRef: {
          effectiveTaxRate: 7972.54,
          id: "ae6c3d5d-b3ad-4ebd-9dae-a4c506a8aa94",
          name: "Thomas Conroy",
        },
        totalAmount: 3085.28,
        tracking: {
          categoryRefs: [
            {
              id: "f5e9d9a4-578a-4dc1-ac60-0dec001ac802",
              name: "Louis Treutel V",
            },
            {
              id: "ff8f0f81-6ff3-4477-813e-902c14125b09",
              name: "Carol O'Reilly",
            },
            {
              id: "8151a472-af92-43c5-949f-83f350cf876f",
              name: "Mr. Robin Miller",
            },
            {
              id: "6ecbb4e2-43cf-4789-bfaf-eda53e5ae6e0",
              name: "Myron Boyle",
            },
          ],
          customerRef: {
            companyName: "quisquam",
            id: "2b9c247c-8837-43a4-8e19-42f32e550557",
          },
          isBilledTo: BilledToType.NotApplicable,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "f5d56d0b-d0af-42df-a13d-b4f62cba3f89",
            name: "Joyce O'Connell",
          },
        },
        trackingCategoryRefs: [
          {
            id: "0b80a692-4d3b-42ec-bcc8-f895010f5dd3",
            name: "Chester Willms V",
          },
          {
            id: "04e54c82-f168-4a36-bc88-73e484380b1f",
            name: "Yvette Larson",
          },
          {
            id: "275a60a0-4c49-45cc-a991-71b51c1bdb1c",
            name: "Leroy Ratke",
          },
          {
            id: "8ebdfc4c-cca9-49bc-bfc0-b2dce10873e4",
            name: "Ms. Susie Batz",
          },
        ],
        unitAmount: 4312.53,
      },
      {
        accountRef: {
          id: "78878ba8-581a-4582-88c5-4fefa9c95f2e",
          name: "Noel Hauck",
        },
        description: "nemo",
        discountAmount: 8493.37,
        discountPercentage: 2012.66,
        isDirectCost: false,
        itemRef: {
          id: "07cfee81-206e-4281-bfa4-a41c480d3f21",
          name: "Theresa Pfannerstill I",
        },
        quantity: 1018.54,
        subTotal: 449.29,
        taxAmount: 1341.73,
        taxRateRef: {
          effectiveTaxRate: 8603.62,
          id: "514f4cc6-f18b-4f96-a1a6-a4f77a87ee3e",
          name: "Susie Ward",
        },
        totalAmount: 1316.87,
        tracking: {
          categoryRefs: [
            {
              id: "65b34418-e3bb-491c-8d97-5e0e8419d8f8",
              name: "Lila Bradtke",
            },
            {
              id: "f3e07edc-c4aa-45f3-8abd-905a972e0567",
              name: "Myrtle Cremin",
            },
            {
              id: "b2d30947-0bf7-4a4f-a87c-f535a6fae54e",
              name: "Miss Cary Howe",
            },
            {
              id: "21f023b7-5d23-467f-a1a0-cc8df79f0a39",
              name: "Miss Estelle Mills",
            },
          ],
          customerRef: {
            companyName: "commodi",
            id: "4b7c15df-bace-4188-b1c4-ee2c8c6ce611",
          },
          isBilledTo: BilledToType.Project,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "eb1c7cbd-b6ee-4c74-b78b-a25317747dc9",
            name: "Annette Osinski",
          },
        },
        trackingCategoryRefs: [
          {
            id: "af5dd672-3dc0-4f5a-a2f3-a6b700878756",
            name: "Gail Fay",
          },
          {
            id: "a6c98b55-5540-480d-80bc-acc6cbd6b5f3",
            name: "Ms. Wilbert McGlynn",
          },
          {
            id: "04f926ba-d255-4381-9b47-4b0ed20e5624",
            name: "Moses Wuckert",
          },
          {
            id: "39a910ab-dcab-4626-b669-6e1ec00221b3",
            name: "Yvonne Stamm",
          },
        ],
        unitAmount: 6294.61,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "tempore",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 9890.89,
          totalAmount: 8360.53,
        },
        payment: {
          accountRef: {
            id: "a8d0c549-ef03-4004-978a-61fa1cf20688",
            name: "Jared Koepp DVM",
          },
          currency: "EUR",
          currencyRate: 7989.53,
          id: "71dca163-f2a3-4c80-a97f-f334cddf857a",
          note: "perspiciatis",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "eum",
          totalAmount: 951.23,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "76c6ab21-d29d-4fc9-8d6f-ecd799390066",
        purchaseOrderNumber: "laborum",
      },
      {
        id: "6d2d0003-5533-48ce-8086-fa21e9152cb3",
        purchaseOrderNumber: "beatae",
      },
      {
        id: "19167b8e-3c8d-4b03-808d-6d364ffd4559",
        purchaseOrderNumber: "alias",
      },
    ],
    reference: "ex",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: BillStatus.Unknown,
    subTotal: 1548.4,
    supplementalData: {
      content: {
        "neque": {
          "numquam": "rem",
          "officiis": "omnis",
          "neque": "corporis",
          "quod": "dolores",
        },
        "placeat": {
          "recusandae": "quos",
          "dicta": "sapiente",
          "ipsum": "consequatur",
        },
      },
    },
    supplierRef: {
      id: "be3e4320-2d72-4165-b650-6641870d9d21",
      supplierName: "voluptatibus",
    },
    taxAmount: 6012.28,
    totalAmount: 6456.09,
    withholdingTax: [
      {
        amount: 79.19,
        name: "Sharon Ruecker",
      },
      {
        amount: 7639.37,
        name: "Carl Breitenberg V",
      },
      {
        amount: 1917.24,
        name: "Anita Dare III",
      },
      {
        amount: 5123.7,
        name: "Mr. Armando Hermann",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 312690,
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
  billId: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
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
  query: "esse",
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
  billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
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
    amountDue: 6975.91,
    currency: "EUR",
    currencyRate: 5062.45,
    dueDate: "2022-10-23T00:00:00.000Z",
    id: "5e320a31-9f4b-4adf-947c-9a867bc42426",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "5816ddca-8ef5-41fc-b4c5-93ec12cdaad0",
          name: "Clark Kohler",
        },
        description: "saepe",
        discountAmount: 8139.75,
        discountPercentage: 7487.23,
        isDirectCost: false,
        itemRef: {
          id: "d80df448-a47f-4939-8c58-880983dabf9e",
          name: "Jeffery Williamson",
        },
        quantity: 8301.49,
        subTotal: 6077.42,
        taxAmount: 9666.52,
        taxRateRef: {
          effectiveTaxRate: 4877.65,
          id: "f079af4d-3572-44cd-b0f4-d281187d5684",
          name: "Eloise Stoltenberg",
        },
        totalAmount: 5057.99,
        tracking: {
          categoryRefs: [
            {
              id: "a9065e62-8bdf-4c20-b2b6-c879923b7e13",
              name: "Leah Graham",
            },
            {
              id: "ae12c689-1f82-4ce1-9571-72305377dcfa",
              name: "Terrance Strosin",
            },
          ],
          customerRef: {
            companyName: "quam",
            id: "5e356686-092e-49c3-9dc5-f111dea1026d",
          },
          isBilledTo: BilledToType.NotApplicable,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "1a4d190f-eb21-4780-bccc-0dbbddb48470",
            name: "Dominick Purdy",
          },
        },
        trackingCategoryRefs: [
          {
            id: "91e6bc15-8c4c-44e5-8599-ea342260e9b2",
            name: "Elizabeth Rutherford",
          },
        ],
        unitAmount: 5371.4,
      },
      {
        accountRef: {
          id: "a1bd8fb7-a0a1-416c-a723-d4097fa30e9a",
          name: "Kurt Cronin",
        },
        description: "quia",
        discountAmount: 6090.94,
        discountPercentage: 1206.46,
        isDirectCost: false,
        itemRef: {
          id: "22030d83-f5ae-4b77-99d2-2e8c1f849382",
          name: "Marta Stanton",
        },
        quantity: 1663.24,
        subTotal: 7639.28,
        taxAmount: 5526.87,
        taxRateRef: {
          effectiveTaxRate: 4484.82,
          id: "6c2c2dfb-4cfc-41c7-a230-f841fb1bd23f",
          name: "Alton Bernhard",
        },
        totalAmount: 7092.34,
        tracking: {
          categoryRefs: [
            {
              id: "be5a6859-98e2-42ae-a0da-16fc2b271a28",
              name: "Clark Hermiston",
            },
            {
              id: "854e9043-9d22-4246-9694-62407084f7ab",
              name: "Nellie Ruecker",
            },
          ],
          customerRef: {
            companyName: "accusantium",
            id: "2225194d-b554-410a-9c66-9af90a26c7cd",
          },
          isBilledTo: BilledToType.Project,
          isRebilledTo: BilledToType.Customer,
          projectRef: {
            id: "81f06898-1d6b-4b33-8faa-348c31bf407e",
            name: "Francis Yundt",
          },
        },
        trackingCategoryRefs: [
          {
            id: "c42b78f1-5626-4398-a0dc-766324ccb06c",
            name: "Mr. Benny O'Reilly",
          },
        ],
        unitAmount: 271.97,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "enim",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 4866.06,
          totalAmount: 27.58,
        },
        payment: {
          accountRef: {
            id: "b8d5722d-d895-4b8b-8f24-db959693352f",
            name: "Joanne Hermiston",
          },
          currency: "USD",
          currencyRate: 5812.69,
          id: "4d78de3b-6e93-489f-9abb-7f662550a283",
          note: "totam",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "deserunt",
          totalAmount: 7547.84,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "83afd231-5bba-4650-964e-06f5bf6ae591",
        purchaseOrderNumber: "expedita",
      },
      {
        id: "c8bdef36-12b6-43c2-85fd-a840774a68a9",
        purchaseOrderNumber: "laborum",
      },
    ],
    reference: "dolor",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: BillStatus.Draft,
    subTotal: 229.66,
    supplementalData: {
      content: {
        "voluptas": {
          "voluptas": "maiores",
          "ea": "vel",
          "delectus": "accusamus",
        },
        "reiciendis": {
          "sed": "accusantium",
        },
        "voluptates": {
          "maiores": "quaerat",
          "numquam": "non",
          "cum": "incidunt",
        },
      },
    },
    supplierRef: {
      id: "257b992c-8dbd-4a6a-a1ef-a2198258fd0a",
      supplierName: "iste",
    },
    taxAmount: 9085.87,
    totalAmount: 7236.23,
    withholdingTax: [
      {
        amount: 2889.07,
        name: "Shari Konopelski",
      },
      {
        amount: 9156.53,
        name: "Thomas Hahn",
      },
      {
        amount: 2946.5,
        name: "Desiree Howell IV",
      },
    ],
  },
  billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 114588,
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
    content: "quisquam".encode(),
    requestBody: "atque",
  },
  billId: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
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

