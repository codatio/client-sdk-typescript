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
        city: "Kirkland",
        country: "Netherlands",
        line1: "doloremque",
        line2: "autem",
        postalCode: "25088",
        region: "laudantium",
        type: AddressType.Delivery,
      },
      {
        city: "Ankundingfort",
        country: "Kyrgyz Republic",
        line1: "repellendus",
        line2: "beatae",
        postalCode: "42514",
        region: "facilis",
        type: AddressType.Unknown,
      },
    ],
    contactName: "cumque",
    defaultCurrency: "doloribus",
    emailAddress: "minima",
    id: "e6cb6eba-be5e-40b9-9f3b-1358d6a87bb7",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "est",
    phone: "1-869-446-8407 x70355",
    registrationNumber: "sit",
    sourceModifiedDate: "dignissimos",
    status: SupplierStatus.Archived,
    supplementalData: {
      content: {
        "praesentium": {
          "incidunt": "incidunt",
          "vitae": "incidunt",
          "nostrum": "explicabo",
        },
        "culpa": {
          "voluptatibus": "ipsa",
          "quasi": "sapiente",
          "dolorem": "quaerat",
        },
        "incidunt": {
          "cumque": "vel",
        },
      },
    },
    supplierName: "inventore",
    taxNumber: "quidem",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 894398,
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
  supplierId: "quae",
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
  supplierId: "ipsum",
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
  supplierId: "nesciunt",
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
  query: "distinctio",
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
  supplierId: "dolorum",
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
        city: "The Hammocks",
        country: "Guinea",
        line1: "neque",
        line2: "eos",
        postalCode: "43139-5315",
        region: "corporis",
        type: AddressType.Unknown,
      },
      {
        city: "Towson",
        country: "Christmas Island",
        line1: "laudantium",
        line2: "enim",
        postalCode: "88211-1109",
        region: "earum",
        type: AddressType.Billing,
      },
      {
        city: "South Electa",
        country: "Saint Lucia",
        line1: "numquam",
        line2: "quae",
        postalCode: "19763-8760",
        region: "eum",
        type: AddressType.Billing,
      },
      {
        city: "Littlehaven",
        country: "Cambodia",
        line1: "cupiditate",
        line2: "dicta",
        postalCode: "97500-6166",
        region: "atque",
        type: AddressType.Billing,
      },
    ],
    contactName: "aliquam",
    defaultCurrency: "perspiciatis",
    emailAddress: "labore",
    id: "79edd4fc-f7b5-40cf-87f0-8f39271076a2",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "dolore",
    phone: "407.690.5799 x0051",
    registrationNumber: "saepe",
    sourceModifiedDate: "laudantium",
    status: SupplierStatus.Active,
    supplementalData: {
      content: {
        "blanditiis": {
          "occaecati": "natus",
          "voluptas": "optio",
        },
        "totam": {
          "odit": "eos",
          "libero": "eveniet",
          "aut": "similique",
          "ipsum": "maxime",
        },
        "tenetur": {
          "voluptate": "blanditiis",
          "sint": "dolorem",
        },
        "soluta": {
          "fugit": "neque",
          "asperiores": "corrupti",
          "autem": "autem",
          "alias": "eaque",
        },
      },
    },
    supplierName: "minus",
    taxNumber: "commodi",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  supplierId: "inventore",
  timeoutInMinutes: 784398,
}).then((res: UpdateSupplierResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
