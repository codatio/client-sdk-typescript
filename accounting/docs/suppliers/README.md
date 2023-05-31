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
        city: "Madelynnberg",
        country: "Denmark",
        line1: "culpa",
        line2: "corrupti",
        postalCode: "77168",
        region: "voluptatibus",
        type: AddressType.Billing,
      },
      {
        city: "East Isabella",
        country: "British Indian Ocean Territory (Chagos Archipelago)",
        line1: "est",
        line2: "consequatur",
        postalCode: "32501",
        region: "incidunt",
        type: AddressType.Delivery,
      },
      {
        city: "Arlington",
        country: "Mongolia",
        line1: "assumenda",
        line2: "alias",
        postalCode: "74089-9599",
        region: "aut",
        type: AddressType.Delivery,
      },
    ],
    contactName: "eaque",
    defaultCurrency: "officiis",
    emailAddress: "tempora",
    id: "6f225e29-d79d-439d-8790-e2e6014a33d9",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "iusto",
    phone: "717-420-7972",
    registrationNumber: "doloremque",
    sourceModifiedDate: "necessitatibus",
    status: SupplierStatus.Archived,
    supplementalData: {
      content: {
        "dolor": {
          "rem": "eveniet",
          "veniam": "vero",
          "dolor": "occaecati",
          "explicabo": "delectus",
        },
        "fugit": {
          "dolorum": "voluptate",
        },
        "ducimus": {
          "rerum": "iusto",
          "deserunt": "asperiores",
          "ab": "tempore",
          "suscipit": "neque",
        },
      },
    },
    supplierName: "eveniet",
    taxNumber: "placeat",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 867440,
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
  supplierId: "8a210b68-6988-11ed-a1eb-0242ac120002",
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
  supplierId: "8a210b68-6988-11ed-a1eb-0242ac120002",
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
  supplierId: "8a210b68-6988-11ed-a1eb-0242ac120002",
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
  query: "officiis",
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
  supplierId: "8a210b68-6988-11ed-a1eb-0242ac120002",
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
        city: "Alyceworth",
        country: "Peru",
        line1: "deleniti",
        line2: "consequatur",
        postalCode: "03324-7318",
        region: "ut",
        type: AddressType.Unknown,
      },
    ],
    contactName: "ipsam",
    defaultCurrency: "occaecati",
    emailAddress: "error",
    id: "55c5c717-6045-497f-b771-9dd8c8482c02",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "aliquid",
    phone: "(851) 827-5759 x560",
    registrationNumber: "deserunt",
    sourceModifiedDate: "impedit",
    status: SupplierStatus.Unknown,
    supplementalData: {
      content: {
        "perferendis": {
          "illum": "aspernatur",
          "officia": "cumque",
        },
        "eveniet": {
          "aut": "minus",
          "temporibus": "repudiandae",
          "perferendis": "aperiam",
        },
        "itaque": {
          "necessitatibus": "quisquam",
          "delectus": "blanditiis",
          "inventore": "quos",
        },
        "culpa": {
          "amet": "consequatur",
          "dolor": "saepe",
          "sint": "dolorem",
        },
      },
    },
    supplierName: "doloribus",
    taxNumber: "sit",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  supplierId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  timeoutInMinutes: 40967,
}).then((res: UpdateSupplierResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
