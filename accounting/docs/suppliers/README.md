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

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers) for integrations that support creating suppliers.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateSupplierRequest, CreateSupplierResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  AddressTypeEnum,
  DataTypeEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
  SupplierStatusEnum,
} from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateSupplierRequest = {
  supplier: {
    addresses: [
      {
        city: "Thousand Oaks",
        country: "Papua New Guinea",
        line1: "amet",
        line2: "tempore",
        postalCode: "81317",
        region: "adipisci",
        type: AddressTypeEnum.Unknown,
      },
    ],
    contactName: "alias",
    defaultCurrency: "occaecati",
    emailAddress: "perspiciatis",
    id: "83663c66-dcbb-47df-acb0-9c8b408e0713",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "molestiae",
    phone: "489.499.8000 x854",
    registrationNumber: "praesentium",
    sourceModifiedDate: "aperiam",
    status: SupplierStatusEnum.Archived,
    supplementalData: {
      content: {
        "doloremque": {
          "eius": "odio",
          "rerum": "provident",
          "nostrum": "perferendis",
          "aliquam": "accusantium",
        },
      },
    },
    supplierName: "possimus",
    taxNumber: "vel",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 796063,
};

sdk.suppliers.create(req).then((res: CreateSupplierResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## downloadAttachment

Download supplier attachment

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadSupplierAttachmentRequest, DownloadSupplierAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DownloadSupplierAttachmentRequest = {
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  supplierId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.suppliers.downloadAttachment(req).then((res: DownloadSupplierAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## get

Gets a single supplier corresponding to the given ID.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetSupplierRequest, GetSupplierResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressTypeEnum, SupplierStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetSupplierRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  supplierId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.suppliers.get(req).then((res: GetSupplierResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getAttachment

Get supplier attachment

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetSupplierAttachmentRequest, GetSupplierAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetSupplierAttachmentRequest = {
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  supplierId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.suppliers.getAttachment(req).then((res: GetSupplierAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { GetCreateUpdateSuppliersModelRequest, GetCreateUpdateSuppliersModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreateUpdateSuppliersModelRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.suppliers.getCreateUpdateModel(req).then((res: GetCreateUpdateSuppliersModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets the latest suppliers for a company, with pagination

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListSuppliersRequest, ListSuppliersResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressTypeEnum, SupplierStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListSuppliersRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "blanditiis",
};

sdk.suppliers.list(req).then((res: ListSuppliersResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listAttachments

Get supplier attachments

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListSupplierAttachmentsRequest, ListSupplierAttachmentsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListSupplierAttachmentsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  supplierId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.suppliers.listAttachments(req).then((res: ListSupplierAttachmentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## update

Update supplier

Required data may vary by integration. To see what data to post, first call [Get create/update supplier model](https://docs.codat.io/accounting-api#/operations/get-create-update-suppliers-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers) for integrations that support updating suppliers.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateSupplierRequest, UpdateSupplierResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  AddressTypeEnum,
  DataTypeEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
  SupplierStatusEnum,
} from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UpdateSupplierRequest = {
  supplier: {
    addresses: [
      {
        city: "Lake Gabriellashire",
        country: "Afghanistan",
        line1: "perferendis",
        line2: "aspernatur",
        postalCode: "04820",
        region: "dolore",
        type: AddressTypeEnum.Billing,
      },
      {
        city: "Mountain View",
        country: "Armenia",
        line1: "alias",
        line2: "sit",
        postalCode: "98150-1458",
        region: "quidem",
        type: AddressTypeEnum.Unknown,
      },
      {
        city: "Watersfurt",
        country: "Syrian Arab Republic",
        line1: "suscipit",
        line2: "ut",
        postalCode: "40961",
        region: "corporis",
        type: AddressTypeEnum.Unknown,
      },
    ],
    contactName: "alias",
    defaultCurrency: "ratione",
    emailAddress: "sed",
    id: "3b2c09b9-2477-41f5-a69e-5b7ec7626649",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "possimus",
    phone: "487-692-7981 x1448",
    registrationNumber: "sit",
    sourceModifiedDate: "expedita",
    status: SupplierStatusEnum.Active,
    supplementalData: {
      content: {
        "repellat": {
          "atque": "iure",
          "nulla": "aliquid",
          "asperiores": "similique",
        },
        "veniam": {
          "vel": "earum",
          "corrupti": "temporibus",
          "libero": "sapiente",
        },
        "praesentium": {
          "qui": "asperiores",
        },
      },
    },
    supplierName: "blanditiis",
    taxNumber: "nesciunt",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  supplierId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  timeoutInMinutes: 721212,
};

sdk.suppliers.update(req).then((res: UpdateSupplierResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```