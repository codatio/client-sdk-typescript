# customers

## Overview

Customers

### Available Operations

* [createCustomer](#createcustomer) - Create customer
* [downloadCustomerAttachment](#downloadcustomerattachment) - Download customer attachment
* [getCreateUpdateCustomersModel](#getcreateupdatecustomersmodel) - Get create/update customer model
* [getCustomer](#getcustomer) - Get customer
* [getCustomerAttachment](#getcustomerattachment) - Get customer attachment
* [getCustomerAttachments](#getcustomerattachments) - List customer attachments
* [getCustomers](#getcustomers) - List customers
* [updateCustomer](#updatecustomer) - Update customer

## createCustomer

Posts an individual customer for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update customer model](https://docs.codat.io/accounting-api#/operations/get-create-update-customers-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support creating customers.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateCustomerRequest, CreateCustomerResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  AddressTypeEnum,
  CustomerStatusEnum,
  DataTypeEnum,
  PhoneNumberTypeEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
} from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateCustomerRequest = {
  customer: {
    addresses: [
      {
        city: "Jerrodfield",
        country: "Morocco",
        line1: "maxime",
        line2: "culpa",
        postalCode: "90218-8486",
        region: "est",
        type: AddressTypeEnum.Delivery,
      },
    ],
    contactName: "occaecati",
    contacts: [
      {
        address: {
          city: "Port Malachi",
          country: "New Zealand",
          line1: "beatae",
          line2: "quod",
          postalCode: "95903-8950",
          region: "amet",
          type: AddressTypeEnum.Billing,
        },
        email: "Jerome49@gmail.com",
        modifiedDate: "deleniti",
        name: "Anna Mayer",
        phone: [
          {
            number: "eius",
            type: PhoneNumberTypeEnum.Primary,
          },
          {
            number: "recusandae",
            type: PhoneNumberTypeEnum.Landline,
          },
          {
            number: "aliquam",
            type: PhoneNumberTypeEnum.Fax,
          },
          {
            number: "voluptatum",
            type: PhoneNumberTypeEnum.Landline,
          },
        ],
        status: CustomerStatusEnum.Unknown,
      },
      {
        address: {
          city: "Hayleeborough",
          country: "Montenegro",
          line1: "iusto",
          line2: "optio",
          postalCode: "01218",
          region: "inventore",
          type: AddressTypeEnum.Unknown,
        },
        email: "Bertha9@yahoo.com",
        modifiedDate: "dolorum",
        name: "Shaun Johnston",
        phone: [
          {
            number: "nemo",
            type: PhoneNumberTypeEnum.Fax,
          },
          {
            number: "quidem",
            type: PhoneNumberTypeEnum.Unknown,
          },
          {
            number: "aliquid",
            type: PhoneNumberTypeEnum.Landline,
          },
          {
            number: "atque",
            type: PhoneNumberTypeEnum.Mobile,
          },
        ],
        status: CustomerStatusEnum.Archived,
      },
      {
        address: {
          city: "Fort Odie",
          country: "Bulgaria",
          line1: "nobis",
          line2: "voluptatum",
          postalCode: "16007",
          region: "saepe",
          type: AddressTypeEnum.Delivery,
        },
        email: "Laurie4@yahoo.com",
        modifiedDate: "quae",
        name: "Veronica Kutch",
        phone: [
          {
            number: "libero",
            type: PhoneNumberTypeEnum.Unknown,
          },
        ],
        status: CustomerStatusEnum.Archived,
      },
    ],
    customerName: "nihil",
    defaultCurrency: "similique",
    emailAddress: "repellat",
    id: "ded84a35-a412-438e-9a73-5ac26ae33bef",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "provident",
    phone: "265.924.7861 x004",
    registrationNumber: "delectus",
    sourceModifiedDate: "officiis",
    status: CustomerStatusEnum.Active,
    supplementalData: {
      content: {
        "ipsam": {
          "esse": "vitae",
          "beatae": "pariatur",
          "voluptatem": "blanditiis",
        },
        "eligendi": {
          "deleniti": "deleniti",
          "necessitatibus": "cumque",
          "iste": "reiciendis",
          "nihil": "libero",
        },
      },
    },
    taxNumber: "perspiciatis",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 577273,
};

sdk.customers.createCustomer(req).then((res: CreateCustomerResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## downloadCustomerAttachment

Download customer attachment

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadCustomerAttachmentRequest, DownloadCustomerAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DownloadCustomerAttachmentRequest = {
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customerId: "officia",
};

sdk.customers.downloadCustomerAttachment(req).then((res: DownloadCustomerAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateUpdateCustomersModel

Get create/update customer model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support creating and updating customers.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateUpdateCustomersModelRequest, GetCreateUpdateCustomersModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreateUpdateCustomersModelRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.customers.getCreateUpdateCustomersModel(req).then((res: GetCreateUpdateCustomersModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCustomer

Gets a single customer corresponding to the given ID.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCustomerRequest, GetCustomerResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressTypeEnum, CustomerStatusEnum, PhoneNumberTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCustomerRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  customerId: "nemo",
};

sdk.customers.getCustomer(req).then((res: GetCustomerResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCustomerAttachment

Get  customer attachment

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCustomerAttachmentRequest, GetCustomerAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCustomerAttachmentRequest = {
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customerId: "quis",
};

sdk.customers.getCustomerAttachment(req).then((res: GetCustomerAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCustomerAttachments

Get customer attachments

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCustomerAttachmentsRequest, GetCustomerAttachmentsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCustomerAttachmentsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customerId: "doloremque",
};

sdk.customers.getCustomerAttachments(req).then((res: GetCustomerAttachmentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCustomers

Gets the latest customers for a company, with pagination

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCustomersRequest, GetCustomersResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressTypeEnum, CustomerStatusEnum, PhoneNumberTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCustomersRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "similique",
};

sdk.customers.getCustomers(req).then((res: GetCustomersResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateCustomer

Posts an updated customer for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update customer model](https://docs.codat.io/accounting-api#/operations/get-create-update-customers-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support updating customers.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateCustomerRequest, UpdateCustomerResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  AddressTypeEnum,
  CustomerStatusEnum,
  DataTypeEnum,
  PhoneNumberTypeEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
} from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UpdateCustomerRequest = {
  customer: {
    addresses: [
      {
        city: "South Sydni",
        country: "Somalia",
        line1: "dolor",
        line2: "ratione",
        postalCode: "77078",
        region: "laudantium",
        type: AddressTypeEnum.Delivery,
      },
      {
        city: "Jonesborough",
        country: "Eritrea",
        line1: "consectetur",
        line2: "qui",
        postalCode: "55487-4912",
        region: "quisquam",
        type: AddressTypeEnum.Billing,
      },
    ],
    contactName: "ipsam",
    contacts: [
      {
        address: {
          city: "North Kamron",
          country: "Nauru",
          line1: "beatae",
          line2: "nemo",
          postalCode: "06400",
          region: "unde",
          type: AddressTypeEnum.Billing,
        },
        email: "Julianne_Wintheiser@gmail.com",
        modifiedDate: "earum",
        name: "Tomas Kiehn",
        phone: [
          {
            number: "perferendis",
            type: PhoneNumberTypeEnum.Landline,
          },
          {
            number: "saepe",
            type: PhoneNumberTypeEnum.Primary,
          },
          {
            number: "architecto",
            type: PhoneNumberTypeEnum.Primary,
          },
        ],
        status: CustomerStatusEnum.Unknown,
      },
      {
        address: {
          city: "Port Clifford",
          country: "Lithuania",
          line1: "excepturi",
          line2: "alias",
          postalCode: "03183-7963",
          region: "blanditiis",
          type: AddressTypeEnum.Billing,
        },
        email: "Winona49@gmail.com",
        modifiedDate: "quidem",
        name: "Teri Abshire",
        phone: [
          {
            number: "numquam",
            type: PhoneNumberTypeEnum.Mobile,
          },
        ],
        status: CustomerStatusEnum.Unknown,
      },
    ],
    customerName: "hic",
    defaultCurrency: "blanditiis",
    emailAddress: "at",
    id: "e30f069d-8106-418d-97e1-52297510da80",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "amet",
    phone: "(315) 377-3071",
    registrationNumber: "laborum",
    sourceModifiedDate: "in",
    status: CustomerStatusEnum.Unknown,
    supplementalData: {
      content: {
        "distinctio": {
          "sint": "odio",
          "repudiandae": "accusamus",
          "quasi": "accusantium",
        },
      },
    },
    taxNumber: "dolores",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customerId: "fugiat",
  forceUpdate: false,
  timeoutInMinutes: 664312,
};

sdk.customers.updateCustomer(req).then((res: UpdateCustomerResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
