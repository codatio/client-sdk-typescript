# items

## Overview

Items

### Available Operations

* [create](#create) - Create item
* [get](#get) - Get item
* [getCreateModel](#getcreatemodel) - Get create item model
* [list](#list) - List items

## create

Posts a new item to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create item model](https://docs.codat.io/accounting-api#/operations/get-create-items-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=items) to see which integrations support this endpoint.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateItemResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataType, ItemStatus, ItemType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.items.create({
  item: {
    billItem: {
      accountRef: {
        id: "3cf6c027-6e7b-421b-ad90-d2743fd6c2a1",
        name: "Gwen Jast",
      },
      description: "natus",
      taxRateRef: {
        effectiveTaxRate: 4616.76,
        id: "8ec256a5-b092-427f-8c47-996c977bbc57",
        name: "Sean Lakin",
      },
      unitPrice: 5542.89,
    },
    code: "est",
    id: "8600c58d-67d6-43e4-aa56-8464579cfc6c",
    invoiceItem: {
      accountRef: {
        id: "0e503f56-831f-41d8-ad87-b28e8afabc98",
        name: "Jana Cruickshank DVM",
      },
      description: "magnam",
      taxRateRef: {
        effectiveTaxRate: 2124.42,
        id: "b2342417-d13e-43f6-aaa9-ae4ae8ab4a9c",
        name: "Becky Crona",
      },
      unitPrice: 9000.58,
    },
    isBillItem: false,
    isInvoiceItem: false,
    itemStatus: ItemStatus.Active,
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "quidem",
    name: "Dan Skiles",
    sourceModifiedDate: "culpa",
    type: ItemType.Inventory,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 631429,
}).then((res: CreateItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Gets the specified item for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetItemResponse } from "@codat/accounting/dist/sdk/models/operations";
import { ItemStatus, ItemType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.items.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  itemId: "veniam",
}).then((res: GetItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateModel

Get create item model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=items) for integrations that support creating items.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateItemsModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.items.getCreateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateItemsModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets the items for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListItemsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { ItemStatus, ItemType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.items.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "sit",
}).then((res: ListItemsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
