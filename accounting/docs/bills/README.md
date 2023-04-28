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

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support creating a bill.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateBillResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  BilledToTypeEnum,
  BillStatusEnum,
  DataTypeEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
} from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.bills.create({
  bill: {
    amountDue: 7068.72,
    currency: "non",
    currencyRate: 6495.34,
    dueDate: "assumenda",
    id: "ebd5daea-4c50-46a8-aa94-c02644cf5e9d",
    issueDate: "error",
    lineItems: [
      {
        accountRef: {
          id: "4578adc1-ac60-40de-8001-ac802e2ec09f",
          name: "Dr. Armando Wunsch",
        },
        description: "dicta",
        discountAmount: 3805.95,
        discountPercentage: 9382.57,
        isDirectCost: false,
        itemRef: {
          id: "f3477c13-e902-4c14-925b-0960a668151a",
          name: "Constance Dach",
        },
        quantity: 6095.37,
        subTotal: 1512.3,
        taxAmount: 2009.5,
        taxRateRef: {
          effectiveTaxRate: 8054.63,
          id: "5949f83f-350c-4f87-affb-901c6ecbb4e2",
          name: "Lillian Rosenbaum",
        },
        totalAmount: 5000.21,
        tracking: {
          categoryRefs: [
            {
              id: "ffafeda5-3e5a-4e6e-8ac1-84c2b9c247c8",
              name: "Allen Kozey",
            },
            {
              id: "40e1942f-32e5-4505-9756-f5d56d0bd0af",
              name: "Elena Zieme I",
            },
            {
              id: "db4f62cb-a3f8-4941-aebc-0b80a6924d3b",
              name: "Eloise Rowe",
            },
          ],
          customerRef: {
            companyName: "quo",
            id: "8f895010-f5dd-43d6-ba18-04e54c82f168",
          },
          isBilledTo: BilledToTypeEnum.Customer,
          isRebilledTo: BilledToTypeEnum.Unknown,
          projectRef: {
            id: "63c8873e-4843-480b-9f6b-8ca275a60a04",
            name: "Jay Morar",
          },
        },
        trackingCategoryRefs: [
          {
            id: "699171b5-1c1b-4db1-8f4b-888ebdfc4ccc",
            name: "Marshall McClure",
          },
          {
            id: "7fc0b2dc-e108-473e-82b0-06d678878ba8",
            name: "Kay Bradtke",
          },
          {
            id: "8208c54f-efa9-4c95-b2ea-c5565d307cfe",
            name: "Hugh Carroll III",
          },
          {
            id: "e2813fa4-a41c-4480-93f2-132af03102d5",
            name: "Danielle Willms",
          },
        ],
        unitAmount: 7505.37,
      },
      {
        accountRef: {
          id: "6f18bf96-21a6-4a4f-b7a8-7ee3e4be752c",
          name: "Beatrice Purdy",
        },
        description: "quaerat",
        discountAmount: 1039.88,
        discountPercentage: 5069.66,
        isDirectCost: false,
        itemRef: {
          id: "e3bb91c8-d975-4e0e-8419-d8f84f144f3e",
          name: "Joy Toy",
        },
        quantity: 7690.47,
        subTotal: 3028.78,
        taxAmount: 6778.95,
        taxRateRef: {
          effectiveTaxRate: 6448.27,
          id: "5f3cabd9-05a9-472e-8567-28227b2d3094",
          name: "Sharon Raynor",
        },
        totalAmount: 6671.69,
        tracking: {
          categoryRefs: [
            {
              id: "fa87cf53-5a6f-4ae5-8ebf-60c321f023b7",
              name: "Paulette Dibbert",
            },
            {
              id: "7fe1a0cc-8df7-49f0-a396-d90c364b7c15",
              name: "Emilio Rau",
            },
          ],
          customerRef: {
            companyName: "accusamus",
            id: "188b1c4e-e2c8-4c6c-a611-feeb1c7cbdb6",
          },
          isBilledTo: BilledToTypeEnum.Project,
          isRebilledTo: BilledToTypeEnum.Project,
          projectRef: {
            id: "c74378ba-2531-4774-bdc9-15ad2caf5dd6",
            name: "Judith Feest",
          },
        },
        trackingCategoryRefs: [
          {
            id: "f5ae2f3a-6b70-4087-8756-143f5a6c98b5",
            name: "Holly Harber V",
          },
        ],
        unitAmount: 408.74,
      },
      {
        accountRef: {
          id: "d40bcacc-6cbd-46b5-b3ec-909304f926ba",
          name: "Wayne Hintz",
        },
        description: "voluptatum",
        discountAmount: 987.59,
        discountPercentage: 6225.66,
        isDirectCost: false,
        itemRef: {
          id: "b474b0ed-20e5-4624-8fff-639a910abdca",
          name: "Edgar Corkery",
        },
        quantity: 3931.22,
        subTotal: 3971.6,
        taxAmount: 5897.12,
        taxRateRef: {
          effectiveTaxRate: 3857.6,
          id: "e1ec0022-1b33-45d8-9acb-3ecfda8d0c54",
          name: "Mrs. Hugo Wehner Jr.",
        },
        totalAmount: 2737.32,
        tracking: {
          categoryRefs: [
            {
              id: "78a61fa1-cf20-4688-b77c-1ffc71dca163",
              name: "Aaron O'Kon",
            },
            {
              id: "80a97ff3-34cd-4df8-97a9-e61876c6ab21",
              name: "Victor Mosciski",
            },
            {
              id: "c94d6fec-d799-4390-866a-6d2d00035533",
              name: "Wilbert Walsh IV",
            },
          ],
          customerRef: {
            companyName: "iure",
            id: "fa21e915-2cb3-4119-967b-8e3c8db03408",
          },
          isBilledTo: BilledToTypeEnum.Project,
          isRebilledTo: BilledToTypeEnum.NotApplicable,
          projectRef: {
            id: "d364ffd4-5590-46d1-a63d-48e935c2c9e8",
            name: "Miss Jeannie Emmerich",
          },
        },
        trackingCategoryRefs: [
          {
            id: "e43202d7-2165-4765-8664-1870d9d21f9a",
            name: "Miss Michael Ferry",
          },
        ],
        unitAmount: 8907.65,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "cumque",
    note: "maxime",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "beatae",
          currency: "id",
          currencyRate: 90.6,
          totalAmount: 5515.76,
        },
        payment: {
          accountRef: {
            id: "36429068-b850-42a5-9e7f-73bc845e320a",
            name: "Christine Mueller",
          },
          currency: "rerum",
          currencyRate: 6786.95,
          id: "df947c9a-867b-4c42-8266-65816ddca8ef",
          note: "nemo",
          paidOnDate: "illo",
          reference: "doloribus",
          totalAmount: 7666.7,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "4c593ec1-2cda-4ad0-ac7a-fedbd80df448",
        purchaseOrderNumber: "similique",
      },
      {
        id: "47f9390c-5888-4098-bdab-f9ef3ffdd9f7",
        purchaseOrderNumber: "voluptatibus",
      },
      {
        id: "079af4d3-5724-4cdb-8f4d-281187d56844",
        purchaseOrderNumber: "accusamus",
      },
    ],
    reference: "nulla",
    sourceModifiedDate: "repudiandae",
    status: BillStatusEnum.Draft,
    subTotal: 5057.99,
    supplementalData: {
      content: {
        "animi": {
          "quae": "eum",
          "nostrum": "eveniet",
          "laboriosam": "ratione",
        },
        "blanditiis": {
          "illum": "reiciendis",
          "placeat": "dolores",
          "consequatur": "nesciunt",
        },
      },
    },
    supplierRef: {
      id: "2b6c8799-23b7-4e13-984f-7ae12c6891f8",
      supplierName: "aspernatur",
    },
    taxAmount: 7552.4,
    totalAmount: 9178.77,
    withholdingTax: [
      {
        amount: 810.53,
        name: "Heidi Bode",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 209602,
}).then((res: CreateBillResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## delete

Deletes a bill from the accounting package for a given company.

> **Supported Integrations**
> 
> This functionality is currently only supported for our Oracle NetSuite and QuickBooks Online integrations. Check out our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) to see what we're building next, and to submit ideas for new features.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DeleteBillResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";

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

Download bill attachment

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

Get bill

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetBillResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToTypeEnum, BillStatusEnum } from "@codat/accounting/dist/sdk/models/shared";

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

Get bill attachment

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

Get create/update bill model.

 > **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support creating and updating a bill.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateUpdateBillsModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";

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

Gets the latest bills for a company, with pagination

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListBillsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToTypeEnum, BillStatusEnum } from "@codat/accounting/dist/sdk/models/shared";

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
  query: "eaque",
}).then((res: ListBillsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listAttachments

List bill attachments

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

Posts an updated bill to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update bill model](https://docs.codat.io/accounting-api#/operations/get-create-update-bills-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support updating a bill.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateBillResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  BilledToTypeEnum,
  BillStatusEnum,
  DataTypeEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
} from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.bills.update({
  bill: {
    amountDue: 3474.6,
    currency: "amet",
    currencyRate: 4541.65,
    dueDate: "voluptate",
    id: "dcfa89df-975e-4356-a860-92e9c3ddc5f1",
    issueDate: "vitae",
    lineItems: [
      {
        accountRef: {
          id: "dea1026d-541a-44d1-90fe-b21780bccc0d",
          name: "Kelvin Shanahan",
        },
        description: "magnam",
        discountAmount: 5123.49,
        discountPercentage: 2726.35,
        isDirectCost: false,
        itemRef: {
          id: "708fb4e3-91e6-4bc1-98c4-c4e54599ea34",
          name: "Dr. Rose Hoeger",
        },
        quantity: 7495.37,
        subTotal: 1861.3,
        taxAmount: 374.77,
        taxRateRef: {
          effectiveTaxRate: 92.48,
          id: "ce78a1bd-8fb7-4a0a-916c-e723d4097fa3",
          name: "Alyssa Morar",
        },
        totalAmount: 4974.8,
        tracking: {
          categoryRefs: [
            {
              id: "5b291220-30d8-43f5-aeb7-799d22e8c1f8",
              name: "Erika Farrell III",
            },
          ],
          customerRef: {
            companyName: "delectus",
            id: "dc42c876-c2c2-4dfb-8cfc-1c76230f841f",
          },
          isBilledTo: BilledToTypeEnum.Customer,
          isRebilledTo: BilledToTypeEnum.Unknown,
          projectRef: {
            id: "bd23fdb1-4db6-4be5-a685-998e22ae20da",
            name: "Lucy Wilkinson",
          },
        },
        trackingCategoryRefs: [
          {
            id: "271a289c-57e8-454e-9043-9d2224656946",
            name: "Juanita Batz IV",
          },
          {
            id: "4f7ab37c-ef02-4225-994d-b55410adc669",
            name: "Miss Cary McKenzie",
          },
          {
            id: "6c7cdc98-1f06-4898-9d6b-b33cfaa348c3",
            name: "Antoinette Wolf IV",
          },
        ],
        unitAmount: 9334.56,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "necessitatibus",
    note: "numquam",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "eligendi",
          currency: "sapiente",
          currencyRate: 0.73,
          totalAmount: 7704.67,
        },
        payment: {
          accountRef: {
            id: "42b78f15-6263-498a-8dc7-66324ccb06c8",
            name: "Rex Bode",
          },
          currency: "sit",
          currencyRate: 1720.42,
          id: "529270b8-d572-42dd-895b-8bcf24db9596",
          note: "provident",
          paidOnDate: "amet",
          reference: "dolor",
          totalAmount: 3440.1,
        },
      },
      {
        allocation: {
          allocatedOnDate: "qui",
          currency: "tenetur",
          currencyRate: 4773.52,
          totalAmount: 2925.71,
        },
        payment: {
          accountRef: {
            id: "533994d7-8de3-4b6e-9389-f5abb7f66255",
            name: "Monique Denesik",
          },
          currency: "totam",
          currencyRate: 1835.04,
          id: "ac483afd-2315-4bba-a501-64e06f5bf6ae",
          note: "nemo",
          paidOnDate: "molestias",
          reference: "architecto",
          totalAmount: 7112.75,
        },
      },
      {
        allocation: {
          allocatedOnDate: "quisquam",
          currency: "praesentium",
          currencyRate: 7080.75,
          totalAmount: 8264.78,
        },
        payment: {
          accountRef: {
            id: "ef3612b6-3c20-45fd-a840-774a68a9a35d",
            name: "Leona Hodkiewicz",
          },
          currency: "maiores",
          currencyRate: 4120.24,
          id: "6fef020e-9f44-43b4-a57b-992c8dbda6a6",
          note: "dicta",
          paidOnDate: "recusandae",
          reference: "sapiente",
          totalAmount: 6617.64,
        },
      },
      {
        allocation: {
          allocatedOnDate: "odit",
          currency: "inventore",
          currencyRate: 6122.38,
          totalAmount: 5421.87,
        },
        payment: {
          accountRef: {
            id: "258fd0a9-eba4-47f7-93ef-049640d6a183",
            name: "Rosalie Lindgren",
          },
          currency: "temporibus",
          currencyRate: 9559.13,
          id: "596fdf1a-d837-4ae8-8c1c-19c95ba99867",
          note: "voluptatum",
          paidOnDate: "sapiente",
          reference: "deserunt",
          totalAmount: 2212.4,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "696991af-388c-4e03-a144-48c7977a0ef2",
        purchaseOrderNumber: "delectus",
      },
      {
        id: "536028ef-eef9-4341-92ed-7e253f4c157d",
        purchaseOrderNumber: "voluptates",
      },
      {
        id: "aa7170f4-45ac-4cf6-a7aa-f9bbad185fe4",
        purchaseOrderNumber: "nesciunt",
      },
      {
        id: "1d6bf5c8-38fb-4b8c-a0cb-67fc4b425e99",
        purchaseOrderNumber: "debitis",
      },
    ],
    reference: "laboriosam",
    sourceModifiedDate: "eos",
    status: BillStatusEnum.Open,
    subTotal: 2796.79,
    supplementalData: {
      content: {
        "occaecati": {
          "voluptate": "tempore",
          "in": "omnis",
          "possimus": "tenetur",
          "recusandae": "expedita",
        },
        "iusto": {
          "harum": "ad",
          "quod": "ratione",
        },
        "totam": {
          "dolore": "nam",
          "officia": "maiores",
          "cupiditate": "illo",
          "saepe": "enim",
        },
        "eaque": {
          "eveniet": "delectus",
          "deleniti": "provident",
        },
      },
    },
    supplierRef: {
      id: "0a54b475-f16f-456d-b85a-3c4ac631b99e",
      supplierName: "fugit",
    },
    taxAmount: 4188.92,
    totalAmount: 7637.09,
    withholdingTax: [
      {
        amount: 8528.73,
        name: "Tommie Mraz",
      },
      {
        amount: 7063.71,
        name: "Dr. Marcus Bosco",
      },
      {
        amount: 2458.49,
        name: "Rudolph Weimann IV",
      },
      {
        amount: 5422.42,
        name: "Mr. Nellie Reichert",
      },
    ],
  },
  billId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 990454,
}).then((res: UpdateBillResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## uploadAttachment

Upload bill attachment

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
    content: "at".encode(),
    requestBody: "quibusdam",
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
