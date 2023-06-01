# transfers

## Overview

Transfers

### Available Operations

* [create](#create) - Create transfer
* [get](#get) - Get transfer
* [getCreateModel](#getcreatemodel) - Get create transfer model
* [list](#list) - List transfers

## create

Posts a new transfer to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create transfer model](https://docs.codat.io/accounting-api#/operations/get-create-transfers-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=transfers) to see which integrations support this endpoint.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateTransferResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.transfers.create({
  transfer: {
    contactRef: {
      dataType: "magni",
      id: "73caa911-8b38-4f1b-a1a3-31a54dc10294",
    },
    date: "reiciendis",
    depositedRecordRefs: [
      {
        dataType: "eos",
        id: "fed939ba-8f71-4e29-92c2-0ee1228ac3ad",
      },
      {
        dataType: "optio",
        id: "647d240b-c11e-4a48-a824-ccc6a2f0f5b9",
      },
      {
        dataType: "quibusdam",
        id: "3cb11a76-87d3-4100-a8e2-b9b0d746d2a7",
      },
    ],
    description: "quisquam",
    from: {
      accountRef: {
        id: "7d1ea0e7-9fa9-4bbe-9f17-9f650b1e707e",
        name: "Rochelle Grimes",
      },
      amount: 4097.14,
      currency: "odio",
    },
    id: "13bacce0-72ab-4d61-918d-279c10c18516",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "doloribus",
    sourceModifiedDate: "repellendus",
    supplementalData: {
      content: {
        "praesentium": {
          "repudiandae": "fugit",
          "vel": "fugit",
          "ab": "quia",
        },
        "esse": {
          "ea": "odit",
        },
      },
    },
    to: {
      accountRef: {
        id: "8fa50396-2867-4e72-b3a6-5024b157f9bb",
        name: "Delia Zulauf",
      },
      amount: 6278.1,
      currency: "ad",
    },
    trackingCategoryRefs: [
      {
        id: "871d99b6-61a7-4def-968b-6ccb2822b4a9",
        name: "Roberto Abshire",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: CreateTransferResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Gets the specified transfer for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetTransferResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.transfers.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  transferId: "magni",
}).then((res: GetTransferResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateModel

Get create transfer model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=transfers) for integrations that support creating transfers.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateTransfersModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.transfers.getCreateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateTransfersModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets the transfers for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListTransfersResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.transfers.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "doloribus",
}).then((res: ListTransfersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
