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
    currency: "occaecati",
    currencyRate: 5196.11,
    deliveryDate: "in",
    expectedDeliveryDate: "est",
    id: "472b709a-153e-4223-8106-8539ce0932d1",
    issueDate: "aperiam",
    lineItems: [
      {
        accountRef: {
          id: "cd15d8cc-306b-4786-b3d3-7bd204a1f340",
          name: "Jean Fahey",
        },
        description: "voluptas",
        discountAmount: 4441.02,
        discountPercentage: 4856.38,
        itemRef: {
          id: "a48519c3-3749-4028-8882-6bb03c7fd225",
          name: "Micheal King",
        },
        quantity: 1000.75,
        subTotal: 6359.09,
        taxAmount: 5010.45,
        taxRateRef: {
          effectiveTaxRate: 5418.34,
          id: "ed72a2d4-af41-458a-82d0-f0f58c3b87b4",
          name: "Dr. Jessica Goldner PhD",
        },
        totalAmount: 5697.11,
        trackingCategoryRefs: [
          {
            id: "e9d82c5e-306f-4557-af5c-deb0286d0bc4",
            name: "Maryann Boehm",
          },
          {
            id: "b378f2fc-ff81-4ddf-be08-8f74ef54c921",
            name: "Meghan Lindgren",
          },
          {
            id: "6313bb6f-c2c8-4d27-8109-6b66ad6e3e1d",
            name: "Nicolas Emmerich",
          },
        ],
        unitAmount: 3972.04,
      },
      {
        accountRef: {
          id: "0334a11a-a1d5-4d22-87de-9b3d46170e76",
          name: "Cameron Metz",
        },
        description: "facilis",
        discountAmount: 1958.51,
        discountPercentage: 6132.25,
        itemRef: {
          id: "8788398e-ba1b-4bf7-9433-56f6349a1642",
          name: "Shelly Quitzon Sr.",
        },
        quantity: 7569.85,
        subTotal: 9251.22,
        taxAmount: 3035.46,
        taxRateRef: {
          effectiveTaxRate: 4049.25,
          id: "b951652b-158c-4a91-82f0-52632b31cad6",
          name: "Wayne Wilkinson",
        },
        totalAmount: 5042.69,
        trackingCategoryRefs: [
          {
            id: "45005e9d-3d93-44e0-b6f5-c388664f6985",
            name: "Tracy Bahringer",
          },
          {
            id: "e2aed6aa-f863-4c28-9040-c69a3d906f6e",
            name: "Josh Heathcote",
          },
        ],
        unitAmount: 4666.58,
      },
      {
        accountRef: {
          id: "ec7394f2-5f63-44b3-b307-14e6be8c3e09",
          name: "Cecil Hahn",
        },
        description: "aliquam",
        discountAmount: 1723.11,
        discountPercentage: 6784.76,
        itemRef: {
          id: "c299a6e5-e7ae-4f13-802e-945f53743efd",
          name: "Ryan Berge",
        },
        quantity: 1577.51,
        subTotal: 1756.68,
        taxAmount: 716.71,
        taxRateRef: {
          effectiveTaxRate: 9955.38,
          id: "9b1f7d9a-ffe6-4968-aace-efb04f8c512c",
          name: "Orlando Reilly",
        },
        totalAmount: 4577.97,
        trackingCategoryRefs: [
          {
            id: "8ed5798d-385d-4460-999d-5c3349576d55",
            name: "Ruth Muller",
          },
        ],
        unitAmount: 6702.81,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "eos",
    note: "qui",
    paymentDueDate: "corporis",
    purchaseOrderNumber: "neque",
    shipTo: {
      address: {
        city: "Jacobifield",
        country: "Kyrgyz Republic",
        line1: "nisi",
        line2: "veniam",
        postalCode: "53896-8398",
        region: "dolore",
        type: AddressType.Delivery,
      },
      contact: {
        email: "Lauren_Wolf@gmail.com",
        name: "Mrs. Esther Medhurst",
        phone: "912-845-3852 x6975",
      },
    },
    sourceModifiedDate: "saepe",
    status: PurchaseOrderStatus.Unknown,
    subTotal: 4594.79,
    supplierRef: {
      id: "5ffa906a-e559-4b72-ab67-46030fe18376",
      supplierName: "eligendi",
    },
    totalAmount: 1311.2,
    totalDiscount: 7109.21,
    totalTaxAmount: 9353.25,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 870347,
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
  purchaseOrderId: "eveniet",
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
  query: "vero",
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
    currency: "iure",
    currencyRate: 4003.93,
    deliveryDate: "dignissimos",
    expectedDeliveryDate: "perspiciatis",
    id: "0ed0c16a-7ba4-4784-8448-9f6770ef0480",
    issueDate: "occaecati",
    lineItems: [
      {
        accountRef: {
          id: "a2ba25ee-6c75-4af8-a60a-7ae346e0979e",
          name: "Blanche Will",
        },
        description: "consequatur",
        discountAmount: 6343.86,
        discountPercentage: 7740.9,
        itemRef: {
          id: "aca645de-9867-4551-a9cc-e61ec2c79a39",
          name: "Stewart Hintz",
        },
        quantity: 8250.33,
        subTotal: 3666.61,
        taxAmount: 6621.26,
        taxRateRef: {
          effectiveTaxRate: 3870.84,
          id: "5b4d5562-d9b7-4d9e-ad6f-cf557629db87",
          name: "Adrienne Donnelly",
        },
        totalAmount: 5958.7,
        trackingCategoryRefs: [
          {
            id: "282a51f4-1cf6-4796-ad3d-724c18f581e9",
            name: "Lowell Schimmel",
          },
        ],
        unitAmount: 9716.2,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "esse",
    note: "sunt",
    paymentDueDate: "autem",
    purchaseOrderNumber: "aliquid",
    shipTo: {
      address: {
        city: "North Retafurt",
        country: "Argentina",
        line1: "officiis",
        line2: "dolor",
        postalCode: "63074-9905",
        region: "assumenda",
        type: AddressType.Billing,
      },
      contact: {
        email: "Brandt23@gmail.com",
        name: "Danny Daugherty",
        phone: "581-840-0803 x42850",
      },
    },
    sourceModifiedDate: "nostrum",
    status: PurchaseOrderStatus.Closed,
    subTotal: 7098.7,
    supplierRef: {
      id: "4bedef3c-127c-4390-9955-28250dcbbcd3",
      supplierName: "facilis",
    },
    totalAmount: 1020.04,
    totalDiscount: 1677.86,
    totalTaxAmount: 1207.36,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  purchaseOrderId: "tempore",
  timeoutInMinutes: 539092,
}).then((res: UpdatePurchaseOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
