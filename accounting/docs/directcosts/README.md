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

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) to see which integrations support this endpoint.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateDirectCostResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directCosts.create({
  directCost: {
    contactRef: {
      dataType: "consequuntur",
      id: "bd7ed565-0762-41c5-8f4d-7396564c20a0",
    },
    currency: "reprehenderit",
    currencyRate: 1171.17,
    id: "1a961d24-a7db-4b8f-932d-892cf7812cb5",
    issueDate: "architecto",
    lineItems: [
      {
        accountRef: {
          id: "c878240b-f548-4f88-b8f1-bf0bc8e1f206",
          name: "Corey Streich",
        },
        description: "illo",
        discountAmount: 8384.02,
        discountPercentage: 403.46,
        itemRef: {
          id: "081090f6-7066-473f-ba68-1c5768dce742",
          name: "Donna Mann",
        },
        quantity: 1058.74,
        subTotal: 3497.12,
        taxAmount: 8881.17,
        taxRateRef: {
          effectiveTaxRate: 532.16,
          id: "8601489a-5f63-4e3a-b3dd-9dda33dcd634",
          name: "Nathan Ward",
        },
        totalAmount: 4568.09,
        tracking: {
          invoiceTo: {
            dataType: "id",
            id: "98e4df37-e45b-4895-9d41-3e13a4823109",
          },
          recordRefs: [
            {
              dataType: "iure",
              id: "bd354c09-2bd7-434f-8244-9d86f4bb20fe",
            },
          ],
        },
        trackingCategoryRefs: [
          {
            id: "d911cbfe-749c-4af4-9a27-f69e2c9e6d10",
            name: "Arturo Smith",
          },
          {
            id: "ad4c6b03-108d-49c3-b747-3082b94f2ab1",
            name: "Rufus Hickle",
          },
        ],
        unitAmount: 837,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "voluptates",
    note: "unde",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "amet",
          currency: "dolores",
          currencyRate: 4167.82,
          totalAmount: 2051.5,
        },
        payment: {
          accountRef: {
            id: "50a46714-3789-4ce0-a991-594d93a74c02",
            name: "Jane Wilkinson",
          },
          currency: "quidem",
          currencyRate: 3102.12,
          id: "b4db8b77-8ebb-46e1-92cf-502bafb2cbc4",
          note: "aliquid",
          paidOnDate: "adipisci",
          reference: "ipsam",
          totalAmount: 8526.23,
        },
      },
      {
        allocation: {
          allocatedOnDate: "enim",
          currency: "eveniet",
          currencyRate: 4330.83,
          totalAmount: 3470.5,
        },
        payment: {
          accountRef: {
            id: "da028c3e-951a-41e3-8fda-966489d7b786",
            name: "Mrs. Josephine Tromp",
          },
          currency: "quasi",
          currencyRate: 1772.5,
          id: "a6b99249-4594-4487-b5c8-43836b86b3cd",
          note: "a",
          paidOnDate: "ex",
          reference: "dolore",
          totalAmount: 1158.7,
        },
      },
      {
        allocation: {
          allocatedOnDate: "minima",
          currency: "facilis",
          currencyRate: 223.76,
          totalAmount: 2799.72,
        },
        payment: {
          accountRef: {
            id: "49f9df13-f4ee-4dbe-b8bf-606825894ea7",
            name: "Grace Stehr",
          },
          currency: "in",
          currencyRate: 1479.33,
          id: "795b7851-48d6-4d54-9e56-35b33bc0f970",
          note: "placeat",
          paidOnDate: "dolore",
          reference: "magni",
          totalAmount: 9730.03,
        },
      },
      {
        allocation: {
          allocatedOnDate: "quod",
          currency: "provident",
          currencyRate: 9624.68,
          totalAmount: 2930.13,
        },
        payment: {
          accountRef: {
            id: "844225e7-5b79-4606-9c0e-fa6f93b90a1b",
            name: "Colin Mills",
          },
          currency: "accusamus",
          currencyRate: 1147.52,
          id: "254b739f-4fe7-4721-8d1f-6558c99c722d",
          note: "fugit",
          paidOnDate: "nam",
          reference: "optio",
          totalAmount: 349.2,
        },
      },
    ],
    reference: "earum",
    sourceModifiedDate: "excepturi",
    subTotal: 2568.9,
    supplementalData: {
      content: {
        "voluptatum": {
          "possimus": "unde",
          "maxime": "culpa",
        },
      },
    },
    taxAmount: 6428.58,
    totalAmount: 9268.79,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 42929,
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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directCosts.downloadAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "magnam",
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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directCosts.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "quia",
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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directCosts.getAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "quibusdam",
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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directCosts.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "temporibus",
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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directCosts.listAttachments({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "voluptate",
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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directCosts.uploadAttachment({
  requestBody: {
    content: "placeat".encode(),
    requestBody: "est",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "est",
}).then((res: UploadDirectCostAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
