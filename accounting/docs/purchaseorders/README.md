# purchaseOrders

## Overview

Purchase orders

### Available Operations

* [create](#create) - Create purchase order
* [get](#get) - Get purchase order
* [getCreateUpdateModel](#getcreateupdatemodel) - Get create/update purchase order model
* [list](#list) - List purchase orders
* [update](#update) - Update purchase order

## create

Posts a new purchase order to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update purchase order model](https://docs.codat.io/accounting-api#/operations/get-create-update-purchaseOrders-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders) for integrations that support creating purchase orders.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreatePurchaseOrderResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  AddressTypeEnum,
  DataTypeEnum,
  PurchaseOrderStatusEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
} from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.purchaseOrders.create({
  purchaseOrder: {
    currency: "quo",
    currencyRate: 9804.63,
    deliveryDate: "maxime",
    expectedDeliveryDate: "suscipit",
    id: "c0e503f5-6831-4f1d-8ed8-7b28e8afabc9",
    issueDate: "laudantium",
    lineItems: [
      {
        accountRef: {
          id: "e241e43b-2342-4417-913e-3f62aa9ae4ae",
          name: "Lyle Rath",
        },
        description: "provident",
        discountAmount: 7674.79,
        discountPercentage: 2960.36,
        itemRef: {
          id: "92c5e8ba-5d4a-4a4a-908b-d380c29aa8dd",
          name: "Teresa Predovic",
        },
        quantity: 6509.18,
        subTotal: 6484.89,
        taxAmount: 2149.29,
        taxRateRef: {
          effectiveTaxRate: 623.49,
          id: "b7b91449-ae69-4c08-8d41-8bb71804f423",
          name: "Clyde Goldner",
        },
        totalAmount: 1897.28,
        trackingCategoryRefs: [
          {
            id: "f377ac5c-9b7e-493b-aa3c-523105e7c34c",
            name: "Preston Abernathy",
          },
          {
            id: "b812a661-4894-44a8-a908-5075bc253825",
            name: "Robin Goodwin",
          },
        ],
        unitAmount: 7488.6,
      },
      {
        accountRef: {
          id: "0a4e66ea-4757-48d1-b1e2-941818fc679b",
          name: "Shelley Cronin II",
        },
        description: "dolorem",
        discountAmount: 3596.63,
        discountPercentage: 6053.38,
        itemRef: {
          id: "b855d015-b62c-48b8-ba38-a8a88c144200",
          name: "Benjamin Schoen",
        },
        quantity: 7210.53,
        subTotal: 879.15,
        taxAmount: 6295.87,
        taxRateRef: {
          effectiveTaxRate: 9062.13,
          id: "1ecf8c34-946b-4ba7-a05a-8b4a9ec5b368",
          name: "Simon Rutherford",
        },
        totalAmount: 4247.55,
        trackingCategoryRefs: [
          {
            id: "272760e9-66e9-47e0-9410-3347d78ff249",
            name: "Evelyn Gutkowski",
          },
        ],
        unitAmount: 6574.81,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "soluta",
    note: "excepturi",
    paymentDueDate: "voluptates",
    purchaseOrderNumber: "veniam",
    shipTo: {
      address: {
        city: "Marcusboro",
        country: "Palestinian Territory",
        line1: "a",
        line2: "ipsum",
        postalCode: "33428",
        region: "deserunt",
        type: AddressTypeEnum.Billing,
      },
      contact: {
        email: "Maxine96@yahoo.com",
        name: "Ryan Hagenes",
        phone: "272-416-7898 x68731",
      },
    },
    sourceModifiedDate: "qui",
    status: PurchaseOrderStatusEnum.Open,
    subTotal: 5437.75,
    supplierRef: {
      id: "14eca016-bc41-4ea1-b42d-4104a25ef71d",
      supplierName: "debitis",
    },
    totalAmount: 3264.43,
    totalDiscount: 4979.58,
    totalTaxAmount: 6690.5,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 117700,
}).then((res: CreatePurchaseOrderResponse | AxiosError) => {
  if (res instanceof CreatePurchaseOrderResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## get

Get purchase order

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetPurchaseOrderResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressTypeEnum, PurchaseOrderStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.purchaseOrders.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  purchaseOrderId: "architecto",
}).then((res: GetPurchaseOrderResponse | AxiosError) => {
  if (res instanceof GetPurchaseOrderResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateUpdateModel

Get create/update purchase order model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders) for integrations that support creating and updating purchase orders.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateUpdatePurchaseOrdersModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.purchaseOrders.getCreateUpdateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateUpdatePurchaseOrdersModelResponse | AxiosError) => {
  if (res instanceof GetCreateUpdatePurchaseOrdersModelResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Get purchase orders

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListPurchaseOrdersResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressTypeEnum, PurchaseOrderStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.purchaseOrders.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "fugiat",
}).then((res: ListPurchaseOrdersResponse | AxiosError) => {
  if (res instanceof ListPurchaseOrdersResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## update

Posts an updated purchase order to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call []().

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders) for integrations that support updating purchase orders.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdatePurchaseOrderResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  AddressTypeEnum,
  DataTypeEnum,
  PurchaseOrderStatusEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
} from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.purchaseOrders.update({
  purchaseOrder: {
    currency: "eum",
    currencyRate: 1110.45,
    deliveryDate: "numquam",
    expectedDeliveryDate: "deserunt",
    id: "4317692e-a486-473d-922b-828a9030660f",
    issueDate: "doloremque",
    lineItems: [
      {
        accountRef: {
          id: "4c79b4cc-64c2-4b3a-b2c4-88ade62f6aa5",
          name: "Leona Olson",
        },
        description: "eveniet",
        discountAmount: 1787.12,
        discountPercentage: 483.47,
        itemRef: {
          id: "83016ca3-4bb8-47d4-b621-27a607d16062",
          name: "Mrs. Alex Heaney",
        },
        quantity: 2049.69,
        subTotal: 8634.15,
        taxAmount: 7188.22,
        taxRateRef: {
          effectiveTaxRate: 5826.59,
          id: "ca9f38bd-2be8-4787-8349-3f49aa8465a3",
          name: "Myrtle Feil",
        },
        totalAmount: 6184.81,
        trackingCategoryRefs: [
          {
            id: "719d1cea-673d-486e-bb35-e49a3135778c",
            name: "Derek Funk",
          },
          {
            id: "cb0e3ea9-7504-45ba-8f63-b215186ab5e3",
            name: "Robert Daugherty",
          },
          {
            id: "14315d15-6829-49e6-9afc-7186ff20b7a7",
            name: "Elena Wisoky DDS",
          },
        ],
        unitAmount: 6606.02,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "alias",
    note: "at",
    paymentDueDate: "dignissimos",
    purchaseOrderNumber: "aliquid",
    shipTo: {
      address: {
        city: "South Raheem",
        country: "Bahrain",
        line1: "ex",
        line2: "eius",
        postalCode: "77903",
        region: "veniam",
        type: AddressTypeEnum.Unknown,
      },
      contact: {
        email: "Augusta31@yahoo.com",
        name: "Heather Simonis",
        phone: "588-271-5141",
      },
    },
    sourceModifiedDate: "quidem",
    status: PurchaseOrderStatusEnum.Closed,
    subTotal: 5873.6,
    supplierRef: {
      id: "c3221697-b188-40fc-bb2b-93c15f670bd1",
      supplierName: "nihil",
    },
    totalAmount: 5049.32,
    totalDiscount: 2535.46,
    totalTaxAmount: 5040.97,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  purchaseOrderId: "sequi",
  timeoutInMinutes: 122858,
}).then((res: UpdatePurchaseOrderResponse | AxiosError) => {
  if (res instanceof UpdatePurchaseOrderResponse && res.statusCode == 200) {
    // handle response
  }
});
```
