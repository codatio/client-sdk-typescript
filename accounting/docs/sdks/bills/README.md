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

Posts a new bill to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update bill model](https://docs.codat.io/accounting-api#/operations/get-create-update-bills-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) to see which integrations support this endpoint.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateBillResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType, BillStatus, DataType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bills.create({
  bill: {
    amountDue: 6704.3,
    currency: "EUR",
    currencyRate: 1479.89,
    dueDate: "2022-10-23T00:00:00.000Z",
    id: "af5dd672-3dc0-4f5a-a2f3-a6b700878756",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "3f5a6c98-b555-4540-80d4-0bcacc6cbd6b",
          name: "Shawna Feil",
        },
        description: "cupiditate",
        discountAmount: 290.8,
        discountPercentage: 5881.58,
        isDirectCost: false,
        itemRef: {
          id: "304f926b-ad25-4538-99b4-74b0ed20e562",
          name: "Vickie Welch",
        },
        quantity: 4209.85,
        subTotal: 1988.92,
        taxAmount: 5856.28,
        taxRateRef: {
          effectiveTaxRate: 6568.39,
          id: "910abdca-b626-4766-96e1-ec00221b335d",
          name: "Austin Murphy",
        },
        totalAmount: 2258.09,
        tracking: {
          categoryRefs: [
            {
              id: "cfda8d0c-549e-4f03-8049-78a61fa1cf20",
              name: "Leah Leannon",
            },
            {
              id: "7c1ffc71-dca1-463f-aa3c-80a97ff334cd",
              name: "Irvin MacGyver",
            },
            {
              id: "a9e61876-c6ab-421d-a9df-c94d6fecd799",
              name: "Ms. Becky Baumbach",
            },
            {
              id: "a6d2d000-3553-438c-ac08-6fa21e9152cb",
              name: "Doris Casper III",
            },
          ],
          customerRef: {
            companyName: "ducimus",
            id: "b8e3c8db-0340-48d6-9364-ffd455906d12",
          },
          isBilledTo: BilledToType.NotApplicable,
          isRebilledTo: BilledToType.Unknown,
          projectRef: {
            id: "d48e935c-2c9e-481f-b0be-3e43202d7216",
            name: "Colleen Kautzer III",
          },
        },
        trackingCategoryRefs: [
          {
            id: "41870d9d-21f9-4ad0-b0c4-ecc11a083642",
            name: "Kenneth Hoppe",
          },
          {
            id: "8502a55e-7f73-4bc8-85e3-20a319f4badf",
            name: "Jesus Kreiger",
          },
        ],
        unitAmount: 6561.59,
      },
      {
        accountRef: {
          id: "867bc424-2666-4581-addc-a8ef51fcb4c5",
          name: "Manuel Thiel Sr.",
        },
        description: "quo",
        discountAmount: 8400.17,
        discountPercentage: 6520.92,
        isDirectCost: false,
        itemRef: {
          id: "ad0ec7af-edbd-480d-b448-a47f9390c588",
          name: "Donald McLaughlin",
        },
        quantity: 8742.83,
        subTotal: 6834.9,
        taxAmount: 7047.32,
        taxRateRef: {
          effectiveTaxRate: 9830.6,
          id: "9ef3ffdd-9f7f-4079-af4d-35724cdb0f4d",
          name: "Ms. Billie Boyle",
        },
        totalAmount: 8548,
        tracking: {
          categoryRefs: [
            {
              id: "6844eded-85a9-4065-a628-bdfc2032b6c8",
              name: "Guadalupe Monahan",
            },
            {
              id: "b7e13584-f7ae-412c-a891-f82ce1157172",
              name: "Shirley Heidenreich",
            },
          ],
          customerRef: {
            companyName: "voluptate",
            id: "dcfa89df-975e-4356-a860-92e9c3ddc5f1",
          },
          isBilledTo: BilledToType.Unknown,
          isRebilledTo: BilledToType.Unknown,
          projectRef: {
            id: "dea1026d-541a-44d1-90fe-b21780bccc0d",
            name: "Kelvin Shanahan",
          },
        },
        trackingCategoryRefs: [
          {
            id: "84708fb4-e391-4e6b-8158-c4c4e54599ea",
            name: "Juanita Collier",
          },
          {
            id: "0e9b200c-e78a-41bd-8fb7-a0a116ce723d",
            name: "Susan Mraz",
          },
        ],
        unitAmount: 6443.97,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "ipsa",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 9444.05,
          totalAmount: 4974.8,
        },
        payment: {
          accountRef: {
            id: "25b29122-030d-483f-9aeb-7799d22e8c1f",
            name: "Clifford Mertz",
          },
          currency: "GBP",
          currencyRate: 3642.84,
          id: "fdc42c87-6c2c-42df-b4cf-c1c76230f841",
          note: "maiores",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "architecto",
          totalAmount: 6981.17,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 2115.18,
          totalAmount: 9417.43,
        },
        payment: {
          accountRef: {
            id: "db14db6b-e5a6-4859-98e2-2ae20da16fc2",
            name: "Miss Randy Kshlerin",
          },
          currency: "USD",
          currencyRate: 5739.94,
          id: "c57e854e-9043-49d2-a246-569462407084",
          note: "delectus",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "dolorum",
          totalAmount: 7262.44,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 7613.31,
          totalAmount: 9040.51,
        },
        payment: {
          accountRef: {
            id: "f0222519-4db5-4541-8adc-669af90a26c7",
            name: "Carroll Runte",
          },
          currency: "GBP",
          currencyRate: 9788.57,
          id: "068981d6-bb33-4cfa-a348-c31bf407ee4f",
          note: "eligendi",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "alias",
          totalAmount: 7704.67,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 7491.01,
          totalAmount: 4679.47,
        },
        payment: {
          accountRef: {
            id: "8f156263-98a0-4dc7-a632-4ccb06c8ca12",
            name: "Mark D'Amore",
          },
          currency: "USD",
          currencyRate: 1664.01,
          id: "70b8d572-2dd8-495b-8bcf-24db95969335",
          note: "qui",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "molestiae",
          totalAmount: 2925.71,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "33994d78-de3b-46e9-b89f-5abb7f662550",
        purchaseOrderNumber: "est",
      },
      {
        id: "28382ac4-83af-4d23-95bb-a650164e06f5",
        purchaseOrderNumber: "quidem",
      },
    ],
    reference: "asperiores",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: BillStatus.Paid,
    subTotal: 9197.3,
    supplementalData: {
      content: {
        "molestias": {
          "expedita": "quisquam",
        },
        "praesentium": {
          "assumenda": "repudiandae",
          "maiores": "ipsum",
          "commodi": "vitae",
        },
      },
    },
    supplierRef: {
      id: "2b63c205-fda8-4407-b4a6-8a9a35d086b6",
      supplierName: "maiores",
    },
    taxAmount: 4120.24,
    totalAmount: 4281.99,
    withholdingTax: [
      {
        amount: 8810.67,
        name: "Dr. Michael Cormier",
      },
      {
        amount: 9784.6,
        name: "Carrie Franey",
      },
      {
        amount: 1754.55,
        name: "Marcia Rempel",
      },
      {
        amount: 1795.88,
        name: "Sidney Simonis",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 667418,
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

﻿The _Delete Bills_ endpoint allows you to delete a specified Bill from an accounting platform. 

### Process 
1. Pass the `{billId}` to the _Delete Bills_ endpoint and store the `pushOperationKey` returned.
2. Check the status of the delete operation by checking the status of push operation either via
    1. [Push operation webhook](/introduction/webhooks/core-rules-types#push-operation-status-has-changed) (advised),
    2. [Push operation status endpoint](https://docs.codat.io/codat-api#/operations/get-push-operation).

   A `Success` status indicates that the Bill object was deleted from the accounting platform.
3. (Optional) Check that the Bill was deleted from the accounting platform.

### Effect on related objects

Be aware that deleting a Bill from an accounting platform might cause related objects to be modified. For example, if you delete a paid Bill in QuickBooks Online, the bill is deleted but the bill payment against that bill is not. The bill payment is converted to a payment on account.

## Integration specifics
Integrations that support soft delete do not permanently delete the object in the accounting platform.

| Integration | Soft Delete | Details                                                                                                      |  
|-------------|-------------|--------------------------------------------------------------------------------------------------------------|
| QuickBooks Online | No          | -                                                                                                            |
| Oracle NetSuite   | No          | When deleting a Bill that's already linked to a Bill payment, you must delete the linked Bill payment first. |

> **Supported Integrations**
> 
> This functionality is currently only supported for our QuickBooks Online abd Oracle NetSuite integrations. Check out our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) to see what we're building next, and to submit ideas for new features.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DeleteBillResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

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

﻿Download bill attachment.

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
  billId: "7110701885",
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

﻿Get a bill.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetBillResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType, BillStatus } from "@codat/accounting/dist/sdk/models/shared";

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

﻿Get bill attachment.

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

﻿Get create/update bill model.

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support creating and updating a bill.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateUpdateBillsModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionType } from "@codat/accounting/dist/sdk/models/shared";

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

﻿Gets the latest bills for a company, with pagination.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListBillsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType, BillStatus } from "@codat/accounting/dist/sdk/models/shared";

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
  query: "recusandae",
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

