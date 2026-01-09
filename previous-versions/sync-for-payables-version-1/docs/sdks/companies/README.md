# Companies
(*companies*)

## Overview

Create and manage your SMB users' companies.

### Available Operations

* [list](#list) - List companies
* [create](#create) - Create company
* [replace](#replace) - Replace company
* [update](#update) - Update company
* [delete](#delete) - Delete a company
* [get](#get) - Get company

## list

﻿The *List companies* endpoint returns a list of [companies](https://docs.codat.io/sync-for-payables-api#/schemas/Company) associated to your instances.

A [company](https://docs.codat.io/sync-for-payables-api#/schemas/Company) represents a business sharing access to their data.
Each company can have multiple [connections](https://docs.codat.io/sync-for-payables-api#/schemas/Connection) to different data sources, such as one connection to Xero for accounting data, two connections to Plaid for two bank accounts, and a connection to Zettle for POS data.

## Filter by tags

The *List companies* endpoint supports the filtering of companies using [tags](https://docs.codat.io/using-the-api/managing-companies#add-metadata-to-a-company). It supports the following operators with [Codat’s query language](https://docs.codat.io/using-the-api/querying):

- equals (`=`)
- not equals (`!=`)
- contains (`~`)

For example, you can use the querying to filter companies tagged with a specific foreign key, region, or owning team: 
- Foreign key: `uid = {yourCustomerId}`
- Region: `region != uk`
- Owning team and region: `region = uk && owningTeam = invoice-finance`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-companies" method="get" path="/companies" -->
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables-version-1";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.companies.list({
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
    tags: "region=uk && team=invoice-finance",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncPayablesCore } from "@codat/sync-for-payables-version-1/core.js";
import { companiesList } from "@codat/sync-for-payables-version-1/funcs/companiesList.js";

// Use `CodatSyncPayablesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncPayables = new CodatSyncPayablesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await companiesList(codatSyncPayables, {
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
    tags: "region=uk && team=invoice-finance",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCompaniesRequest](../../sdk/models/operations/listcompaniesrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.Companies](../../sdk/models/shared/companies.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 400, 401, 402, 403, 404, 429 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |

## create

﻿Use the *Create company* endpoint to create a new [company](https://docs.codat.io/sync-for-payables-api#/schemas/Company) that represents your customer in Codat. 

A [company](https://docs.codat.io/sync-for-payables-api#/schemas/Company) represents a business sharing access to their data.
Each company can have multiple [connections](https://docs.codat.io/sync-for-payables-api#/schemas/Connection) to different data sources, such as one connection to Xero for accounting data, two connections to Plaid for two bank accounts, and a connection to Zettle for POS data.

If forbidden characters (see `name` pattern) are present in the request, a company will be created with the forbidden characters removed. For example, `Company (Codat[1])` with be created as `Company Codat1`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-company" method="post" path="/companies" -->
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables-version-1";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.companies.create({
    name: "Technicalium",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncPayablesCore } from "@codat/sync-for-payables-version-1/core.js";
import { companiesCreate } from "@codat/sync-for-payables-version-1/funcs/companiesCreate.js";

// Use `CodatSyncPayablesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncPayables = new CodatSyncPayablesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await companiesCreate(codatSyncPayables, {
    name: "Technicalium",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.CompanyRequestBody](../../sdk/models/shared/companyrequestbody.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.Company](../../sdk/models/shared/company.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 400, 401, 402, 403, 429 | application/json        |
| errors.ErrorMessage     | 500, 503                | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## replace

﻿Use the *Replace company* endpoint to replace the existing name, description, and tags of the company. Calling the endpoint will replace existing values even if new values haven't been defined in the payload.

A [company](https://docs.codat.io/sync-for-payables-api#/schemas/Company) represents a business sharing access to their data.
Each company can have multiple [connections](https://docs.codat.io/sync-for-payables-api#/schemas/Connection) to different data sources, such as one connection to Xero for accounting data, two connections to Plaid for two bank accounts, and a connection to Zettle for POS data.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="replace-company" method="put" path="/companies/{companyId}" -->
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables-version-1";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.companies.replace({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    companyRequestBody: {
      name: "New Name",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncPayablesCore } from "@codat/sync-for-payables-version-1/core.js";
import { companiesReplace } from "@codat/sync-for-payables-version-1/funcs/companiesReplace.js";

// Use `CodatSyncPayablesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncPayables = new CodatSyncPayablesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await companiesReplace(codatSyncPayables, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    companyRequestBody: {
      name: "New Name",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesReplace failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ReplaceCompanyRequest](../../sdk/models/operations/replacecompanyrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.Company](../../sdk/models/shared/company.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 401, 402, 403, 404, 429 | application/json        |
| errors.ErrorMessage     | 500, 503                | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## update

﻿Use the *Update company* endpoint to update the name, description, or tags of the company.

The *Update company* endpoint doesn't have any required fields. If any of the fields provided are `null` or not provided, they won't be included in the update.  

A [company](https://docs.codat.io/sync-for-payables-api#/schemas/Company) represents a business sharing access to their data.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update-company" method="patch" path="/companies/{companyId}" -->
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables-version-1";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.companies.update({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    companyUpdateRequest: {
      tags: {
        "refrence": "new reference",
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncPayablesCore } from "@codat/sync-for-payables-version-1/core.js";
import { companiesUpdate } from "@codat/sync-for-payables-version-1/funcs/companiesUpdate.js";

// Use `CodatSyncPayablesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncPayables = new CodatSyncPayablesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await companiesUpdate(codatSyncPayables, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    companyUpdateRequest: {
      tags: {
        "refrence": "new reference",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCompanyRequest](../../sdk/models/operations/updatecompanyrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.Company](../../sdk/models/shared/company.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 401, 402, 403, 404, 429 | application/json        |
| errors.ErrorMessage     | 500, 503                | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## delete

﻿The *Delete company* endpoint permanently deletes a [company](https://docs.codat.io/sync-for-payables-api#/schemas/Company), its [connections](https://docs.codat.io/sync-for-payables-api#/schemas/Connection) and any cached data. This operation is irreversible.

A [company](https://docs.codat.io/sync-for-payables-api#/schemas/Company) represents a business sharing access to their data.
Each company can have multiple [connections](https://docs.codat.io/sync-for-payables-api#/schemas/Connection) to different data sources, such as one connection to Xero for accounting data, two connections to Plaid for two bank accounts, and a connection to Zettle for POS data.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-company" method="delete" path="/companies/{companyId}" -->
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables-version-1";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  await codatSyncPayables.companies.delete({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncPayablesCore } from "@codat/sync-for-payables-version-1/core.js";
import { companiesDelete } from "@codat/sync-for-payables-version-1/funcs/companiesDelete.js";

// Use `CodatSyncPayablesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncPayables = new CodatSyncPayablesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await companiesDelete(codatSyncPayables, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("companiesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteCompanyRequest](../../sdk/models/operations/deletecompanyrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 401, 402, 403, 404, 429 | application/json        |
| errors.ErrorMessage     | 500, 503                | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## get

﻿The *Get company* endpoint returns a single company for a given `companyId`.

A [company](https://docs.codat.io/sync-for-payables-api#/schemas/Company) represents a business sharing access to their data.
Each company can have multiple [connections](https://docs.codat.io/sync-for-payables-api#/schemas/Connection) to different data sources, such as one connection to Xero for accounting data, two connections to Plaid for two bank accounts, and a connection to Zettle for POS data.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-company" method="get" path="/companies/{companyId}" -->
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables-version-1";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.companies.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncPayablesCore } from "@codat/sync-for-payables-version-1/core.js";
import { companiesGet } from "@codat/sync-for-payables-version-1/funcs/companiesGet.js";

// Use `CodatSyncPayablesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncPayables = new CodatSyncPayablesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await companiesGet(codatSyncPayables, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companiesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCompanyRequest](../../sdk/models/operations/getcompanyrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.Company](../../sdk/models/shared/company.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 401, 402, 403, 404, 429 | application/json        |
| errors.ErrorMessage     | 500, 503                | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |