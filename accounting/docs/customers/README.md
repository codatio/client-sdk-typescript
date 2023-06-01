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
        city: "Kassandrafield",
        country: "Ireland",
        line1: "aut",
        line2: "nisi",
        postalCode: "53357",
        region: "debitis",
        type: AddressType.Unknown,
      },
      {
        city: "West Rorystad",
        country: "Martinique",
        line1: "magnam",
        line2: "cupiditate",
        postalCode: "95102-7224",
        region: "hic",
        type: AddressType.Billing,
      },
      {
        city: "Monroefort",
        country: "Australia",
        line1: "porro",
        line2: "vel",
        postalCode: "92418-7122",
        region: "incidunt",
        type: AddressType.Delivery,
      },
      {
        city: "Mrazworth",
        country: "Jersey",
        line1: "rem",
        line2: "est",
        postalCode: "70884",
        region: "laborum",
        type: AddressType.Billing,
      },
    ],
    contactName: "soluta",
    contacts: [
      {
        address: {
          city: "Fort Leifmouth",
          country: "Bulgaria",
          line1: "ea",
          line2: "architecto",
          postalCode: "70835-8147",
          region: "exercitationem",
          type: AddressType.Unknown,
        },
        email: "Krystel.Jakubowski71@yahoo.com",
        modifiedDate: "modi",
        name: "Jon Bashirian",
        phone: [
          {
            number: "iusto",
            type: PhoneNumberType.Primary,
          },
          {
            number: "odit",
            type: PhoneNumberType.Fax,
          },
          {
            number: "ducimus",
            type: PhoneNumberType.Fax,
          },
          {
            number: "ducimus",
            type: PhoneNumberType.Fax,
          },
        ],
        status: CustomerStatus.Archived,
      },
      {
        address: {
          city: "East Dorcasboro",
          country: "Saint Helena",
          line1: "inventore",
          line2: "ducimus",
          postalCode: "04558",
          region: "necessitatibus",
          type: AddressType.Delivery,
        },
        email: "Stanley_Zboncak@hotmail.com",
        modifiedDate: "quam",
        name: "Lee Steuber DDS",
        phone: [
          {
            number: "pariatur",
            type: PhoneNumberType.Landline,
          },
          {
            number: "amet",
            type: PhoneNumberType.Unknown,
          },
          {
            number: "quasi",
            type: PhoneNumberType.Primary,
          },
          {
            number: "rerum",
            type: PhoneNumberType.Landline,
          },
        ],
        status: CustomerStatus.Archived,
      },
    ],
    customerName: "aliquam",
    defaultCurrency: "voluptates",
    emailAddress: "alias",
    id: "80aa1041-86ec-4759-a02f-3702c5c8e2d3",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "consequatur",
    phone: "1-782-202-9622 x40479",
    registrationNumber: "sequi",
    sourceModifiedDate: "ducimus",
    status: CustomerStatus.Unknown,
    supplementalData: {
      content: {
        "ut": {
          "sed": "quas",
          "aspernatur": "laudantium",
        },
        "fugit": {
          "reiciendis": "nulla",
        },
        "libero": {
          "hic": "eum",
        },
      },
    },
    taxNumber: "sint",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 909351,
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
  customerId: "veniam",
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
  customerId: "unde",
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
  customerId: "consequuntur",
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
  query: "laboriosam",
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
  customerId: "iusto",
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
        city: "Annabelfort",
        country: "Saint Martin",
        line1: "voluptatum",
        line2: "pariatur",
        postalCode: "78213",
        region: "voluptatum",
        type: AddressType.Delivery,
      },
      {
        city: "East Fridastad",
        country: "Oman",
        line1: "quas",
        line2: "odit",
        postalCode: "50599-1430",
        region: "laborum",
        type: AddressType.Unknown,
      },
      {
        city: "West Jeromefield",
        country: "American Samoa",
        line1: "numquam",
        line2: "numquam",
        postalCode: "90329-6305",
        region: "distinctio",
        type: AddressType.Delivery,
      },
      {
        city: "Robbboro",
        country: "Aruba",
        line1: "vero",
        line2: "corporis",
        postalCode: "00962-1494",
        region: "sed",
        type: AddressType.Billing,
      },
    ],
    contactName: "natus",
    contacts: [
      {
        address: {
          city: "East Trystan",
          country: "Nauru",
          line1: "minima",
          line2: "minus",
          postalCode: "81241-6474",
          region: "quas",
          type: AddressType.Billing,
        },
        email: "Fay.Stokes97@hotmail.com",
        modifiedDate: "quis",
        name: "Helen Brown",
        phone: [
          {
            number: "accusamus",
            type: PhoneNumberType.Fax,
          },
          {
            number: "vero",
            type: PhoneNumberType.Unknown,
          },
          {
            number: "ea",
            type: PhoneNumberType.Mobile,
          },
          {
            number: "aliquid",
            type: PhoneNumberType.Fax,
          },
        ],
        status: CustomerStatus.Active,
      },
    ],
    customerName: "consequuntur",
    defaultCurrency: "accusantium",
    emailAddress: "autem",
    id: "dab75005-2a56-447e-9c43-9ed8c4320f41",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "eos",
    phone: "283-454-6735 x275",
    registrationNumber: "quaerat",
    sourceModifiedDate: "nobis",
    status: CustomerStatus.Unknown,
    supplementalData: {
      content: {
        "unde": {
          "magni": "modi",
          "atque": "blanditiis",
          "quibusdam": "odio",
          "unde": "ad",
        },
        "officia": {
          "incidunt": "aspernatur",
          "asperiores": "maxime",
          "dolore": "accusantium",
        },
        "corporis": {
          "laboriosam": "omnis",
          "tenetur": "vel",
        },
      },
    },
    taxNumber: "iste",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customerId: "animi",
  forceUpdate: false,
  timeoutInMinutes: 60491,
}).then((res: UpdateCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
