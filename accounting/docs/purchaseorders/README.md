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

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders) to see which integrations support this endpoint.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreatePurchaseOrderResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressType, DataType, PurchaseOrderStatus, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.purchaseOrders.create({
  purchaseOrder: {
    currency: "amet",
    currencyRate: 256.85,
    deliveryDate: "quos",
    expectedDeliveryDate: "voluptas",
    id: "c10a856a-19d4-4665-ba97-259875dc0cec",
    issueDate: "facilis",
    lineItems: [
      {
        accountRef: {
          id: "78bd248e-c6e8-4b24-8b1c-06c9c0649d2b",
          name: "Laurence Mraz",
        },
        description: "deleniti",
        discountAmount: 8562.89,
        discountPercentage: 8359.95,
        itemRef: {
          id: "b1665c31-2c7f-4550-9472-1c176292dd78",
          name: "Mattie Treutel DDS",
        },
        quantity: 9633.21,
        subTotal: 5503.18,
        taxAmount: 7788.66,
        taxRateRef: {
          effectiveTaxRate: 1193.26,
          id: "41841fe1-f87e-4a10-ba98-06ea1606399e",
          name: "Jack Kris",
        },
        totalAmount: 1221.4,
        trackingCategoryRefs: [
          {
            id: "58d4ab5b-c80d-4ea7-bfd9-931ec9d106cf",
            name: "Bobby Schiller",
          },
          {
            id: "ab840a28-ea06-472d-ab73-a34ca434cdb3",
            name: "Rhonda Medhurst V",
          },
        ],
        unitAmount: 9691.25,
      },
      {
        accountRef: {
          id: "252078a1-8a4b-40da-ad4b-5cf0616ee922",
          name: "Samantha Kuhic",
        },
        description: "nulla",
        discountAmount: 4354.13,
        discountPercentage: 416.21,
        itemRef: {
          id: "daa0e149-cd1c-4cdd-b62b-bf92390015f2",
          name: "Cassandra Mann",
        },
        quantity: 9894.06,
        subTotal: 2550.98,
        taxAmount: 9668.03,
        taxRateRef: {
          effectiveTaxRate: 9639.86,
          id: "eb9bec50-318a-481e-b01d-297f7b456a85",
          name: "Ms. Casey Heathcote",
        },
        totalAmount: 8073.54,
        trackingCategoryRefs: [
          {
            id: "a326341a-cccc-4a66-bd4a-8595c1b32bb2",
            name: "Edith VonRueden",
          },
          {
            id: "31cd6a5b-e749-406b-96c6-36e74d28a481",
            name: "Miss Velma Murphy",
          },
          {
            id: "41198640-5876-4b30-8711-3de4061082d0",
            name: "Zachary Effertz",
          },
        ],
        unitAmount: 5757.79,
      },
      {
        accountRef: {
          id: "cd927a5b-a551-41bb-8370-d9784fb14647",
          name: "Emily Brakus",
        },
        description: "minima",
        discountAmount: 7006.85,
        discountPercentage: 9129.06,
        itemRef: {
          id: "61b3f371-7287-44c3-b7c8-d439ec6bd2ca",
          name: "John Beatty",
        },
        quantity: 4610.28,
        subTotal: 4580.46,
        taxAmount: 7955.57,
        taxRateRef: {
          effectiveTaxRate: 4356.49,
          id: "ebbbc9e9-744c-45b6-85a4-af2fcabccbca",
          name: "Denise Marks",
        },
        totalAmount: 8858.4,
        trackingCategoryRefs: [
          {
            id: "06a6cabe-22a1-41f7-ba75-d8ff4452bed7",
            name: "Dora Ankunding",
          },
          {
            id: "48c282b8-716c-427f-ab17-5780304c40ac",
            name: "Lula Gulgowski",
          },
          {
            id: "8254fde3-7724-4350-ad85-a7f8cc2911a6",
            name: "Cory Toy",
          },
        ],
        unitAmount: 7840.43,
      },
      {
        accountRef: {
          id: "6009f01d-d385-423c-9a4e-bb9fd83f83df",
          name: "Abraham Anderson",
        },
        description: "vel",
        discountAmount: 6843.48,
        discountPercentage: 534.75,
        itemRef: {
          id: "94e2e9c2-205d-4fe7-a5bf-fbcb86015f21",
          name: "Mrs. Genevieve Pfannerstill IV",
        },
        quantity: 99.38,
        subTotal: 4855.86,
        taxAmount: 9424.35,
        taxRateRef: {
          effectiveTaxRate: 6764.72,
          id: "7398247a-8721-47fe-9962-df3eee7c385c",
          name: "Dr. Ada King MD",
        },
        totalAmount: 1095.45,
        trackingCategoryRefs: [
          {
            id: "8dbcf6e1-9b90-412c-844e-231ba147727d",
            name: "Nick Hermann",
          },
          {
            id: "2adabf68-00b0-41bc-bc03-2f2c19dbf711",
            name: "Kristi Mann",
          },
          {
            id: "f21523e3-7136-4521-ba6e-596aa41b9e20",
            name: "Edna O'Reilly",
          },
        ],
        unitAmount: 8049.73,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "nesciunt",
    note: "ab",
    paymentDueDate: "ullam",
    purchaseOrderNumber: "consectetur",
    shipTo: {
      address: {
        city: "West Melvinaborough",
        country: "Turkey",
        line1: "eaque",
        line2: "dolores",
        postalCode: "62413",
        region: "assumenda",
        type: AddressType.Billing,
      },
      contact: {
        email: "Bo_Ernser@yahoo.com",
        name: "Lucas Ward",
        phone: "(360) 661-7480 x44002",
      },
    },
    sourceModifiedDate: "sequi",
    status: PurchaseOrderStatus.Closed,
    subTotal: 4563.81,
    supplierRef: {
      id: "99a2a18d-b129-4dc5-a4ab-b7b10caf244d",
      supplierName: "itaque",
    },
    totalAmount: 1039.82,
    totalDiscount: 522.31,
    totalTaxAmount: 2042.81,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 861729,
}).then((res: CreatePurchaseOrderResponse) => {
  if (res.statusCode == 200) {
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
import { AddressType, PurchaseOrderStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.purchaseOrders.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  purchaseOrderId: "consequatur",
}).then((res: GetPurchaseOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateUpdateModel

Get create/update purchase order model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders) for integrations that support creating and updating purchase orders.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateUpdatePurchaseOrdersModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.purchaseOrders.getCreateUpdateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateUpdatePurchaseOrdersModelResponse) => {
  if (res.statusCode == 200) {
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
import { AddressType, PurchaseOrderStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.purchaseOrders.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "quos",
}).then((res: ListPurchaseOrdersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## update

Posts an updated purchase order to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call []().

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders) for integrations that support updating purchase orders.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdatePurchaseOrderResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressType, DataType, PurchaseOrderStatus, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.purchaseOrders.update({
  purchaseOrder: {
    currency: "ratione",
    currencyRate: 313.23,
    deliveryDate: "id",
    expectedDeliveryDate: "eligendi",
    id: "4d070c4e-396e-4562-85cc-b16373314dad",
    issueDate: "minima",
    lineItems: [
      {
        accountRef: {
          id: "b890542e-5a55-4a10-bd8a-c0f482f9e9a5",
          name: "Mrs. Marianne Dibbert",
        },
        description: "dolorum",
        discountAmount: 8885.29,
        discountPercentage: 1224.04,
        itemRef: {
          id: "22f0bfec-c419-432d-b04b-3ae70934d9eb",
          name: "Rick O'Reilly",
        },
        quantity: 9449.55,
        subTotal: 4261.48,
        taxAmount: 9895.04,
        taxRateRef: {
          effectiveTaxRate: 4380.7,
          id: "1b0652fe-6536-4fb3-8a41-4aa294d64c08",
          name: "Alan Torp MD",
        },
        totalAmount: 5153.47,
        trackingCategoryRefs: [
          {
            id: "7151a354-ba1a-46d7-9dc3-9917b844c850",
            name: "Brandi Moen",
          },
        ],
        unitAmount: 3811.97,
      },
      {
        accountRef: {
          id: "2f4946ca-2d72-466c-9763-812723aa03f8",
          name: "Kristi Bins PhD",
        },
        description: "quam",
        discountAmount: 6684.99,
        discountPercentage: 6945.05,
        itemRef: {
          id: "3e07c05e-13db-488f-991f-98329f91922f",
          name: "Angelica Nienow IV",
        },
        quantity: 7196.87,
        subTotal: 3786.8,
        taxAmount: 3422.36,
        taxRateRef: {
          effectiveTaxRate: 2715.17,
          id: "5000a5b3-6a22-42e3-bf77-0a2b42e5edf6",
          name: "Isabel Dare",
        },
        totalAmount: 4624.39,
        trackingCategoryRefs: [
          {
            id: "c6a710e5-4b47-4ec6-aaf9-bd8327e8f7d3",
            name: "Alma Brown",
          },
          {
            id: "ebdd822a-f2c1-4679-98a0-a46646ec658e",
            name: "Gwendolyn Bernhard",
          },
        ],
        unitAmount: 8534.49,
      },
      {
        accountRef: {
          id: "e0aee8c7-2213-4f42-9a03-38b71b3d2fd3",
          name: "Brad Farrell",
        },
        description: "accusantium",
        discountAmount: 4920.29,
        discountPercentage: 2368.27,
        itemRef: {
          id: "088e75ab-7ff2-4a12-bb07-4cd44c23c0b1",
          name: "Dr. Norma Kuvalis",
        },
        quantity: 4240.66,
        subTotal: 5411.69,
        taxAmount: 2221.75,
        taxRateRef: {
          effectiveTaxRate: 3622.4,
          id: "b93ced68-7bb4-453f-84af-461c7cb91c79",
          name: "Stuart Howe",
        },
        totalAmount: 8904.64,
        trackingCategoryRefs: [
          {
            id: "23875a4a-2e87-4d87-b51e-22e77c0e6e11",
            name: "Dave Lockman",
          },
        ],
        unitAmount: 1771.68,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "laboriosam",
    note: "pariatur",
    paymentDueDate: "minus",
    purchaseOrderNumber: "ipsam",
    shipTo: {
      address: {
        city: "Breitenbergton",
        country: "Cuba",
        line1: "voluptatem",
        line2: "suscipit",
        postalCode: "65659",
        region: "aspernatur",
        type: AddressType.Unknown,
      },
      contact: {
        email: "Grady78@hotmail.com",
        name: "Ellen Willms V",
        phone: "454.712.0503 x206",
      },
    },
    sourceModifiedDate: "dicta",
    status: PurchaseOrderStatus.Draft,
    subTotal: 4036.82,
    supplierRef: {
      id: "0070c0bc-de7e-450e-a441-101c138b4629",
      supplierName: "fugit",
    },
    totalAmount: 2485.73,
    totalDiscount: 8394.11,
    totalTaxAmount: 3242.71,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  purchaseOrderId: "sit",
  timeoutInMinutes: 985872,
}).then((res: UpdatePurchaseOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
