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

The *Create customer* endpoint creates a new [customer](https://docs.codat.io/accounting-api#/schemas/Customer) for a given company's connection.

[Customers](https://docs.codat.io/accounting-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update customer model](https://docs.codat.io/accounting-api#/operations/get-create-update-customers-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support creating an account.


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
        city: "San Antonio",
        country: "New Zealand",
        line1: "architecto",
        line2: "iure",
        postalCode: "95623-0684",
        region: "nisi",
        type: AddressType.Delivery,
      },
    ],
    contactName: "officiis",
    contacts: [
      {
        address: {
          city: "Hilllton",
          country: "Mauritius",
          line1: "impedit",
          line2: "modi",
          postalCode: "61968-2330",
          region: "odit",
          type: AddressType.Delivery,
        },
        email: "Gina93@gmail.com",
        modifiedDate: "2022-10-23T00:00:00.000Z",
        name: "Lance Cruickshank DVM",
        phone: [
          {
            number: "+44 25691 154789",
            type: PhoneNumberType.Mobile,
          },
          {
            number: "(877) 492-8687",
            type: PhoneNumberType.Mobile,
          },
        ],
        status: CustomerStatus.Active,
      },
      {
        address: {
          city: "Adamsboro",
          country: "Chile",
          line1: "labore",
          line2: "earum",
          postalCode: "06184",
          region: "voluptates",
          type: AddressType.Delivery,
        },
        email: "Domenick41@yahoo.com",
        modifiedDate: "2022-10-23T00:00:00.000Z",
        name: "Cristina Beer V",
        phone: [
          {
            number: "01224 658 999",
            type: PhoneNumberType.Fax,
          },
          {
            number: "01224 658 999",
            type: PhoneNumberType.Fax,
          },
        ],
        status: CustomerStatus.Active,
      },
      {
        address: {
          city: "Runolfssonside",
          country: "Uruguay",
          line1: "tenetur",
          line2: "ipsam",
          postalCode: "70098-3083",
          region: "aspernatur",
          type: AddressType.Billing,
        },
        email: "Diana_Hammes@yahoo.com",
        modifiedDate: "2022-10-23T00:00:00.000Z",
        name: "Verna Lang",
        phone: [
          {
            number: "01224 658 999",
            type: PhoneNumberType.Unknown,
          },
          {
            number: "+44 25691 154789",
            type: PhoneNumberType.Unknown,
          },
          {
            number: "(877) 492-8687",
            type: PhoneNumberType.Fax,
          },
        ],
        status: CustomerStatus.Archived,
      },
      {
        address: {
          city: "Reychester",
          country: "French Guiana",
          line1: "veritatis",
          line2: "fugit",
          postalCode: "88364",
          region: "hic",
          type: AddressType.Delivery,
        },
        email: "Jaden62@gmail.com",
        modifiedDate: "2022-10-23T00:00:00.000Z",
        name: "Verna Sauer",
        phone: [
          {
            number: "(877) 492-8687",
            type: PhoneNumberType.Landline,
          },
          {
            number: "01224 658 999",
            type: PhoneNumberType.Unknown,
          },
          {
            number: "01224 658 999",
            type: PhoneNumberType.Fax,
          },
        ],
        status: CustomerStatus.Active,
      },
    ],
    customerName: "incidunt",
    defaultCurrency: "EUR",
    emailAddress: "nihil",
    id: "7b4848bd-6a6f-4044-9d2c-3b808094373e",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    phone: "1-223-679-7768 x019",
    registrationNumber: "sunt",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: CustomerStatus.Active,
    supplementalData: {
      content: {
        "quidem": {
          "a": "et",
          "ipsam": "eos",
          "exercitationem": "minima",
          "laudantium": "quibusdam",
        },
        "fuga": {
          "excepturi": "corporis",
          "nam": "itaque",
          "suscipit": "porro",
        },
      },
    },
    taxNumber: "nulla",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 10447,
}).then((res: CreateCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreateCustomerRequest](../../models/operations/createcustomerrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `retries`                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                   | Configuration to override the default retry behavior of the client.                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateCustomerResponse](../../models/operations/createcustomerresponse.md)>**


## downloadAttachment

The *Download customer attachment* endpoint downloads a specific attachment for a given `customerId` and `attachmentId`.

[Customers](https://docs.codat.io/accounting-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support downloading a customer attachment.


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
  customerId: "qui",
}).then((res: DownloadCustomerAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.DownloadCustomerAttachmentRequest](../../models/operations/downloadcustomerattachmentrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `retries`                                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                       | :heavy_minus_sign:                                                                                           | Configuration to override the default retry behavior of the client.                                          |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.DownloadCustomerAttachmentResponse](../../models/operations/downloadcustomerattachmentresponse.md)>**


## get

The *Get customer* endpoint returns a single customer for a given customerId.

[Customers](https://docs.codat.io/accounting-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support getting a specific customer.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).


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
  customerId: "in",
}).then((res: GetCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetCustomerRequest](../../models/operations/getcustomerrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `retries`                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                         | :heavy_minus_sign:                                                             | Configuration to override the default retry behavior of the client.            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetCustomerResponse](../../models/operations/getcustomerresponse.md)>**


## getAttachment

The *Get customer attachment* endpoint returns a specific attachment for a given `customerId` and `attachmentId`.

[Customers](https://docs.codat.io/accounting-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support getting a customer attachment.


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
  customerId: "enim",
}).then((res: GetCustomerAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetCustomerAttachmentRequest](../../models/operations/getcustomerattachmentrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `retries`                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                             | :heavy_minus_sign:                                                                                 | Configuration to override the default retry behavior of the client.                                |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetCustomerAttachmentResponse](../../models/operations/getcustomerattachmentresponse.md)>**


## getCreateUpdateModel

﻿The *Get create/update customer model* endpoint returns the expected data for the request payload when creating and updating a [customer](https://docs.codat.io/accounting-api#/schemas/Customer) for a given company and integration.

[Customers](https://docs.codat.io/accounting-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support creating and updating a customer.


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

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetCreateUpdateCustomersModelRequest](../../models/operations/getcreateupdatecustomersmodelrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `retries`                                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                             | :heavy_minus_sign:                                                                                                 | Configuration to override the default retry behavior of the client.                                                |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetCreateUpdateCustomersModelResponse](../../models/operations/getcreateupdatecustomersmodelresponse.md)>**


## list

The *List customers* endpoint returns a list of [customers](https://docs.codat.io/accounting-api#/schemas/Customer) for a given company's connection.

[Customers](https://docs.codat.io/accounting-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
    

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
  query: "vel",
}).then((res: ListCustomersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListCustomersRequest](../../models/operations/listcustomersrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `retries`                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                 | Configuration to override the default retry behavior of the client.                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListCustomersResponse](../../models/operations/listcustomersresponse.md)>**


## listAttachments

The *List customer attachments* endpoint returns a list of attachments avialable to download for given `customerId`.

[Customers](https://docs.codat.io/accounting-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support listing customer attachments.


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
  customerId: "impedit",
}).then((res: ListCustomerAttachmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.ListCustomerAttachmentsRequest](../../models/operations/listcustomerattachmentsrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `retries`                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.ListCustomerAttachmentsResponse](../../models/operations/listcustomerattachmentsresponse.md)>**


## update

The *Update customer* endpoint updates an existing [customer](https://docs.codat.io/accounting-api#/schemas/Customer) for a given company's connection.

[Customers](https://docs.codat.io/accounting-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update customer model](https://docs.codat.io/accounting-api#/operations/get-create-update-customers-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support creating an account.


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
        city: "West Marcelina",
        country: "Palestinian Territory",
        line1: "labore",
        line2: "adipisci",
        postalCode: "73480",
        region: "esse",
        type: AddressType.Billing,
      },
    ],
    contactName: "amet",
    contacts: [
      {
        address: {
          city: "East Abdul",
          country: "Libyan Arab Jamahiriya",
          line1: "eligendi",
          line2: "qui",
          postalCode: "95501",
          region: "repellendus",
          type: AddressType.Billing,
        },
        email: "Verona.Abshire34@gmail.com",
        modifiedDate: "2022-10-23T00:00:00.000Z",
        name: "Ray Pfannerstill",
        phone: [
          {
            number: "(877) 492-8687",
            type: PhoneNumberType.Landline,
          },
          {
            number: "01224 658 999",
            type: PhoneNumberType.Unknown,
          },
        ],
        status: CustomerStatus.Active,
      },
      {
        address: {
          city: "Windlerfort",
          country: "Brazil",
          line1: "rem",
          line2: "itaque",
          postalCode: "74945-4921",
          region: "recusandae",
          type: AddressType.Unknown,
        },
        email: "May.Donnelly89@gmail.com",
        modifiedDate: "2022-10-23T00:00:00.000Z",
        name: "Myra Hermann",
        phone: [
          {
            number: "01224 658 999",
            type: PhoneNumberType.Unknown,
          },
        ],
        status: CustomerStatus.Unknown,
      },
      {
        address: {
          city: "Lake Roxaneburgh",
          country: "Sao Tome and Principe",
          line1: "iste",
          line2: "earum",
          postalCode: "77302",
          region: "repellat",
          type: AddressType.Billing,
        },
        email: "Columbus_Moore82@hotmail.com",
        modifiedDate: "2022-10-23T00:00:00.000Z",
        name: "Duane Dibbert DVM",
        phone: [
          {
            number: "(877) 492-8687",
            type: PhoneNumberType.Mobile,
          },
          {
            number: "01224 658 999",
            type: PhoneNumberType.Primary,
          },
          {
            number: "(877) 492-8687",
            type: PhoneNumberType.Landline,
          },
        ],
        status: CustomerStatus.Unknown,
      },
      {
        address: {
          city: "Lexifurt",
          country: "Somalia",
          line1: "molestiae",
          line2: "officiis",
          postalCode: "50466-9029",
          region: "dolorem",
          type: AddressType.Unknown,
        },
        email: "Lizeth_Kuhlman@hotmail.com",
        modifiedDate: "2022-10-23T00:00:00.000Z",
        name: "Nicolas Walker I",
        phone: [
          {
            number: "01224 658 999",
            type: PhoneNumberType.Fax,
          },
        ],
        status: CustomerStatus.Unknown,
      },
    ],
    customerName: "commodi",
    defaultCurrency: "EUR",
    emailAddress: "temporibus",
    id: "368ba921-6bcb-4415-835c-73641723133e",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    phone: "224-783-1427 x78625",
    registrationNumber: "dolores",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: CustomerStatus.Active,
    supplementalData: {
      content: {
        "non": {
          "maxime": "aspernatur",
        },
        "magni": {
          "minima": "ipsam",
          "sequi": "quaerat",
          "accusantium": "incidunt",
          "cupiditate": "minima",
        },
        "quo": {
          "facere": "quidem",
          "harum": "adipisci",
        },
        "optio": {
          "reprehenderit": "quo",
          "vitae": "voluptates",
        },
      },
    },
    taxNumber: "tempora",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customerId: "iste",
  forceUpdate: false,
  timeoutInMinutes: 560736,
}).then((res: UpdateCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateCustomerRequest](../../models/operations/updatecustomerrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `retries`                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                   | Configuration to override the default retry behavior of the client.                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateCustomerResponse](../../models/operations/updatecustomerresponse.md)>**

