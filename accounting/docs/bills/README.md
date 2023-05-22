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

﻿Posts a new bill to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update bill model](https://docs.codat.io/accounting-api#/operations/get-create-update-bills-model).

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support creating a bill.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateBillResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType, BillStatus, DataType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.bills.create({
  bill: {
    amountDue: 7674.66,
    currency: "doloremque",
    currencyRate: 5168.33,
    dueDate: "iure",
    id: "fa21e915-2cb3-4119-967b-8e3c8db03408",
    issueDate: "repellendus",
    lineItems: [
      {
        accountRef: {
          id: "d364ffd4-5590-46d1-a63d-48e935c2c9e8",
          name: "Miss Jeannie Emmerich",
        },
        description: "sequi",
        discountAmount: 9258.47,
        discountPercentage: 2863.29,
        isDirectCost: false,
        itemRef: {
          id: "3202d721-6576-4506-a418-70d9d21f9ad0",
          name: "Sharon Ruecker",
        },
        quantity: 7639.37,
        subTotal: 8061.24,
        taxAmount: 922.64,
        taxRateRef: {
          effectiveTaxRate: 1073.01,
          id: "a0836429-068b-4850-aa55-e7f73bc845e3",
          name: "Helen O'Reilly V",
        },
        totalAmount: 9738.94,
        tracking: {
          categoryRefs: [
            {
              id: "badf947c-9a86-47bc-8242-6665816ddca8",
              name: "Dr. Emilio Hilll",
            },
            {
              id: "b4c593ec-12cd-4aad-8ec7-afedbd80df44",
              name: "Otis Greenholt",
            },
          ],
          customerRef: {
            companyName: "iste",
            id: "390c5888-0983-4dab-b9ef-3ffdd9f7f079",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "4d35724c-db0f-44d2-8118-7d56844eded8",
            name: "Ms. Madeline Miller",
          },
        },
        trackingCategoryRefs: [
          {
            id: "628bdfc2-032b-46c8-b992-3b7e13584f7a",
            name: "Carl Davis",
          },
          {
            id: "891f82ce-1157-4172-b053-77dcfa89df97",
            name: "Tasha Dickinson",
          },
          {
            id: "686092e9-c3dd-4c5f-911d-ea1026d541a4",
            name: "Dr. Terry Mohr",
          },
          {
            id: "b21780bc-cc0d-4bbd-9b48-4708fb4e391e",
            name: "Mrs. Susie Schowalter",
          },
        ],
        unitAmount: 7803.7,
      },
      {
        accountRef: {
          id: "4c4e5459-9ea3-4422-a0e9-b200ce78a1bd",
          name: "Cary Predovic",
        },
        description: "doloremque",
        discountAmount: 6813.36,
        discountPercentage: 1175.46,
        isDirectCost: false,
        itemRef: {
          id: "16ce723d-4097-4fa3-8e9a-f725b2912203",
          name: "Hope Lemke",
        },
        quantity: 3564.85,
        subTotal: 6442.99,
        taxAmount: 9319.53,
        taxRateRef: {
          effectiveTaxRate: 7143,
          id: "7799d22e-8c1f-4849-b825-fdc42c876c2c",
          name: "Marcella Windler",
        },
        totalAmount: 7579.62,
        tracking: {
          categoryRefs: [
            {
              id: "c1c76230-f841-4fb1-bd23-fdb14db6be5a",
              name: "Lena Herzog",
            },
            {
              id: "8e22ae20-da16-4fc2-b271-a289c57e854e",
              name: "Jeffrey Gutmann",
            },
            {
              id: "d2224656-9462-4407-884f-7ab37cef0222",
              name: "Jean Mayert",
            },
            {
              id: "b55410ad-c669-4af9-8a26-c7cdc981f068",
              name: "Johnnie Berge",
            },
          ],
          customerRef: {
            companyName: "libero",
            id: "b33cfaa3-48c3-41bf-807e-e4fcf0c42b78",
          },
          isBilledTo: BilledToType.Project,
          isRebilledTo: BilledToType.Unknown,
          projectRef: {
            id: "5626398a-0dc7-4663-a4cc-b06c8ca12d02",
            name: "Judy Mertz",
          },
        },
        trackingCategoryRefs: [
          {
            id: "b8d5722d-d895-4b8b-8f24-db959693352f",
            name: "Joanne Hermiston",
          },
        ],
        unitAmount: 5831.38,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "occaecati",
    note: "numquam",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "molestiae",
          currency: "quas",
          currencyRate: 8341.77,
          totalAmount: 9065.24,
        },
        payment: {
          accountRef: {
            id: "3b6e9389-f5ab-4b7f-a625-50a28382ac48",
            name: "Monique Wisoky",
          },
          currency: "consectetur",
          currencyRate: 809.98,
          id: "5bba6501-64e0-46f5-bf6a-e591bc8bdef3",
          note: "commodi",
          paidOnDate: "vitae",
          reference: "fugit",
          totalAmount: 7240.73,
        },
      },
      {
        allocation: {
          allocatedOnDate: "ex",
          currency: "neque",
          currencyRate: 7977.12,
          totalAmount: 1761.04,
        },
        payment: {
          accountRef: {
            id: "05fda840-774a-468a-9a35-d086b6f66fef",
            name: "Tammy Bartoletti",
          },
          currency: "maiores",
          currencyRate: 3114.49,
          id: "43b4257b-992c-48db-9a6a-61efa2198258",
          note: "doloribus",
          paidOnDate: "pariatur",
          reference: "aut",
          totalAmount: 6302.86,
        },
      },
      {
        allocation: {
          allocatedOnDate: "iste",
          currency: "eveniet",
          currencyRate: 7236.23,
          totalAmount: 6585.44,
        },
        payment: {
          accountRef: {
            id: "47f7d3ef-0496-440d-aa18-31c87adf596f",
            name: "Winston Bergstrom",
          },
          currency: "praesentium",
          currencyRate: 2053.9,
          id: "7ae80c1c-19c9-45ba-9986-78fa3f696991",
          note: "fuga",
          paidOnDate: "a",
          reference: "dolor",
          totalAmount: 5280.82,
        },
      },
      {
        allocation: {
          allocatedOnDate: "molestias",
          currency: "quod",
          currencyRate: 9203.89,
          totalAmount: 502.91,
        },
        payment: {
          accountRef: {
            id: "3614448c-7977-4a0e-b2f5-36028efeef93",
            name: "Kathleen Harris",
          },
          currency: "possimus",
          currencyRate: 4917.84,
          id: "e253f4c1-57de-4aa7-970f-445accf667aa",
          note: "repellat",
          paidOnDate: "cupiditate",
          reference: "soluta",
          totalAmount: 7332.26,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "d185fe43-1d6b-4f5c-838f-bb8c20cb67fc",
        purchaseOrderNumber: "ut",
      },
      {
        id: "b425e99e-6234-4c9f-bb79-dfeb77a5c38d",
        purchaseOrderNumber: "dolore",
      },
      {
        id: "baf91e50-6ef8-490a-94b4-75f16f56d385",
        purchaseOrderNumber: "fuga",
      },
    ],
    reference: "sequi",
    sourceModifiedDate: "maxime",
    status: BillStatus.Open,
    subTotal: 6714.28,
    supplementalData: {
      content: {
        "autem": {
          "sunt": "rerum",
        },
        "occaecati": {
          "necessitatibus": "fugit",
          "autem": "optio",
          "eveniet": "fugiat",
        },
        "blanditiis": {
          "natus": "sapiente",
          "repellendus": "facilis",
          "molestias": "dolore",
          "et": "accusantium",
        },
        "maiores": {
          "velit": "tempore",
          "expedita": "hic",
        },
      },
    },
    supplierRef: {
      id: "817837b0-1afd-4d78-8624-189eb44873f5",
      supplierName: "accusantium",
    },
    taxAmount: 1902.6,
    totalAmount: 2358.13,
    withholdingTax: [
      {
        amount: 1030.53,
        name: "Rufus Reynolds Sr.",
      },
      {
        amount: 3661.17,
        name: "Mrs. Darrel Grant",
      },
      {
        amount: 9298.49,
        name: "Damon Mueller",
      },
      {
        amount: 4547.61,
        name: "Warren Conroy",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 625378,
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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.bills.delete({
  billId: "8a210b68-6988-11ed-a1eb-0242ac120002",
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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.bills.downloadAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  billId: "8a210b68-6988-11ed-a1eb-0242ac120002",
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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.bills.get({
  billId: "8a210b68-6988-11ed-a1eb-0242ac120002",
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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.bills.getAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  billId: "8a210b68-6988-11ed-a1eb-0242ac120002",
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
    authHeader: "YOUR_API_KEY_HERE",
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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.bills.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "vel",
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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.bills.listAttachments({
  billId: "8a210b68-6988-11ed-a1eb-0242ac120002",
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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.bills.update({
  bill: {
    amountDue: 6798.35,
    currency: "alias",
    currencyRate: 9303.98,
    dueDate: "ab",
    id: "23b7847e-c59e-41f6-bf3c-4cce4b6d7696",
    issueDate: "repellat",
    lineItems: [
      {
        accountRef: {
          id: "3c574750-1357-4e44-b51f-8b084c3197e1",
          name: "Glenn Nolan",
        },
        description: "corporis",
        discountAmount: 3088.66,
        discountPercentage: 3816.39,
        isDirectCost: false,
        itemRef: {
          id: "7f94874c-2d5c-4c49-b223-3e66bd8fe5d0",
          name: "Jeannette Mante",
        },
        quantity: 8874.22,
        subTotal: 9615.76,
        taxAmount: 1692.29,
        taxRateRef: {
          effectiveTaxRate: 232.36,
          id: "38732059-0ccc-4109-a400-313b3e5044f6",
          name: "Shawna Trantow",
        },
        totalAmount: 8248.61,
        tracking: {
          categoryRefs: [
            {
              id: "4077d0cc-3f40-48ef-815c-eb4d6e1eae0f",
              name: "Sally Paucek",
            },
            {
              id: "f2acab58-b991-4c92-addb-589461e7421c",
              name: "Rolando Jerde",
            },
            {
              id: "502f0ea9-30b6-49f7-ac2f-72f885009049",
              name: "Ms. Carolyn Jacobson",
            },
            {
              id: "07888ec6-6183-4bfe-9659-eb40ec16faf7",
              name: "Olivia Auer",
            },
          ],
          customerRef: {
            companyName: "ratione",
            id: "2a4da37c-baaf-4445-ac48-42c9b2ad32da",
          },
          isBilledTo: BilledToType.Project,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "81a88f44-4457-43fe-8d47-353f63c82093",
            name: "Geneva Oberbrunner",
          },
        },
        trackingCategoryRefs: [
          {
            id: "cd5fbcf7-9da1-48a7-822b-f95894e6861a",
            name: "Marco Hermann",
          },
          {
            id: "9e5d751c-9fe8-4f75-82bf-dc3450841f17",
            name: "Eleanor Gibson",
          },
          {
            id: "379f3fb2-7e21-4f86-a657-b36fc6b9f587",
            name: "Bert Hand",
          },
        ],
        unitAmount: 7934.02,
      },
      {
        accountRef: {
          id: "67641a83-12e5-4047-b4c2-1ccb423abcdc",
          name: "Carl Weimann",
        },
        description: "distinctio",
        discountAmount: 8546.46,
        discountPercentage: 8621.67,
        isDirectCost: false,
        itemRef: {
          id: "88e71f6c-4825-42d7-b71e-7fd074009ef8",
          name: "Carlos Morissette",
        },
        quantity: 717.41,
        subTotal: 8135.82,
        taxAmount: 8536.25,
        taxRateRef: {
          effectiveTaxRate: 4986.39,
          id: "097b5da0-8c57-4fa6-878a-216e19bafeca",
          name: "Mrs. Kathleen McDermott",
        },
        totalAmount: 5410.46,
        tracking: {
          categoryRefs: [
            {
              id: "40b64ff8-ae17-40ef-83b5-f37e4aa86855",
              name: "Cora Jenkins",
            },
          ],
          customerRef: {
            companyName: "nesciunt",
            id: "2aa5dcb6-682c-4b70-b8cf-d5fb6e91b9a9",
          },
          isBilledTo: BilledToType.Project,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "4846e2c3-309d-4b05-b6d9-e75ca006f539",
            name: "Miss Krista Bosco",
          },
        },
        trackingCategoryRefs: [
          {
            id: "a8bf92f9-7428-4ad9-a9f8-bf8221125359",
            name: "Joey Labadie",
          },
          {
            id: "7f7a79cd-72cd-4248-8da2-1729f2ac41ef",
            name: "Jackie Crist",
          },
        ],
        unitAmount: 1168.07,
      },
      {
        accountRef: {
          id: "169ac1e4-1d8a-423c-a3e3-4f2dfa4a197f",
          name: "Betsy Walter",
        },
        description: "aspernatur",
        discountAmount: 911.36,
        discountPercentage: 3687.61,
        isDirectCost: false,
        itemRef: {
          id: "1fe17120-9985-43e9-b543-d854439ee224",
          name: "Kristen Bashirian",
        },
        quantity: 2107.1,
        subTotal: 7122.09,
        taxAmount: 7711.46,
        taxRateRef: {
          effectiveTaxRate: 1027.34,
          id: "54188c2f-56e8-45da-b832-eabd617c3b0d",
          name: "Heather Nader",
        },
        totalAmount: 6942.92,
        tracking: {
          categoryRefs: [
            {
              id: "01bad870-6d46-4082-bfbd-c41ff5d4e2ae",
              name: "Ora Purdy",
            },
            {
              id: "b35d1763-8f1e-4db7-8359-ecc5cb860f8c",
              name: "Miss Dan Lakin",
            },
            {
              id: "73810e4f-e444-4729-bcd3-b1dd3bbce247",
              name: "Karl Jacobs",
            },
            {
              id: "eff50126-d71c-4ffb-90eb-74b8421953b4",
              name: "Melody Stoltenberg",
            },
          ],
          customerRef: {
            companyName: "labore",
            id: "3159d33e-5953-4c00-9139-863aa41e6c31",
          },
          isBilledTo: BilledToType.Project,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "2f1fcb51-c9a4-41ff-be9c-bd795ee65e07",
            name: "Johnnie Schamberger",
          },
        },
        trackingCategoryRefs: [
          {
            id: "f616ea5c-7164-4193-8b90-f2e09d19d2fc",
            name: "Faith Mosciski",
          },
          {
            id: "e105944b-935d-4237-a72f-90849d6aed4a",
            name: "Earnest Rogahn",
          },
          {
            id: "37cd9222-c9ff-4574-91aa-bfa2e761f0ca",
            name: "Meredith Green",
          },
        ],
        unitAmount: 8757.66,
      },
      {
        accountRef: {
          id: "f1031e68-99f0-4c20-81e2-2cd55cc0584a",
          name: "Lena Goyette",
        },
        description: "voluptas",
        discountAmount: 8175.09,
        discountPercentage: 6079.37,
        isDirectCost: false,
        itemRef: {
          id: "71fc820c-65b0-437b-b8e0-cc885187e4de",
          name: "Leslie Pacocha",
        },
        quantity: 5461.33,
        subTotal: 8037.63,
        taxAmount: 3236.14,
        taxRateRef: {
          effectiveTaxRate: 8450.13,
          id: "ddb46aa1-cfd6-4d82-8da0-131911296466",
          name: "Dr. Veronica Runte",
        },
        totalAmount: 932.99,
        tracking: {
          categoryRefs: [
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
            {
              id: "7764eef6-d0c6-4d6e-99c7-3dd634571509",
              name: "Nelson Walker",
            },
          ],
          customerRef: {
            companyName: "doloremque",
            id: "d3c5a1f9-c242-4c7b-a6a1-f30c73df5b67",
          },
          isBilledTo: BilledToType.Unknown,
          isRebilledTo: BilledToType.Customer,
          projectRef: {
            id: "890f42a4-bb43-48d8-9b26-0591d745e3c2",
            name: "Lorraine Marquardt",
          },
        },
        trackingCategoryRefs: [
          {
            id: "3f567e0e-2527-465b-9d62-fcdace1f0121",
            name: "Bernadette Waelchi",
          },
          {
            id: "39e8f25c-d0d1-49d9-99f4-39e39266cbd9",
            name: "Marta Kreiger",
          },
          {
            id: "2b241136-95d1-4e66-98fc-c4596217c297",
            name: "Beth Klocko",
          },
          {
            id: "34254038-bfb5-4971-a981-90557389cedb",
            name: "Spencer Kirlin",
          },
        ],
        unitAmount: 6340.91,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "dolor",
    note: "occaecati",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "unde",
          currency: "labore",
          currencyRate: 8658.06,
          totalAmount: 4269.42,
        },
        payment: {
          accountRef: {
            id: "6bc2ae48-0632-4b99-94b6-fa2206369828",
            name: "Vivian Dietrich",
          },
          currency: "ab",
          currencyRate: 32.41,
          id: "006bef49-21ec-4205-bb74-9366ac8ee0f2",
          note: "libero",
          paidOnDate: "sapiente",
          reference: "veritatis",
          totalAmount: 5927.91,
        },
      },
      {
        allocation: {
          allocatedOnDate: "veniam",
          currency: "quos",
          currencyRate: 5216.94,
          totalAmount: 8135.44,
        },
        payment: {
          accountRef: {
            id: "40d03f3d-eba2-497b-a3e9-0bc40df868fd",
            name: "Mrs. Norma Greenholt",
          },
          currency: "libero",
          currencyRate: 2213.92,
          id: "31d492f4-f127-4fb0-a0bf-1f8217978d0a",
          note: "eligendi",
          paidOnDate: "impedit",
          reference: "officia",
          totalAmount: 4850.97,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "aeb7b702-1a52-4046-b64e-99fb0e67e094",
        purchaseOrderNumber: "hic",
      },
      {
        id: "dfed5540-ef53-4a34-a1b8-fe99731adc05",
        purchaseOrderNumber: "fugiat",
      },
    ],
    reference: "quas",
    sourceModifiedDate: "quis",
    status: BillStatus.Void,
    subTotal: 9080.3,
    supplementalData: {
      content: {
        "illum": {
          "rerum": "voluptate",
          "perferendis": "maiores",
          "harum": "ratione",
          "molestias": "odio",
        },
      },
    },
    supplierRef: {
      id: "4290d336-561e-4ca1-aef8-9451bd76eeeb",
      supplierName: "nemo",
    },
    taxAmount: 841.54,
    totalAmount: 5623.39,
    withholdingTax: [
      {
        amount: 2657.73,
        name: "Dana Bradtke",
      },
      {
        amount: 8325.89,
        name: "Mr. Vivian Harvey",
      },
      {
        amount: 437.97,
        name: "Janis Greenholt",
      },
      {
        amount: 7217.73,
        name: "Dr. Louise Will",
      },
    ],
  },
  billId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 296127,
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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.bills.uploadAttachment({
  requestBody: {
    content: "corrupti".encode(),
    requestBody: "exercitationem",
  },
  billId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: UploadBillAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
