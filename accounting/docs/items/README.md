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

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=items) for integrations that support creating items.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateItemResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, ItemStatusEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.items.create({
  item: {
    billItem: {
      accountRef: {
        id: "5472cdd1-4fc4-43b7-8bca-88fa70c43351",
        name: "Luis Swaniawski PhD",
      },
      description: "harum",
      taxRateRef: {
        effectiveTaxRate: 5331.06,
        id: "f7f75f4f-23f1-4c0a-986c-3ae7d7b67fee",
        name: "Mrs. Floyd Torphy",
      },
      unitPrice: 8642.28,
    },
    code: "perspiciatis",
    id: "5b1dbece-ff7c-44b1-96e9-278275eea768",
    invoiceItem: {
      accountRef: {
        id: "17468063-f799-4b79-96c0-b0fa0bb20a40",
        name: "Roland Ryan",
      },
      description: "accusamus",
      taxRateRef: {
        effectiveTaxRate: 3996.96,
        id: "40642726-57b0-41a0-bc08-fd3921c25793",
        name: "Mercedes Kemmer V",
      },
      unitPrice: 2095.62,
    },
    isBillItem: false,
    isInvoiceItem: false,
    itemStatus: ItemStatusEnum.Active,
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "sequi",
    name: "Dominick Pagac",
    sourceModifiedDate: "temporibus",
    type: "adipisci",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 420757,
}).then((res: CreateItemResponse | AxiosError) => {
  if (res instanceof CreateItemResponse && res.statusCode == 200) {
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
import { ItemStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.items.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  itemId: "ea",
}).then((res: GetItemResponse | AxiosError) => {
  if (res instanceof GetItemResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateModel

Get create item model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=items) for integrations that support creating items.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateItemsModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.items.getCreateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateItemsModelResponse | AxiosError) => {
  if (res instanceof GetCreateItemsModelResponse && res.statusCode == 200) {
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
import { ItemStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.items.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "nulla",
}).then((res: ListItemsResponse | AxiosError) => {
  if (res instanceof ListItemsResponse && res.statusCode == 200) {
    // handle response
  }
});
```
