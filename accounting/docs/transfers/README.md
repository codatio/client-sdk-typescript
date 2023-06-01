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
      dataType: "maiores",
      id: "c8745005-e9d3-4d93-8e03-6f5c388664f6",
    },
    date: "error",
    depositedRecordRefs: [
      {
        dataType: "corporis",
        id: "530a2e2a-ed6a-4af8-a3c2-8d040c69a3d9",
      },
      {
        dataType: "voluptatem",
        id: "6f6ebd5a-d7ec-4739-8f25-f634b3730714",
      },
      {
        dataType: "itaque",
        id: "6be8c3e0-9c64-4d34-aac2-99a6e5e7aef1",
      },
    ],
    description: "amet",
    from: {
      accountRef: {
        id: "402e945f-5374-43ef-9e11-98221f9b1f7d",
        name: "Gerard Weimann",
      },
      amount: 4322.15,
      currency: "omnis",
    },
    id: "682aceef-b04f-48c5-92ca-abea708ed579",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "rem",
    sourceModifiedDate: "facere",
    supplementalData: {
      content: {
        "quas": {
          "illum": "labore",
          "ea": "aperiam",
        },
      },
    },
    to: {
      accountRef: {
        id: "599d5c33-4957-46d5-9209-e9a2253b6d76",
        name: "Irma Larkin",
      },
      amount: 9345.12,
      currency: "similique",
    },
    trackingCategoryRefs: [
      {
        id: "5fd4b39f-8a14-4906-b8f1-3c686d839fc9",
        name: "Joshua Koelpin",
      },
      {
        id: "fa906ae5-59b7-42eb-a746-030fe18376c2",
        name: "Merle Strosin",
      },
      {
        id: "76790ed0-c16a-47ba-8784-04489f6770ef",
        name: "Ms. Suzanne Lang MD",
      },
      {
        id: "2ba25ee6-c75a-4f8a-a0a7-ae346e0979e5",
        name: "Timmy Trantow V",
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
  transferId: "impedit",
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
  query: "culpa",
}).then((res: ListTransfersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
