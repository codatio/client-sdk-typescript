# transfers

## Overview

Transfers

### Available Operations

* [createTransfer](#createtransfer) - Create transfer
* [getCreateTransfersModel](#getcreatetransfersmodel) - Get create transfer model
* [getTransfer](#gettransfer) - Get transfer
* [listTransfers](#listtransfers) - List transfers

## createTransfer

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
      dataType: "quisquam",
      id: "b4bedef3-c127-4c39-8995-528250dcbbcd",
    },
    date: "velit",
    depositedRecordRefs: [
      "architecto",
      "magni",
      "dicta",
    ],
    description: "tempore",
    from: {
      accountRef: {
        id: "88c1ee5e-7a06-4139-9cc8-fa0b7d176492",
        name: "Flora Auer",
      },
      amount: 3249.63,
      currency: "recusandae",
    },
    id: "6cb6ebab-e5e0-4b99-b3b1-358d6a87bb7a",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "voluptates",
    sourceModifiedDate: "minus",
    supplementalData: {
      content: {
        "recusandae": {
          "eum": "iste",
          "at": "voluptate",
        },
        "alias": {
          "expedita": "consequatur",
          "suscipit": "cupiditate",
          "occaecati": "sit",
          "dignissimos": "maiores",
        },
        "provident": {
          "omnis": "incidunt",
          "incidunt": "vitae",
          "incidunt": "nostrum",
        },
      },
    },
    to: {
      accountRef: {
        id: "2a9f01f3-442c-461b-a133-bacde532b652",
        name: "Johanna Lang",
      },
      amount: 5511.24,
      currency: "corporis",
    },
    trackingCategoryRefs: [
      {
        id: "fe2859ce-3222-431f-a666-4c41d2fba5cb",
        name: "Daniel Keeling",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.transfers.createTransfer(req).then((res: CreateTransferResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateTransfersModel

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

sdk.transfers.getCreateTransfersModel(req).then((res: GetCreateTransfersModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getTransfer

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
  transferId: "corrupti",
};

sdk.transfers.getTransfer(req).then((res: GetTransferResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listTransfers

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
  query: "at",
};

sdk.transfers.listTransfers(req).then((res: ListTransfersResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
