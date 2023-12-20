# Groups
(*groups*)

## Overview

Create groups and link them to your Codat companies.

### Available Operations

* [addCompany](#addcompany) - Add company
* [create](#create) - Create group
* [list](#list) - List groups
* [removeCompany](#removecompany) - Remove company

## addCompany

﻿Use the *Add company* endpoint to assign a company to a group. A company can belong to multiple groups, but can only be added to one group at a time.

[Groups](https://docs.codat.io/platform-api#/schemas/Group) define a set of companies that are organized based on a chosen characteristic and can be managed in the same way.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

async function run() {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.groups.addCompany({
    companyGroupAssignment: {
      groupId: "60d2fa12-8a04-11ee-b9d1-0242ac120002",
    },
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.AddCompanyToGroupRequest](../../sdk/models/operations/addcompanytogrouprequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `retries`                                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.AddCompanyToGroupResponse](../../sdk/models/operations/addcompanytogroupresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## create

﻿Use the *Create group* endpoint to generate a new group that you can assign your companies to.

[Groups](https://docs.codat.io/platform-api#/schemas/Group) define a set of companies that are organized based on a chosen characteristic and can be managed in the same way.

### Tips and traps

* The maximum length for the group name is 50 characters.
* It's possible to create up to 20 groups per client.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

async function run() {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.groups.create({
    name: "Invoice finance team",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [shared.GroupPrototype](../../sdk/models/shared/groupprototype.md)  | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.CreateGroupResponse](../../sdk/models/operations/creategroupresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## list

Use the *List group* endpoint to return a list of all groups that currently exist for your client.

[Groups](https://docs.codat.io/platform-api#/schemas/Group) define a set of companies that are organized based on a chosen characteristic and can be managed in the same way.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

async function run() {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.groups.list();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.ListGroupsResponse](../../sdk/models/operations/listgroupsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeCompany

﻿Use the *Remove company* endpoint to remove a company from a group.

[Groups](https://docs.codat.io/platform-api#/schemas/Group) define a set of companies that are organized based on a chosen characteristic and can be managed in the same way.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

async function run() {
  const sdk = new CodatPlatform({
    security: {
      authHeader: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.groups.removeCompany({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    groupId: "60d2fa12-8a04-11ee-b9d1-0242ac120002",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.RemoveCompanyFromGroupRequest](../../sdk/models/operations/removecompanyfromgrouprequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `retries`                                                                                                | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                       | Configuration to override the default retry behavior of the client.                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.RemoveCompanyFromGroupResponse](../../sdk/models/operations/removecompanyfromgroupresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
