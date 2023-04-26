# items

## Overview

Items

### Available Operations

* [createItem](#createitem) - Create item
* [getCreateItemsModel](#getcreateitemsmodel) - Get create item model
* [getItem](#getitem) - Get item
* [listItems](#listitems) - List items

## createItem

Posts a new item to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create item model](https://docs.codat.io/accounting-api#/operations/get-create-items-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=items) for integrations that support creating items.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateItemRequest, CreateItemResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, ItemStatusEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateItemRequest = {
  item: {
    billItem: {
      accountRef: {
        id: "8afabc98-6e24-41e4-bb23-42417d13e3f6",
        name: "Hattie Nienow",
      },
      description: "recusandae",
      taxRateRef: {
        effectiveTaxRate: 2889.02,
        id: "ae8ab4a9-c492-4c5e-8ba5-d4aa4a508bd3",
        name: "Jose Rowe",
      },
      unitPrice: 6567.81,
    },
    code: "deserunt",
    id: "8dd71bdd-aa30-4b7b-9144-9ae69c088d41",
    invoiceItem: {
      accountRef: {
        id: "8bb71804-f423-4d54-b935-f377ac5c9b7e",
        name: "Lee Reichert",
      },
      description: "sequi",
      taxRateRef: {
        effectiveTaxRate: 7621.04,
        id: "523105e7-c34c-4ab0-acb8-12a66148944a",
        name: "Ms. Clay Mayer",
      },
      unitPrice: 106.86,
    },
    isBillItem: false,
    isInvoiceItem: false,
    itemStatus: ItemStatusEnum.Active,
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "exercitationem",
    name: "Sylvester Davis",
    sourceModifiedDate: "praesentium",
    type: "sed",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 346632,
};

sdk.items.createItem(req).then((res: CreateItemResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateItemsModel

Get create item model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=items) for integrations that support creating items.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateItemsModelRequest, GetCreateItemsModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreateItemsModelRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.items.getCreateItemsModel(req).then((res: GetCreateItemsModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getItem

Gets the specified item for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetItemRequest, GetItemResponse } from "@codat/accounting/dist/sdk/models/operations";
import { ItemStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetItemRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  itemId: "ratione",
};

sdk.items.getItem(req).then((res: GetItemResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listItems

Gets the items for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListItemsRequest, ListItemsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { ItemStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListItemsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "nesciunt",
};

sdk.items.listItems(req).then((res: ListItemsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
