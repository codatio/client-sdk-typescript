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
    amountDue: 4486.01,
    currency: "culpa",
    currencyRate: 424.89,
    dueDate: "fuga",
    id: "116ce723-d409-47fa-b0e9-af725b291220",
    issueDate: "amet",
    lineItems: [
      {
        accountRef: {
          id: "d83f5aeb-7799-4d22-a8c1-f8493825fdc4",
          name: "Jacquelyn Lueilwitz",
        },
        description: "maxime",
        discountAmount: 1514.86,
        discountPercentage: 7915.38,
        isDirectCost: false,
        itemRef: {
          id: "2dfb4cfc-1c76-4230-b841-fb1bd23fdb14",
          name: "Malcolm Johnson",
        },
        quantity: 3422.26,
        subTotal: 6422.79,
        taxAmount: 3755.88,
        taxRateRef: {
          effectiveTaxRate: 5163.63,
          id: "5998e22a-e20d-4a16-bc2b-271a289c57e8",
          name: "Ellen Walter II",
        },
        totalAmount: 2199.4,
        tracking: {
          categoryRefs: [
            {
              id: "d2224656-9462-4407-884f-7ab37cef0222",
              name: "Jean Mayert",
            },
            {
              id: "b55410ad-c669-4af9-8a26-c7cdc981f068",
              name: "Johnnie Berge",
            },
            {
              id: "bb33cfaa-348c-431b-b407-ee4fcf0c42b7",
              name: "Abel Buckridge",
            },
          ],
          customerRef: {
            companyName: "consequuntur",
            id: "6398a0dc-7663-424c-8b06-c8ca12d02529",
          },
          isBilledTo: BilledToType.Unknown,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "0b8d5722-dd89-45b8-bcf2-4db959693352",
            name: "Clinton Greenholt",
          },
        },
        trackingCategoryRefs: [
          {
            id: "994d78de-3b6e-4938-9f5a-bb7f662550a2",
            name: "Travis Leannon",
          },
        ],
        unitAmount: 7547.84,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "incidunt",
    note: "deleniti",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "est",
          currency: "reiciendis",
          currencyRate: 8204.62,
          totalAmount: 1378.31,
        },
        payment: {
          accountRef: {
            id: "315bba65-0164-4e06-b5bf-6ae591bc8bde",
            name: "Mr. Dale Jenkins",
          },
          currency: "ex",
          currencyRate: 2033.96,
          id: "c205fda8-4077-44a6-8a9a-35d086b6f66f",
          note: "accusamus",
          paidOnDate: "reiciendis",
          reference: "consequatur",
          totalAmount: 1487.14,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "e9f443b4-257b-4992-88db-da6a61efa219",
        purchaseOrderNumber: "atque",
      },
    ],
    reference: "explicabo",
    sourceModifiedDate: "ullam",
    status: BillStatus.Paid,
    subTotal: 9874.35,
    supplementalData: {
      content: {
        "aut": {
          "iste": "eveniet",
          "nam": "animi",
          "labore": "voluptate",
        },
        "voluptatibus": {
          "nulla": "dolorem",
          "voluptates": "a",
        },
        "perferendis": {
          "excepturi": "aliquid",
          "dolore": "voluptatem",
        },
        "illum": {
          "culpa": "dicta",
          "atque": "ratione",
        },
      },
    },
    supplierRef: {
      id: "1c87adf5-96fd-4f1a-9837-ae80c1c19c95",
      supplierName: "tempore",
    },
    taxAmount: 6379.69,
    totalAmount: 6105.63,
    withholdingTax: [
      {
        amount: 5589.92,
        name: "Dora Lemke",
      },
      {
        amount: 2212.4,
        name: "Brad Mayer",
      },
      {
        amount: 5865.56,
        name: "Kristine Wilderman",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 561858,
}).then((res: CreateBillResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  billId: "quod",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: DeleteBillResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  billId: "repudiandae",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: DownloadBillAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  billId: "eaque",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetBillResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  billId: "consectetur",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetBillAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  query: "autem",
}).then((res: ListBillsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  billId: "vitae",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: ListBillAttachmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
    amountDue: 2569.75,
    currency: "incidunt",
    currencyRate: 2669.76,
    dueDate: "quos",
    id: "c7977a0e-f2f5-4360-a8ef-eef934152ed7",
    issueDate: "itaque",
    lineItems: [
      {
        accountRef: {
          id: "53f4c157-deaa-4717-8f44-5accf667aaf9",
          name: "Garry Nicolas IV",
        },
        description: "ad",
        discountAmount: 9594.2,
        discountPercentage: 9133.93,
        isDirectCost: false,
        itemRef: {
          id: "431d6bf5-c838-4fbb-8c20-cb67fc4b425e",
          name: "Sergio Tremblay",
        },
        quantity: 2277.06,
        subTotal: 2796.79,
        taxAmount: 7835.39,
        taxRateRef: {
          effectiveTaxRate: 5816.8,
          id: "f7b79dfe-b77a-45c3-8d4b-af91e506ef89",
          name: "Lee Hegmann",
        },
        totalAmount: 2574.88,
        tracking: {
          categoryRefs: [
            {
              id: "5f16f56d-385a-43c4-ac63-1b99e26ced8f",
              name: "Darrin Skiles",
            },
            {
              id: "410f63bb-f817-4837-b01a-fdd788624189",
              name: "Rudy Gorczany",
            },
          ],
          customerRef: {
            companyName: "ducimus",
            id: "3f5033f1-9dbf-4125-8e41-52eab9cd7e52",
          },
          isBilledTo: BilledToType.Unknown,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "a6a0e123-b784-47ec-99e1-f67f3c4cce4b",
            name: "Angel Kris",
          },
        },
        trackingCategoryRefs: [
          {
            id: "ff3c5747-5013-457e-84f5-1f8b084c3197",
            name: "Samuel Mann",
          },
          {
            id: "245467f9-4874-4c2d-9cc4-972233e66bd8",
            name: "Frankie Herzog Jr.",
          },
        ],
        unitAmount: 7277.89,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "excepturi",
    note: "odio",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "officiis",
          currency: "delectus",
          currencyRate: 1692.29,
          totalAmount: 232.36,
        },
        payment: {
          accountRef: {
            id: "38732059-0ccc-4109-a400-313b3e5044f6",
            name: "Shawna Trantow",
          },
          currency: "assumenda",
          currencyRate: 7637.47,
          id: "4077d0cc-3f40-48ef-815c-eb4d6e1eae0f",
          note: "odio",
          paidOnDate: "veniam",
          reference: "fuga",
          totalAmount: 9290.12,
        },
      },
      {
        allocation: {
          allocatedOnDate: "possimus",
          currency: "tenetur",
          currencyRate: 1499.41,
          totalAmount: 6481.82,
        },
        payment: {
          accountRef: {
            id: "cab58b99-1c92-46dd-b589-461e7421cbe6",
            name: "Mr. Rene Harris",
          },
          currency: "consequatur",
          currencyRate: 8776.19,
          id: "a930b69f-7ac2-4f72-b885-009049116082",
          note: "perferendis",
          paidOnDate: "esse",
          reference: "quas",
          totalAmount: 5007.68,
        },
      },
      {
        allocation: {
          allocatedOnDate: "laudantium",
          currency: "voluptates",
          currencyRate: 7939.09,
          totalAmount: 4196.69,
        },
        payment: {
          accountRef: {
            id: "6183bfe9-659e-4b40-ac16-faf75b0b532a",
            name: "Antonia Muller",
          },
          currency: "eligendi",
          currencyRate: 7363.13,
          id: "aaf4452c-4842-4c9b-aad3-2dafe81a88f4",
          note: "incidunt",
          paidOnDate: "labore",
          reference: "ut",
          totalAmount: 3134.2,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "3fecd473-53f6-43c8-a093-79aa69cd5fbc",
        purchaseOrderNumber: "sapiente",
      },
      {
        id: "79da18a7-822b-4f95-894e-6861adb55f9e",
        purchaseOrderNumber: "ipsam",
      },
    ],
    reference: "fugiat",
    sourceModifiedDate: "odio",
    status: BillStatus.PartiallyPaid,
    subTotal: 819.17,
    supplementalData: {
      content: {
        "occaecati": {
          "necessitatibus": "rem",
          "a": "nihil",
          "veniam": "aut",
          "magni": "rerum",
        },
        "voluptatibus": {
          "quod": "non",
          "dolore": "enim",
          "alias": "blanditiis",
          "modi": "illo",
        },
        "a": {
          "molestiae": "autem",
        },
        "dolore": {
          "nostrum": "ex",
          "amet": "voluptate",
        },
      },
    },
    supplierRef: {
      id: "9f3fb27e-21f8-4626-97b3-6fc6b9f587ce",
      supplierName: "ad",
    },
    taxAmount: 1676.13,
    totalAmount: 3457.46,
    withholdingTax: [
      {
        amount: 4005.1,
        name: "Miss Terri Gerhold",
      },
      {
        amount: 2443.32,
        name: "Jane Towne II",
      },
      {
        amount: 4496.94,
        name: "Mario Runolfsson DDS",
      },
      {
        amount: 7678.8,
        name: "Jesus Corkery",
      },
    ],
  },
  billId: "facilis",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 792555,
}).then((res: UpdateBillResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
    content: "vero".encode(),
    requestBody: "impedit",
  },
  billId: "omnis",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: UploadBillAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
