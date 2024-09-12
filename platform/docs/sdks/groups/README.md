# Groups
(*groups*)

## Overview

Define and manage sets of companies based on a chosen characteristic.

### Available Operations

* [addCompany](#addcompany) - Add company
* [removeCompany](#removecompany) - Remove company
* [list](#list) - List groups
* [create](#create) - Create group

## addCompany

﻿Use the *Add company* endpoint to assign a company to a group. A company can belong to multiple groups, but can only be added to one group at a time.

[Groups](https://docs.codat.io/platform-api#/schemas/Group) define a set of companies that are organized based on a chosen characteristic and can be managed in the same way.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.groups.addCompany({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    companyGroupAssignment: {
      groupId: "d7a6c4b4-dc87-45f6-b803-62f466398680",
    },
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { groupsAddCompany } from "@codat/platform/funcs/groupsAddCompany.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await groupsAddCompany(codatPlatform, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    companyGroupAssignment: {
      groupId: "d7a6c4b4-dc87-45f6-b803-62f466398680",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddCompanyToGroupRequest](../../sdk/models/operations/addcompanytogrouprequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.Company](../../sdk/models/shared/company.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorMessage         | 401,402,403,404,429,500,503 | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## removeCompany

﻿Use the *Remove company* endpoint to remove a company from a group.

[Groups](https://docs.codat.io/platform-api#/schemas/Group) define a set of companies that are organized based on a chosen characteristic and can be managed in the same way.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  await codatPlatform.groups.removeCompany({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    groupId: "60d2fa12-8a04-11ee-b9d1-0242ac120002",
  });
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { groupsRemoveCompany } from "@codat/platform/funcs/groupsRemoveCompany.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await groupsRemoveCompany(codatPlatform, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    groupId: "60d2fa12-8a04-11ee-b9d1-0242ac120002",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCompanyFromGroupRequest](../../sdk/models/operations/removecompanyfromgrouprequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorMessage         | 401,402,403,404,429,500,503 | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## list

Use the *List group* endpoint to return a list of all groups that currently exist for your client.

[Groups](https://docs.codat.io/platform-api#/schemas/Group) define a set of companies that are organized based on a chosen characteristic and can be managed in the same way.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.groups.list();
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { groupsList } from "@codat/platform/funcs/groupsList.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await groupsList(codatPlatform);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.Groups](../../sdk/models/shared/groups.md)\>**

### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 401,402,403,429,500,503 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |


## create

﻿Use the *Create group* endpoint to generate a new group that you can assign your companies to.

[Groups](https://docs.codat.io/platform-api#/schemas/Group) define a set of companies that are organized based on a chosen characteristic and can be managed in the same way.

### Tips and traps

* The maximum length for the group name is 50 characters.
* It's possible to create up to 20 groups per client.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.groups.create({
    name: "Corporate cards department",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { groupsCreate } from "@codat/platform/funcs/groupsCreate.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await groupsCreate(codatPlatform, {
    name: "Corporate cards department",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.GroupPrototype](../../sdk/models/shared/groupprototype.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.Group](../../sdk/models/shared/group.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorMessage         | 401,402,403,409,429,500,503 | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
