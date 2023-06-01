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
        id: "e8ab4a9c-492c-45e8-ba5d-4aa4a508bd38",
        name: "Kara Cremin",
      },
      description: "deserunt",
      taxRateRef: {
        effectiveTaxRate: 5230.55,
        id: "dd71bdda-a30b-47b9-9449-ae69c088d418",
        name: "Ms. Wm Kohler II",
      },
      unitPrice: 9965.22,
    },
    code: "modi",
    id: "23d54393-5f37-47ac-9c9b-7e93b6a3c523",
    invoiceItem: {
      accountRef: {
        id: "105e7c34-cab0-4ecb-812a-66148944a8e9",
        name: "Ms. Jennie Hartmann",
      },
      description: "nam",
      taxRateRef: {
        effectiveTaxRate: 7904.63,
        id: "25382533-43fb-40a4-a66e-a47578d171e2",
        name: "Frederick Bogan IV",
      },
      unitPrice: 9823.15,
    },
    isBillItem: false,
    isInvoiceItem: false,
    itemStatus: ItemStatus.Archived,
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "aliquid",
    name: "Shelly Purdy",
    sourceModifiedDate: "quia",
    type: ItemType.Service,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 125551,
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
  query: "dolorem",
}).then((res: ListItemsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
