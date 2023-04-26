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
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support creating direct costs.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateDirectCostRequest, CreateDirectCostResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateDirectCostRequest = {
  directCost: {
    contactRef: {
      dataType: "tempore",
      id: "e3444eac-8b3a-4287-9c6c-1fe606d07d2a",
    },
    currency: "error",
    currencyRate: 7699.22,
    id: "87ae50c1-6661-4a1d-9136-a7e8d53213f3",
    issueDate: "asperiores",
    lineItems: [
      {
        accountRef: {
          id: "58752db7-64c5-49f0-a56c-ebcada29ca79",
          name: "Margie Bosco",
        },
        description: "ipsam",
        discountAmount: 3887.15,
        discountPercentage: 4752.38,
        itemRef: {
          id: "1663c530-b566-4516-ba36-38512ab2521b",
          name: "Emmett Daugherty IV",
        },
        quantity: 1632.92,
        subTotal: 3028.14,
        taxAmount: 4199.95,
        taxRateRef: {
          effectiveTaxRate: 4450.23,
          id: "b8a40bc0-5fab-40d6-90ed-f22a94d20ec9",
          name: "Raquel O'Keefe PhD",
        },
        totalAmount: 1004.36,
        tracking: {
          invoiceTo: {
            dataType: "hic",
            id: "465e8515-6fff-473f-9f54-fdd5ea954339",
          },
          recordRefs: [
            {
              dataType: "illum",
              id: "afb42a8d-6338-48e4-9803-9ea5f9b18a24",
            },
            {
              dataType: "modi",
              id: "fd619039-dacd-438e-90dc-671dc7f1e3af",
            },
            {
              dataType: "quasi",
              id: "5920c90d-1b49-401f-abd8-9c8a32639da5",
            },
          ],
        },
        trackingCategoryRefs: [
          {
            id: "7b6902b8-81a9-44f6-8366-4a8f0af8c691",
            name: "Clinton Ernser",
          },
          {
            id: "9fbaf947-6a2a-4e8d-8c50-c8a3512c7378",
            name: "Gwendolyn McLaughlin IV",
          },
          {
            id: "50a00e96-6ec7-436d-8319-4398c783c923",
            name: "Max Tillman",
          },
        ],
        unitAmount: 8639.57,
      },
      {
        accountRef: {
          id: "3ab7ca3c-5ca8-4649-a70c-fd5d6989b720",
          name: "Mr. Danielle Hamill",
        },
        description: "voluptate",
        discountAmount: 8494.86,
        discountPercentage: 879.6,
        itemRef: {
          id: "9ea83d49-2ed1-44b8-a2c1-954545e955dc",
          name: "Henry Langosh",
        },
        quantity: 6691.93,
        subTotal: 3007.59,
        taxAmount: 6029.32,
        taxRateRef: {
          effectiveTaxRate: 65.39,
          id: "1c7c43ad-2daa-4784-aba3-d230edf73811",
          name: "Albert Bruen",
        },
        totalAmount: 5162.31,
        tracking: {
          invoiceTo: {
            dataType: "consequuntur",
            id: "bd7ed565-0762-41c5-8f4d-7396564c20a0",
          },
          recordRefs: [
            {
              dataType: "dicta",
              id: "1a961d24-a7db-4b8f-932d-892cf7812cb5",
            },
            {
              dataType: "architecto",
              id: "2c878240-bf54-48f8-8f8f-1bf0bc8e1f20",
            },
          ],
        },
        trackingCategoryRefs: [
          {
            id: "d5d831d0-0810-490f-a706-673f3a681c57",
            name: "Vickie Simonis",
          },
          {
            id: "742409a2-15e0-4860-9489-a5f63e3af3dd",
            name: "Marty Spencer",
          },
        ],
        unitAmount: 2439.65,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "vero",
    note: "placeat",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "vel",
          currency: "non",
          currencyRate: 2799.65,
          totalAmount: 5083.73,
        },
        payment: {
          accountRef: {
            id: "3e4a7a98-e4df-437e-85b8-955d413e13a4",
            name: "Mr. Todd Feil",
          },
          currency: "perferendis",
          currencyRate: 4391.35,
          id: "bd354c09-2bd7-434f-8244-9d86f4bb20fe",
          note: "nostrum",
          paidOnDate: "quibusdam",
          reference: "provident",
          totalAmount: 857.97,
        },
      },
      {
        allocation: {
          allocatedOnDate: "sunt",
          currency: "quod",
          currencyRate: 7101.48,
          totalAmount: 9611.71,
        },
        payment: {
          accountRef: {
            id: "e749caf4-5a27-4f69-a2c9-e6d10e9db3ad",
            name: "Rosalie Kautzer I",
          },
          currency: "quasi",
          currencyRate: 374.55,
          id: "8d9c3374-7308-42b9-8f2a-b1fd5671e9c3",
          note: "dolores",
          paidOnDate: "commodi",
          reference: "neque",
          totalAmount: 3182.94,
        },
      },
      {
        allocation: {
          allocatedOnDate: "eaque",
          currency: "officia",
          currencyRate: 2702.53,
          totalAmount: 4310.35,
        },
        payment: {
          accountRef: {
            id: "7143789c-e0e9-4915-94d9-3a74c0252fe3",
            name: "Alex Rippin",
          },
          currency: "rerum",
          currencyRate: 5394.26,
          id: "b778ebb6-e1d2-4cf5-82ba-fb2cbc4635d5",
          note: "eveniet",
          paidOnDate: "eum",
          reference: "exercitationem",
          totalAmount: 8718.88,
        },
      },
      {
        allocation: {
          allocatedOnDate: "culpa",
          currency: "alias",
          currencyRate: 1759.37,
          totalAmount: 5500.66,
        },
        payment: {
          accountRef: {
            id: "c3e951a1-e30f-4da9-a648-9d7b78673e13",
            name: "Arthur Dare",
          },
          currency: "rerum",
          currencyRate: 5872.48,
          id: "92494594-487f-45c8-8383-6b86b3cdf641",
          note: "minima",
          paidOnDate: "facilis",
          reference: "sit",
          totalAmount: 2799.72,
        },
      },
    ],
    reference: "magnam",
    sourceModifiedDate: "molestias",
    subTotal: 9417.1,
    supplementalData: {
      content: {
        "repellendus": {
          "dicta": "ratione",
          "delectus": "ut",
          "officiis": "itaque",
          "nulla": "distinctio",
        },
        "recusandae": {
          "deleniti": "tempore",
          "reiciendis": "commodi",
        },
        "sit": {
          "molestias": "quia",
          "ipsam": "rem",
        },
      },
    },
    taxAmount: 5640.67,
    totalAmount: 2626.64,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 898366,
};

