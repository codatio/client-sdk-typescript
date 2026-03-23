# Suppliers

## Overview

Get, create, and update Suppliers.

### Available Operations

* [list](#list) - List suppliers
* [create](#create) - Create supplier
* [update](#update) - Update supplier

## list

The *List suppliers* endpoint returns a list of [suppliers](https://docs.codat.io/sync-for-payables-api#/schemas/Supplier) for a given company's connection.

[Suppliers](https://docs.codat.io/sync-for-payables-api#/schemas/Supplier) are people or organizations that provide something, such as a product or service.

By default, this endpoint returns a list of active and archived suppliers. You can use [querying](https://docs.codat.io/using-the-api/querying) to change that. 

For example, to retrieve only active suppliers (i.e. `status=Active`) or suppliers created within the specified number of days (e.g. `sourceModifiedDate>2023-12-15T00:00:00.000Z`), query the endpoint as follows: `/payables/suppliers?query=sourceModifiedDate>2023-12-15T00:00:00.000Z&&status=Active`.For example, to retrieve active suppliers modified after a particular date use `query=sourceModifiedDate>2023-12-15T00:00:00.000Z&&status=Active`.

### Supported Integrations

| Integration                   | Supported |
|-------------------------------|-----------|
| FreeAgent                     | Yes       |
| QuickBooks Online             | Yes       |
| Xero                          | Yes       |
| Oracle NetSuite               | Yes       |
| Sage Intacct                  | Yes       |
| Zoho Books                    | Yes       |

### Example Usage: Source modified date

<!-- UsageSnippet language="typescript" operationID="list-suppliers" method="get" path="/companies/{companyId}/connections/{connectionId}/payables/suppliers" example="Source modified date" -->
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.suppliers.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    continuationToken: "continuationToken=eyJwYWdlIjoyLCJwYWdlU2l6ZSI6MTAwLCJwYWdlQ291bnQiOjExfQ==",
    query: "sourceModifiedDate>2023-12-15T00:00:00.000Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncPayablesCore } from "@codat/sync-for-payables/core.js";
import { suppliersList } from "@codat/sync-for-payables/funcs/suppliersList.js";

// Use `CodatSyncPayablesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncPayables = new CodatSyncPayablesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await suppliersList(codatSyncPayables, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    continuationToken: "continuationToken=eyJwYWdlIjoyLCJwYWdlU2l6ZSI6MTAwLCJwYWdlQ291bnQiOjExfQ==",
    query: "sourceModifiedDate>2023-12-15T00:00:00.000Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersList failed:", res.error);
  }
}

run();
```
### Example Usage: Status (active)

<!-- UsageSnippet language="typescript" operationID="list-suppliers" method="get" path="/companies/{companyId}/connections/{connectionId}/payables/suppliers" example="Status (active)" -->
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.suppliers.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    continuationToken: "continuationToken=eyJwYWdlIjoyLCJwYWdlU2l6ZSI6MTAwLCJwYWdlQ291bnQiOjExfQ==",
    query: "status=Active",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncPayablesCore } from "@codat/sync-for-payables/core.js";
import { suppliersList } from "@codat/sync-for-payables/funcs/suppliersList.js";

// Use `CodatSyncPayablesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncPayables = new CodatSyncPayablesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await suppliersList(codatSyncPayables, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    continuationToken: "continuationToken=eyJwYWdlIjoyLCJwYWdlU2l6ZSI6MTAwLCJwYWdlQ291bnQiOjExfQ==",
    query: "status=Active",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersList failed:", res.error);
  }
}

run();
```
### Example Usage: Status (active) & source modified date

<!-- UsageSnippet language="typescript" operationID="list-suppliers" method="get" path="/companies/{companyId}/connections/{connectionId}/payables/suppliers" example="Status (active) & source modified date" -->
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.suppliers.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    continuationToken: "continuationToken=eyJwYWdlIjoyLCJwYWdlU2l6ZSI6MTAwLCJwYWdlQ291bnQiOjExfQ==",
    query: "sourceModifiedDate>2023-12-15T00:00:00.000Z&&status=Active",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncPayablesCore } from "@codat/sync-for-payables/core.js";
import { suppliersList } from "@codat/sync-for-payables/funcs/suppliersList.js";

// Use `CodatSyncPayablesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncPayables = new CodatSyncPayablesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await suppliersList(codatSyncPayables, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    continuationToken: "continuationToken=eyJwYWdlIjoyLCJwYWdlU2l6ZSI6MTAwLCJwYWdlQ291bnQiOjExfQ==",
    query: "sourceModifiedDate>2023-12-15T00:00:00.000Z&&status=Active",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersList failed:", res.error);
  }
}

run();
```
### Example Usage: Status (archived)

<!-- UsageSnippet language="typescript" operationID="list-suppliers" method="get" path="/companies/{companyId}/connections/{connectionId}/payables/suppliers" example="Status (archived)" -->
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.suppliers.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    continuationToken: "continuationToken=eyJwYWdlIjoyLCJwYWdlU2l6ZSI6MTAwLCJwYWdlQ291bnQiOjExfQ==",
    query: "status=Archived",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncPayablesCore } from "@codat/sync-for-payables/core.js";
import { suppliersList } from "@codat/sync-for-payables/funcs/suppliersList.js";

// Use `CodatSyncPayablesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncPayables = new CodatSyncPayablesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await suppliersList(codatSyncPayables, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    continuationToken: "continuationToken=eyJwYWdlIjoyLCJwYWdlU2l6ZSI6MTAwLCJwYWdlQ291bnQiOjExfQ==",
    query: "status=Archived",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersList failed:", res.error);
  }
}

