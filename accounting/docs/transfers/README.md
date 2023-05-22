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

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=transfers) for integrations that support creating transfers.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateTransferResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.transfers.create({
  transfer: {
    contactRef: {
      dataType: "explicabo",
      id: "1f06d4d1-7852-4d28-be1d-b01d6919f831",
    },
    date: "nemo",
    depositedRecordRefs: [
      {
        dataType: "dolorem",
        id: "a84ea7db-15c4-4c15-be6c-d097a675597e",
      },
      {
        dataType: "cumque",
        id: "beb7982b-af9a-47da-ac29-b938e51a7e6e",
      },
      {
        dataType: "nulla",
        id: "6f7ff04f-da04-4669-aae8-182403655aa9",
      },
    ],
    description: "consequuntur",
    from: {
      accountRef: {
        id: "3c49919e-bd1c-4f77-9538-cbbfcdf4ece9",
        name: "Jodi Schamberger",
      },
      amount: 7140.11,
      currency: "modi",
    },
    id: "2c330496-17cb-471d-9c25-0b60c751d2ae",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "expedita",
    sourceModifiedDate: "necessitatibus",
    supplementalData: {
      content: {
        "tempore": {
          "rem": "consequuntur",
          "molestias": "officiis",
          "qui": "vel",
        },
        "aliquam": {
          "ab": "dolorum",
          "veniam": "officiis",
        },
        "minus": {
          "corrupti": "reprehenderit",
          "a": "quam",
          "cupiditate": "incidunt",
        },
      },
    },
    to: {
      accountRef: {
        id: "f04f4144-6f79-43d3-b100-20147cd1b831",
        name: "Amy Price",
      },
      amount: 2218.09,
      currency: "voluptates",
    },
    trackingCategoryRefs: [
      {
        id: "8960a0aa-fc7a-4867-8ba5-00a8f4cb72ed",
        name: "Kara Wilderman",
      },
      {
        id: "25d55615-8803-4212-b7b5-9b7154642b9e",
        name: "Stella Schroeder",
      },
      {
        id: "c3d3ca49-1837-4978-88d1-56f01ae36bb8",
        name: "Jose Adams",
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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.transfers.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  transferId: "eveniet",
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
    authHeader: "YOUR_API_KEY_HERE",
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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.transfers.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "ratione",
}).then((res: ListTransfersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
