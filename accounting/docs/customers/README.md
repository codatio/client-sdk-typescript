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

Posts an individual customer for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update customer model](https://docs.codat.io/accounting-api#/operations/get-create-update-customers-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) to see which integrations support this endpoint.


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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.customers.create({
  customer: {
    addresses: [
      {
        city: "South Carterboro",
        country: "Ireland",
        line1: "reprehenderit",
        line2: "quidem",
        postalCode: "62077-0396",
        region: "libero",
        type: AddressType.Unknown,
      },
      {
        city: "Hicksville",
        country: "Greenland",
        line1: "perferendis",
        line2: "itaque",
        postalCode: "91165-2810",
        region: "itaque",
        type: AddressType.Delivery,
      },
      {
        city: "Alfonsoside",
        country: "Niue",
        line1: "aliquam",
        line2: "quasi",
        postalCode: "19233-9530",
        region: "minima",
        type: AddressType.Billing,
      },
      {
        city: "Wesley Chapel",
        country: "Uruguay",
        line1: "molestiae",
        line2: "amet",
        postalCode: "89329-8839",
        region: "deserunt",
        type: AddressType.Billing,
      },
    ],
    contactName: "minima",
    contacts: [
      {
        address: {
          city: "East Korbinstad",
          country: "Svalbard & Jan Mayen Islands",
          line1: "laborum",
          line2: "sapiente",
          postalCode: "21658-4225",
          region: "quos",
          type: AddressType.Delivery,
        },
        email: "Samanta20@gmail.com",
        modifiedDate: "error",
        name: "Trevor Hauck",
        phone: [
          {
            number: "sunt",
            type: PhoneNumberType.Mobile,
          },
          {
            number: "similique",
            type: PhoneNumberType.Primary,
          },
          {
            number: "tempora",
            type: PhoneNumberType.Landline,
          },
        ],
        status: CustomerStatus.Archived,
      },
      {
        address: {
          city: "Hicksville",
          country: "Bahrain",
          line1: "omnis",
          line2: "aut",
          postalCode: "68688",
          region: "velit",
          type: AddressType.Billing,
        },
        email: "Roosevelt_Batz38@hotmail.com",
        modifiedDate: "esse",
        name: "Dianna Ruecker",
        phone: [
          {
            number: "vero",
            type: PhoneNumberType.Landline,
          },
        ],
        status: CustomerStatus.Active,
      },
    ],
    customerName: "asperiores",
    defaultCurrency: "quasi",
    emailAddress: "veniam",
    id: "920c90d1-b490-41f2-bd89-c8a32639da5b",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "in",
    phone: "560.375.5065 x2942",
    registrationNumber: "sequi",
    sourceModifiedDate: "nisi",
    status: CustomerStatus.Active,
    supplementalData: {
      content: {
        "mollitia": {
          "hic": "doloremque",
          "id": "asperiores",
          "rem": "quod",
        },
        "commodi": {
          "beatae": "placeat",
          "molestiae": "dolor",
          "quia": "nulla",
        },
      },
    },
    taxNumber: "occaecati",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 983596,
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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.customers.downloadAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customerId: "libero",
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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.customers.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  customerId: "culpa",
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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.customers.getAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customerId: "tenetur",
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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.customers.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "molestias",
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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.customers.listAttachments({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customerId: "magnam",
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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.customers.update({
  customer: {
    addresses: [
      {
        city: "Lake Christ",
        country: "Norfolk Island",
        line1: "vero",
        line2: "quas",
        postalCode: "77308-5623",
        region: "dicta",
        type: AddressType.Unknown,
      },
      {
        city: "Kshlerinberg",
        country: "Kazakhstan",
        line1: "blanditiis",
        line2: "dolore",
        postalCode: "52043-0600",
        region: "accusamus",
        type: AddressType.Billing,
      },
    ],
    contactName: "commodi",
    contacts: [
      {
        address: {
          city: "Rockwall",
          country: "Liberia",
          line1: "dolorem",
          line2: "eum",
          postalCode: "22063-1657",
          region: "molestiae",
          type: AddressType.Billing,
        },
        email: "Nils22@gmail.com",
        modifiedDate: "cupiditate",
        name: "Sheldon Stiedemann",
        phone: [
          {
            number: "deserunt",
            type: PhoneNumberType.Fax,
          },
        ],
        status: CustomerStatus.Active,
      },
      {
        address: {
          city: "Pasco",
          country: "Ecuador",
          line1: "placeat",
          line2: "veniam",
          postalCode: "65336-6407",
          region: "reiciendis",
          type: AddressType.Delivery,
        },
        email: "Salvador_Johnson@gmail.com",
        modifiedDate: "iste",
        name: "Mrs. Harvey Crooks",
        phone: [
          {
            number: "quae",
            type: PhoneNumberType.Primary,
          },
          {
            number: "iure",
            type: PhoneNumberType.Mobile,
          },
        ],
        status: CustomerStatus.Archived,
      },
    ],
    customerName: "et",
    defaultCurrency: "perspiciatis",
    emailAddress: "accusamus",
    id: "a83d492e-d14b-48a2-8195-4545e955dcc1",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "praesentium",
    phone: "(963) 601-7473 x168",
    registrationNumber: "explicabo",
    sourceModifiedDate: "nulla",
    status: CustomerStatus.Archived,
    supplementalData: {
      content: {
        "quam": {
          "incidunt": "similique",
          "nobis": "culpa",
          "ratione": "illum",
        },
        "sed": {
          "aut": "voluptates",
        },
        "nulla": {
          "dignissimos": "dolor",
          "totam": "beatae",
          "vitae": "laborum",
          "beatae": "vitae",
        },
      },
    },
    taxNumber: "veniam",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customerId: "non",
  forceUpdate: false,
  timeoutInMinutes: 516231,
}).then((res: UpdateCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
