# purchaseOrders

## Overview

Purchase orders

### Available Operations

* [createPurchaseOrder](#createpurchaseorder) - Create purchase order
* [getCreateUpdatePurchaseOrdersModel](#getcreateupdatepurchaseordersmodel) - Get create/update purchase order model
* [getPurchaseOrder](#getpurchaseorder) - Get purchase order
* [listPurchaseOrders](#listpurchaseorders) - List purchase orders
* [updatePurchaseOrder](#updatepurchaseorder) - Update purchase order

## createPurchaseOrder

Posts a new purchase order to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update purchase order model](https://docs.codat.io/accounting-api#/operations/get-create-update-purchaseOrders-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders) for integrations that support creating purchase orders.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreatePurchaseOrderRequest, CreatePurchaseOrderResponse } from "@codat/accounting/dist/sdk/models/operations";
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

const req: CreatePurchaseOrderRequest = {
  purchaseOrder: {
    currency: "et",
    currencyRate: 8193.41,
    deliveryDate: "unde",
    expectedDeliveryDate: "esse",
    id: "80a10c47-b950-440d-ac8b-2a5f002207e4",
    issueDate: "quae",
    lineItems: [
      {
        accountRef: {
          id: "8f90009e-d290-4278-ab4a-e9d64161e915",
          name: "Patricia Dickens",
        },
        description: "rerum",
        discountAmount: 1793.89,
        discountPercentage: 7581.19,
        itemRef: {
          id: "09b92477-1f56-469e-9b7e-c7626649d84e",
          name: "Terrence Walter",
        },
        quantity: 9525.87,
        subTotal: 8696.62,
        taxAmount: 1739.26,
        taxRateRef: {
          effectiveTaxRate: 1417.37,
          id: "76e0b88f-b87d-46fa-9b6e-8dbf812f83b1",
          name: "Matt Johnston",
        },
        totalAmount: 9738.23,
        trackingCategoryRefs: [
          {
            id: "c561929c-ca95-460a-9395-918da1d48e78",
            name: "Dale Schamberger",
          },
          {
            id: "e1143da9-308b-427a-88af-22184439b3de",
            name: "Brad Hayes",
          },
          {
            id: "cce470cd-2147-4b6e-a152-cf01d0d8c3a4",
            name: "Luther Osinski",
          },
          {
            id: "f935dfe9-74fa-44b1-a9c0-97eda623442e",
            name: "Alberta Mills",
          },
        ],
        unitAmount: 4631.93,
      },
      {
        accountRef: {
          id: "e9984c80-b479-4e89-9923-c18ca8d69c56",
          name: "Mrs. Terrance Christiansen",
        },
        description: "animi",
        discountAmount: 1643.63,
        discountPercentage: 411.11,
        itemRef: {
          id: "207e4fae-038c-4d7f-9bc2-cabaf7fc2ccb",
          name: "Jesus Reinger",
        },
        quantity: 461.14,
        subTotal: 8366.2,
        taxAmount: 9710.36,
        taxRateRef: {
          effectiveTaxRate: 3915.17,
          id: "8eaedb2e-e70b-4e06-9fb3-6add704080e0",
          name: "Leonard Wiegand",
        },
        totalAmount: 2204.14,
        trackingCategoryRefs: [
          {
            id: "5a034b11-4992-443a-ba69-87a472b709a1",
            name: "Tracy Thiel",
          },
          {
            id: "30106853-9ce0-4932-910a-cd15d8cc306b",
            name: "Irma Huels",
          },
          {
            id: "d37bd204-a1f3-440b-b36f-677a48519c33",
            name: "Mr. Eva Marvin",
          },
        ],
        unitAmount: 3069.7,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "deleniti",
    note: "quos",
    paymentDueDate: "qui",
    purchaseOrderNumber: "ex",
    shipTo: {
      address: {
        city: "Rauton",
        country: "Denmark",
        line1: "porro",
        line2: "nihil",
        postalCode: "81138-2454",
        region: "architecto",
        type: AddressTypeEnum.Billing,
      },
      contact: {
        email: "Karelle.Treutel18@yahoo.com",
        name: "Roy Simonis",
        phone: "403.667.1809 x09357",
      },
    },
    sourceModifiedDate: "adipisci",
    status: PurchaseOrderStatusEnum.Closed,
    subTotal: 5198.96,
    supplierRef: {
      id: "7b47040d-0d98-4e9d-82c5-e306f5576f5c",
      supplierName: "quibusdam",
    },
    totalAmount: 9167.97,
    totalDiscount: 7367.93,
    totalTaxAmount: 57.18,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 178911,
};

sdk.purchaseOrders.createPurchaseOrder(req).then((res: CreatePurchaseOrderResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateUpdatePurchaseOrdersModel

Get create/update purchase order model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders) for integrations that support creating and updating purchase orders.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import {
  GetCreateUpdatePurchaseOrdersModelRequest,
  GetCreateUpdatePurchaseOrdersModelResponse,
} from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreateUpdatePurchaseOrdersModelRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.purchaseOrders.getCreateUpdatePurchaseOrdersModel(req).then((res: GetCreateUpdatePurchaseOrdersModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getPurchaseOrder

Get purchase order

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetPurchaseOrderRequest, GetPurchaseOrderResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressTypeEnum, PurchaseOrderStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetPurchaseOrderRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  purchaseOrderId: "totam",
};

sdk.purchaseOrders.getPurchaseOrder(req).then((res: GetPurchaseOrderResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listPurchaseOrders

Get purchase orders

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListPurchaseOrdersRequest, ListPurchaseOrdersResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressTypeEnum, PurchaseOrderStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListPurchaseOrdersRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "ea",
};

sdk.purchaseOrders.listPurchaseOrders(req).then((res: ListPurchaseOrdersResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updatePurchaseOrder

Posts an updated purchase order to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call []().

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders) for integrations that support updating purchase orders.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdatePurchaseOrderRequest, UpdatePurchaseOrderResponse } from "@codat/accounting/dist/sdk/models/operations";
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

const req: UpdatePurchaseOrderRequest = {
  purchaseOrder: {
    currency: "pariatur",
    currencyRate: 27.26,
    deliveryDate: "distinctio",
    expectedDeliveryDate: "maxime",
    id: "43b18ab3-78f2-4fcf-b81d-df7e088f74ef",
    issueDate: "quis",
    lineItems: [
      {
        accountRef: {
          id: "c9216e89-2631-43bb-afc2-c8d2701096b6",
          name: "Genevieve Steuber",
        },
        description: "amet",
        discountAmount: 9260.74,
        discountPercentage: 963.03,
        itemRef: {
          id: "d9d3b660-334a-411a-a1d5-d2247de9b3d4",
          name: "Dr. Frances Kutch",
        },
        quantity: 4290.14,
        subTotal: 5505.38,
        taxAmount: 6701.68,
        taxRateRef: {
          effectiveTaxRate: 5968.46,
          id: "6bb39878-8398-4eba-9bbf-7143356f6349",
          name: "Keith Hoeger",
        },
        totalAmount: 2761.09,
        trackingCategoryRefs: [
          {
            id: "b211ce46-b951-4652-b158-ca9142f05263",
            name: "Miss Opal Dickinson",
          },
          {
            id: "d692ffc8-7450-405e-9d3d-934e036f5c38",
            name: "Brett Hudson",
          },
          {
            id: "6985530a-2e2a-4ed6-aaf8-63c28d040c69",
            name: "Marvin Stracke III",
          },
        ],
        unitAmount: 9418.45,
      },
      {
        accountRef: {
          id: "6ebd5ad7-ec73-494f-a5f6-34b3730714e6",
          name: "Clay Lockman",
        },
        description: "debitis",
        discountAmount: 63.56,
        discountPercentage: 5959.44,
        itemRef: {
          id: "c64d342a-c299-4a6e-9e7a-ef13402e945f",
          name: "Cindy Koepp",
        },
        quantity: 9094.5,
        subTotal: 9428.69,
        taxAmount: 8126.55,
        taxRateRef: {
          effectiveTaxRate: 9230.35,
          id: "1198221f-9b1f-47d9-affe-69682aceefb0",
          name: "Lela Lemke",
        },
        totalAmount: 750.04,
        trackingCategoryRefs: [
          {
            id: "caabea70-8ed5-4798-9385-d460599d5c33",
            name: "Shelly Hickle",
          },
        ],
        unitAmount: 8165.54,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "minima",
    note: "ullam",
    paymentDueDate: "dolores",
    purchaseOrderNumber: "accusantium",
    shipTo: {
      address: {
        city: "Torphystead",
        country: "Oman",
        line1: "eos",
        line2: "qui",
        postalCode: "27384",
        region: "nisi",
        type: AddressTypeEnum.Unknown,
      },
      contact: {
        email: "Jordyn_Hyatt62@yahoo.com",
        name: "Vernon Will",
        phone: "359.660.2503 x4591",
      },
    },
    sourceModifiedDate: "dolor",
    status: PurchaseOrderStatusEnum.Closed,
    subTotal: 4172.21,
    supplierRef: {
      id: "86d839fc-9e17-45ff-a906-ae559b72eb67",
      supplierName: "magnam",
    },
    totalAmount: 4246.29,
    totalDiscount: 361.86,
    totalTaxAmount: 2316.09,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  purchaseOrderId: "sit",
  timeoutInMinutes: 987456,
};

sdk.purchaseOrders.updatePurchaseOrder(req).then((res: UpdatePurchaseOrderResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