sdk.directCosts.create(req).then((res: CreateDirectCostResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## downloadAttachment

Downloads an attachment for the specified direct cost for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadDirectCostAttachmentRequest, DownloadDirectCostAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DownloadDirectCostAttachmentRequest = {
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.directCosts.downloadAttachment(req).then((res: DownloadDirectCostAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## get

Gets the specified direct cost for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetDirectCostRequest, GetDirectCostResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetDirectCostRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.directCosts.get(req).then((res: GetDirectCostResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getAttachment

Gets the specified direct cost attachment for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetDirectCostAttachmentRequest, GetDirectCostAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetDirectCostAttachmentRequest = {
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.directCosts.getAttachment(req).then((res: GetDirectCostAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateModel

Get create direct cost model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support creating direct costs.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateDirectCostsModelRequest, GetCreateDirectCostsModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreateDirectCostsModelRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.directCosts.getCreateModel(req).then((res: GetCreateDirectCostsModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets the direct costs for the company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListDirectCostsRequest, ListDirectCostsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListDirectCostsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "culpa",
};

sdk.directCosts.list(req).then((res: ListDirectCostsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listAttachments

Gets all attachments for the specified direct cost for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListDirectCostAttachmentsRequest, ListDirectCostAttachmentsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListDirectCostAttachmentsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.directCosts.listAttachments(req).then((res: ListDirectCostAttachmentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## uploadAttachment

Posts a new direct cost attachment for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UploadDirectCostAttachmentRequest, UploadDirectCostAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UploadDirectCostAttachmentRequest = {
  requestBody: {
    content: "in".encode(),
    requestBody: "aliquid",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.directCosts.uploadAttachment(req).then((res: UploadDirectCostAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
