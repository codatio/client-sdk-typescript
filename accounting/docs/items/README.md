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
        id: "d64161e9-1500-4323-b2c0-9b924771f566",
        name: "Pat Hickle",
      },
      description: "saepe",
      taxRateRef: {
        effectiveTaxRate: 7828.51,
        id: "7626649d-84eb-49e4-8fd2-276e0b88fb87",
        name: "Gilbert Zboncak",
      },
      unitPrice: 7370.08,
    },
    code: "vel",
    id: "e8dbf812-f83b-41ca-aa9f-fc561929cca9",
    invoiceItem: {
      accountRef: {
        id: "560a1395-918d-4a1d-88e7-8e3cf8e1143d",
        name: "Ms. Wendell Dooley",
      },
      description: "magni",
      taxRateRef: {
        effectiveTaxRate: 4682.52,
        id: "a08af221-8443-49b3-9e87-56ccce470cd2",
        name: "Elaine Kihn",
      },
      unitPrice: 9267.48,
    },
    isBillItem: false,
    isInvoiceItem: false,
    itemStatus: ItemStatus.Active,
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    name: "Nicole Schowalter Sr.",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    type: ItemType.Unknown,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 873982,
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
  itemId: "voluptatum",
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
  query: "eligendi",
}).then((res: ListItemsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
