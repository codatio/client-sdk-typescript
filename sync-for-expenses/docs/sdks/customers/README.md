# Customers

## Overview

Customers

### Available Operations

* [create](#create) - Create customer
* [get](#get) - Get customer
* [list](#list) - List customers
* [update](#update) - Update customer

## create

The *Create customer* endpoint creates a new [customer](https://docs.codat.io/accounting-api#/schemas/Customer) for a given company's connection.

[Customers](https://docs.codat.io/accounting-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update customer model](https://docs.codat.io/accounting-api#/operations/get-create-update-customers-model).

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
        city: "West Christa",
        country: "Iceland",
        line1: "cupiditate",
        line2: "quos",
        postalCode: "18301",
        region: "dolorum",
        type: AccountingAddressType.Billing,
      },
    ],
    contactName: "tempora",
    contacts: [
      {
        address: {
          city: "Riceboro",
          country: "Vanuatu",
          line1: "eum",
          line2: "non",
          postalCode: "53585-6289",
          region: "dolorum",
          type: AccountingAddressType.Billing,
        },
        email: "Rose.Wolff29@yahoo.com",
        modifiedDate: "2022-10-23T00:00:00.000Z",
        name: "Nathaniel Hyatt",
        phone: [
          {
            number: "+44 25691 154789",
            type: PhoneNumberType.Mobile,
          },
        ],
        status: CustomerStatus.Unknown,
      },
    ],
    customerName: "accusamus",
    defaultCurrency: "EUR",
    emailAddress: "quidem",
    id: "9ba88f3a-6699-4707-8ba4-469b6e214195",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    phone: "606-963-4281 x3049",
    registrationNumber: "debitis",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: CustomerStatus.Archived,
    supplementalData: {
      content: {
        "deleniti": {
          "facilis": "in",
        },
      },
    },
    taxNumber: "architecto",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 99569,
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

[Customers](https://docs.codat.io/accounting-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

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
  customerId: "repudiandae",
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

The *List customers* endpoint returns a list of [customers](https://docs.codat.io/accounting-api#/schemas/Customer) for a given company's connection.

[Customers](https://docs.codat.io/accounting-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

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
  query: "ullam",
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

The *Update customer* endpoint updates an existing [customer](https://docs.codat.io/accounting-api#/schemas/Customer) for a given company's connection.

[Customers](https://docs.codat.io/accounting-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update customer model](https://docs.codat.io/accounting-api#/operations/get-create-update-customers-model).

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
        city: "Kossworth",
        country: "Sudan",
        line1: "sed",
        line2: "saepe",
        postalCode: "01561-1788",
        region: "maxime",
        type: AccountingAddressType.Billing,
      },
    ],
    contactName: "excepturi",
    contacts: [
      {
        address: {
          city: "South Alexanneton",
          country: "Wallis and Futuna",
          line1: "quidem",
          line2: "ipsam",
          postalCode: "47083",
          region: "voluptatibus",
          type: AccountingAddressType.Unknown,
        },
        email: "Darian.Anderson94@hotmail.com",
        modifiedDate: "2022-10-23T00:00:00.000Z",
        name: "Ernest Hayes",
        phone: [
          {
            number: "+44 25691 154789",
            type: PhoneNumberType.Landline,
          },
        ],
        status: CustomerStatus.Unknown,
      },
    ],
    customerName: "eos",
    defaultCurrency: "GBP",
    emailAddress: "dolores",
    id: "c73d5fe9-b90c-4289-89b3-fe49a8d9cbf4",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    phone: "1-322-329-5744 x926",
    registrationNumber: "numquam",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: CustomerStatus.Unknown,
    supplementalData: {
      content: {
        "ipsa": {
          "iure": "odio",
        },
      },
    },
    taxNumber: "quaerat",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customerId: "accusamus",
  forceUpdate: false,
  timeoutInMinutes: 696344,
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