﻿List bill attachments.

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
  billId: "EILBDVJVNUAGVKRQ",
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

﻿Posts an updated bill to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update bill model](https://docs.codat.io/accounting-api#/operations/get-create-update-bills-model).

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support updating a bill.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateBillResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType, BillStatus, DataType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.bills.update({
  bill: {
    amountDue: 6617.64,
    currency: "GBP",
    currencyRate: 804.67,
    dueDate: "2022-10-23T00:00:00.000Z",
    id: "8258fd0a-9eba-447f-bd3e-f049640d6a18",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "c87adf59-6fdf-41ad-837a-e80c1c19c95b",
          name: "Jackie Mitchell",
        },
        description: "ducimus",
        discountAmount: 5315.68,
        discountPercentage: 9575.1,
        isDirectCost: false,
        itemRef: {
          id: "a3f69699-1af3-488c-a036-14448c7977a0",
          name: "Toby Denesik",
        },
        quantity: 2175.52,
        subTotal: 3851.65,
        taxAmount: 413.46,
        taxRateRef: {
          effectiveTaxRate: 1533.7,
          id: "8efeef93-4152-4ed7-a253-f4c157deaa71",
          name: "Linda Windler",
        },
        totalAmount: 3626.93,
        tracking: {
          categoryRefs: [
            {
              id: "ccf667aa-f9bb-4ad1-85fe-431d6bf5c838",
              name: "Kelvin Prosacco",
            },
            {
              id: "20cb67fc-4b42-45e9-9e62-34c9f7b79dfe",
              name: "Mathew Klocko",
            },
            {
              id: "c38d4baf-91e5-406e-b890-a54b475f16f5",
              name: "Marcella Dooley",
            },
          ],
          customerRef: {
            companyName: "fuga",
            id: "3c4ac631-b99e-426c-ad8f-9fdb9410f63b",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "817837b0-1afd-4d78-8624-189eb44873f5",
            name: "Diana Feil V",
          },
        },
        trackingCategoryRefs: [
          {
            id: "bf125ce4-152e-4ab9-8d7e-5224a6a0e123",
            name: "Mathew Lockman",
          },
          {
            id: "ec59e1f6-7f3c-44cc-a4b6-d7696ff3c574",
            name: "Mrs. Ana Armstrong",
          },
          {
            id: "7e44f51f-8b08-44c3-997e-193a245467f9",
            name: "Naomi Kozey",
          },
          {
            id: "2d5cc497-2233-4e66-bd8f-e5d00b979ef2",
            name: "Thelma Lemke",
          },
        ],
        unitAmount: 1357.75,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "corporis",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 8017.81,
          totalAmount: 7748.66,
        },
        payment: {
          accountRef: {
            id: "10964003-13b3-4e50-84f6-5fe72dc4077d",
            name: "Myra Schroeder",
          },
          currency: "GBP",
          currencyRate: 351.07,
          id: "8efc15ce-b4d6-4e1e-ae0f-75aedf2acab5",
          note: "quas",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "cupiditate",
          totalAmount: 6025.61,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 6004.71,
          totalAmount: 1535.13,
        },
        payment: {
          accountRef: {
            id: "6ddb5894-61e7-4421-8be6-d9502f0ea930",
            name: "Hector Mayer",
          },
          currency: "EUR",
          currencyRate: 7675.4,
          id: "2f72f885-0090-4491-9608-207888ec6618",
          note: "consectetur",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "tenetur",
          totalAmount: 8971.46,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 3553.42,
          totalAmount: 6016.34,
        },
        payment: {
          accountRef: {
            id: "eb40ec16-faf7-45b0-b532-a4da37cbaaf4",
            name: "Lauren Cremin",
          },
          currency: "USD",
          currencyRate: 2579.59,
          id: "2c9b2ad3-2daf-4e81-a88f-4444573fecd4",
          note: "quam",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "nemo",
          totalAmount: 1986.16,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "63c82093-79aa-469c-95fb-cf79da18a782",
        purchaseOrderNumber: "eos",
      },
      {
        id: "bf95894e-6861-4adb-95f9-e5d751c9fe8f",
        purchaseOrderNumber: "nihil",
      },
      {
        id: "502bfdc3-4508-441f-9764-456379f3fb27",
        purchaseOrderNumber: "accusamus",
      },
      {
        id: "21f86265-7b36-4fc6-b9f5-87ce525c6764",
        purchaseOrderNumber: "architecto",
      },
    ],
    reference: "fuga",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: BillStatus.Open,
    subTotal: 968.03,
    supplementalData: {
      content: {
        "officiis": {
          "quae": "dolore",
          "in": "libero",
        },
      },
    },
    supplierRef: {
      id: "4c21ccb4-23ab-4cdc-91fa-abdd88e71f6c",
      supplierName: "labore",
    },
    taxAmount: 5587.31,
    totalAmount: 1492.35,
    withholdingTax: [
      {
        amount: 1494.14,
        name: "Mitchell Klocko DVM",
      },
      {
        amount: 4549.04,
        name: "Wilfred Aufderhar",
      },
    ],
  },
  billId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 8446,
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

﻿Upload bill attachment.

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
    content: "iste".encode(),
    requestBody: "accusamus",
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

