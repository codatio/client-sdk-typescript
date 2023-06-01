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
    currency: "accusamus",
    currencyRate: 2806.9,
    deliveryDate: "quae",
    expectedDeliveryDate: "dolore",
    id: "8f90009e-d290-4278-ab4a-e9d64161e915",
    issueDate: "quae",
    lineItems: [
      {
        accountRef: {
          id: "323b2c09-b924-4771-b566-9e5b7ec76266",
          name: "Sherri Schuster",
        },
        description: "necessitatibus",
        discountAmount: 7309.44,
        discountPercentage: 5923.78,
        itemRef: {
          id: "e4cfd227-6e0b-488f-b87d-6fa5b6e8dbf8",
          name: "Phyllis Zboncak",
        },
        quantity: 7212.12,
        subTotal: 809.04,
        taxAmount: 7530.97,
        taxRateRef: {
          effectiveTaxRate: 6568.11,
          id: "6a9ffc56-1929-4cca-9560-a1395918da1d",
          name: "Penny Walsh",
        },
        totalAmount: 8885.45,
        trackingCategoryRefs: [
          {
            id: "cf8e1143-da93-408b-a7a0-8af22184439b",
            name: "Desiree Walsh",
          },
        ],
        unitAmount: 3395.66,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "eum",
    note: "eligendi",
    paymentDueDate: "quisquam",
    purchaseOrderNumber: "optio",
    shipTo: {
      address: {
        city: "El Paso",
        country: "Lesotho",
        line1: "accusantium",
        line2: "impedit",
        postalCode: "10246-4931",
        region: "ipsam",
        type: AddressType.Unknown,
      },
      contact: {
        email: "Wendell84@hotmail.com",
        name: "Cristina Lemke",
        phone: "1-476-736-9523 x8985",
      },
    },
    sourceModifiedDate: "iure",
    status: PurchaseOrderStatus.Draft,
    subTotal: 9973.37,
    supplierRef: {
      id: "a4b1e9c0-97ed-4a62-b442-e1a9237e9984",
      supplierName: "porro",
    },
    totalAmount: 5572.49,
    totalDiscount: 62.92,
    totalTaxAmount: 7081.21,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 281064,
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
  purchaseOrderId: "nihil",
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
  query: "sint",
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
    currency: "saepe",
    currencyRate: 5389,
    deliveryDate: "excepturi",
    expectedDeliveryDate: "architecto",
    id: "923c18ca-8d69-4c56-8921-4fa20207e4fa",
    issueDate: "saepe",
    lineItems: [
      {
        accountRef: {
          id: "38cd7f1b-c2ca-4baf-bfc2-ccba4bef0df6",
          name: "Darin O'Hara",
        },
        description: "facilis",
        discountAmount: 1625.48,
        discountPercentage: 9369.6,
        itemRef: {
          id: "e70be069-fb36-4add-b040-80e0a3fc73a5",
          name: "Jason Fisher",
        },
        quantity: 798.12,
        subTotal: 679.91,
        taxAmount: 2846.73,
        taxRateRef: {
          effectiveTaxRate: 5751.24,
          id: "9243afa6-987a-4472-b709-a153e2230106",
          name: "Tommy Emard",
        },
        totalAmount: 9037.93,
        trackingCategoryRefs: [
          {
            id: "932d10ac-d15d-48cc-b06b-786b3d37bd20",
            name: "Harriet Berge",
          },
        ],
        unitAmount: 2936.48,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "accusantium",
    note: "nam",
    paymentDueDate: "rerum",
    purchaseOrderNumber: "dolor",
    shipTo: {
      address: {
        city: "Wavabury",
        country: "Jersey",
        line1: "odio",
        line2: "dolorum",
        postalCode: "53057",
        region: "dolor",
        type: AddressType.Unknown,
      },
      contact: {
        email: "Duncan13@yahoo.com",
        name: "Tom Lind",
        phone: "1-770-374-9811 x382",
      },
    },
    sourceModifiedDate: "in",
    status: PurchaseOrderStatus.Open,
    subTotal: 4798.4,
    supplierRef: {
      id: "1a88ed72-a2d4-4af4-958a-c2d0f0f58c3b",
      supplierName: "totam",
    },
    totalAmount: 4462.83,
    totalDiscount: 7360.32,
    totalTaxAmount: 2850.04,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  purchaseOrderId: "molestiae",
  timeoutInMinutes: 50921,
}).then((res: UpdatePurchaseOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
