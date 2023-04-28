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

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support creating customers.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateCustomerResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  AddressTypeEnum,
  CustomerStatusEnum,
  DataTypeEnum,
  PhoneNumberTypeEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
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
        city: "Cartwrightstad",
        country: "Ukraine",
        line1: "assumenda",
        line2: "optio",
        postalCode: "94549",
        region: "adipisci",
        type: AddressTypeEnum.Unknown,
      },
      {
        city: "Apopka",
        country: "Equatorial Guinea",
        line1: "rerum",
        line2: "nesciunt",
        postalCode: "28807-3440",
        region: "recusandae",
        type: AddressTypeEnum.Delivery,
      },
      {
        city: "East Martina",
        country: "Svalbard & Jan Mayen Islands",
        line1: "dolor",
        line2: "porro",
        postalCode: "91773-0293",
        region: "quod",
        type: AddressTypeEnum.Unknown,
      },
      {
        city: "Reichelfort",
        country: "South Africa",
        line1: "alias",
        line2: "deserunt",
        postalCode: "15095",
        region: "nemo",
        type: AddressTypeEnum.Billing,
      },
    ],
    contactName: "reiciendis",
    contacts: [
      {
        address: {
          city: "Freedaton",
          country: "Mali",
          line1: "natus",
          line2: "culpa",
          postalCode: "48950-4669",
          region: "quae",
          type: AddressTypeEnum.Unknown,
        },
        email: "Cristal_Fisher48@hotmail.com",
        modifiedDate: "unde",
        name: "Alton McKenzie",
        phone: [
          {
            number: "aut",
            type: PhoneNumberTypeEnum.Landline,
          },
          {
            number: "quia",
            type: PhoneNumberTypeEnum.Fax,
          },
        ],
        status: CustomerStatusEnum.Archived,
      },
    ],
    customerName: "qui",
    defaultCurrency: "commodi",
    emailAddress: "a",
    id: "d368ba92-16bc-4b41-9835-c73641723133",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "recusandae",
    phone: "(802) 568-3142 x77862",
    registrationNumber: "molestias",
    sourceModifiedDate: "dolores",
    status: CustomerStatusEnum.Unknown,
    supplementalData: {
      content: {
        "minus": {
          "odit": "maxime",
          "aspernatur": "magni",
        },
        "minus": {
          "ipsam": "sequi",
          "quaerat": "accusantium",
        },
      },
    },
    taxNumber: "incidunt",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 583959,
}).then((res: CreateCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## downloadAttachment

Download customer attachment

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
  customerId: "minima",
}).then((res: DownloadCustomerAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Gets a single customer corresponding to the given ID.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCustomerResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressTypeEnum, CustomerStatusEnum, PhoneNumberTypeEnum } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.customers.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  customerId: "quo",
}).then((res: GetCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getAttachment

Get  customer attachment

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
  customerId: "quis",
}).then((res: GetCustomerAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateUpdateModel

Get create/update customer model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support creating and updating customers.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateUpdateCustomersModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";

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

Gets the latest customers for a company, with pagination

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListCustomersResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressTypeEnum, CustomerStatusEnum, PhoneNumberTypeEnum } from "@codat/accounting/dist/sdk/models/shared";

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
  query: "facere",
}).then((res: ListCustomersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listAttachments

List customer attachments

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
  customerId: "quidem",
}).then((res: ListCustomerAttachmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## update

Posts an updated customer for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update customer model](https://docs.codat.io/accounting-api#/operations/get-create-update-customers-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support updating customers.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateCustomerResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  AddressTypeEnum,
  CustomerStatusEnum,
  DataTypeEnum,
  PhoneNumberTypeEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
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
        city: "Port Eriberto",
        country: "Jersey",
        line1: "quo",
        line2: "vitae",
        postalCode: "26519-5661",
        region: "enim",
        type: AddressTypeEnum.Billing,
      },
      {
        city: "South San Francisco",
        country: "Sao Tome and Principe",
        line1: "quasi",
        line2: "sint",
        postalCode: "19688",
        region: "eum",
        type: AddressTypeEnum.Unknown,
      },
      {
        city: "Williamsonfield",
        country: "Samoa",
        line1: "veniam",
        line2: "magnam",
        postalCode: "68300",
        region: "quis",
        type: AddressTypeEnum.Delivery,
      },
    ],
    contactName: "reiciendis",
    contacts: [
      {
        address: {
          city: "Lesterview",
          country: "Burundi",
          line1: "voluptatem",
          line2: "voluptas",
          postalCode: "89160-6192",
          region: "quia",
          type: AddressTypeEnum.Delivery,
        },
        email: "Lydia7@gmail.com",
        modifiedDate: "perferendis",
        name: "Andy Paucek",
        phone: [
          {
            number: "necessitatibus",
            type: PhoneNumberTypeEnum.Fax,
          },
        ],
        status: CustomerStatusEnum.Unknown,
      },
      {
        address: {
          city: "West Ethelyn",
          country: "Martinique",
          line1: "ea",
          line2: "fugiat",
          postalCode: "59595",
          region: "reprehenderit",
          type: AddressTypeEnum.Billing,
        },
        email: "Mittie_Williamson13@gmail.com",
        modifiedDate: "nam",
        name: "Erik Stehr",
        phone: [
          {
            number: "deserunt",
            type: PhoneNumberTypeEnum.Mobile,
          },
          {
            number: "modi",
            type: PhoneNumberTypeEnum.Fax,
          },
          {
            number: "repellendus",
            type: PhoneNumberTypeEnum.Mobile,
          },
          {
            number: "unde",
            type: PhoneNumberTypeEnum.Fax,
          },
        ],
        status: CustomerStatusEnum.Unknown,
      },
      {
        address: {
          city: "Port Gavinland",
          country: "Central African Republic",
          line1: "numquam",
          line2: "velit",
          postalCode: "21540",
          region: "cumque",
          type: AddressTypeEnum.Delivery,
        },
        email: "Josiah19@yahoo.com",
        modifiedDate: "fuga",
        name: "Miss Don Dach",
        phone: [
          {
            number: "nesciunt",
            type: PhoneNumberTypeEnum.Unknown,
          },
          {
            number: "beatae",
            type: PhoneNumberTypeEnum.Unknown,
          },
        ],
        status: CustomerStatusEnum.Unknown,
      },
    ],
    customerName: "quo",
    defaultCurrency: "libero",
    emailAddress: "eaque",
    id: "a0003eb2-2d9b-43a7-8d94-faa741c57d1f",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "vero",
    phone: "(810) 408-1587 x17905",
    registrationNumber: "nostrum",
    sourceModifiedDate: "labore",
    status: CustomerStatusEnum.Active,
    supplementalData: {
      content: {
        "tenetur": {
          "necessitatibus": "necessitatibus",
          "autem": "natus",
          "quasi": "iure",
        },
      },
    },
    taxNumber: "ex",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customerId: "error",
  forceUpdate: false,
  timeoutInMinutes: 535903,
}).then((res: UpdateCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
