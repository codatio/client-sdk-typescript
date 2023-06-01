# suppliers

## Overview

Suppliers

### Available Operations

* [create](#create) - Create supplier
* [downloadAttachment](#downloadattachment) - Download supplier attachment
* [get](#get) - Get supplier
* [getAttachment](#getattachment) - Get supplier attachment
* [getCreateUpdateModel](#getcreateupdatemodel) - Get create/update supplier model
* [list](#list) - List suppliers
* [listAttachments](#listattachments) - List supplier attachments
* [update](#update) - Update supplier

## create

Push suppliers

Required data may vary by integration. To see what data to post, first call [Get create/update supplier model](https://docs.codat.io/accounting-api#/operations/get-create-update-suppliers-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers) to see which integrations support this endpoint.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateSupplierResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressType, DataType, PushChangeType, PushOperationStatus, SupplierStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.suppliers.create({
  supplier: {
    addresses: [
      {
        city: "Stephaniastead",
        country: "Swaziland",
        line1: "laudantium",
        line2: "eos",
        postalCode: "38203-9334",
        region: "aliquid",
        type: AddressType.Delivery,
      },
      {
        city: "Port Rosalinda",
        country: "Turkmenistan",
        line1: "cum",
        line2: "consequatur",
        postalCode: "54807",
        region: "maxime",
        type: AddressType.Unknown,
      },
      {
        city: "Lake Arnoldo",
        country: "Martinique",
        line1: "id",
        line2: "expedita",
        postalCode: "45919",
        region: "quisquam",
        type: AddressType.Delivery,
      },
    ],
    contactName: "maiores",
    defaultCurrency: "laudantium",
    emailAddress: "beatae",
    id: "ddf7e088-f74e-4f54-8921-6e8926313bb6",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "hic",
    phone: "375-814-0006 x46446",
    registrationNumber: "fugiat",
    sourceModifiedDate: "laboriosam",
    status: SupplierStatus.Archived,
    supplementalData: {
      content: {
        "recusandae": {
          "pariatur": "excepturi",
        },
      },
    },
    supplierName: "fugiat",
    taxNumber: "ipsum",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 730689,
}).then((res: CreateSupplierResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## downloadAttachment

Download supplier attachment

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadSupplierAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.suppliers.downloadAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  supplierId: "voluptas",
}).then((res: DownloadSupplierAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Gets a single supplier corresponding to the given ID.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetSupplierResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressType, SupplierStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.suppliers.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  supplierId: "aliquid",
}).then((res: GetSupplierResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getAttachment

﻿Get supplier attachment.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetSupplierAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.suppliers.getAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  supplierId: "perferendis",
}).then((res: GetSupplierAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateUpdateModel

Get create/update supplier model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers) for integrations that support creating and updating suppliers.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateUpdateSuppliersModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.suppliers.getCreateUpdateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateUpdateSuppliersModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets the latest suppliers for a company, with pagination

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListSuppliersResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressType, SupplierStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.suppliers.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "nesciunt",
}).then((res: ListSuppliersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listAttachments

Get supplier attachments

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListSupplierAttachmentsResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.suppliers.listAttachments({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  supplierId: "non",
}).then((res: ListSupplierAttachmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## update

Update supplier

Required data may vary by integration. To see what data to post, first call [Get create/update supplier model](https://docs.codat.io/accounting-api#/operations/get-create-update-suppliers-model).

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers) for integrations that support updating suppliers.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateSupplierResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressType, DataType, PushChangeType, PushOperationStatus, SupplierStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.suppliers.update({
  supplier: {
    addresses: [
      {
        city: "Carterland",
        country: "Northern Mariana Islands",
        line1: "id",
        line2: "ab",
        postalCode: "38112-4885",
        region: "libero",
        type: AddressType.Unknown,
      },
      {
        city: "Enterprise",
        country: "Honduras",
        line1: "quasi",
        line2: "ducimus",
        postalCode: "84456",
        region: "perspiciatis",
        type: AddressType.Billing,
      },
    ],
    contactName: "nobis",
    defaultCurrency: "facilis",
    emailAddress: "sequi",
    id: "98788398-eba1-4bbf-b143-356f6349a164",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "explicabo",
    phone: "671-217-9347 x630",
    registrationNumber: "vel",
    sourceModifiedDate: "enim",
    status: SupplierStatus.Unknown,
    supplementalData: {
      content: {
        "beatae": {
          "atque": "optio",
          "culpa": "excepturi",
        },
        "et": {
          "odit": "reiciendis",
          "voluptatem": "veniam",
        },
        "consequuntur": {
          "dolor": "quia",
          "harum": "sequi",
        },
      },
    },
    supplierName: "quae",
    taxNumber: "porro",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  supplierId: "harum",
  timeoutInMinutes: 868742,
}).then((res: UpdateSupplierResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
