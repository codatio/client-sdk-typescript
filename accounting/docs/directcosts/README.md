# directCosts

## Overview

Direct costs

### Available Operations

* [create](#create) - Create direct cost
* [downloadAttachment](#downloadattachment) - Download direct cost attachment
* [get](#get) - Get direct cost
* [getAttachment](#getattachment) - Get direct cost attachment
* [getCreateModel](#getcreatemodel) - Get create direct cost model
* [list](#list) - List direct costs
* [listAttachments](#listattachments) - List direct cost attachments
* [uploadAttachment](#uploadattachment) - Upload direct cost attachment

## create

Posts a new direct cost to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create direct cost model](https://docs.codat.io/accounting-api#/operations/get-create-directCosts-model).

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support creating direct costs.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateDirectCostResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.directCosts.create({
  directCost: {
    contactRef: {
      dataType: "quis",
      id: "93260525-1e66-4bb4-a689-7d99a2d33567",
    },
    currency: "ipsa",
    currencyRate: 8842.06,
    id: "93ee6cf5-9f35-48aa-aaca-e323a31bf7ba",
    issueDate: "architecto",
    lineItems: [
      {
        accountRef: {
          id: "c97716c8-02cc-49e0-87d9-d323f1aa63ed",
          name: "Miss Earnest Zemlak",
        },
        description: "nemo",
        discountAmount: 4125.09,
        discountPercentage: 7425.62,
        itemRef: {
          id: "cba51ef2-454a-447f-acf1-16cdd5444a75",
          name: "Andrea Lang",
        },
        quantity: 8116.96,
        subTotal: 4938,
        taxAmount: 8445.24,
        taxRateRef: {
          effectiveTaxRate: 8127.53,
          id: "9efaf43d-c623-4620-b313-8f30df3db022",
          name: "Donnie Ondricka",
        },
        totalAmount: 3413.59,
        tracking: {
          invoiceTo: {
            dataType: "delectus",
            id: "b8f652eb-b9d3-4838-b879-0243b293dab3",
          },
          recordRefs: [
            {
              dataType: "vero",
              id: "917f50fd-a04c-48b1-bb55-a292b0bc3bb7",
            },
          ],
        },
        trackingCategoryRefs: [
          {
            id: "4664eb1d-0338-48b0-91bb-17afee74b6fe",
            name: "Marion Greenfelder",
          },
          {
            id: "c7edaf39-d16f-4bf7-afd1-62b303e3023b",
            name: "Manuel Tillman",
          },
        ],
        unitAmount: 1973.88,
      },
      {
        accountRef: {
          id: "16cf55b4-3135-453c-8f1c-204c4adcc990",
          name: "Ms. Jody Hamill",
        },
        description: "cum",
        discountAmount: 5405.93,
        discountPercentage: 3840.98,
        itemRef: {
          id: "48cefa78-f1e2-4d3b-901e-0952bbb4cbb1",
          name: "Mrs. Courtney Kuhic",
        },
        quantity: 5685.48,
        subTotal: 3158.92,
        taxAmount: 6366.25,
        taxRateRef: {
          effectiveTaxRate: 2930.95,
          id: "169c1387-271e-418e-a9e4-5118c2cc57fb",
          name: "Tyler Abernathy MD",
        },
        totalAmount: 4645.41,
        tracking: {
          invoiceTo: {
            dataType: "molestias",
            id: "ed29a9d4-eea8-4565-8c2d-4f4c88be4f27",
          },
          recordRefs: [
            {
              dataType: "tenetur",
              id: "d9667e46-c51d-42ff-aa58-dcef234c955b",
            },
            {
              dataType: "natus",
              id: "bdf2190a-bd9b-4bcc-a725-ec2659ce0280",
            },
            {
              dataType: "corrupti",
              id: "40c69ef6-8e45-4c8a-9dfa-c754500430c6",
            },
          ],
        },
        trackingCategoryRefs: [
          {
            id: "32b4391f-df01-4c3e-91e8-f7bc69d460a7",
            name: "Alyssa Satterfield",
          },
          {
            id: "26d10f1e-f263-41c7-80f0-f873f9d5c25f",
            name: "Miss Alfred VonRueden",
          },
        ],
        unitAmount: 6464.87,
      },
      {
        accountRef: {
          id: "4a4253c3-0257-411f-82c7-e7dc548be09e",
          name: "Diane Paucek",
        },
        description: "dolores",
        discountAmount: 816.73,
        discountPercentage: 3686.17,
        itemRef: {
          id: "ca12a4ba-9d59-4988-992c-fd0c77c53e7e",
          name: "Chelsea Gibson",
        },
        quantity: 3952.6,
        subTotal: 9251.57,
        taxAmount: 5344.54,
        taxRateRef: {
          effectiveTaxRate: 7493.37,
          id: "90bac384-e239-4670-bfec-31c50824d189",
          name: "Curtis Keebler",
        },
        totalAmount: 6908.65,
        tracking: {
          invoiceTo: {
            dataType: "sunt",
            id: "d27eb707-aa60-4c8f-a46e-6177db9db3b7",
          },
          recordRefs: [
            {
              dataType: "voluptatibus",
              id: "fbb6970e-e770-4e36-897e-f7c206e61b0d",
            },
          ],
        },
        trackingCategoryRefs: [
          {
            id: "08714c20-a3d9-4863-bca8-5c3fe65574db",
            name: "Dominick Mraz",
          },
        ],
        unitAmount: 4622.78,
      },
      {
        accountRef: {
          id: "c98f13af-28db-42cf-abf4-f3ded356d7e1",
          name: "Miss Whitney Dach",
        },
        description: "occaecati",
        discountAmount: 5317.63,
        discountPercentage: 1078.63,
        itemRef: {
          id: "96d55af6-9a1c-44b7-9ae3-3681c23c39a7",
          name: "Ms. Michael Torphy",
        },
        quantity: 7162.96,
        subTotal: 938.38,
        taxAmount: 1709.49,
        taxRateRef: {
          effectiveTaxRate: 7710.42,
          id: "5ba825fe-22cd-45cb-a6fb-fec932af6813",
          name: "Angel Harvey",
        },
        totalAmount: 9353.01,
        tracking: {
          invoiceTo: {
            dataType: "placeat",
            id: "ec2dd691-6f7f-4c7d-9a70-ec60e6075894",
          },
          recordRefs: [
            {
              dataType: "autem",
              id: "1c14cd90-227e-437c-8d97-7f1a5491abe9",
            },
            {
              dataType: "dignissimos",
              id: "51b106d2-3e03-4e69-815a-ae99fcde9e72",
            },
            {
              dataType: "iste",
              id: "c9d4f2d8-a446-440c-a60d-b73a2f93f467",
            },
            {
              dataType: "at",
              id: "c0d8da56-1220-426a-b8f2-77485c1976af",
            },
          ],
        },
        trackingCategoryRefs: [
          {
            id: "80da7a08-9fc4-44db-a745-30e5cc7c6d0c",
            name: "Spencer Wintheiser",
          },
          {
            id: "d334b6f6-23bc-4eca-b50a-ee5e0da8b9af",
            name: "Mrs. Alberta Stoltenberg",
          },
          {
            id: "86e7b413-cbe2-4d17-adc1-c43d40f61d17",
            name: "Christine Hane",
          },
        ],
        unitAmount: 7322.16,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "debitis",
    note: "enim",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "saepe",
          currency: "non",
          currencyRate: 9407.97,
          totalAmount: 4601.8,
        },
        payment: {
          accountRef: {
            id: "21184077-2f32-4e3b-89db-e0f23b7b6d99",
            name: "Dianne Simonis",
          },
          currency: "facere",
          currencyRate: 8999.7,
          id: "d477680f-c7a1-47a8-ae5e-82fd28d1040a",
          note: "iusto",
          paidOnDate: "debitis",
          reference: "sint",
          totalAmount: 1083.49,
        },
      },
      {
        allocation: {
          allocatedOnDate: "ratione",
          currency: "omnis",
          currencyRate: 1850.41,
          totalAmount: 6781.29,
        },
        payment: {
          accountRef: {
            id: "b44cb183-5008-4f46-9ce5-3e914498a9ba",
            name: "Alma Beahan",
          },
          currency: "pariatur",
          currencyRate: 9692.94,
          id: "de410c37-daa9-4182-a49d-9625d3caffc1",
          note: "cupiditate",
          paidOnDate: "blanditiis",
          reference: "voluptates",
          totalAmount: 9025.46,
        },
      },
      {
        allocation: {
          allocatedOnDate: "animi",
          currency: "modi",
          currencyRate: 3101.3,
          totalAmount: 3390.36,
        },
        payment: {
          accountRef: {
            id: "2792bcd4-40ea-498b-acce-0486de0d56d7",
            name: "Mrs. Verna Anderson",
          },
          currency: "accusantium",
          currencyRate: 2062.3,
          id: "e8dc626f-f77c-4656-b5f5-b70e3e4cfcc6",
          note: "dolorum",
          paidOnDate: "cupiditate",
          reference: "ab",
          totalAmount: 8969.21,
        },
      },
      {
        allocation: {
          allocatedOnDate: "maxime",
          currency: "veniam",
          currencyRate: 1816.73,
          totalAmount: 3974.18,
        },
        payment: {
          accountRef: {
            id: "24d00014-ef45-4cea-91ac-53ebb6587f34",
            name: "Megan Bergnaum",
          },
          currency: "ipsam",
          currencyRate: 7395.69,
          id: "9acee400-ae9f-492c-af1b-025f1d14718c",
          note: "nisi",
          paidOnDate: "voluptatibus",
          reference: "est",
          totalAmount: 1274.87,
        },
      },
    ],
    reference: "doloribus",
    sourceModifiedDate: "mollitia",
    subTotal: 8418.47,
    supplementalData: {
      content: {
        "cumque": {
          "commodi": "porro",
        },
      },
    },
    taxAmount: 3298.49,
    totalAmount: 8155.84,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 571303,
}).then((res: CreateDirectCostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## downloadAttachment

Downloads an attachment for the specified direct cost for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadDirectCostAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.directCosts.downloadAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: DownloadDirectCostAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Gets the specified direct cost for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetDirectCostResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.directCosts.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetDirectCostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getAttachment

Gets the specified direct cost attachment for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetDirectCostAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.directCosts.getAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetDirectCostAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateModel

Get create direct cost model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support creating direct costs.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateDirectCostsModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.directCosts.getCreateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateDirectCostsModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets the direct costs for the company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListDirectCostsResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.directCosts.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "exercitationem",
}).then((res: ListDirectCostsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listAttachments

Gets all attachments for the specified direct cost for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListDirectCostAttachmentsResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.directCosts.listAttachments({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: ListDirectCostAttachmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## uploadAttachment

Posts a new direct cost attachment for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UploadDirectCostAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.directCosts.uploadAttachment({
  requestBody: {
    content: "quaerat".encode(),
    requestBody: "in",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: UploadDirectCostAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
