# Customers
(*customers*)

## Overview

Customers

### Available Operations

* [create](#create) - Create customer
* [get](#get) - Get customer
* [list](#list) - List customers
* [update](#update) - Update customer

## create

The *Create customer* endpoint creates a new [customer](https://docs.codat.io/sync-for-expenses-api#/schemas/Customer) for a given company's connection.

[Customers](https://docs.codat.io/sync-for-expenses-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update customer model](https://docs.codat.io/sync-for-expenses-api#/operations/get-create-update-customers-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { CreateCustomerResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import { AccountingAddressType, CustomerStatus, PhoneNumberType } from "@codat/sync-for-expenses/dist/sdk/models/shared";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.customers.create({
  customer: {
    addresses: [
      {
        city: "Jenafurt",
        country: "Sweden",
        line1: "innovative blue",
        line2: "grey technology East",
        postalCode: "30778",
        region: "quantify Polestar mobile",
        type: AccountingAddressType.Billing,
      },
    ],
    contactName: "Durham after",
    contacts: [
      {
        address: {
          city: "Darenberg",
          country: "Cote d'Ivoire",
          line1: "Buckinghamshire functionalities Grocery",
          line2: "Metal",
          postalCode: "61380",
          region: "Interactions Senior Mouse",
          type: AccountingAddressType.Unknown,
        },
        email: "Judd27@hotmail.com",
        modifiedDate: "2022-10-23T00:00:00.000Z",
        name: "transmit likewise",
        phone: [
          {
            number: "(877) 492-8687",
            type: PhoneNumberType.Fax,
          },
        ],
        status: CustomerStatus.Active,
      },
    ],
    customerName: "Rubber silver Indiana",
    defaultCurrency: "EUR",
    emailAddress: "Thea_Ritchie76@hotmail.com",
    id: "<ID>",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    phone: "948.595.2034",
    registrationNumber: "digital",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: CustomerStatus.Unknown,
    supplementalData: {
      content: {
        "recusandae": {
          "maiores": "Mongolia",
        },
      },
    },
    taxNumber: "discrete",
  },
  allowSyncOnPushComplete: false,
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 522311,
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


## get

The *Get customer* endpoint returns a single customer for a given customerId.

[Customers](https://docs.codat.io/sync-for-expenses-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support getting a specific customer.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-expenses-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { GetCustomerResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.customers.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  customerId: "Northeast Hatchback Kia",
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


## list

The *List customers* endpoint returns a list of [customers](https://docs.codat.io/sync-for-expenses-api#/schemas/Customer) for a given company's connection.

[Customers](https://docs.codat.io/sync-for-expenses-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-expenses-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { ListCustomersResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.customers.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "Northeast Metal Canada",
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


## update

The *Update customer* endpoint updates an existing [customer](https://docs.codat.io/sync-for-expenses-api#/schemas/Customer) for a given company's connection.

[Customers](https://docs.codat.io/sync-for-expenses-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update customer model](https://docs.codat.io/sync-for-expenses-api#/operations/get-create-update-customers-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { UpdateCustomerResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import { AccountingAddressType, CustomerStatus, PhoneNumberType } from "@codat/sync-for-expenses/dist/sdk/models/shared";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.customers.update({
  customer: {
    addresses: [
      {
        city: "Ann Arbor",
        country: "Montserrat",
        line1: "Reactive",
        line2: "Metal cheater Islands",
        postalCode: "43372",
        region: "Carolina syndicate",
        type: AccountingAddressType.Billing,
      },
    ],
    contactName: "East",
    contacts: [
      {
        address: {
          city: "Olenfurt",
          country: "Paraguay",
          line1: "Home users Sharable",
          line2: "Lev Wooden",
          postalCode: "36848",
          region: "brightly",
          type: AccountingAddressType.Delivery,
        },
        email: "Josie49@yahoo.com",
        modifiedDate: "2022-10-23T00:00:00.000Z",
        name: "possimus navigating Diesel",
        phone: [
          {
            number: "+44 25691 154789",
            type: PhoneNumberType.Primary,
          },
        ],
        status: CustomerStatus.Unknown,
      },
    ],
    customerName: "Reactive Global Northeast",
    defaultCurrency: "USD",
    emailAddress: "Abe.Bogan@hotmail.com",
    id: "<ID>",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    phone: "(883) 732-4217 x6499",
    registrationNumber: "redundant ew",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: CustomerStatus.Active,
    supplementalData: {
      content: {
        "asperiores": {
          "quibusdam": "Omnigender",
        },
      },
    },
    taxNumber: "Volkswagen Specialist Bacon",
  },
  allowSyncOnPushComplete: false,
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customerId: "Copper port East",
  forceUpdate: false,
  timeoutInMinutes: 373959,
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

