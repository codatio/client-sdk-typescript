# Customers
(*customers*)

## Overview

Get, create, and update customers.

### Available Operations

* [list](#list) - List customers
* [get](#get) - Get customer
* [create](#create) - Create customer
* [update](#update) - Update customer

## list

The *List customers* endpoint returns a list of [customers](https://docs.codat.io/sync-for-expenses-api#/schemas/Customer) for a given company's connection.

[Customers](https://docs.codat.io/sync-for-expenses-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-expenses-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";

const codatSyncExpenses = new CodatSyncExpenses({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncExpenses.customers.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    page: 1,
    pageSize: 100,
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncExpensesCore } from "@codat/sync-for-expenses/core.js";
import { customersList } from "@codat/sync-for-expenses/funcs/customersList.js";

// Use `CodatSyncExpensesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncExpenses = new CodatSyncExpensesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await customersList(codatSyncExpenses, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    page: 1,
    pageSize: 100,
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCustomersRequest](../../sdk/models/operations/listcustomersrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.Customers](../../sdk/models/shared/customers.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.ErrorMessage                         | 400, 401, 402, 403, 404, 409, 429, 500, 503 | application/json                            |
| errors.SDKError                             | 4XX, 5XX                                    | \*/\*                                       |

## get

The *Get customer* endpoint returns a single customer for a given customerId.

[Customers](https://docs.codat.io/sync-for-expenses-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-expenses-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";

const codatSyncExpenses = new CodatSyncExpenses({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncExpenses.customers.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    customerId: "7110701885",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncExpensesCore } from "@codat/sync-for-expenses/core.js";
import { customersGet } from "@codat/sync-for-expenses/funcs/customersGet.js";

// Use `CodatSyncExpensesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncExpenses = new CodatSyncExpensesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await customersGet(codatSyncExpenses, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    customerId: "7110701885",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCustomerRequest](../../sdk/models/operations/getcustomerrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.Customer](../../sdk/models/shared/customer.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.ErrorMessage                    | 401, 402, 403, 404, 409, 429, 500, 503 | application/json                       |
| errors.SDKError                        | 4XX, 5XX                               | \*/\*                                  |

## create

The *Create customer* endpoint creates a new [customer](https://docs.codat.io/sync-for-expenses-api#/schemas/Customer) for a given company's connection.

[Customers](https://docs.codat.io/sync-for-expenses-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update customer model](https://docs.codat.io/sync-for-expenses-api#/operations/get-create-update-customers-model).

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";

const codatSyncExpenses = new CodatSyncExpenses({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncExpenses.customers.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    customer: {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      defaultCurrency: "USD",
      contacts: [
        {
          phone: [
            {
              number: "(877) 492-8687",
              type: "Fax",
            },
          ],
          status: "Active",
          modifiedDate: "2022-10-23T00:00:00Z",
        },
      ],
      status: "Unknown",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncExpensesCore } from "@codat/sync-for-expenses/core.js";
import { customersCreate } from "@codat/sync-for-expenses/funcs/customersCreate.js";

// Use `CodatSyncExpensesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncExpenses = new CodatSyncExpensesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await customersCreate(codatSyncExpenses, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    customer: {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      defaultCurrency: "USD",
      contacts: [
        {
          phone: [
            {
              number: "+44 25691 154789",
              type: "Primary",
            },
          ],
          status: "Archived",
          modifiedDate: "2022-10-23T00:00:00Z",
        },
      ],
      status: "Unknown",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCustomerRequest](../../sdk/models/operations/createcustomerrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CreateCustomerResponse](../../sdk/models/shared/createcustomerresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.ErrorMessage                    | 400, 401, 402, 403, 404, 429, 500, 503 | application/json                       |
| errors.SDKError                        | 4XX, 5XX                               | \*/\*                                  |

## update

The *Update customer* endpoint updates an existing [customer](https://docs.codat.io/sync-for-expenses-api#/schemas/Customer) for a given company's connection.

[Customers](https://docs.codat.io/sync-for-expenses-api#/schemas/Customer) are people or organizations that buy goods or services from the SMB.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update customer model](https://docs.codat.io/sync-for-expenses-api#/operations/get-create-update-customers-model).

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";

const codatSyncExpenses = new CodatSyncExpenses({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncExpenses.customers.update({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    customerId: "7110701885",
    customer: {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      defaultCurrency: "USD",
      contacts: [
        {
          phone: [
            {
              number: "(877) 492-8687",
              type: "Unknown",
            },
            {
              number: "+44 25691 154789",
              type: "Unknown",
            },
          ],
          status: "Active",
          modifiedDate: "2022-10-23T00:00:00Z",
        },
        {
          phone: [
            {
              number: "01224 658 999",
              type: "Mobile",
            },
          ],
          status: "Unknown",
          modifiedDate: "2022-10-23T00:00:00Z",
        },
        {
          phone: [
            {
              number: "+44 25691 154789",
              type: "Mobile",
            },
            {
              number: "01224 658 999",
              type: "Fax",
            },
            {
              number: "(877) 492-8687",
              type: "Primary",
            },
          ],
          status: "Archived",
          modifiedDate: "2022-10-23T00:00:00Z",
        },
      ],
      status: "Active",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncExpensesCore } from "@codat/sync-for-expenses/core.js";
import { customersUpdate } from "@codat/sync-for-expenses/funcs/customersUpdate.js";

// Use `CodatSyncExpensesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncExpenses = new CodatSyncExpensesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await customersUpdate(codatSyncExpenses, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    customerId: "7110701885",
    customer: {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      defaultCurrency: "USD",
      contacts: [
        {
          phone: [
            {
              number: "(877) 492-8687",
              type: "Unknown",
            },
            {
              number: "+44 25691 154789",
              type: "Unknown",
            },
          ],
          status: "Active",
          modifiedDate: "2022-10-23T00:00:00Z",
        },
        {
          phone: [
            {
              number: "(877) 492-8687",
              type: "Mobile",
            },
          ],
          status: "Unknown",
          modifiedDate: "2022-10-23T00:00:00Z",
        },
        {
          phone: [
            {
              number: "+44 25691 154789",
              type: "Mobile",
            },
            {
              number: "01224 658 999",
              type: "Fax",
            },
            {
              number: "(877) 492-8687",
              type: "Primary",
            },
          ],
          status: "Archived",
          modifiedDate: "2022-10-23T00:00:00Z",
        },
      ],
      status: "Active",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCustomerRequest](../../sdk/models/operations/updatecustomerrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UpdateCustomerResponse](../../sdk/models/shared/updatecustomerresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.ErrorMessage                    | 400, 401, 402, 403, 404, 429, 500, 503 | application/json                       |
| errors.SDKError                        | 4XX, 5XX                               | \*/\*                                  |