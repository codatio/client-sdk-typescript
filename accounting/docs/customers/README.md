# customers

## Overview

Customers

### Available Operations

* [create](#create) - Create customer
* [downloadAttachment](#downloadattachment) - Download customer attachment
* [get](#get) - Get customer
* [getAttachment](#getattachment) - Get customer attachment
* [getCreateUpdateModel](#getcreateupdatemodel) - Get create/update customer model
* [list](#list) - List customers
* [listAttachments](#listattachments) - List customer attachments
* [update](#update) - Update customer

## create

﻿Posts an individual customer for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update customer model](https://docs.codat.io/accounting-api#/operations/get-create-update-customers-model).

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support creating customers.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateCustomerResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  AddressType,
  CustomerStatus,
  DataType,
  PhoneNumberType,
  PushChangeType,
  PushOperationStatus,
} from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.customers.create({
  customer: {
    addresses: [
      {
        city: "Port Clevelandtown",
        country: "Turkmenistan",
        line1: "culpa",
        line2: "at",
        postalCode: "10296",
        region: "dolore",
        type: AddressType.Unknown,
      },
      {
        city: "Abbyport",
        country: "Philippines",
        line1: "voluptatibus",
        line2: "sequi",
        postalCode: "37221",
        region: "quas",
        type: AddressType.Unknown,
      },
      {
        city: "Burdetteland",
        country: "Vietnam",
        line1: "nulla",
        line2: "libero",
        postalCode: "94593",
        region: "unde",
        type: AddressType.Unknown,
      },
      {
        city: "South Paul",
        country: "Lesotho",
        line1: "ab",
        line2: "quo",
        postalCode: "58178-2135",
        region: "temporibus",
        type: AddressType.Unknown,
      },
    ],
    contactName: "amet",
    contacts: [
      {
        address: {
          city: "Margaretestad",
          country: "Burkina Faso",
          line1: "placeat",
          line2: "rem",
          postalCode: "59914",
          region: "ullam",
          type: AddressType.Unknown,
        },
        email: "Buster49@hotmail.com",
        modifiedDate: "quod",
        name: "Marjorie Funk",
        phone: [
          {
            number: "quaerat",
            type: PhoneNumberType.Landline,
          },
        ],
        status: CustomerStatus.Archived,
      },
      {
        address: {
          city: "Howellland",
          country: "Mayotte",
          line1: "distinctio",
          line2: "cum",
          postalCode: "82083",
          region: "laborum",
          type: AddressType.Unknown,
        },
        email: "Warren19@gmail.com",
        modifiedDate: "autem",
        name: "Edgar Cremin",
        phone: [
          {
            number: "velit",
            type: PhoneNumberType.Landline,
          },
        ],
        status: CustomerStatus.Archived,
      },
    ],
    customerName: "natus",
    defaultCurrency: "minima",
    emailAddress: "minus",
    id: "9d237397-c785-4b5d-b4f5-00183febdf67",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "aliquid",
    phone: "510.586.7430 x0316",
    registrationNumber: "ad",
    sourceModifiedDate: "nisi",
    status: CustomerStatus.Unknown,
    supplementalData: {
      content: {
        "officiis": {
          "minus": "tempora",
          "sequi": "natus",
          "saepe": "quibusdam",
          "corrupti": "maxime",
        },
        "aliquam": {
          "explicabo": "eaque",
        },
      },
    },
    taxNumber: "hic",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 276828,
}).then((res: CreateCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## downloadAttachment

﻿Download customer attachment.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadCustomerAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.customers.downloadAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customerId: "quae",
}).then((res: DownloadCustomerAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

﻿Gets a single customer corresponding to the given ID.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCustomerResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressType, CustomerStatus, PhoneNumberType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.customers.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  customerId: "eos",
}).then((res: GetCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getAttachment

﻿Get  customer attachment.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCustomerAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.customers.getAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customerId: "eius",
}).then((res: GetCustomerAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateUpdateModel

﻿Get create/update customer model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support creating and updating customers.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateUpdateCustomersModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.customers.getCreateUpdateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateUpdateCustomersModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

﻿Gets the latest customers for a company, with pagination.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListCustomersResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressType, CustomerStatus, PhoneNumberType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.customers.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "voluptatem",
}).then((res: ListCustomersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listAttachments

﻿List customer attachments

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListCustomerAttachmentsResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.customers.listAttachments({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customerId: "temporibus",
}).then((res: ListCustomerAttachmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## update

﻿Posts an updated customer for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update customer model](https://docs.codat.io/accounting-api#/operations/get-create-update-customers-model).

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support updating customers.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateCustomerResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  AddressType,
  CustomerStatus,
  DataType,
  PhoneNumberType,
  PushChangeType,
  PushOperationStatus,
} from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.customers.update({
  customer: {
    addresses: [
      {
        city: "New Jayde",
        country: "Nigeria",
        line1: "porro",
        line2: "voluptas",
        postalCode: "27537-1668",
        region: "magni",
        type: AddressType.Unknown,
      },
      {
        city: "Joanhaven",
        country: "Lebanon",
        line1: "unde",
        line2: "ad",
        postalCode: "62198-2033",
        region: "laboriosam",
        type: AddressType.Billing,
      },
    ],
    contactName: "tenetur",
    contacts: [
      {
        address: {
          city: "O'Konton",
          country: "Argentina",
          line1: "voluptas",
          line2: "pariatur",
          postalCode: "01252",
          region: "ullam",
          type: AddressType.Unknown,
        },
        email: "Aurelia.Mraz77@yahoo.com",
        modifiedDate: "ipsum",
        name: "Carl Pollich IV",
        phone: [
          {
            number: "incidunt",
            type: PhoneNumberType.Primary,
          },
          {
            number: "nisi",
            type: PhoneNumberType.Primary,
          },
        ],
        status: CustomerStatus.Archived,
      },
      {
        address: {
          city: "North Cloydton",
          country: "Austria",
          line1: "possimus",
          line2: "perferendis",
          postalCode: "28760",
          region: "beatae",
          type: AddressType.Delivery,
        },
        email: "Mae.Willms66@yahoo.com",
        modifiedDate: "commodi",
        name: "Tom Gutkowski",
        phone: [
          {
            number: "id",
            type: PhoneNumberType.Unknown,
          },
          {
            number: "molestias",
            type: PhoneNumberType.Unknown,
          },
        ],
        status: CustomerStatus.Active,
      },
    ],
    customerName: "occaecati",
    defaultCurrency: "eos",
    emailAddress: "veniam",
    id: "3c8962f4-896b-4f51-a465-2d3c343d6177",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "atque",
    phone: "1-935-212-4413 x9410",
    registrationNumber: "iste",
    sourceModifiedDate: "aut",
    status: CustomerStatus.Active,
    supplementalData: {
      content: {
        "error": {
          "ipsa": "dolore",
        },
        "labore": {
          "ullam": "quibusdam",
          "recusandae": "ad",
          "omnis": "mollitia",
        },
        "placeat": {
          "ducimus": "eaque",
          "aliquid": "ea",
        },
        "odio": {
          "quisquam": "delectus",
        },
      },
    },
    taxNumber: "et",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customerId: "optio",
  forceUpdate: false,
  timeoutInMinutes: 953679,
}).then((res: UpdateCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
