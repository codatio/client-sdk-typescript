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
      dataType: "doloremque",
      id: "6d212494-5081-49d7-83b1-b41844060e00",
    },
    currency: "nesciunt",
    currencyRate: 827.23,
    id: "0d023dc9-01f5-4afd-aa6c-44846ae9d892",
    issueDate: "veniam",
    lineItems: [
      {
        accountRef: {
          id: "c8962f48-96bf-451e-8652-d3c343d61778",
          name: "Amos Hahn Sr.",
        },
        description: "numquam",
        discountAmount: 4553.55,
        discountPercentage: 4837.72,
        itemRef: {
          id: "25e62190-9e91-4044-a5de-59ac7706670c",
          name: "Henry Ruecker",
        },
        quantity: 6035.57,
        subTotal: 2347.4,
        taxAmount: 1862.22,
        taxRateRef: {
          effectiveTaxRate: 4003.27,
          id: "05251e66-bb42-4689-bd99-a2d335670e93",
          name: "Clay Hyatt",
        },
        totalAmount: 3195.13,
        tracking: {
          invoiceTo: {
            dataType: "perspiciatis",
            id: "f358aaea-cae3-423a-b1bf-7ba1cc97716c",
          },
          recordRefs: [
            {
              dataType: "accusantium",
              id: "2cc9e0c7-d9d3-423f-9aa6-3ed9cf1c856b",
            },
            {
              dataType: "quo",
              id: "ba51ef24-54a4-47fa-8f11-6cdd5444a756",
            },
            {
              dataType: "consequuntur",
              id: "873c7dd9-efaf-443d-8623-620f3138f30d",
            },
          ],
        },
        trackingCategoryRefs: [
          {
            id: "3db022fa-a565-4fb8-b652-ebb9d3838387",
            name: "Jason Considine",
          },
          {
            id: "b293dab3-0e91-47f5-8fda-04c8b1bb55a2",
            name: "Miss Russell Ritchie",
          },
          {
            id: "3bb74466-4eb1-4d03-b88b-0d1bb17afee7",
            name: "Latoya Hodkiewicz",
          },
          {
            id: "b9457c7e-daf3-49d1-afbf-76fd162b303e",
            name: "Sarah Cremin",
          },
        ],
        unitAmount: 5677.5,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "ipsum",
    note: "accusamus",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "tempora",
          currency: "sequi",
          currencyRate: 893.2,
          totalAmount: 3986.87,
        },
        payment: {
          accountRef: {
            id: "cf55b431-3553-4ccf-9c20-4c4adcc9904c",
            name: "Debra Medhurst",
          },
          currency: "atque",
          currencyRate: 3840.98,
          id: "48cefa78-f1e2-4d3b-901e-0952bbb4cbb1",
          note: "iste",
          paidOnDate: "voluptatibus",
          reference: "odio",
          totalAmount: 665.27,
        },
      },
    ],
    reference: "neque",
    sourceModifiedDate: "pariatur",
    subTotal: 5685.48,
    supplementalData: {
      content: {
        "culpa": {
          "sunt": "nisi",
          "molestias": "impedit",
        },
        "quasi": {
          "corrupti": "in",
        },
      },
    },
    taxAmount: 1589.19,
    totalAmount: 4888.02,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 119013,
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
  directCostId: "eveniet",
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
  directCostId: "vitae",
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
  directCostId: "quos",
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
  query: "eveniet",
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
  directCostId: "officia",
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
    content: "perspiciatis".encode(),
    requestBody: "debitis",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "non",
}).then((res: UploadDirectCostAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
