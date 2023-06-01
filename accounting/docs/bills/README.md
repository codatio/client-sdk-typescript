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
    amountDue: 4620.97,
    currency: "atque",
    currencyRate: 6383.63,
    dueDate: "ex",
    id: "1fa1cf20-688f-477c-9ffc-71dca163f2a3",
    issueDate: "eligendi",
    lineItems: [
      {
        accountRef: {
          id: "0a97ff33-4cdd-4f85-ba9e-61876c6ab21d",
          name: "Ada Stark",
        },
        description: "unde",
        discountAmount: 2814.54,
        discountPercentage: 8145.85,
        isDirectCost: false,
        itemRef: {
          id: "6fecd799-3900-466a-ad2d-000355338cec",
          name: "Lena Kerluke",
        },
        quantity: 1440.58,
        subTotal: 842.07,
        taxAmount: 8996.52,
        taxRateRef: {
          effectiveTaxRate: 6119.7,
          id: "152cb311-9167-4b8e-bc8d-b03408d6d364",
          name: "Irvin Shields",
        },
        totalAmount: 3539.04,
        tracking: {
          categoryRefs: [
            {
              id: "06d1263d-48e9-435c-ac9e-81f30be3e432",
              name: "Wanda Stanton",
            },
            {
              id: "16576506-6418-470d-9d21-f9ad030c4ecc",
              name: "Ms. Teresa Ondricka",
            },
            {
              id: "6429068b-8502-4a55-a7f7-3bc845e320a3",
              name: "Natasha Wiza",
            },
          ],
          customerRef: {
            companyName: "dolorum",
            id: "df947c9a-867b-4c42-8266-65816ddca8ef",
          },
          isBilledTo: BilledToType.NotApplicable,
          isRebilledTo: BilledToType.Unknown,
          projectRef: {
            id: "fcb4c593-ec12-4cda-ad0e-c7afedbd80df",
            name: "Marjorie Lockman",
          },
        },
        trackingCategoryRefs: [
          {
            id: "f9390c58-8809-483d-abf9-ef3ffdd9f7f0",
            name: "Guadalupe Murazik",
          },
          {
            id: "d35724cd-b0f4-4d28-9187-d56844eded85",
            name: "Wade Berge",
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
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "a",
    note: "itaque",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "repellat",
          currency: "cupiditate",
          currencyRate: 2372.08,
          totalAmount: 3035.49,
        },
        payment: {
          accountRef: {
            id: "152ed7e2-53f4-4c15-bdea-a7170f445acc",
            name: "Rick Howell",
          },
          currency: "officia",
          currencyRate: 9949.02,
          id: "9bbad185-fe43-41d6-bf5c-838fbb8c20cb",
          note: "ex",
          paidOnDate: "odio",
          reference: "delectus",
          totalAmount: 7949.27,
        },
      },
      {
        allocation: {
          allocatedOnDate: "ut",
          currency: "distinctio",
          currencyRate: 2630.79,
          totalAmount: 1764.18,
        },
        payment: {
          accountRef: {
            id: "5e99e623-4c9f-47b7-9dfe-b77a5c38d4ba",
            name: "Kent Blanda",
          },
          currency: "eaque",
          currencyRate: 4064.62,
          id: "ef890a54-b475-4f16-b56d-385a3c4ac631",
          note: "rerum",
          paidOnDate: "occaecati",
          reference: "provident",
          totalAmount: 8974.34,
        },
      },
      {
        allocation: {
          allocatedOnDate: "fugit",
          currency: "autem",
          currencyRate: 7637.09,
          totalAmount: 9107.26,
        },
        payment: {
          accountRef: {
            id: "d8f9fdb9-410f-463b-bf81-7837b01afdd7",
            name: "Jordan Kassulke",
          },
          currency: "sunt",
          currencyRate: 5015.91,
          id: "9eb44873-f503-43f1-9dbf-125ce4152eab",
          note: "error",
          paidOnDate: "placeat",
          reference: "temporibus",
          totalAmount: 4547.61,
        },
      },
      {
        allocation: {
          allocatedOnDate: "earum",
          currency: "minima",
          currencyRate: 1419.86,
          totalAmount: 1383.06,
        },
        payment: {
          accountRef: {
            id: "4a6a0e12-3b78-447e-859e-1f67f3c4cce4",
            name: "Ricardo Stanton",
          },
          currency: "sint",
          currencyRate: 4001.45,
          id: "ff3c5747-5013-457e-84f5-1f8b084c3197",
          note: "officiis",
          paidOnDate: "dicta",
          reference: "excepturi",
          totalAmount: 2336.18,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "245467f9-4874-4c2d-9cc4-972233e66bd8",
        purchaseOrderNumber: "voluptatibus",
      },
      {
        id: "e5d00b97-9ef2-4038-b320-590ccc109640",
        purchaseOrderNumber: "voluptatem",
      },
      {
        id: "313b3e50-44f6-45fe-b2dc-4077d0cc3f40",
        purchaseOrderNumber: "corrupti",
      },
    ],
    reference: "itaque",
    sourceModifiedDate: "earum",
    status: BillStatus.Void,
    subTotal: 1199.28,
    supplementalData: {
      content: {
        "impedit": {
          "cum": "dolore",
          "illum": "ea",
          "officiis": "quasi",
          "accusamus": "animi",
        },
        "necessitatibus": {
          "maiores": "odio",
        },
      },
    },
    supplierRef: {
      id: "5aedf2ac-ab58-4b99-9c92-6ddb589461e7",
      supplierName: "numquam",
    },
    taxAmount: 1446.21,
    totalAmount: 788.02,
    withholdingTax: [
      {
        amount: 7486.56,
        name: "Rafael Schuster",
      },
      {
        amount: 263.89,
        name: "Elsa Adams",
      },
      {
        amount: 6238.68,
        name: "Margaret Rau",
      },
      {
        amount: 9787.97,
        name: "Lee Runte",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 460597,
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
  billId: "explicabo",
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
  billId: "delectus",
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
  billId: "quos",
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
  billId: "deleniti",
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
  query: "enim",
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
  billId: "sit",
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
    amountDue: 279.55,
    currency: "natus",
    currencyRate: 293.46,
    dueDate: "tempora",
    id: "91160820-7888-4ec6-a183-bfe9659eb40e",
    issueDate: "quod",
    lineItems: [
      {
        accountRef: {
          id: "6faf75b0-b532-4a4d-a37c-baaf4452c484",
          name: "Sheri McGlynn",
        },
        description: "est",
        discountAmount: 8687.09,
        discountPercentage: 2163.79,
        isDirectCost: false,
        itemRef: {
          id: "2dafe81a-88f4-4444-973f-ecd47353f63c",
          name: "Aaron Becker",
        },
        quantity: 4722.9,
        subTotal: 6040.27,
        taxAmount: 6463.21,
        taxRateRef: {
          effectiveTaxRate: 6621.84,
          id: "69cd5fbc-f79d-4a18-a782-2bf95894e686",
          name: "Lynda Schuppe",
        },
        totalAmount: 3129.53,
        tracking: {
          categoryRefs: [
            {
              id: "9e5d751c-9fe8-4f75-82bf-dc3450841f17",
              name: "Eleanor Gibson",
            },
            {
              id: "379f3fb2-7e21-4f86-a657-b36fc6b9f587",
              name: "Bert Hand",
            },
            {
              id: "c67641a8-312e-4504-bb4c-21ccb423abcd",
              name: "Arturo Bosco",
            },
            {
              id: "abdd88e7-1f6c-4482-92d7-771e7fd07400",
              name: "Tomas Zieme",
            },
          ],
          customerRef: {
            companyName: "consequuntur",
            id: "9de1dd70-97b5-4da0-8c57-fa6c78a216e1",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.Customer,
          projectRef: {
            id: "afeca619-1498-4140-b64f-f8ae170ef03b",
            name: "Josefina Durgan",
          },
        },
        trackingCategoryRefs: [
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
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "quis",
    note: "dolorem",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "sed",
          currency: "quo",
          currencyRate: 917.36,
          totalAmount: 761.45,
        },
        payment: {
          accountRef: {
            id: "a25a8bf9-2f97-4428-ad9a-9f8bf8221125",
            name: "Marion Medhurst",
          },
          currency: "blanditiis",
          currencyRate: 2326.02,
          id: "87f7a79c-d72c-4d24-84da-21729f2ac41e",
          note: "tenetur",
          paidOnDate: "exercitationem",
          reference: "nihil",
          totalAmount: 1547.23,
        },
      },
      {
        allocation: {
          allocatedOnDate: "quis",
          currency: "maiores",
          currencyRate: 1168.07,
          totalAmount: 1158.49,
        },
        payment: {
          accountRef: {
            id: "69ac1e41-d8a2-43c2-be34-f2dfa4a197f6",
            name: "Clay Monahan",
          },
          currency: "et",
          currencyRate: 3687.61,
          id: "1fe17120-9985-43e9-b543-d854439ee224",
          note: "non",
          paidOnDate: "laboriosam",
          reference: "accusantium",
          totalAmount: 2736.38,
        },
      },
      {
        allocation: {
          allocatedOnDate: "aliquam",
          currency: "dolorem",
          currencyRate: 7122.09,
          totalAmount: 7711.46,
        },
        payment: {
          accountRef: {
            id: "154188c2-f56e-485d-a783-2eabd617c3b0",
            name: "Leon Braun",
          },
          currency: "ut",
          currencyRate: 6942.92,
          id: "f01bad87-06d4-4608-abfb-dc41ff5d4e2a",
          note: "saepe",
          paidOnDate: "labore",
          reference: "doloribus",
          totalAmount: 7040.54,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "cb35d176-38f1-4edb-b835-9ecc5cb860f8",
        purchaseOrderNumber: "impedit",
      },
      {
        id: "d580ba73-810e-44fe-8447-297cd3b1dd3b",
        purchaseOrderNumber: "libero",
      },
    ],
    reference: "impedit",
    sourceModifiedDate: "repudiandae",
    status: BillStatus.Open,
    subTotal: 2814.16,
    supplementalData: {
      content: {
        "harum": {
          "aliquid": "blanditiis",
          "labore": "repudiandae",
        },
        "reiciendis": {
          "exercitationem": "voluptatem",
          "beatae": "qui",
          "laboriosam": "temporibus",
          "in": "veritatis",
        },
      },
    },
    supplierRef: {
      id: "cffbd0eb-74b8-4421-953b-44bd3c43159d",
      supplierName: "adipisci",
    },
    taxAmount: 2439.38,
    totalAmount: 8815.49,
    withholdingTax: [
      {
        amount: 5913.67,
        name: "Mr. Carmen Schmidt Jr.",
      },
      {
        amount: 2305.3,
        name: "Isaac Hyatt",
      },
    ],
  },
  billId: "fuga",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 266461,
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
    content: "et".encode(),
    requestBody: "eveniet",
  },
  billId: "aliquid",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: UploadBillAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