run();
```
### Example Usage: Status (archived) & source modified date

<!-- UsageSnippet language="typescript" operationID="list-suppliers" method="get" path="/companies/{companyId}/connections/{connectionId}/payables/suppliers" example="Status (archived) & source modified date" -->
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.suppliers.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    continuationToken: "continuationToken=eyJwYWdlIjoyLCJwYWdlU2l6ZSI6MTAwLCJwYWdlQ291bnQiOjExfQ==",
    query: "sourceModifiedDate>2023-12-15T00:00:00.000Z&&status=Archived",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncPayablesCore } from "@codat/sync-for-payables/core.js";
import { suppliersList } from "@codat/sync-for-payables/funcs/suppliersList.js";

// Use `CodatSyncPayablesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncPayables = new CodatSyncPayablesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await suppliersList(codatSyncPayables, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    continuationToken: "continuationToken=eyJwYWdlIjoyLCJwYWdlU2l6ZSI6MTAwLCJwYWdlQ291bnQiOjExfQ==",
    query: "sourceModifiedDate>2023-12-15T00:00:00.000Z&&status=Archived",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersList failed:", res.error);
  }
}

run();
```
### Example Usage: Suppliers

<!-- UsageSnippet language="typescript" operationID="list-suppliers" method="get" path="/companies/{companyId}/connections/{connectionId}/payables/suppliers" example="Suppliers" -->
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.suppliers.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    continuationToken: "continuationToken=eyJwYWdlIjoyLCJwYWdlU2l6ZSI6MTAwLCJwYWdlQ291bnQiOjExfQ==",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncPayablesCore } from "@codat/sync-for-payables/core.js";
import { suppliersList } from "@codat/sync-for-payables/funcs/suppliersList.js";

// Use `CodatSyncPayablesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncPayables = new CodatSyncPayablesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await suppliersList(codatSyncPayables, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    continuationToken: "continuationToken=eyJwYWdlIjoyLCJwYWdlU2l6ZSI6MTAwLCJwYWdlQ291bnQiOjExfQ==",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSuppliersRequest](../../sdk/models/operations/listsuppliersrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.Suppliers](../../sdk/models/shared/suppliers.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorMessage               | 400, 401, 402, 403, 404, 409, 429 | application/json                  |
| errors.ErrorMessage               | 500, 503                          | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |

## create

The *Create supplier* endpoint creates a new [supplier](https://docs.codat.io/sync-for-payables-api#/schemas/Supplier) for a given company's connection.

[Suppliers](https://docs.codat.io/sync-for-payables-api#/schemas/Supplier) are people or organizations that provide something, such as a product or service.

### Supported Integrations

| Integration                   | Supported |
|-------------------------------|-----------|
| FreeAgent                     | Yes       |
| QuickBooks Online             | Yes       |
| Xero                          | Yes       |
| Oracle NetSuite               | Yes       |
| Sage Intacct                  | Yes       |
| Zoho Books                    | Yes       |


### Example Usage: Malformed query

<!-- UsageSnippet language="typescript" operationID="create-supplier" method="post" path="/companies/{companyId}/connections/{connectionId}/payables/suppliers" example="Malformed query" -->
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.suppliers.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    supplierPrototype: {
      supplierName: "<value>",
      phone: "+44 25691 154789",
      status: "Unknown",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncPayablesCore } from "@codat/sync-for-payables/core.js";
import { suppliersCreate } from "@codat/sync-for-payables/funcs/suppliersCreate.js";

// Use `CodatSyncPayablesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncPayables = new CodatSyncPayablesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await suppliersCreate(codatSyncPayables, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    supplierPrototype: {
      supplierName: "<value>",
      phone: "+44 25691 154789",
      status: "Unknown",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: Suppliers

<!-- UsageSnippet language="typescript" operationID="create-supplier" method="post" path="/companies/{companyId}/connections/{connectionId}/payables/suppliers" example="Suppliers" -->
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.suppliers.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    supplierPrototype: {
      supplierName: "Northridge Office Supplies",
      contactName: "Sarah Johnson",
      emailAddress: "sarah.johnson@northridgesupplies.co.uk",
      phone: "+44 (0)1223 322410",
      addresses: [
        {
          type: "Billing",
          line1: "Flat 1",
          line2: "2 Dennis Avenue",
          city: "London",
          region: "Camden",
          country: "GB",
          postalCode: "EC1N 7TE",
        },
      ],
      status: "Active",
      defaultCurrency: "GBP",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncPayablesCore } from "@codat/sync-for-payables/core.js";
import { suppliersCreate } from "@codat/sync-for-payables/funcs/suppliersCreate.js";

// Use `CodatSyncPayablesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncPayables = new CodatSyncPayablesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await suppliersCreate(codatSyncPayables, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    supplierPrototype: {
      supplierName: "Northridge Office Supplies",
      contactName: "Sarah Johnson",
      emailAddress: "sarah.johnson@northridgesupplies.co.uk",
      phone: "+44 (0)1223 322410",
      addresses: [
        {
          type: "Billing",
          line1: "Flat 1",
          line2: "2 Dennis Avenue",
          city: "London",
          region: "Camden",
          country: "GB",
          postalCode: "EC1N 7TE",
        },
      ],
      status: "Active",
      defaultCurrency: "GBP",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateSupplierRequest](../../sdk/models/operations/createsupplierrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.Supplier](../../sdk/models/shared/supplier.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 400, 401, 402, 403, 404, 429 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |

## update

The *Update supplier* endpoint updates an existing [supplier](https://docs.codat.io/sync-for-payables-api#/schemas/Supplier) for a given company's connection.

[Suppliers](https://docs.codat.io/sync-for-payables-api#/schemas/Supplier) are people or organizations that provide something, such as a product or service.

This is a full-replace PUT endpoint. Any fields not included in the request body will be cleared on the supplier record.

### Supported Integrations

| Integration                   | Supported |
|-------------------------------|-----------|
| FreeAgent                     | Yes       |
| QuickBooks Online             | Yes       |
| Xero                          | Yes       |
| Oracle NetSuite               | No        |
| Sage Intacct                  | No        |
| Zoho Books                    | No        |

### Platform-specific behavior

- **Xero**: Archived suppliers cannot be updated (returns `400`). Suppliers must be unarchived manually in the Xero UI before updating.
- **QuickBooks Online**: Currency can only be set when creating a supplier, and cannot be changed via update.


### Example Usage: Malformed query

<!-- UsageSnippet language="typescript" operationID="update-supplier" method="put" path="/companies/{companyId}/connections/{connectionId}/payables/suppliers/{supplierId}" example="Malformed query" -->
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.suppliers.update({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    supplierId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
    supplierPrototype: {
      supplierName: "<value>",
      phone: "+44 25691 154789",
      status: "Active",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncPayablesCore } from "@codat/sync-for-payables/core.js";
import { suppliersUpdate } from "@codat/sync-for-payables/funcs/suppliersUpdate.js";

// Use `CodatSyncPayablesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncPayables = new CodatSyncPayablesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await suppliersUpdate(codatSyncPayables, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    supplierId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
    supplierPrototype: {
      supplierName: "<value>",
      phone: "+44 25691 154789",
      status: "Active",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: Update supplier

<!-- UsageSnippet language="typescript" operationID="update-supplier" method="put" path="/companies/{companyId}/connections/{connectionId}/payables/suppliers/{supplierId}" example="Update supplier" -->
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.suppliers.update({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    supplierId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
    supplierPrototype: {
      supplierName: "Northridge Office Supplies",
      contactName: "Sarah Johnson",
      emailAddress: "sarah.johnson@northridgesupplies.co.uk",
      phone: "+44 (0)1223 322410",
      addresses: [
        {
          type: "Billing",
          line1: "Flat 1",
          line2: "2 Dennis Avenue",
          city: "London",
          region: "Camden",
          country: "GB",
          postalCode: "EC1N 7TE",
        },
      ],
      status: "Active",
      defaultCurrency: "GBP",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncPayablesCore } from "@codat/sync-for-payables/core.js";
import { suppliersUpdate } from "@codat/sync-for-payables/funcs/suppliersUpdate.js";

// Use `CodatSyncPayablesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncPayables = new CodatSyncPayablesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await suppliersUpdate(codatSyncPayables, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    supplierId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
    supplierPrototype: {
      supplierName: "Northridge Office Supplies",
      contactName: "Sarah Johnson",
      emailAddress: "sarah.johnson@northridgesupplies.co.uk",
      phone: "+44 (0)1223 322410",
      addresses: [
        {
          type: "Billing",
          line1: "Flat 1",
          line2: "2 Dennis Avenue",
          city: "London",
          region: "Camden",
          country: "GB",
          postalCode: "EC1N 7TE",
        },
      ],
      status: "Active",
      defaultCurrency: "GBP",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: Updated supplier

<!-- UsageSnippet language="typescript" operationID="update-supplier" method="put" path="/companies/{companyId}/connections/{connectionId}/payables/suppliers/{supplierId}" example="Updated supplier" -->
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.suppliers.update({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    supplierId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
    supplierPrototype: {
      supplierName: "<value>",
      phone: "+44 25691 154789",
      status: "Active",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncPayablesCore } from "@codat/sync-for-payables/core.js";
import { suppliersUpdate } from "@codat/sync-for-payables/funcs/suppliersUpdate.js";

// Use `CodatSyncPayablesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncPayables = new CodatSyncPayablesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await suppliersUpdate(codatSyncPayables, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    supplierId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
    supplierPrototype: {
      supplierName: "<value>",
      phone: "+44 25691 154789",
      status: "Active",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateSupplierRequest](../../sdk/models/operations/updatesupplierrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.Supplier](../../sdk/models/shared/supplier.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 400, 401, 402, 403, 404, 429 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |