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
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=transfers) for integrations that support creating transfers.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateTransferRequest, CreateTransferResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateTransferRequest = {
  transfer: {
    contactRef: {
      dataType: "laborum",
      id: "9ffc5619-29cc-4a95-a0a1-395918da1d48",
    },
    date: "recusandae",
    depositedRecordRefs: [
      "quas",
      "officiis",
    ],
    description: "ipsum",
    from: {
      accountRef: {
        id: "cf8e1143-da93-408b-a7a0-8af22184439b",
        name: "Desiree Walsh",
      },
      amount: 3395.66,
      currency: "eum",
    },
    id: "ccce470c-d214-47b6-a615-2cf01d0d8c3a",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "magnam",
    sourceModifiedDate: "facilis",
    supplementalData: {
      content: {
        "laborum": {
          "quidem": "repellat",
          "molestias": "amet",
        },
        "veniam": {
          "voluptatibus": "vero",
          "provident": "iure",
          "incidunt": "repellat",
          "similique": "ut",
        },
        "tempore": {
          "voluptates": "excepturi",
        },
      },
    },
    to: {
      accountRef: {
        id: "c097eda6-2344-42e1-a923-7e9984c80b47",
        name: "Bert Lind V",
      },
      amount: 1752.16,
      currency: "dolorem",
    },
    trackingCategoryRefs: [
      {
        id: "18ca8d69-c568-4921-8fa2-0207e4fae038",
        name: "Carroll Klocko DDS",
      },
      {
        id: "c2cabaf7-fc2c-4cba-8bef-0df68eaedb2e",
        name: "Darryl Altenwerth",
      },
      {
        id: "069fb36a-dd70-4408-8e0a-3fc73a5a034b",
        name: "Rebecca Graham",
      },
      {
        id: "243afa69-87a4-472b-b09a-153e22301068",
        name: "Tracy Monahan",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.transfers.create(req).then((res: CreateTransferResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## get

Gets the specified transfer for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetTransferRequest, GetTransferResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetTransferRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  transferId: "ipsa",
};

sdk.transfers.get(req).then((res: GetTransferResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateModel

Get create transfer model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=transfers) for integrations that support creating transfers.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateTransfersModelRequest, GetCreateTransfersModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreateTransfersModelRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.transfers.getCreateModel(req).then((res: GetCreateTransfersModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets the transfers for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListTransfersRequest, ListTransfersResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListTransfersRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "perspiciatis",
};

sdk.transfers.list(req).then((res: ListTransfersResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```