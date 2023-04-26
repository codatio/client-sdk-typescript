# suppliers

## Overview

Suppliers

### Available Operations

* [createSupplier](#createsupplier) - Create suppliers
* [downloadSupplierAttachment](#downloadsupplierattachment) - Download supplier attachment
* [getCreateUpdateSuppliersModel](#getcreateupdatesuppliersmodel) - Get create/update supplier model
* [getSupplier](#getsupplier) - Get supplier
* [getSupplierAttachment](#getsupplierattachment) - Get supplier attachment
* [listSupplierAttachments](#listsupplierattachments) - List supplier attachments
* [listSuppliers](#listsuppliers) - List suppliers
* [putSupplier](#putsupplier) - Update supplier

## createSupplier

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
        city: "South Gavin",
        country: "Saint Lucia",
        line1: "explicabo",
        line2: "expedita",
        postalCode: "89844-4509",
        region: "temporibus",
        type: AddressTypeEnum.Unknown,
      },
      {
        city: "Blockview",
        country: "Oman",
        line1: "molestiae",
        line2: "harum",
        postalCode: "24520-2256",
        region: "repellat",
        type: AddressTypeEnum.Billing,
      },
      {
        city: "Jeniferton",
        country: "Ukraine",
        line1: "earum",
        line2: "ipsa",
        postalCode: "50506",
        region: "dolores",
        type: AddressTypeEnum.Delivery,
      },
    ],
    contactName: "culpa",
    defaultCurrency: "fugit",
    emailAddress: "nemo",
    id: "ee6c75af-8a60-4a7a-a346-e0979e5afe60",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "culpa",
    phone: "776-533-8955 x34331",
    registrationNumber: "deserunt",
    sourceModifiedDate: "iste",
    status: SupplierStatusEnum.Archived,
    supplementalData: {
      content: {
        "eveniet": {
          "quae": "voluptates",
          "impedit": "sunt",
        },
        "optio": {
          "occaecati": "officia",
          "consectetur": "excepturi",
        },
        "fuga": {
          "ipsam": "fuga",
          "magnam": "assumenda",
          "nemo": "id",
          "laboriosam": "nostrum",
        },
        "expedita": {
          "fugiat": "exercitationem",
          "veniam": "ea",
        },
      },
    },
    supplierName: "aspernatur",
    taxNumber: "assumenda",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 587240,
};

sdk.suppliers.createSupplier(req).then((res: CreateSupplierResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## downloadSupplierAttachment

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

sdk.suppliers.downloadSupplierAttachment(req).then((res: DownloadSupplierAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateUpdateSuppliersModel

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

sdk.suppliers.getCreateUpdateSuppliersModel(req).then((res: GetCreateUpdateSuppliersModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getSupplier

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

sdk.suppliers.getSupplier(req).then((res: GetSupplierResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getSupplierAttachment

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

sdk.suppliers.getSupplierAttachment(req).then((res: GetSupplierAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listSupplierAttachments

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

sdk.suppliers.listSupplierAttachments(req).then((res: ListSupplierAttachmentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listSuppliers

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
  query: "expedita",
};

sdk.suppliers.listSuppliers(req).then((res: ListSuppliersResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## putSupplier

Push supplier

Required data may vary by integration. To see what data to post, first call [Get create/update supplier model](https://docs.codat.io/accounting-api#/operations/get-create-update-suppliers-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers) for integrations that support updating suppliers.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { PutSupplierRequest, PutSupplierResponse } from "@codat/accounting/dist/sdk/models/operations";
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

const req: PutSupplierRequest = {
  supplier: {
    addresses: [
      {
        city: "Missoula",
        country: "Tuvalu",
        line1: "eos",
        line2: "facere",
        postalCode: "97933",
        region: "esse",
        type: AddressTypeEnum.Billing,
      },
      {
        city: "New Sabrynachester",
        country: "Malta",
        line1: "quam",
        line2: "ad",
        postalCode: "16550-1516",
        region: "enim",
        type: AddressTypeEnum.Unknown,
      },
    ],
    contactName: "delectus",
    defaultCurrency: "magnam",
    emailAddress: "illo",
    id: "cf6796ed-3d72-44c1-8f58-1e98cce3f716",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "aliquid",
    phone: "286-282-6630",
    registrationNumber: "optio",
    sourceModifiedDate: "ex",
    status: SupplierStatusEnum.Archived,
    supplementalData: {
      content: {
        "alias": {
          "assumenda": "totam",
          "minima": "explicabo",
          "soluta": "ad",
        },
        "adipisci": {
          "nesciunt": "eos",
          "placeat": "blanditiis",
          "cumque": "dignissimos",
        },
        "placeat": {
          "eligendi": "esse",
        },
        "quasi": {
          "accusamus": "inventore",
        },
      },
    },
    supplierName: "voluptas",
    taxNumber: "molestiae",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  supplierId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  timeoutInMinutes: 219664,
};

sdk.suppliers.putSupplier(req).then((res: PutSupplierResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
